"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2200&q=80')"
        }}
        animate={{ scale: [1, 1.04, 1], y: [0, -8, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[#020617]/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/70 to-[#020617]/95" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-28 text-center sm:px-8 md:py-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="max-w-4xl text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-7xl"
        >
          NOVERA DRONE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg"
        >
          La précision aérienne au service de vos décisions
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base"
        >
          Inspection, analyse et imagerie professionnelle
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href="/demander-un-devis"
            className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 px-9 py-4 text-base font-semibold text-white shadow-[0_0_0_0_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_-12px_rgba(56,189,248,0.55)]"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-300">
          <span>Scroll</span>
          <span className="h-9 w-5 rounded-full border border-white/50 p-1">
            <span className="block h-2 w-2 animate-bounce rounded-full bg-white/90" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
