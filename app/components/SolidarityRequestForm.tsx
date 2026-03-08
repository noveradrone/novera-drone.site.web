"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type SolidarityFormState = {
  associationName: string;
  contactName: string;
  email: string;
  phone: string;
  actionType: string;
  location: string;
  desiredDate: string;
  description: string;
  website: string;
};

type FormErrors = Partial<Record<keyof SolidarityFormState, string>> & { global?: string };

const initialState: SolidarityFormState = {
  associationName: "",
  contactName: "",
  email: "",
  phone: "",
  actionType: "",
  location: "",
  desiredDate: "",
  description: "",
  website: ""
};

function validateForm(values: SolidarityFormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.associationName.trim()) errors.associationName = "Le nom de l'association est requis.";
  if (!values.contactName.trim()) errors.contactName = "Le nom du contact est requis.";
  if (!values.email.trim()) errors.email = "L'email est requis.";
  if (!values.phone.trim()) errors.phone = "Le téléphone est requis.";
  if (!values.actionType.trim()) errors.actionType = "Le type d'action ou d'événement est requis.";
  if (!values.location.trim()) errors.location = "Le lieu d'intervention est requis.";
  if (!values.desiredDate.trim()) errors.desiredDate = "La date souhaitée est requise.";
  if (!values.description.trim() || values.description.trim().length < 30) {
    errors.description = "La description doit contenir au moins 30 caractères.";
  }

  return errors;
}

export default function SolidarityRequestForm() {
  const [form, setForm] = useState<SolidarityFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const setField = (key: keyof SolidarityFormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined, global: undefined }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (sending) return;

    const nextErrors = validateForm(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setSending(true);
    setStatus("idle");
    setErrors({});

    const message = [
      `Type de demande: Novera Drone Solidaire`,
      `Association: ${form.associationName}`,
      `Contact: ${form.contactName}`,
      `Téléphone: ${form.phone}`,
      `Type d'action/événement: ${form.actionType}`,
      `Lieu de l'intervention: ${form.location}`,
      `Date souhaitée: ${form.desiredDate}`,
      `Site web / réseau social: ${form.website || "Non renseigné"}`,
      "",
      "Description de la demande:",
      form.description
    ].join("\n");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.contactName,
          email: form.email,
          message,
          requestType: "solidaire"
        })
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Impossible d'envoyer votre demande.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrors({
        global: error instanceof Error ? error.message : "Une erreur est survenue. Merci de réessayer."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass rounded-3xl p-5 text-left sm:p-7 md:p-10" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-200">
          Nom de l'association
          <input
            value={form.associationName}
            onChange={(e) => setField("associationName", e.target.value)}
            type="text"
            required
            aria-invalid={!!errors.associationName}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.associationName ? <span className="mt-1 block text-xs text-rose-300">{errors.associationName}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Nom du contact
          <input
            value={form.contactName}
            onChange={(e) => setField("contactName", e.target.value)}
            type="text"
            required
            aria-invalid={!!errors.contactName}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.contactName ? <span className="mt-1 block text-xs text-rose-300">{errors.contactName}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Email
          <input
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            type="email"
            required
            aria-invalid={!!errors.email}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.email ? <span className="mt-1 block text-xs text-rose-300">{errors.email}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Téléphone
          <input
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            type="tel"
            required
            aria-invalid={!!errors.phone}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.phone ? <span className="mt-1 block text-xs text-rose-300">{errors.phone}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Type d'action ou d'événement
          <input
            value={form.actionType}
            onChange={(e) => setField("actionType", e.target.value)}
            type="text"
            required
            aria-invalid={!!errors.actionType}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.actionType ? <span className="mt-1 block text-xs text-rose-300">{errors.actionType}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Lieu de l'intervention
          <input
            value={form.location}
            onChange={(e) => setField("location", e.target.value)}
            type="text"
            required
            aria-invalid={!!errors.location}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.location ? <span className="mt-1 block text-xs text-rose-300">{errors.location}</span> : null}
        </label>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-200">
          Date souhaitée
          <input
            value={form.desiredDate}
            onChange={(e) => setField("desiredDate", e.target.value)}
            type="date"
            required
            aria-invalid={!!errors.desiredDate}
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
          {errors.desiredDate ? <span className="mt-1 block text-xs text-rose-300">{errors.desiredDate}</span> : null}
        </label>

        <label className="text-sm text-slate-200">
          Site web ou réseau social (optionnel)
          <input
            value={form.website}
            onChange={(e) => setField("website", e.target.value)}
            type="url"
            placeholder="https://"
            className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm text-slate-200">
        Description de la demande
        <textarea
          value={form.description}
          onChange={(e) => setField("description", e.target.value)}
          rows={6}
          required
          aria-invalid={!!errors.description}
          className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
        />
        {errors.description ? <span className="mt-1 block text-xs text-rose-300">{errors.description}</span> : null}
      </label>

      {errors.global ? <p className="mt-4 text-sm text-rose-300">{errors.global}</p> : null}

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {sending ? "Envoi en cours..." : "Envoyer la demande"}
      </button>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: status === "success" ? 1 : 0, y: status === "success" ? 0 : 8 }}
        className="mt-4 text-sm text-emerald-300"
      >
        Votre demande solidaire a bien été envoyée. Nous revenons vers vous dès que possible.
      </motion.p>
    </form>
  );
}
