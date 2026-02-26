import type { Metadata } from "next";
import { legalInfo } from "@/data/legal";

export const metadata: Metadata = {
  title: "Mentions légales | Novera Drone",
  description:
    "Mentions légales du site professionnel de services drone en Manche, Orne et Calvados."
};

export default function MentionsLegalesPage() {
  return (
    <main className="section-shell pt-28 sm:pt-32 md:pt-36">
      <article className="glass rounded-3xl p-6 text-center sm:p-8 md:p-10">
        <h1 className="text-3xl font-semibold sm:text-4xl">Mentions légales</h1>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Éditeur du site</h2>
          <p className="mt-3 text-slate-300">
            Nom complet: {legalInfo.fullName}
            <br />
            Nom commercial: {legalInfo.companyName}
            <br />
            Statut: {legalInfo.status}
            <br />
            SIRET: {legalInfo.siret}
            <br />
            Email: {legalInfo.email}
            <br />
            Téléphone: {legalInfo.phoneDisplay}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Responsable de publication</h2>
          <p className="mt-3 text-slate-300">{legalInfo.publisher}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Hébergeur</h2>
          <p className="mt-3 text-slate-300">
            Nom: {legalInfo.hostName}
            <br />
            Site web:{" "}
            <a href={legalInfo.hostWebsite} target="_blank" rel="noreferrer" className="underline hover:text-blue-300">
              {legalInfo.hostWebsite}
            </a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Propriété intellectuelle</h2>
          <p className="mt-3 text-slate-300">
            L’ensemble des contenus présents sur ce site (photos, vidéos drone, textes, logo) est la propriété
            exclusive de Novera Drone et ne peut être reproduit sans autorisation préalable.
          </p>
        </section>
      </article>
    </main>
  );
}
