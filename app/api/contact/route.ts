import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  nom: z.string().min(2).max(100),
  email: z.string().email(),
  telephone: z.string().max(40).optional(),
  typePrestation: z.string().min(2).max(160),
  missionAutre: z.string().max(1000).optional(),
  message: z.string().min(10).max(4000),
  website: z.string().max(0).optional(),
  startedAt: z.number().int().optional()
});

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 6;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = ipHits.get(ip) || [];
  const fresh = current.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  fresh.push(now);
  ipHits.set(ip, fresh);
  return fresh.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Format de requête invalide." }, { status: 415 });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Trop de tentatives. Merci de réessayer dans une minute." },
        { status: 429 }
      );
    }

    const payload = await request.json();
    const data = schema.parse(payload);

    // Honeypot + timing anti-bot
    if ((data.website || "").trim().length > 0) {
      return NextResponse.json({ ok: true });
    }
    if (data.startedAt && Date.now() - data.startedAt < 2500) {
      return NextResponse.json(
        { ok: false, error: "Soumission trop rapide. Merci de recommencer." },
        { status: 400 }
      );
    }

    const subject = `Nouvelle demande devis - ${data.typePrestation}`;
    const html = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom:</strong> ${escapeHtml(data.nom)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Téléphone:</strong> ${escapeHtml(data.telephone || "Non renseigné")}</p>
      <p><strong>Type de prestation:</strong> ${escapeHtml(data.typePrestation)}</p>
      ${
        data.typePrestation === "Autre" && data.missionAutre
          ? `<p><strong>Mission spécifique:</strong> ${escapeHtml(data.missionAutre)}</p>`
          : ""
      }
      <p><strong>Message:</strong><br/>${escapeHtml(data.message).replaceAll("\n", "<br/>")}</p>
    `;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "Novera Drone <contact@noveradrone.fr>",
        to: process.env.CONTACT_TO_EMAIL || "contact@noveradrone.fr",
        subject,
        html
      });
      return NextResponse.json({ ok: true, provider: "resend" });
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
        to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
        subject,
        html,
        replyTo: data.email
      });

      return NextResponse.json({ ok: true, provider: "smtp" });
    }

    return NextResponse.json(
      {
        ok: false,
        error: "Aucun fournisseur email configuré. Utilisez RESEND_API_KEY ou SMTP_HOST/SMTP_USER/SMTP_PASS."
      },
      { status: 500 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: error.issues[0]?.message || "Données invalides." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
