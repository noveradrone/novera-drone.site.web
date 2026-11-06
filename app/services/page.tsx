import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import UpcomingServices from "@/app/components/UpcomingServices";
import { breadcrumbJsonLd, buildMetadata } from "@/app/lib/seo";
import { activeServicePages } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Services drone en Normandie : solaire, sport, inspection, photo",
  description:
    "Étude de toiture solaire, vidéo drone de trails et triathlons, inspection de toiture et photo aérienne par drone dans l'Orne, le Calvados et la Manche.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <Navbar />

      <section className="section-shell pt-32 sm:pt-32 md:pt-36">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300/90">Services</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Nos services drone en Normandie</h1>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            Étude de toiture solaire, vidéo d&apos;événements sportifs, inspection de toiture et prises de vues
            aériennes dans l&apos;Orne, le Calvados et la Manche.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {activeServicePages.map((service) => (
            <article key={service.key} className="glass flex flex-col rounded-3xl p-6 text-center">
              <h2 className="text-xl font-semibold sm:text-2xl">{service.card.title}</h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">{service.card.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {service.card.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
                <Link
                  href={service.path}
                  className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  Découvrir
                </Link>
                <Link
                  href={`/demander-un-devis?prestation=${service.key}`}
                  className="inline-flex rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-blue-300"
                >
                  Demander un devis
                </Link>
              </div>
            </article>
          ))}
        </div>
        <UpcomingServices />
      </section>

      <Footer />
    </main>
  );
}
