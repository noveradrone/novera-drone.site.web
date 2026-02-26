import type { Metadata } from "next";
import { legalInfo } from "@/data/legal";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Novera Drone",
  description:
    "Politique de confidentialité RGPD relative aux formulaires de devis et à la gestion des données personnelles."
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="section-shell pt-28 sm:pt-32 md:pt-36">
      <article className="glass rounded-3xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-semibold sm:text-4xl">Politique de confidentialité</h1>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Données collectées</h2>
          <p className="mt-3 text-slate-300">
            Via le formulaire de devis, nous collectons les informations suivantes: nom, email, téléphone, type de
            prestation et informations liées au besoin (message et détails de la mission/événement).
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Finalité du traitement</h2>
          <p className="mt-3 text-slate-300">
            Ces données sont utilisées uniquement pour traiter les demandes de devis, répondre aux prospects et assurer
            le suivi commercial des prestations de services drone.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Durée de conservation</h2>
          <p className="mt-3 text-slate-300">
            Les données sont conservées pendant {legalInfo.privacyRetentionYears} ans maximum à compter du dernier
            contact entrant, sauf obligation légale contraire.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Vos droits</h2>
          <p className="mt-3 text-slate-300">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
            concernant vos données personnelles.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold sm:text-2xl">Contact</h2>
          <p className="mt-3 text-slate-300">
            Pour toute demande relative à vos données personnelles: {legalInfo.email}
          </p>
        </section>
      </article>
    </main>
  );
}
