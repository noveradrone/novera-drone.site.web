import SectionTitle from "@/app/components/SectionTitle";
import { whyChooseUs } from "@/data/content";

export default function WhyChooseSection() {
  return (
    <section id="pourquoi-novera-drone" className="section-shell reveal-up">
      <SectionTitle
        title={<>Pourquoi nous choisir</>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item) => (
          <article key={item.title} className="glass rounded-3xl p-5 text-center">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
