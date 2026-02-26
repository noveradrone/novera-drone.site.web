import SectionTitle from "@/app/components/SectionTitle";
import { services } from "@/data/content";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section id="services" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Services"
        title={<>Des prestations drone complètes pour vos besoins terrain et communication.</>}
        description="Quatre pôles d'expertise complémentaires, conçus pour la performance opérationnelle et la qualité d'image."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const isComingSoon = service.slug === "nettoyage-par-drone";
          return (
          <article
            key={service.title}
            className="glass group flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/40"
          >
            {isComingSoon ? (
              <p className="mb-3 inline-flex w-fit rounded-full border border-amber-300/50 bg-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
                Bientôt disponible
              </p>
            ) : null}
            <h3 className="text-xl font-semibold sm:text-2xl md:min-h-[64px] md:flex md:items-center">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-300 sm:text-base md:min-h-[72px]">{service.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {service.subServices.slice(0, 4).map((detail) => (
                <li key={detail.title}>• {detail.title}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex w-fit items-center rounded-full border border-white/20 px-4 py-1.5 text-sm leading-none transition group-hover:border-blue-400 group-hover:text-blue-200"
              >
                Voir le service
              </Link>
              <Link
                href="/demander-un-devis"
                className="inline-flex w-fit items-center rounded-full bg-blue-500 px-4 py-1.5 text-sm leading-none text-white transition hover:bg-blue-400"
              >
                Demander un devis
              </Link>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
