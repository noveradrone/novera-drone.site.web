import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { serviceSlugs, services } from "@/data/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return { title: "Service introuvable | Novera Drone" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords]
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  const isComingSoon = service?.slug === "nettoyage-par-drone";

  if (!service) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="section-shell pt-28 sm:pt-32 md:pt-36">
        <div className="glass overflow-hidden rounded-3xl">
          <Image
            src={service.heroImage}
            alt={service.title}
            width={1800}
            height={900}
            priority
            className="h-52 w-full object-cover sm:h-64 md:h-80"
          />
          <div className="p-5 sm:p-7 md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.26em] text-blue-300">{service.primaryKeyword}</p>
            <h1 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl">{service.h1}</h1>
            <p className="mt-4 max-w-4xl text-sm text-slate-300 sm:text-base md:text-lg">{service.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/demander-un-devis"
                className="inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                {service.primaryCta}
              </Link>
              <Link
                href={service.secondaryCta.href}
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300"
              >
                {service.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>

        {isComingSoon ? (
          <article className="mt-6 rounded-2xl border border-amber-300/50 bg-amber-400/15 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-amber-200">Bientôt disponible</p>
            <p className="mt-2 text-sm text-amber-100">
              Ce service est en cours de déploiement. Vous pouvez déjà nous contacter pour être prioritaire dès
              l’ouverture.
            </p>
          </article>
        ) : null}

        <article className="glass mt-8 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">{service.whyTitle}</h2>
          <p className="mt-4 text-slate-300">{service.whyIntro}</p>
          <ul className="mt-6 space-y-3 text-slate-200">
            {service.whyBenefits.map((benefit) => (
              <li key={benefit}>• {benefit}</li>
            ))}
          </ul>
        </article>

        <article className="glass mt-6 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Nos prestations</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {service.subServices.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass mt-6 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Notre méthodologie d'intervention</h2>
          <ol className="mt-6 space-y-4">
            {service.methodology.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                <h3 className="font-semibold">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </li>
            ))}
          </ol>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-3xl p-5 sm:p-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Livrables</h2>
            <ul className="mt-6 space-y-3 text-slate-200">
              {service.deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="glass rounded-3xl p-5 sm:p-7 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Zone d'intervention</h2>
            <p className="mt-4 text-slate-300">
              Nous intervenons en Normandie: Manche, Orne et Calvados, avec planification adaptée à vos contraintes
              métier et à vos délais d'exploitation.
            </p>
            <Link
              href="/demander-un-devis"
              className="mt-6 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300"
            >
              Être rappelé
            </Link>
          </article>
        </div>

        <article className="glass mt-6 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">Cas d'usage</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {service.caseStudies.map((item) => (
              <div key={item.context} className="rounded-2xl border border-white/10 bg-black/15 p-4 text-sm sm:p-5">
                <p className="font-semibold text-blue-200">Contexte</p>
                <p className="mt-2 text-slate-300">{item.context}</p>
                <p className="mt-4 font-semibold text-blue-200">Intervention</p>
                <p className="mt-2 text-slate-300">{item.intervention}</p>
                <p className="mt-4 font-semibold text-blue-200">Résultat</p>
                <p className="mt-2 text-slate-300">{item.result}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass mt-6 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-4">
            {service.faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="glass mt-6 rounded-3xl p-5 sm:p-7 md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">{service.finalCta.title}</h2>
          <p className="mt-4 max-w-3xl text-slate-300">{service.finalCta.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/demander-un-devis"
              className="inline-flex rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              {service.finalCta.button}
            </Link>
            <Link href="/services" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm hover:border-blue-300">
              Retour aux services
            </Link>
          </div>
        </article>

      </section>

      <Footer />
    </main>
  );
}
