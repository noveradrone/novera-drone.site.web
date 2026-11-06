import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import Navbar from "@/app/components/Navbar";
import SolarSimulator from "@/app/components/SolarSimulator";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, siteUrl } from "@/app/lib/seo";
import { pvgisReperes } from "@/data/pvgis-reperes";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Simulateur solaire gratuit en Normandie (PVGIS) | Novera Drone",
  description:
    "Estimez gratuitement la production de panneaux solaires sur votre toiture en Normandie : adresse, surface, orientation et inclinaison, calcul PVGIS mois par mois.",
  path: "/simulateur-solaire"
});

const faq = [
  {
    q: "Ce simulateur solaire est-il gratuit ?",
    a: "Oui, entièrement gratuit et sans inscription. Le calcul est réalisé par PVGIS, l'outil de la Commission européenne, à partir de l'adresse que vous indiquez. Aucune donnée n'est conservée."
  },
  {
    q: "Quelle est la différence avec une étude de toiture par drone ?",
    a: "Le simulateur suppose une toiture sans ombre, avec la surface et l'orientation que vous saisissez. L'étude par drone mesure réellement vos pans, pentes, obstacles et ombrages, puis propose un calepinage précis : c'est elle qui permet de valider un projet ou de comparer des devis."
  },
  {
    q: "Combien produit 1 kWc en Normandie ?",
    a: "Selon PVGIS, environ 1 070 à 1 140 kWh par an pour une toiture orientée plein sud et inclinée à 35°, selon la commune. Une orientation est ou ouest fait perdre environ 20 %."
  },
  {
    q: "Combien de panneaux faut-il pour 3 kWc ?",
    a: "Avec des panneaux courants de 400 à 450 Wc, il faut 7 à 8 panneaux, soit environ 15 m² de toiture."
  }
];

export default function SimulateurPage() {
  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Simulateur solaire Novera Drone",
            url: `${siteUrl}/simulateur-solaire`,
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Tous",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            provider: { "@id": `${siteUrl}/#entreprise` }
          },
          faqJsonLd(faq),
          breadcrumbJsonLd([{ name: "Simulateur solaire", path: "/simulateur-solaire" }])
        ]}
      />
      <Navbar />

      <section className="section-shell pt-36 sm:pt-36 md:pt-40">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300">Outil gratuit</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Simulateur solaire : estimez la production de votre toiture
          </h1>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            Indiquez l&apos;adresse, la surface disponible, l&apos;orientation et l&apos;inclinaison : vous obtenez en
            quelques secondes la production annuelle et mensuelle estimée par PVGIS.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-4xl">
          <SolarSimulator />
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-6">
          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Repères de production solaire en Normandie</h2>
            <p className="mt-4 text-slate-300">
              Production annuelle estimée pour 1 kWc installé, sans ombrage (PVGIS 5.2, 14 % de pertes).
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-center text-sm">
                <thead className="text-slate-300">
                  <tr className="border-b border-white/10">
                    <th scope="col" className="py-3 pr-4 font-semibold">Commune</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Sud, 35°</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Est ou ouest, 35°</th>
                    <th scope="col" className="py-3 font-semibold">Sud, 10° (toit peu pentu)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  {pvgisReperes.map((row) => (
                    <tr key={row.ville} className="border-b border-white/5">
                      <th scope="row" className="py-3 pr-4 font-medium">{row.ville}</th>
                      <td className="py-3 pr-4">{row.sud35.toLocaleString("fr-FR")} kWh</td>
                      <td className="py-3 pr-4">{row.est35.toLocaleString("fr-FR")} kWh</td>
                      <td className="py-3">{row.sud10.toLocaleString("fr-FR")} kWh</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              À retenir : en Normandie, 1 kWc bien orienté produit un peu plus de 1 000 kWh par an. Une orientation est
              ou ouest reste intéressante, avec environ 20 % de production en moins.
            </p>
          </article>

          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Les limites d&apos;une simulation en ligne</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Un simulateur ne voit pas votre toiture. Il ignore la cheminée qui fait de l&apos;ombre en fin de journée, la
              fenêtre de toit qui réduit la surface utile, l&apos;arbre du voisin ou la pente réelle de chaque pan. Sur
              une maison du bocage, ces détails peuvent changer nettement le nombre de panneaux posables et la
              production finale.
            </p>
            <p className="mt-4 leading-relaxed text-slate-300">
              L&apos;
              <Link href="/etude-toiture-solaire-drone" className="text-blue-300 hover:text-blue-200">
                étude de toiture solaire par drone
              </Link>{" "}
              mesure tout cela sur place, en un vol d&apos;environ 15 minutes, et vous remet un rapport PDF sous 48 h avec
              calepinage et estimation PVGIS adaptée à votre toiture réelle.
            </p>
          </article>

          <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">Questions fréquentes</h2>
            <div className="mt-6 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/10 bg-black/15 p-4 sm:p-5">
                  <summary className="cursor-pointer list-none font-semibold">
                    <span className="mr-2 text-blue-300 group-open:hidden">+</span>
                    <span className="mr-2 hidden text-blue-300 group-open:inline">−</span>
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.a}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
