import SectionTitle from "@/app/components/SectionTitle";
import { whyChooseUs } from "@/data/content";

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="section-shell reveal-up">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title={<>Une approche fiable, précise et pensée pour vos enjeux métier.</>}
            description="Chaque mission est préparée avec un protocole de sécurité strict, des capteurs professionnels et un rendu clair exploitable rapidement."
          />
        </div>

        <div className="glass rounded-3xl p-7 md:p-8">
          <ul className="space-y-4">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-100">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
