export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="section-shell !py-0">
        <div className="grid gap-8 text-sm text-slate-300 md:grid-cols-4">
          <div>
            <p className="mb-3 text-white">Novera Drone</p>
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
            <a href="#top" className="block hover:text-blue-300">
              Mentions légales
            </a>
            <p className="mt-1">Zone d'intervention: Manche, Orne, Calvados</p>
          </div>
          <div>
            <p className="mb-3 text-white">Contact</p>
            <a href="mailto:noveradrone@gmail.com" className="block hover:text-blue-300">
              noveradrone@gmail.com
            </a>
            <a href="tel:+33771764713" className="block hover:text-blue-300">
              07 71 76 47 13
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Novera Drone. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
