import SectionTitle from "@/app/components/SectionTitle";
import { whyChooseUs } from "@/data/content";

export default function WhyChooseSection() {
  return (
    <section id="pourquoi-novera-drone" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Pourquoi Novera Drone"
        title={<>Un télépilote local, une lecture technique de votre toiture</>}
        description="Chaque mission est préparée selon les règles de vol en vigueur, avec du matériel professionnel, pour des données claires et directement exploitables."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {whyChooseUs.map((item) => (
          <article key={item.title} className="glass rounded-3xl p-6 text-center md:p-7">
            <h3 className="flex items-center justify-center gap-3 text-lg font-semibold text-white">
              <span aria-hidden className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-blue-400" />
              {item.title}
            </h3>
            <p className="mt-3 text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
