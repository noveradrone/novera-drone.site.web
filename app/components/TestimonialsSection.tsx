"use client";

import SectionTitle from "@/app/components/SectionTitle";
import { testimonials } from "@/data/content";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Avis clients"
        title={<>Ils nous font confiance pour leurs missions drone.</>}
        description="Des retours terrain qui reflètent notre exigence: sécurité, précision et qualité de livraison."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass rounded-3xl p-6"
          >
            <p className="mb-4 text-xl text-amber-300">★★★★★</p>
            <p className="text-slate-100">"{item.quote}"</p>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-blue-200">{item.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
