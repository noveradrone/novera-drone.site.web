"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

/** Puissance moyenne installable par m² de toiture (panneau ~425 Wc pour ~2 m²). */
const KWC_PAR_M2 = 0.2;

const orientations = [
  { label: "Sud", value: 0 },
  { label: "Sud-Est", value: -45 },
  { label: "Sud-Ouest", value: 45 },
  { label: "Est", value: -90 },
  { label: "Ouest", value: 90 }
];

const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

type Result = {
  adresse: string;
  kwc: number;
  productionAnnuelle: number;
  productibleParKwc: number;
  mensuel: { mois: number; kwh: number }[];
};

const inputClass =
  "mt-2 w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-300 focus:outline-none";

export default function SolarSimulator() {
  const [adresse, setAdresse] = useState("");
  const [mode, setMode] = useState<"surface" | "kwc">("surface");
  const [surface, setSurface] = useState(20);
  const [kwcInput, setKwcInput] = useState(3);
  const [orientation, setOrientation] = useState(0);
  const [inclinaison, setInclinaison] = useState(35);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const kwc = mode === "surface" ? Math.round(surface * KWC_PAR_M2 * 10) / 10 : kwcInput;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setResult(null);
    if (kwc < 0.3) {
      setError("La surface ou la puissance est trop faible pour une simulation.");
      return;
    }
    setLoading(true);
    try {
      const params = new URLSearchParams({
        adresse,
        kwc: String(kwc),
        inclinaison: String(inclinaison),
        orientation: String(orientation)
      });
      const response = await fetch(`/api/simulateur?${params}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erreur de calcul.");
      setResult(data as Result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de calcul.");
    } finally {
      setLoading(false);
    }
  }

  const max = result ? Math.max(...result.mensuel.map((m) => m.kwh)) : 1;

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 md:p-10">
      <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
        <label className="md:col-span-2">
          <span className="text-sm font-medium text-slate-200">Adresse du bâtiment</span>
          <input
            required
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            placeholder="Ex. 12 rue de la Gare, 61100 Flers"
            autoComplete="street-address"
            className={inputClass}
          />
        </label>

        <fieldset className="md:col-span-2">
          <legend className="text-sm font-medium text-slate-200">Je connais…</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(
              [
                ["surface", "La surface de toiture disponible"],
                ["kwc", "La puissance du projet (kWc)"]
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setMode(value)}
                aria-pressed={mode === value}
                className={`min-h-[44px] rounded-full px-4 py-2 text-sm transition ${
                  mode === value ? "bg-blue-600 text-white" : "border border-white/20 text-slate-200 hover:border-blue-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        {mode === "surface" ? (
          <label>
            <span className="text-sm font-medium text-slate-200">Surface exploitable (m²)</span>
            <input
              type="number"
              min={2}
              max={2500}
              step={1}
              value={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className={inputClass}
            />
            <span className="mt-1 block text-xs text-slate-400">Soit environ {kwc} kWc installables.</span>
          </label>
        ) : (
          <label>
            <span className="text-sm font-medium text-slate-200">Puissance (kWc)</span>
            <input
              type="number"
              min={0.3}
              max={500}
              step={0.1}
              value={kwcInput}
              onChange={(e) => setKwcInput(Number(e.target.value))}
              className={inputClass}
            />
          </label>
        )}

        <label>
          <span className="text-sm font-medium text-slate-200">Orientation du pan</span>
          <select value={orientation} onChange={(e) => setOrientation(Number(e.target.value))} className={inputClass}>
            {orientations.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="md:col-span-2">
          <span className="text-sm font-medium text-slate-200">Inclinaison de la toiture : {inclinaison}°</span>
          <input
            type="range"
            min={0}
            max={60}
            step={1}
            value={inclinaison}
            onChange={(e) => setInclinaison(Number(e.target.value))}
            className="mt-3 w-full accent-blue-400"
          />
          <span className="mt-1 block text-xs text-slate-400">Une toiture normande classique est souvent inclinée entre 35° et 45°.</span>
        </label>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500 disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Calcul en cours…" : "Calculer ma production"}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {error ? <p className="mt-6 rounded-2xl border border-red-300/40 bg-red-500/10 p-4 text-sm text-red-100">{error}</p> : null}

        {result ? (
          <div className="mt-8 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-400">{result.adresse}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Puissance</p>
                <p className="mt-1 text-2xl font-semibold text-white">{result.kwc} kWc</p>
              </div>
              <div className="rounded-2xl border border-blue-300/30 bg-blue-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-blue-200">Production estimée</p>
                <p className="mt-1 text-2xl font-semibold text-white">
                  {result.productionAnnuelle.toLocaleString("fr-FR")} kWh/an
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Productible</p>
                <p className="mt-1 text-2xl font-semibold text-white">{result.productibleParKwc} kWh/kWc</p>
              </div>
            </div>

            <h3 className="mt-8 text-sm font-semibold text-slate-200">Production mois par mois (kWh)</h3>
            <div className="mt-3 flex h-40 items-end gap-1 sm:gap-2" role="img" aria-label="Production mensuelle estimée">
              {result.mensuel.map((m) => (
                <div key={m.mois} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-[10px] text-slate-300 sm:text-xs">{m.kwh}</span>
                  <div className="w-full rounded-t bg-blue-400/80" style={{ height: `${(m.kwh / max) * 100}px` }} />
                  <span className="text-[10px] text-slate-400 sm:text-xs">{mois[m.mois - 1]}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-slate-400">
              Estimation PVGIS (Commission européenne) avec 14 % de pertes système, sans ombrage. La production réelle
              dépend des obstacles autour de la toiture, du matériel et de la météo de chaque année.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
              <p className="font-semibold text-white">Passez de l&apos;estimation à la mesure réelle</p>
              <p className="mt-2 text-sm text-slate-300">
                Le drone relève vos pans, pentes, orientations et ombrages : calepinage précis et rapport PDF sous 48 h.
              </p>
              <Link
                href="/demander-un-devis?prestation=etude"
                className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Demander une étude de toiture
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
