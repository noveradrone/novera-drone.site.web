"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DroneShowcaseSection() {
  return (
    <section className="reveal-up w-full bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1"
        >
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.3)] sm:p-6">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "62%" }}>
              <iframe
                title="DJI Air 3 en 3D"
                src="https://sketchfab.com/models/3c7c69f9c77741aa9b7bbfcc6be29202/embed"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className="order-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Équipement</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">DJI Air 3S</h2>
          <p className="mt-3 text-lg font-medium text-slate-700">Performance aérienne professionnelle</p>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Drone haut de gamme à double caméra avec capteur principal 1″ et télécaméra 70 mm, capable de capturer
            des photos détaillées et des vidéos 4K HDR fluides. Compact, puissant et doté d&apos;une grande autonomie,
            il garantit des prises de vue aériennes stables, précises et cinématographiques pour des projets
            événementiels et promotionnels.
          </p>

          <Link
            href="/#galerie"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(14,165,233,0.65)]"
          >
            Voir nos réalisations
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
