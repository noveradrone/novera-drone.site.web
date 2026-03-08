"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  id?: string;
  title?: ReactNode;
  subtitle?: string;
  supportText?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  darkOverlay?: "default" | "strong";
  minHeightClassName?: string;
};

export default function Hero({
  id = "top",
  title = "NOVERA DRONE",
  subtitle = "La précision aérienne au service de vos décisions",
  supportText = "Inspection, analyse et imagerie professionnelle",
  ctaLabel = "Demander un devis",
  ctaHref = "/demander-un-devis",
  backgroundImage = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2200&q=80",
  darkOverlay = "default",
  minHeightClassName = "min-h-screen"
}: HeroProps) {
  const darkOverlayClass = darkOverlay === "strong" ? "bg-[#020617]/48" : "bg-[#020617]/55";
  const gradientOverlayClass =
    darkOverlay === "strong"
      ? "bg-gradient-to-b from-[#020617]/18 via-[#020617]/60 to-[#020617]/84"
      : "bg-gradient-to-b from-[#020617]/20 via-[#020617]/70 to-[#020617]/95";

  return (
    <section id={id} className={`relative overflow-hidden ${minHeightClassName}`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
        animate={{ scale: [1, 1.04, 1], y: [0, -8, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div className={`absolute inset-0 ${darkOverlayClass}`} />
      <div className={`absolute inset-0 ${gradientOverlayClass}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.2),transparent_48%)]" />

      <div className={`relative z-10 flex ${minHeightClassName} flex-col items-center justify-center px-5 py-28 text-center sm:px-8 md:py-36`}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
          className="max-w-4xl bg-gradient-to-r from-[#e2f3ff] via-[#8ad8ff] to-[#2d82ff] bg-clip-text text-4xl font-semibold leading-[1.02] tracking-[0.06em] text-transparent sm:text-6xl sm:tracking-[0.1em] md:text-8xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 max-w-3xl text-lg font-medium text-slate-100 sm:text-xl md:text-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg"
        >
          {supportText}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-10"
        >
          <Link
            href={ctaHref}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gradient-to-r from-[#1d4ed8] via-[#0ea5e9] to-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_-14px_rgba(56,189,248,0.75)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.75)] sm:min-w-[250px] sm:px-9 sm:py-4 sm:text-base"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
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
