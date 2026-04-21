import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ScrollEffects from "@/app/components/ScrollEffects";
import SectionTitle from "@/app/components/SectionTitle";

type Reel = {
  title: string;
  url: string;
};

const reels: Reel[] = [
  {
    title: "Réalisation événementielle en Normandie",
    url: "https://www.instagram.com/reel/DXCzC9DjS15/?igsh=MXhuaHM1ajU5amJ4Zw=="
  }
];

export const metadata: Metadata = {
  title: "Réalisations événementielles drone | Novera Drone",
  description:
    "Découvrez les réalisations événementielles de Novera Drone: prises de vues aériennes, vidéos et contenus professionnels en Normandie."
};

function toInstagramEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split("/").filter(Boolean);
    const type = parts[0];
    const shortcode = parts[1];

    if (!["reel", "p", "tv"].includes(type) || !shortcode) {
      return url;
    }

    return `https://www.instagram.com/${type}/${shortcode}/embed`;
  } catch {
    return url;
  }
}

export default function EventShowcasePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ScrollEffects />

      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden bg-cover bg-center px-4 pt-28 sm:min-h-[76vh] sm:px-6 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 8, 23, 0.88) 0%, rgba(2, 8, 23, 0.58) 46%, rgba(2, 8, 23, 0.28) 100%), url('/images/mariage.PNG')"
        }}
      >
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-100 backdrop-blur">
            Réalisations
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Événements filmés par drone en Normandie
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Retrouvez ici les images aériennes réalisées pour des événements, manifestations, projets associatifs et contenus promotionnels.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/demander-un-devis"
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(56,189,248,0.34)]"
            >
              Demander un devis
            </Link>
            <Link
              href="/#galerie"
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Retour à la galerie
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell reveal-up">
        <SectionTitle
          eyebrow="Reels Instagram"
          title={<>Nos réalisations événementielles</>}
          description="Les Reels publics peuvent être intégrés ici pour présenter vos projets avec un rendu direct, moderne et facile à consulter."
        />

        {reels.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((reel) => (
              <article key={reel.url} className="glass overflow-hidden rounded-3xl p-3">
                <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-slate-950">
                  <iframe
                    src={toInstagramEmbedUrl(reel.url)}
                    title={reel.title}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
                <h2 className="px-2 pt-4 text-lg font-semibold text-white">{reel.title}</h2>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/[0.06] p-6 text-center backdrop-blur">
            <p className="text-lg font-semibold text-white">Les réalisations événementielles seront ajoutées prochainement.</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Envoie-moi les liens publics des Reels Instagram à intégrer, et je les afficherai directement dans cette page.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
