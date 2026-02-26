"use client";

import { motion } from "framer-motion";

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
          className="max-w-5xl leading-tight"
        >
          <span className="block text-5xl font-semibold tracking-[0.08em] text-white md:text-7xl">
            NOVERA DRONE
          </span>
          <span className="text-gradient mt-3 block text-2xl font-medium md:text-4xl">
            L&apos;expertise aérienne au service de vos projets
          </span>
        </motion.h1>
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
