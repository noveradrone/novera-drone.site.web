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
      <article className="glass rounded-3xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-semibold sm:text-4xl">Mentions légales</h1>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Éditeur du site</h2>
          <p className="mt-3 text-slate-300">
            <strong>{legalInfo.companyName}</strong>
            <br />
            Statut: {legalInfo.status}
            <br />
            Nom: {legalInfo.fullName}
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
          <p className="mt-3 text-slate-300">{legalInfo.host}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Propriété intellectuelle</h2>
          <p className="mt-3 text-slate-300">
            L'ensemble des contenus présents sur ce site (textes, images, vidéos, graphismes, logo, structure) est
            protégé par le Code de la propriété intellectuelle. Toute reproduction, représentation, modification,
            publication ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.
          </p>
        </section>
      </article>
    </main>
  );
}
