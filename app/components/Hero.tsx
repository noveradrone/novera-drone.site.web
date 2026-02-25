"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2200&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-[#020617]/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/65 to-[#020617]/95" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs uppercase tracking-[0.35em] text-blue-200"
        >
          Solutions drone professionnelles en Normandie
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-gradient max-w-5xl text-4xl font-semibold leading-tight md:text-6xl"
        >
          Novera Drone - L&apos;expertise aérienne au service de vos projets
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-100 md:text-xl"
        >
          Des interventions précises, sécurisées et rapides pour vos besoins visuels, techniques et opérationnels.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10"
        >
          <Link
            href="/demander-un-devis"
            className="rounded-full bg-[#1d4ed8] px-8 py-3 font-medium text-white transition hover:scale-[1.03] hover:bg-[#2563eb]"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-200">
          <span>Scroll</span>
          <span className="h-9 w-5 rounded-full border border-white/60 p-1">
            <span className="block h-2 w-2 animate-bounce rounded-full bg-white" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
