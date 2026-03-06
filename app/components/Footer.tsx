import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { legalInfo } from "@/data/legal";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="section-shell !py-0">
        <div className="grid gap-8 text-center text-sm text-slate-300 md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-3 text-white">{legalInfo.companyName}</p>
            <p>Expertise drone pour la photographie, l'inspection, la thermographie et le nettoyage.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-3 text-white">Réseaux sociaux</p>
            <a
              href="https://www.instagram.com/noveradrone"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-300"
            >
              <Instagram size={14} className="text-white" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-2 hover:text-blue-300">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="text-white">
                <path
                  fill="currentColor"
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25h-3.4v13.8a2.89 2.89 0 1 1-2-2.75V10a6.3 6.3 0 1 0 5.4 6.24v-7a8.2 8.2 0 0 0 4.77 1.53V7.42a4.86 4.86 0 0 1-1-.73Z"
                />
              </svg>
              <span>TikTok</span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-2 hover:text-blue-300">
              <Facebook size={14} className="text-white" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-3 text-white">Informations</p>
            <Link href="/mentions-legales" className="block hover:text-blue-300">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="block hover:text-blue-300">
              Politique de confidentialité
            </Link>
            <button type="button" data-open-cookie-settings className="mt-1 block hover:text-blue-300">
              Gérer mes cookies
            </button>
            <p className="mt-1">Zone d'intervention: {legalInfo.coverage}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
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
          © {new Date().getFullYear()} {legalInfo.companyName}. Tous droits réservés.{" "}
          <a
            href="https://novera-drone-web-ugl7.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-blue-300"
          >
            Site pro
          </a>
        </p>
      </div>
    </footer>
  );
}
