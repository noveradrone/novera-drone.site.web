import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import {
  checkRateLimit,
  escapeHtml,
  getClientIp,
  parseJsonWithLimit,
  preflightResponse,
  secureApiResponse,
  validateRequestContext
} from "@/app/lib/security";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  requestType?: "quote" | "solidaire";
  website?: string;
  startedAt?: number;
};

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(20).max(7000),
  requestType: z.enum(["quote", "solidaire"]).optional(),
  website: z.string().max(0).optional().default(""),
  startedAt: z.number().int().positive().optional()
});

export async function OPTIONS(request: Request) {
  return preflightResponse(request);
}

export async function POST(request: Request) {
  try {
    if (!validateRequestContext(request)) {
      return secureApiResponse({ ok: false, error: "Accès refusé." }, { status: 403 }, request);
    }

    if (request.headers.get("x-novera-form") !== "1") {
      return secureApiResponse({ ok: false, error: "Requête refusée." }, { status: 400 }, request);
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return secureApiResponse({ ok: false, error: "Format non accepté." }, { status: 415 }, request);
    }

    const ip = getClientIp(request);
    if (!checkRateLimit(`contact:${ip}`, 6, 60_000)) {
      return secureApiResponse({ ok: false, error: "Trop de tentatives. Réessayez plus tard." }, { status: 429 }, request);
    }

    let rawBody: ContactPayload;
    try {
      rawBody = await parseJsonWithLimit<ContactPayload>(request, 30_000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "";
      const status = message === "PAYLOAD_TOO_LARGE" ? 413 : 400;
      return secureApiResponse({ ok: false, error: "Requête invalide." }, { status }, request);
    }

    const parsed = contactSchema.safeParse(rawBody);
    if (!parsed.success) {
      return secureApiResponse({ ok: false, error: "Formulaire invalide." }, { status: 400 }, request);
    }

    const body = parsed.data;

    if (body.website) {
      return secureApiResponse({ ok: true }, { status: 200 }, request);
    }

    if (body.startedAt && Date.now() - body.startedAt < 2500) {
      return secureApiResponse({ ok: false, error: "Soumission trop rapide." }, { status: 400 }, request);
    }

    const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
    if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
      return secureApiResponse({ ok: false, error: "Service indisponible." }, { status: 503 }, request);
    }

    const isSolidarityRequest = body.requestType === "solidaire";
    const subject = isSolidarityRequest
      ? "Nouvelle demande - Novera Drone Solidaire"
      : "Nouvelle demande de devis";
    const heading = isSolidarityRequest ? "Nouvelle demande Novera Drone Solidaire" : "Nouvelle demande de devis";

    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject,
      replyTo: body.email,
      html: `
        <h2>${escapeHtml(heading)}</h2>
        <p><strong>Nom :</strong> ${escapeHtml(body.name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(body.email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>
      `
    });

    if (error) {
      return secureApiResponse({ ok: false, error: "Impossible d'envoyer la demande." }, { status: 502 }, request);
    }

    return secureApiResponse({ ok: true }, { status: 200 }, request);
  } catch {
    return secureApiResponse({ ok: false, error: "Erreur serveur." }, { status: 500 }, request);
  }
}
