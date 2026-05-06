import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";
import {
  checkRateLimit,
  getClientIp,
  parseJsonWithLimit,
  preflightResponse,
  secureApiResponse,
  validateRequestContext
} from "@/app/lib/security";

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

function anonymizeIp(ip: string) {
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

function getRetentionDays() {
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
    // Ignore compaction failures.
  }
}

function getAdminTokenFromRequest(request: Request) {
  const authorization = request.headers.get("authorization");
  if (authorization?.startsWith("Bearer ")) {
    return authorization.slice("Bearer ".length).trim();
  }

  return request.headers.get("x-admin-token");
}

export async function OPTIONS(request: Request) {
  return preflightResponse(request);
}

export async function POST(request: Request) {
  try {
    if (!validateRequestContext(request)) {
      return secureApiResponse({ ok: false, error: "Accès refusé." }, { status: 403 }, request);
    }

    if (request.headers.get("x-novera-cookie") !== "1") {
      return secureApiResponse({ ok: false, error: "Requête refusée." }, { status: 400 }, request);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return secureApiResponse({ ok: false, error: "Format non accepté." }, { status: 415 }, request);
    }

    const ip = getClientIp(request);
    if (!checkRateLimit(`cookie-post:${ip}`, 20, 60_000)) {
      return secureApiResponse({ ok: false, error: "Trop de tentatives." }, { status: 429 }, request);
    }

    let raw: unknown;
    try {
      raw = await parseJsonWithLimit(request, 10_000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      const status = message === "PAYLOAD_TOO_LARGE" ? 413 : 400;
      return secureApiResponse({ ok: false, error: "Payload invalide." }, { status }, request);
    }

    const parsed = payloadSchema.safeParse(raw);
    if (!parsed.success) {
      return secureApiResponse({ ok: false, error: "Payload de consentement invalide." }, { status: 400 }, request);
    }

    const entry = {
      recordedAt: new Date().toISOString(),
      ip: anonymizeIp(ip),
      ...parsed.data
    };

    await appendConsentLine(JSON.stringify(entry));
    await compactConsentLog();

    return secureApiResponse({ ok: true }, { status: 200 }, request);
  } catch {
    return secureApiResponse({ ok: false, error: "Erreur serveur." }, { status: 500 }, request);
  }
}

export async function GET(request: Request) {
  try {
    if (!validateRequestContext(request)) {
      return secureApiResponse({ ok: false, error: "Accès refusé." }, { status: 403 }, request);
    }

    const adminToken = process.env.COOKIE_CONSENT_ADMIN_TOKEN;
    if (!adminToken) {
      return secureApiResponse({ ok: false, error: "Service indisponible." }, { status: 503 }, request);
    }

    const providedToken = getAdminTokenFromRequest(request);
    if (!providedToken || providedToken !== adminToken) {
      return secureApiResponse({ ok: false, error: "Accès non autorisé." }, { status: 401 }, request);
    }

    const ip = getClientIp(request);
    if (!checkRateLimit(`cookie-get:${ip}`, 30, 60_000)) {
      return secureApiResponse({ ok: false, error: "Trop de tentatives." }, { status: 429 }, request);
    }

    const logPath = getConsentLogPath();
    const content = await fs.readFile(logPath, "utf8");
    const items = filterByRetention(parseLines(content)).slice(-200);

    return secureApiResponse({ ok: true, count: items.length, items }, { status: 200 }, request);
  } catch {
    return secureApiResponse({ ok: true, count: 0, items: [] }, { status: 200 }, request);
  }
}
