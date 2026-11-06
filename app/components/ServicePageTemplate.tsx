import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import ReadMore from "@/app/components/ReadMore";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/app/lib/seo";
import { activeServicePages, type ServiceContent } from "@/data/services";
import { villeLinks } from "@/data/villes";
import Image from "next/image";
import Link from "next/link";

const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500";
const secondaryButton =
  "inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300";

export default function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const quoteHref = `/demander-un-devis?prestation=${service.key}`;
  const otherServices = activeServicePages.filter((item) => item.key !== service.key);

  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={[
          serviceJsonLd({ name: service.card.title, description: service.metaDescription, path: service.path }),
          faqJsonLd(service.faq),
          breadcrumbJsonLd([{ name: service.name, path: service.path }])
        ]}
      />
      <Navbar />

      <section className="section-shell pt-36 sm:pt-36 md:pt-40">
        <nav aria-label="Fil d'Ariane" className="mb-6 text-center text-xs text-slate-400">
          <Link href="/" className="hover:text-blue-300">
            Accueil
          </Link>{" "}
          / <span className="text-slate-300">{service.name}</span>
        </nav>

        <header className="glass mx-auto max-w-5xl rounded-3xl p-6 text-center sm:p-8 md:p-12">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">{service.h1}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-slate-300 md:text-lg">{service.lead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={quoteHref} className={primaryButton}>
              {service.primaryCta}
            </Link>
            <Link href="#faq" className={secondaryButton}>
              Questions fréquentes
            </Link>
          </div>
        </header>

        {service.image ? (
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={service.image.width}
              height={service.image.height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-64 w-full object-cover sm:h-80 md:h-96"
              priority
            />
          </div>
        ) : null}

        {service.video ? (
          <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl border border-white/10">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={service.video.embedUrl}
                title={service.video.title}
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        ) : null}

        {service.testimonial ? (
          <figure className="glass mx-auto mt-8 max-w-3xl rounded-3xl p-6 text-center sm:p-8">
            <p className="text-xl text-amber-300" aria-label="5 étoiles sur 5">★★★★★</p>
            <blockquote className="mt-3 text-lg leading-relaxed text-slate-100">« {service.testimonial.quote} »</blockquote>
            <figcaption className="mt-4 text-sm text-slate-400">
              {service.testimonial.author} · {service.testimonial.source}
            </figcaption>
          </figure>
        ) : null}

        <div className="mx-auto mt-8 max-w-5xl space-y-6">
          {service.sections.map((section) => (
            <article key={section.h2} className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">{section.h2}</h2>
              {section.paragraphs ? <ReadMore paragraphs={section.paragraphs} /> : null}
              {section.bullets ? (
                <ul className="mt-5 space-y-3 text-slate-200">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-center">
                      <span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-400 align-middle" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">{service.stepsTitle}</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-5">
              {service.steps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-sm font-semibold text-blue-300">Étape {index + 1}</p>
                  <h3 className="mt-1 font-semibold">{step.title}</h3>
                </li>
              ))}
            </ol>
          </article>

          {service.key === "etude" ? (
            <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
              <h2 className="text-2xl font-semibold md:text-3xl">Exemple de rapport d&apos;étude solaire</h2>
              {service.reportPdf ? (
                <>
                  <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                    Consultez un exemple de rapport anonymisé : photos, surfaces, calepinage et estimation PVGIS.
                  </p>
                  <a href={service.reportPdf} className={`${primaryButton} mt-6`} target="_blank" rel="noopener">
                    Télécharger l&apos;exemple (PDF)
                  </a>
                </>
              ) : (
                <>
                  <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                    Un exemple de rapport anonymisé vous est envoyé sur simple demande, pour voir concrètement ce que vous
                    recevrez.
                  </p>
                  <Link href={quoteHref} className={`${secondaryButton} mt-6`}>
                    Recevoir un exemple de rapport
                  </Link>
                </>
              )}
            </article>
          ) : null}

          <article id="faq" className="glass scroll-mt-28 rounded-3xl p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Questions fréquentes</h2>
            <div className="mt-6 space-y-3">
              {service.faq.map((item) => (
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
            <h2 className="text-2xl font-semibold md:text-3xl">Nos autres services drone</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {otherServices.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  className="rounded-2xl border border-white/10 bg-black/15 p-5 transition hover:border-blue-300/50"
                >
                  <h3 className="font-semibold text-white">{item.card.title}</h3>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              Près de chez vous :{" "}
              {villeLinks.map((ville, index) => (
                <span key={ville.slug}>
                  <Link href={ville.path} className="text-blue-300 hover:text-blue-200">
                    {ville.name}
                  </Link>
                  {index < villeLinks.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </article>

          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">{service.finalCta.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-300">{service.finalCta.text}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href={quoteHref} className={primaryButton}>
                {service.primaryCta}
              </Link>
              <Link href="/services" className={secondaryButton}>
                Tous les services
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
