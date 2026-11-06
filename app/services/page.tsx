import { buildMetadata } from "@/app/lib/seo";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { services } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import UpcomingServices from "@/app/components/UpcomingServices";

export const metadata: Metadata = buildMetadata({
  title: "Services drone en Normandie : toiture solaire, inspection, photo",
  description:
    "Étude de toiture solaire, inspection de toiture et de façade, photo et vidéo aérienne par drone dans l'Orne, le Calvados et la Manche.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="section-shell pt-56 sm:pt-32 md:pt-36">
        <div className="mb-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300/90">Services</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Découvrez chaque spécialité à travers une page dédiée.
          </h1>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            Explorez un service pour comprendre notre approche, nos interventions et leurs avantages opérationnels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            return (
            <article key={service.slug} className="glass overflow-hidden rounded-3xl">
              <Image
                src={service.heroImage}
                alt={`${service.title} – Novera Drone en Normandie`}
                width={1400}
                height={800}
                className="h-48 w-full object-cover sm:h-56"
              />
              <div className="flex flex-col p-5 sm:p-6 md:items-center md:text-center">
                <h2 className="text-xl font-semibold sm:text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm text-slate-300 sm:text-base">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mx-auto mt-6 inline-flex rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
                >
                  Voir la page
                </Link>
              </div>
            </article>
            );
          })}
        </div>
        <UpcomingServices />
      </section>

      <Footer />
    </main>
  );
}
