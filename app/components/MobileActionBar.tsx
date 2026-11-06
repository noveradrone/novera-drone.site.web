import { legalInfo } from "@/data/legal";
import Link from "next/link";

/** Barre d'action fixe en bas d'écran sur mobile : appel direct et demande de devis. */
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#020617]/95 px-3 py-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={`tel:${legalInfo.phoneHref}`}
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/25 text-sm font-medium text-white"
        >
          Appeler
        </a>
        <Link
          href="/demander-un-devis"
          className="flex min-h-[48px] flex-[1.4] items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
}
