import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";

export const runtime = "nodejs";

const consentSchema = z.object({
  version: z.number().int(),
  timestamp: z.string(),
  essential: z.boolean(),
  analytics: z.boolean(),
  marketing: z.boolean()
});

const payloadSchema = z.object({
  consent: consentSchema,
  page: z.string().min(1).max(500).optional(),
  language: z.string().min(2).max(35).optional(),
  timezone: z.string().min(2).max(80).optional()
});

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function anonymizeIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";
  if (ip.includes(".")) {
    const parts = ip.split(".");
    if (parts.length === 4) return `${parts[0]}.${parts[1]}.${parts[2]}.0`;
    return "unknown";
  }
  if (ip.includes(":")) {
    const parts = ip.split(":");
    return `${parts.slice(0, 4).join(":")}::`;
  }
  return "unknown";
}

function getRetentionDays(): number {
  const raw = Number.parseInt(process.env.COOKIE_CONSENT_RETENTION_DAYS || "180", 10);
  if (Number.isNaN(raw) || raw < 1) return 180;
  return raw;
}

function getConsentLogPath() {
  return process.env.COOKIE_CONSENT_LOG_PATH || path.join("/tmp", "novera-cookie-consents.ndjson");
}

async function appendConsentLine(line: string) {
  const logPath = getConsentLogPath();
  await fs.mkdir(path.dirname(logPath), { recursive: true });
  await fs.appendFile(logPath, `${line}\n`, "utf8");
}

function parseLines(content: string) {
  return content
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line) as { recordedAt?: string };
      } catch {
        return null;
      }
    })
    .filter(Boolean) as { recordedAt?: string }[];
}

function filterByRetention<T extends { recordedAt?: string }>(items: T[]) {
  const retentionMs = getRetentionDays() * 24 * 60 * 60 * 1000;
  const now = Date.now();
  return items.filter((item) => {
    const ts = Date.parse(item.recordedAt || "");
    if (Number.isNaN(ts)) return false;
    return now - ts <= retentionMs;
  });
}

async function compactConsentLog() {
  const logPath = getConsentLogPath();
  try {
    const content = await fs.readFile(logPath, "utf8");
    const kept = filterByRetention(parseLines(content));
    const serialized = kept.map((item) => JSON.stringify(item)).join("\n");
    await fs.writeFile(logPath, serialized ? `${serialized}\n` : "", "utf8");
  } catch {
    // No-op if file does not exist or cannot be compacted now.
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Format JSON requis." }, { status: 415 });
    }

    const raw = await request.json();
    const parsed = payloadSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Payload de consentement invalide." }, { status: 400 });
    }

    const entry = {
      recordedAt: new Date().toISOString(),
      ip: anonymizeIp(getClientIp(request)),
      ...parsed.data
    };

    await appendConsentLine(JSON.stringify(entry));
    await compactConsentLog();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const adminToken = process.env.COOKIE_CONSENT_ADMIN_TOKEN;
  if (!adminToken) {
    return NextResponse.json(
      { ok: false, error: "COOKIE_CONSENT_ADMIN_TOKEN non configuré." },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  if (token !== adminToken) {
    return NextResponse.json({ ok: false, error: "Accès non autorisé." }, { status: 401 });
  }

  try {
    const logPath = getConsentLogPath();
    const content = await fs.readFile(logPath, "utf8");
    const items = filterByRetention(parseLines(content)).slice(-200);

    return NextResponse.json({ ok: true, count: items.length, items });
  } catch {
    return NextResponse.json({ ok: true, count: 0, items: [] });
  }
}
