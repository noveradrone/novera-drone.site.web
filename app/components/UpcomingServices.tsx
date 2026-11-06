import { upcomingServices } from "@/data/content";

/** Petite section discrète : services en préparation, sans page dédiée ni devis associé. */
export default function UpcomingServices() {
  return (
    <aside aria-labelledby="prochainement" className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-black/15 p-5 text-center sm:p-6">
      <p id="prochainement" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        Prochainement
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {upcomingServices.map((service) => (
          <li key={service.title}>
            <span className="font-medium text-slate-200">{service.title}</span> — {service.description}
          </li>
        ))}
      </ul>
    </aside>
  );
}
