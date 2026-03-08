import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ScrollEffects from "@/app/components/ScrollEffects";
import SectionTitle from "@/app/components/SectionTitle";
import SolidarityRequestForm from "@/app/components/SolidarityRequestForm";
import type { Metadata } from "next";
import Link from "next/link";
import { HandHeart, Megaphone, Sparkles, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Novera Drone Solidaire | Images aériennes pour associations humanitaires",
  description:
    "Novera Drone Solidaire accompagne les associations humanitaires et solidaires avec des prises de vues aériennes gratuites pour valoriser leurs actions et événements."
};

const impactCards = [
  {
    icon: Megaphone,
    title: "Valoriser vos actions",
    text: "Présenter vos initiatives de terrain avec des images fortes, claires et crédibles."
  },
  {
    icon: Sparkles,
    title: "Donner de la visibilité",
    text: "Mettre en lumière un projet, un événement ou une campagne solidaire."
  },
  {
    icon: HandHeart,
    title: "Sensibiliser le public",
    text: "Rendre vos messages plus concrets et plus impactants grâce à la vue aérienne."
  },
  {
    icon: Video,
    title: "Renforcer votre communication",
    text: "Disposer de photos et vidéos professionnelles adaptées à vos supports."
  }
];

export default function NoveraDroneSolidairePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar ctaHref="/novera-drone-solidaire#formulaire-solidaire" ctaLabel="Nous contacter" />
      <Hero
        id="hero-solidaire"
        title="Novera Drone Solidaire"
        subtitle="Mettre l’image aérienne au service des causes humanitaires et solidaires."
        supportText="Une initiative de Novera Drone pour accompagner les associations engagées sur le terrain."
        ctaLabel="Découvrir l’initiative"
        ctaHref="/novera-drone-solidaire#engagement-solidaire"
        backgroundImage="/images/solidaire/deb_solidaire.PNG"
        overlayPreset="cinematic"
        contentPanel
        minHeightClassName="min-h-screen"
      />
      <ScrollEffects />

      <section id="engagement-solidaire" className="section-shell pt-0">
        <article className="glass reveal-up rounded-3xl p-6 sm:p-8 md:p-10">
          <SectionTitle eyebrow="Notre engagement" title={<>Une initiative portée par Novera Drone.</>} />
          <div className="mx-auto max-w-4xl space-y-4 text-center text-slate-300">
            <p>
              Chez <strong className="text-slate-100">Novera Drone</strong>, nous souhaitons également mettre la
              technologie au service de l&apos;intérêt général.
            </p>
            <p>
              C&apos;est pourquoi nous avons créé <strong className="text-slate-100">Novera Drone Solidaire</strong>,
              une initiative dédiée au soutien des <strong className="text-slate-100">associations humanitaires et solidaires</strong>.
            </p>
            <p>
              Dans ce cadre, nous proposons ponctuellement la{" "}
              <strong className="text-slate-100">réalisation d&apos;images aériennes gratuites</strong> pour des
              associations qui œuvrent pour des causes humanitaires, sociales ou solidaires.
            </p>
          </div>
        </article>
      </section>

      <section className="section-shell pt-0">
        <article className="glass reveal-up rounded-3xl p-6 sm:p-8 md:p-10">
          <SectionTitle
            eyebrow="Soutien aux associations humanitaires"
            title={<>Des images aériennes utiles pour vos actions.</>}
            description="Les prises de vues drone peuvent renforcer la compréhension et la portée de vos projets sur le terrain."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {impactCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/15 p-5 text-center">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className="section-shell pt-0">
        <article className="reveal-up rounded-3xl border border-blue-300/20 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 p-6 sm:p-8 md:p-10">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">Une démarche solidaire</h2>
          <p className="mx-auto mt-5 max-w-4xl text-center text-slate-200">
            Ces prestations sont réalisées <strong>à titre bénévole</strong>, lorsque cela est possible, afin
            d&apos;aider les associations à mieux faire connaître leurs actions et leurs projets.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-center text-slate-300">
            Cette initiative s&apos;inscrit dans notre volonté de contribuer, à notre échelle, aux projets qui ont un
            impact positif pour la société.
          </p>
        </article>
      </section>

      <section id="formulaire-solidaire" className="section-shell pt-0">
        <article className="reveal-up">
          <SectionTitle
            eyebrow="Faire une demande"
            title={<>Parlez-nous de votre projet associatif.</>}
            description="Si vous représentez une association humanitaire ou solidaire et que vous souhaitez bénéficier d’images aériennes pour valoriser votre projet ou votre événement, vous pouvez nous adresser une demande via le formulaire ci-dessous. Chaque demande est étudiée en fonction des disponibilités dans le cadre de Novera Drone Solidaire."
          />
          <SolidarityRequestForm />
        </article>
      </section>

      <Footer />
    </main>
  );
}
