import Link from "next/link";

/** Bloc d'accueil dédié aux organisateurs d'événements sportifs (principale source de demandes). */
export default function SportsSection() {
  return (
    <section id="evenements-sportifs" className="section-shell reveal-up">
      <div className="glass mx-auto max-w-5xl rounded-3xl p-7 text-center md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Organisateurs de courses</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          Vidéo drone pour vos trails, marathons et triathlons
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-slate-300">
          Départ, parcours, passages clés, arrivée : des plans aériens et FPV qui montrent votre événement comme les
          coureurs le vivent, et donnent envie de s&apos;inscrire à la prochaine édition.
        </p>
        <ul className="mx-auto mt-6 grid max-w-3xl gap-3 text-slate-200 sm:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-black/15 p-4">Trails et courses nature</li>
          <li className="rounded-2xl border border-white/10 bg-black/15 p-4">Marathons et courses sur route</li>
          <li className="rounded-2xl border border-white/10 bg-black/15 p-4">Triathlons et raids</li>
        </ul>
        <figure className="mx-auto mt-8 max-w-2xl">
          <blockquote className="text-slate-200">
            « Un travail exemplaire digne d&apos;un professionnel avec des images aériennes de notre course d&apos;une
            grande qualité. »
          </blockquote>
          <figcaption className="mt-2 text-sm text-slate-400">Eliot Fichet, Trail La Véroise · Avis Google</figcaption>
        </figure>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/demander-un-devis?prestation=sport"
            className="inline-flex min-h-[44px] items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Demander un devis pour mon événement
          </Link>
          <Link
            href="/video-drone-evenement-sportif"
            className="inline-flex min-h-[44px] items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300"
          >
            Découvrir l&apos;offre
          </Link>
        </div>
      </div>
    </section>
  );
}
