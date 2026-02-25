import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  nom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().optional(),
  typeEvenement: z.string().min(2),
  date: z.string().min(2),
  lieu: z.string().min(2),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = schema.parse(payload);

    const subject = `Nouvelle demande devis - ${data.typeEvenement}`;
    const html = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom:</strong> ${data.nom}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.telephone || "Non renseigné"}</p>
      <p><strong>Type:</strong> ${data.typeEvenement}</p>
      <p><strong>Date:</strong> ${data.date}</p>
      <p><strong>Lieu:</strong> ${data.lieu}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
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
      return NextResponse.json({ ok: false, error: error.issues[0]?.message }, { status: 400 });
    }

    return NextResponse.json({ ok: false, error: "Erreur serveur" }, { status: 500 });
  }
}
