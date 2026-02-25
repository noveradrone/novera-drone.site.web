import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { services } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services Drone | Novera Drone",
  description:
    "Découvrez tous les services Novera Drone: photographie aérienne, thermographie, inspection technique et nettoyage par drone."
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="section-shell pt-36">
        <div className="mb-10 mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-300/90">Services</p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Des pages dédiées pour chaque expertise drone.
          </h1>
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            Choisissez un service pour découvrir nos méthodes d'intervention, nos sous-prestations et les bénéfices
            opérationnels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="glass overflow-hidden rounded-3xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                width={1400}
                height={800}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-slate-300">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
                >
                  Voir la page
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
