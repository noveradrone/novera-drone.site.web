"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-sm uppercase tracking-[0.22em] text-blue-300"
      >
        Erreur 404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl font-semibold"
      >
        Page introuvable
      </motion.h1>
      <p className="mt-4 max-w-xl text-slate-300">Cette page n'existe plus ou a été déplacée.</p>
      <Link href="/" className="mt-8 rounded-full bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-400">
        Retour à l'accueil
      </Link>
    </main>
  );
}
