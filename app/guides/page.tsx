import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import { breadcrumbJsonLd, buildMetadata } from "@/app/lib/seo";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Guides toiture et solaire en Normandie | Novera Drone",
  description:
    "Production solaire en Normandie, vérification d'un devis photovoltaïque, toiture après une tempête : des guides pratiques rédigés par un télépilote local.",
  path: "/guides"
});

export default function GuidesPage() {
  return (
    <main className="relative overflow-hidden">
      <JsonLd data={breadcrumbJsonLd([{ name: "Guides", path: "/guides" }])} />
      <Navbar />
      <section className="section-shell pt-36 sm:pt-36 md:pt-40">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300">Guides pratiques</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Guides toiture et solaire</h1>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            Des réponses claires aux questions que l&apos;on se pose avant un projet solaire ou après un coup de vent.
          </p>
        </header>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={guide.path}
              className="glass flex flex-col items-center rounded-3xl p-6 text-center transition hover:-translate-y-1 hover:border-blue-300/40"
            >
              <h2 className="text-xl font-semibold text-white">{guide.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{guide.excerpt}</p>
              <span className="mt-auto pt-5 text-sm text-blue-300">Lire le guide · {guide.readingMinutes} min →</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
