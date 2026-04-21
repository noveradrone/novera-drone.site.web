import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ScrollEffects from "@/app/components/ScrollEffects";
import SectionTitle from "@/app/components/SectionTitle";

const matterportUrl = "https://my.matterport.com/show/?m=2EQY1NieJeL";

const propertyImages = [
  { src: "/images/local1.jpg", alt: "Vue immobilière du bâtiment - image 1" },
  { src: "/images/local2.jpg", alt: "Vue immobilière du bâtiment - image 2" },
  { src: "/images/local3.jpg", alt: "Vue immobilière du bâtiment - image 3" },
  { src: "/images/local4.jpg", alt: "Vue immobilière du bâtiment - image 4" },
  { src: "/images/local5.jpg", alt: "Vue immobilière du bâtiment - image 5" }
];

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
  const embedUrl = toMatterportEmbedUrl(matterportUrl);

  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ScrollEffects />

      <section
        className="relative flex min-h-[72vh] items-center overflow-hidden bg-cover bg-center px-4 pt-28 sm:min-h-[76vh] sm:px-6 lg:px-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 8, 23, 0.9) 0%, rgba(2, 8, 23, 0.62) 46%, rgba(2, 8, 23, 0.3) 100%), url('https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-blue-100 backdrop-blur">
            Réalisations immobilières
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            Photo immobilière et visite virtuelle
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Valoriser un bien avec des vues aériennes, une lecture claire de l’environnement et une expérience immersive.
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

        <article className="glass grid gap-6 rounded-3xl p-4 sm:p-5 lg:grid-cols-[1.25fr_0.9fr] lg:items-center lg:p-6">
          <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-blue-950/30">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Visite virtuelle Matterport"
                className="h-[420px] w-full border-0 sm:h-[520px] lg:h-[560px]"
                loading="lazy"
                allow="fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center sm:min-h-[460px]">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200">Visite virtuelle Matterport</p>
                <p className="mt-5 max-w-xl text-2xl font-semibold text-white">Visite immersive bientôt intégrée</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                  Envoie-moi le lien Matterport public de ta visite virtuelle, et je l’intègre directement ici dans ce cadre.
                </p>
              </div>
            )}
          </div>

          <div className="mx-auto flex max-w-2xl flex-col items-center px-1 py-2 text-center lg:px-4 lg:py-6">
            <p className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-blue-100">
              Immobilier
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Visite virtuelle et imagerie aérienne</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                Une visite virtuelle permet aux acheteurs ou locataires de se projeter dans le bien avant même le premier rendez-vous.
              </p>
              <p>
                Les prises de vues drone complètent cette immersion en montrant l’implantation, l’environnement, les accès et les volumes extérieurs.
              </p>
              <p>
                Un format premium, utile pour les annonces immobilières, programmes neufs, biens atypiques et présentations commerciales.
              </p>
            </div>
            <Link
              href="/demander-un-devis"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_44px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(56,189,248,0.32)]"
            >
              Demander une prestation immobilier
            </Link>
          </div>
        </article>

        <section className="mt-10">
          <SectionTitle title={<>Galerie photo du bien</>} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propertyImages.map((image, index) => (
              <article
                key={image.src}
                className={`group glass overflow-hidden rounded-3xl ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={850}
                  loading="lazy"
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index === 0 ? "h-[280px] sm:h-[360px] lg:h-[430px]" : "h-[240px] sm:h-[300px] lg:h-[430px]"
                  }`}
                />
              </article>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
