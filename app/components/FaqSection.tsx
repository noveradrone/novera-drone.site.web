"use client";

import SectionTitle from "@/app/components/SectionTitle";
import { faqItems } from "@/data/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-shell reveal-up">
      <SectionTitle eyebrow="FAQ" title={<>Questions frequentes.</>} />
      <div className="space-y-3">
        {faqItems.map((item, idx) => {
          const expanded = open === idx;
          return (
            <div key={item.q} className="glass rounded-2xl px-5 py-4">
              <button
                className="flex w-full items-center justify-between text-left text-lg"
                onClick={() => setOpen(expanded ? null : idx)}
              >
                <span>{item.q}</span>
                <span className="text-blue-300">{expanded ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {expanded ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-3 text-slate-300"
                  >
                    {item.a}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
