import { upcomingServices } from "@/data/content";

/** Petite section discrète : services en préparation, sans page dédiée ni devis associé. */
export default function UpcomingServices() {
  return (
    <aside aria-labelledby="prochainement" className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-black/15 p-4 text-center">
      <p id="prochainement" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Prochainement
      </p>
      <p className="mt-2 text-sm text-slate-300">{upcomingServices.map((service) => service.title).join(" · ")}</p>
    </aside>
  );
}
