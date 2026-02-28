"use client";

import { FormEvent, useMemo, useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import { motion } from "framer-motion";

type FormState = {
  nom: string;
  email: string;
  telephone: string;
  typePrestation: string;
  missionAutre: string;
  message: string;
};

const initialState: FormState = {
  nom: "",
  email: "",
  telephone: "",
  typePrestation: "",
  missionAutre: "",
  message: ""
};

const prestationOptions = [
  "Photographie aérienne - Mariage",
  "Photographie aérienne - Événements sportifs",
  "Photographie aérienne - Immobilier",
  "Photographie aérienne - Promotion touristique et commerciale",
  "Thermographie - Inspection de panneaux solaires",
  "Thermographie - Détection de ponts thermiques",
  "Thermographie - Analyse énergétique de bâtiments",
  "Thermographie - Diagnostic préventif",
  "Inspection technique - Toiture",
  "Inspection technique - Façade",
  "Inspection technique - Bâtiment industriel",
  "Inspection technique - Terrain et parcelle",
  "Inspection technique - Éoliennes",
  "Inspection technique - Ouvrages d'art (ponts)",
  "Inspection technique - Agricole",
  "Inspection technique - Structures difficiles d'accès",
  "Nettoyage par drone - Toiture",
  "Nettoyage par drone - Façade",
  "Nettoyage par drone - Panneaux solaires",
  "Nettoyage par drone - Vitres en hauteur",
  "Autre"
];

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());

  const canSubmit = useMemo(() => {
    const hasOtherMission = form.typePrestation !== "Autre" || !!form.missionAutre.trim();
    return form.nom && form.email && form.typePrestation && form.message && hasOtherMission;
  }, [form]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    if (!canSubmit) {
      setError("Merci de compléter les champs requis.");
      return;
    }

    setError("");
    setSending(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone || undefined,
          typePrestation: form.typePrestation,
          missionAutre: form.typePrestation === "Autre" ? form.missionAutre : undefined,
          message: form.message,
          website,
          startedAt
        })
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Impossible d'envoyer la demande.");
      }

      setStatus("success");
      setForm(initialState);
      setWebsite("");
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur d'envoi. Merci de réessayer.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id="contact" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Contact"
        title={<>Parlons de votre projet.</>}
        description="Recevez une proposition claire, rapide et adaptée à votre événement."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass rounded-3xl p-5 sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">Zone d'intervention</h3>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">Manche, Orne, Calvados et toute la Normandie selon votre projet.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Carte Normandie"
              src="https://www.google.com/maps?q=Normandie&output=embed"
              className="h-56 w-full sm:h-64"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-3xl p-5 sm:p-6 md:p-8">
          <label className="hidden" aria-hidden="true">
            Site web
            <input
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              type="text"
              name="website"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-200">
              Nom
              <input
                required
                value={form.nom}
                onChange={(e) => handleChange("nom", e.target.value)}
                type="text"
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
              />
            </label>
            <label className="text-sm text-slate-200">
              Email
              <input
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                type="email"
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
              />
            </label>
            <label className="text-sm text-slate-200">
              Telephone
              <input
                value={form.telephone}
                onChange={(e) => handleChange("telephone", e.target.value)}
                type="tel"
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
              />
            </label>
            <label className="text-sm text-slate-200">
              Type de prestation
              <select
                required
                value={form.typePrestation}
                onChange={(e) => handleChange("typePrestation", e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
              >
                <option value="">Sélectionnez une prestation</option>
                {prestationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {form.typePrestation === "Autre" ? (
            <label className="mt-4 block text-sm text-slate-200">
              Décrivez votre mission
              <textarea
                required
                value={form.missionAutre}
                onChange={(e) => handleChange("missionAutre", e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
              />
            </label>
          ) : null}

          <label className="mt-4 block text-sm text-slate-200">
            Message
            <textarea
              required
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={5}
              className="mt-1 w-full rounded-xl border border-white/15 bg-black/35 px-3 py-2 outline-none transition focus:border-blue-400"
            />
          </label>

          {error ? <p className="mt-4 text-sm text-rose-300">{error}</p> : null}

          <button
            disabled={sending}
            className="mx-auto mt-6 block rounded-full bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70 md:mx-0"
          >
            {sending ? "Envoi en cours..." : "Demander un devis"}
          </button>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: status === "success" ? 1 : 0, y: status === "success" ? 0 : 8 }}
            className="mt-4 text-sm text-emerald-300"
          >
            Votre demande a bien été envoyée. Nous vous répondons rapidement.
          </motion.p>
        </form>
      </div>
    </section>
  );
}
