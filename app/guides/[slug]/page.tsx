import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import { breadcrumbJsonLd, buildMetadata, siteUrl } from "@/app/lib/seo";
import { guides } from "@/data/guides";
import { pvgisReperes } from "@/data/pvgis-reperes";
import { activeServicePages } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) return {};
  const meta = buildMetadata({ title: guide.metaTitle, description: guide.metaDescription, path: guide.path });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article" } };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function GuidePage({ params }: Props) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) notFound();
  const others = guides.filter((item) => item.slug !== guide.slug);

  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.metaDescription,
            datePublished: guide.published,
            dateModified: guide.updated,
            inLanguage: "fr-FR",
            mainEntityOfPage: `${siteUrl}${guide.path}`,
            image: `${siteUrl}/opengraph-image`,
            author: { "@type": "Person", name: "Enes Ozturk", jobTitle: "Télépilote de drone, fondateur de Novera Drone" },
            publisher: { "@id": `${siteUrl}/#entreprise` }
          },
          breadcrumbJsonLd([
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: guide.path }
          ])
        ]}
      />
      <Navbar />

      <article className="section-shell pt-36 sm:pt-36 md:pt-40">
        <nav aria-label="Fil d'Ariane" className="mb-6 text-center text-xs text-slate-400">
          <Link href="/" className="hover:text-blue-300">Accueil</Link> /{" "}
          <Link href="/guides" className="hover:text-blue-300">Guides</Link>
        </nav>

        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{guide.title}</h1>
          <p className="mt-4 text-sm text-slate-400">
            Par Enes Ozturk, télépilote et diplômé BUT MT2E · mis à jour le{" "}
            <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · {guide.readingMinutes} min de lecture
          </p>
          <p className="mt-6 text-left text-base leading-relaxed text-slate-200 md:text-lg">{guide.intro}</p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl space-y-10">
          {guide.sections.map((section, index) => (
            <section key={section.h2}>
              <h2 className="text-2xl font-semibold md:text-3xl">{section.h2}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-slate-200">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span aria-hidden className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {guide.showPvgisTable && index === 0 ? (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full min-w-[440px] text-left text-sm">
                    <caption className="px-4 pt-4 text-left text-xs text-slate-400">
                      Production annuelle pour 1 kWc, sans ombrage (PVGIS 5.2, 14 % de pertes)
                    </caption>
                    <thead className="text-slate-300">
                      <tr className="border-b border-white/10">
                        <th scope="col" className="px-4 py-3">Commune</th>
                        <th scope="col" className="px-4 py-3">Sud, 35°</th>
                        <th scope="col" className="px-4 py-3">Est/ouest, 35°</th>
                        <th scope="col" className="px-4 py-3">Sud, 10°</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-200">
                      {pvgisReperes.map((row) => (
                        <tr key={row.ville} className="border-b border-white/5">
                          <th scope="row" className="px-4 py-3 font-medium">{row.ville}</th>
                          <td className="px-4 py-3">{row.sud35.toLocaleString("fr-FR")} kWh</td>
                          <td className="px-4 py-3">{row.est35.toLocaleString("fr-FR")} kWh</td>
                          <td className="px-4 py-3">{row.sud10.toLocaleString("fr-FR")} kWh</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <aside className="glass mx-auto mt-12 max-w-3xl rounded-3xl p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-white">{guide.cta.text}</p>
          <Link
            href={guide.cta.href}
            className="mt-5 inline-flex min-h-[44px] items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            {guide.cta.label}
          </Link>
        </aside>

        <nav aria-label="Pour aller plus loin" className="mx-auto mt-10 max-w-3xl">
          <h2 className="text-xl font-semibold">Pour aller plus loin</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={item.path} className="block h-full rounded-2xl border border-white/10 bg-black/15 p-4 transition hover:border-blue-300/50">
                  <span className="font-medium text-white">{item.title}</span>
                </Link>
              </li>
            ))}
            {activeServicePages
              .filter((s) => s.key !== "photo")
              .map((service) => (
                <li key={service.key}>
                  <Link href={service.path} className="block h-full rounded-2xl border border-white/10 bg-black/15 p-4 transition hover:border-blue-300/50">
                    <span className="font-medium text-white">{service.card.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>

      <Footer />
    </main>
  );
}
