"use client";

import SectionTitle from "@/app/components/SectionTitle";
import { googleReviewsLink, testimonials } from "@/data/content";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TestimonialsSection() {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Avis Google"
        title={<>Ce que nos clients disent de Novera Drone.</>}
        description="Des retours publiés sur Google qui reflètent notre exigence de précision, de réactivité et de qualité de service."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass flex h-full flex-col rounded-3xl p-6 text-center"
          >
            <p className="mb-4 text-xl text-amber-300">
              {"★".repeat(item.rating ?? 5)}
            </p>
            <p className="text-slate-100">"{item.quote}"</p>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-blue-200">{item.name}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-400">{item.source ?? "Google"}</p>
          </motion.article>
        ))}
      </div>

      {googleReviewsLink ? (
        <div className="mt-8 flex justify-center">
          <Link
            href={googleReviewsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-300 hover:text-blue-100"
          >
            Voir tous les avis Google
          </Link>
        </div>
      ) : null}
    </section>
  );
}
