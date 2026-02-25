import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto mt-3 w-[96%] max-w-6xl rounded-2xl glass">
      <nav className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.15em] text-white">
          <span className="h-11 w-[70px] shrink-0">
            <Image
              src="/images/logo.png/logo_nav_cropped.png"
              alt="Logo Novera Drone"
              width={140}
              height={88}
              className="h-full w-full object-contain brightness-0 invert"
            />
          </span>
          <span className="hidden sm:inline">NOVERA DRONE</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="relative lg:hidden">
            <details className="group">
              <summary className="list-none cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/20 bg-[#0b1225]/95 p-2 shadow-2xl backdrop-blur-xl">
                <Link href="/" className="block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10">
                  Accueil
                </Link>
                <Link href="/services" className="block rounded-xl px-3 py-2 text-sm text-slate-100 hover:bg-white/10">
                  Services
                </Link>
              </div>
            </details>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1 lg:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="rounded-full px-4 py-1.5 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              Services
            </Link>
          </div>
          <Link
            href="/demander-un-devis"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            Demander un devis
          </Link>
        </div>
      </nav>
    </header>
  );
}
