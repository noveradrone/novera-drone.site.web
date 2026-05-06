import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ScrollEffects from "@/app/components/ScrollEffects";
import SectionTitle from "@/app/components/SectionTitle";

const matterportUrl = "https://my.matterport.com/show/?m=2EQY1NieJeL";
const realEstateHeroImage =
  "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80";

const virtualTourShowcase = {
  title: "Visite virtuelle immersive",
  description: [
    "Une visite virtuelle Matterport permet de découvrir le bien à distance avec une lecture fluide des volumes, des circulations et de l’agencement intérieur.",
    "Cette présentation immersive complète les prises de vues aériennes en offrant un niveau de détail utile pour la commercialisation, la projection des acquéreurs et la valorisation du bien.",
    "Un support premium, particulièrement adapté aux annonces immobilières, programmes neufs et présentations commerciales à forte valeur perçue."
  ]
};

const youtubeShowcase = {
  title: "Promotion immobilière",
  description: [
    "Vidéo de promotion immobilière réalisée afin de valoriser le bien dans son ensemble, avec une lecture claire des extérieurs, de l’implantation et de l’environnement proche.",
    "La captation drone apporte des plans aériens structurés et dynamiques qui renforcent la compréhension du site et la qualité perçue de la présentation.",
    "Un format pensé pour les réseaux sociaux, les annonces premium et les supports de communication commerciale."
  ],
  embedUrl: "https://www.youtube.com/embed/JDEOQj_Yn0Q"
};

export const metadata: Metadata = {
  title: "Photo immobilière et visite virtuelle | Novera Drone",
  description:
    "Découvrez les réalisations immobilières de Novera Drone: prises de vues aériennes, valorisation de biens et visite virtuelle Matterport en Normandie."
};

function toMatterportEmbedUrl(url: string) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const modelId = parsed.searchParams.get("m");

    if (parsed.hostname.includes("matterport.com") && modelId) {
      return `https://my.matterport.com/show/?m=${modelId}&play=1`;
    }

    return url;
  } catch {
    return "";
  }
}

export default function RealEstateShowcasePage() {
  const matterportEmbedUrl = toMatterportEmbedUrl(matterportUrl);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ScrollEffects />

      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden bg-cover bg-center px-4 pt-28 sm:min-h-[76vh] sm:px-6 lg:px-10"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(2, 8, 23, 0.9) 0%, rgba(2, 8, 23, 0.62) 46%, rgba(2, 8, 23, 0.3) 100%), url('${realEstateHeroImage}')`
        }}
      >
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-100 backdrop-blur">
            Réalisations immobilières
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Promotion immobilière
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Des supports immersifs et visuels pour valoriser un bien, clarifier son environnement et renforcer sa présentation commerciale.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/demander-un-devis"
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(56,189,248,0.34)]"
            >
              Demander une prestation
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
        <SectionTitle title={<>Nos réalisations immobilières</>} />

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute bottom-8 left-7 top-10 hidden w-px bg-gradient-to-b from-blue-400/40 via-white/10 to-transparent lg:block" />
          <div className="space-y-14 lg:space-y-20">
            <article className="relative grid gap-6 lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-8">
              <div className="hidden lg:flex lg:justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/25 bg-blue-400/10 text-sm font-semibold text-blue-100">
                  01
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-4 py-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.75)] backdrop-blur-sm sm:px-5 lg:px-7 lg:py-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
                  <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-blue-950/30">
                    <iframe
                      src={matterportEmbedUrl}
                      title="Visite virtuelle Matterport"
                      className="h-[420px] w-full border-0 sm:h-[520px] lg:h-[560px]"
                      loading="lazy"
                      allow="fullscreen; xr-spatial-tracking"
                      allowFullScreen
                    />
                  </div>

                  <div className="mx-auto flex max-w-2xl flex-col items-center px-1 py-2 text-center lg:px-4 lg:py-6">
                    <p className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-100">
                      Immobilier
                    </p>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{virtualTourShowcase.title}</h2>
                    <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
                      {virtualTourShowcase.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <Link
                      href="/demander-un-devis"
                      className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(56,189,248,0.32)]"
                    >
                      Demander une prestation immobilier
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            <article className="relative grid gap-6 lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-8">
              <div className="hidden lg:flex lg:justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/25 bg-blue-400/10 text-sm font-semibold text-blue-100">
                  02
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-4 py-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.75)] backdrop-blur-sm sm:px-5 lg:px-7 lg:py-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
                <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">
                  <div className="mx-auto flex max-w-2xl flex-col items-center px-1 py-2 text-center lg:px-4 lg:py-6">
                    <p className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-100">
                      Promotion immobilière
                    </p>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{youtubeShowcase.title}</h2>
                    <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
                      {youtubeShowcase.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <Link
                      href="/demander-un-devis"
                      className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(56,189,248,0.32)]"
                    >
                      Demander une prestation immobilier
                    </Link>
                  </div>

                  <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-blue-950/30 lg:mx-0">
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <iframe
                        src={youtubeShowcase.embedUrl}
                        title={youtubeShowcase.title}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
