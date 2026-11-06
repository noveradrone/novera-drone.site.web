import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="section-shell reveal-up">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Un projet solaire ou un doute sur votre toiture ?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Décrivez votre bâtiment et votre besoin : vous recevez une proposition claire, puis un créneau d&apos;intervention
          dans l&apos;Orne, le Calvados ou la Manche.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/demander-un-devis?prestation=etude"
            className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Demander une étude de toiture
          </Link>
          <Link
            href="/demander-un-devis"
            className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-blue-300"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}
