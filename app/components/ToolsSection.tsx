import SectionTitle from "@/app/components/SectionTitle";
import { guides } from "@/data/guides";
import Link from "next/link";

export default function ToolsSection() {
  return (
    <section id="outils" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Outils gratuits"
        title={<>Estimez votre production solaire en Normandie</>}
        description="Un simulateur basé sur PVGIS et des guides pratiques pour préparer votre projet."
      />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Link
          href="/simulateur-solaire"
          className="glass flex flex-col items-center justify-between rounded-3xl p-7 text-center transition hover:-translate-y-1 hover:border-blue-300/40 md:p-9"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Simulateur solaire</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Combien produirait votre toiture ?</h3>
            <p className="mt-3 text-slate-300">
              Adresse, surface, orientation, inclinaison : obtenez la production annuelle et mois par mois en quelques
              secondes, gratuitement.
            </p>
          </div>
          <span className="mt-6 inline-flex w-fit min-h-[44px] items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white">
            Lancer la simulation
          </span>
        </Link>
        <div className="space-y-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.path}
              className="glass block rounded-2xl p-5 text-center transition hover:border-blue-300/40"
            >
              <h3 className="font-semibold text-white">{guide.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
