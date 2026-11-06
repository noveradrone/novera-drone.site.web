import SectionTitle from "@/app/components/SectionTitle";
import UpcomingServices from "@/app/components/UpcomingServices";
import { activeServicePages } from "@/data/services";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Services"
        title={<>Nos services drone dans l&apos;Orne, le Calvados et la Manche</>}
        description="Une même exigence de précision, de l'étude solaire à la vidéo de vos événements sportifs."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {activeServicePages.map((service) => (
          <article
            key={service.key}
            className="glass group flex h-full flex-col items-center rounded-3xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-300/40"
          >
            {service.badge ? (
              <p className="mb-3 rounded-full border border-blue-300/40 bg-blue-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                {service.badge}
              </p>
            ) : null}
            <h3 className="text-xl font-semibold sm:text-2xl">{service.card.title}</h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">{service.card.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {service.card.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
              <Link
                href={service.path}
                className="inline-flex w-fit items-center rounded-full border border-white/20 px-4 py-1.5 text-sm leading-none transition group-hover:border-blue-400 group-hover:text-blue-200"
              >
                En savoir plus
              </Link>
              <Link
                href={`/demander-un-devis?prestation=${service.key}`}
                className="inline-flex w-fit items-center rounded-full bg-blue-600 px-4 py-1.5 text-sm leading-none text-white transition hover:bg-blue-500"
              >
                Demander un devis
              </Link>
            </div>
          </article>
        ))}
      </div>
      <UpcomingServices />
    </section>
  );
}
