import Link from "next/link";
import { legalInfo } from "@/data/legal";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="section-shell !py-0">
        <div className="grid gap-8 text-sm text-slate-300 md:grid-cols-4">
          <div>
            <p className="mb-3 text-white">{legalInfo.companyName}</p>
            <p>Expertise drone pour la photographie, l'inspection, la thermographie et le nettoyage.</p>
          </div>
          <div>
            <p className="mb-3 text-white">Réseaux sociaux</p>
            <a href="https://www.instagram.com/noveradrone" target="_blank" rel="noreferrer" className="block hover:text-blue-300">
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block hover:text-blue-300">
              LinkedIn
            </a>
          </div>
          <div>
            <p className="mb-3 text-white">Informations</p>
            <Link href="/mentions-legales" className="block hover:text-blue-300">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="block hover:text-blue-300">
              Politique de confidentialité
            </Link>
            <p className="mt-1">Zone d'intervention: {legalInfo.coverage}</p>
          </div>
          <div>
            <p className="mb-3 text-white">Contact</p>
            <a href={`mailto:${legalInfo.email}`} className="block hover:text-blue-300">
              {legalInfo.email}
            </a>
            <a href={`tel:${legalInfo.phoneHref}`} className="block hover:text-blue-300">
              {legalInfo.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {legalInfo.companyName}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
