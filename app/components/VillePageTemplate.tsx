import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import { breadcrumbJsonLd, faqJsonLd, siteUrl } from "@/app/lib/seo";
import { activeServicePages } from "@/data/services";
import { villeLinks, type VilleContent } from "@/data/villes";
import Link from "next/link";

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300";

export default function VillePageTemplate({ ville }: { ville: VilleContent }) {
  const otherVilles = villeLinks.filter((item) => item.slug !== ville.slug);

  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Services drone à ${ville.name}`,
            description: ville.metaDescription,
            url: `${siteUrl}${ville.path}`,
            provider: { "@id": `${siteUrl}/#entreprise` },
            areaServed: [
              { "@type": "City", name: ville.name },
              ...ville.communes.map((name) => ({ "@type": "City", name }))
            ]
          },
          faqJsonLd(ville.faq),
          breadcrumbJsonLd([{ name: `Drone à ${ville.name}`, path: ville.path }])
        ]}
      />
      <Navbar />

      <section className="section-shell pt-36 sm:pt-36 md:pt-40">
        <nav aria-label="Fil d'Ariane" className="mb-6 text-center text-xs text-slate-400">
          <Link href="/" className="hover:text-blue-300">
            Accueil
          </Link>{" "}
          / <span className="text-slate-300">Drone à {ville.name}</span>
        </nav>

        <header className="glass mx-auto max-w-5xl rounded-3xl p-6 text-center sm:p-8 md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.26em] text-blue-300">
            {ville.name} · {ville.departement}
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{ville.h1}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-slate-300 md:text-lg">{ville.lead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/demander-un-devis?prestation=etude" className={primaryButton}>
              Demander une étude de toiture
            </Link>
            <Link href="/demander-un-devis" className={secondaryButton}>
              Demander un devis
            </Link>
          </div>
        </header>

        <div className="mx-auto mt-8 max-w-5xl space-y-6">
          {[ville.contexte, ville.toitures].map((block) => (
            <article key={block.h2} className="glass rounded-3xl p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">{block.h2}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 leading-relaxed text-slate-300">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}

          <article className="glass rounded-3xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Nos services drone à {ville.name}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {ville.services.map((item) => {
                const service = activeServicePages.find((s) => s.key === item.key);
                if (!service) return null;
                return (
                  <Link
                    key={item.key}
                    href={service.path}
                    className="rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-blue-300/50"
                  >
                    <h3 className="font-semibold text-white">{service.card.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.text}</p>
                    <span className="mt-3 inline-block text-sm text-blue-300">En savoir plus →</span>
                  </Link>
                );
              })}
            </div>
          </article>

          <article className="glass rounded-3xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">{ville.besoins.h2}</h2>
            <ul className="mt-5 space-y-3 text-slate-200">
              {ville.besoins.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-semibold text-white">Communes desservies autour de {ville.name}</h3>
            <p className="mt-2 text-slate-300">{ville.communes.join(", ")}, et alentours.</p>
          </article>

          <article id="faq" className="glass scroll-mt-28 rounded-3xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Questions fréquentes à {ville.name}</h2>
            <div className="mt-6 space-y-3">
              {ville.faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                  <summary className="cursor-pointer list-none font-semibold marker:hidden">
                    <span className="mr-2 text-blue-300 group-open:hidden">+</span>
                    <span className="mr-2 hidden text-blue-300 group-open:inline">−</span>
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.a}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Un projet à {ville.name} ?</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300">
              Indiquez l&apos;adresse et votre besoin : vous recevez une proposition claire et un créneau d&apos;intervention.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/demander-un-devis?prestation=etude" className={primaryButton}>
                Demander une étude de toiture
              </Link>
              <Link href="/demander-un-devis" className={secondaryButton}>
                Demander un devis
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Nous intervenons aussi à{" "}
              {otherVilles.map((item, index) => (
                <span key={item.slug}>
                  <Link href={item.path} className="text-blue-300 hover:text-blue-200">
                    {item.name}
                  </Link>
                  {index < otherVilles.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
