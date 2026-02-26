"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DroneShowcaseSection() {
  const drones = [
    {
      name: "DJI Air 3S",
      subtitle: "Performance aérienne professionnelle",
      description:
        "Drone haut de gamme à double caméra avec capteur principal 1″ et télécaméra 70 mm, capable de capturer des photos détaillées et des vidéos 4K HDR fluides. Compact, puissant et doté d'une grande autonomie, il garantit des prises de vue aériennes stables, précises et cinématographiques pour des projets événementiels et promotionnels.",
      imageUrl: "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1800&q=80",
      embedUrl: "https://sketchfab.com/models/3c7c69f9c77741aa9b7bbfcc6be29202/embed"
    },
    {
      name: "DJI Avata 2",
      subtitle: "Immersion FPV cinématographique",
      description:
        "Drone FPV compact conçu pour des plans dynamiques et immersifs, avec une excellente stabilité en vol et une captation vidéo fluide. Il est idéal pour apporter une perspective spectaculaire à vos projets événementiels, promotionnels et contenus à fort impact visuel.",
      embedUrl: "https://sketchfab.com/models/aa73cab74328473493df75be898e26e3/embed"
    }
  ];

  return (
    <section className="reveal-up w-full bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-4 sm:px-6 md:space-y-12 md:px-10">
        {drones.map((drone, index) => (
          <div key={drone.name} className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={index % 2 === 1 ? "order-1 md:order-2" : "order-1"}
            >
              <div className="space-y-4">
                {drone.imageUrl ? (
                  <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.3)] sm:p-6">
                    <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "62%" }}>
                      <Image
                        src={drone.imageUrl}
                        alt={`${drone.name} photo produit`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.3)] sm:p-6">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "62%" }}>
                    <iframe
                      title={`${drone.name} en 3D`}
                      src={drone.embedUrl}
                      className="absolute inset-0 h-full w-full"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className={index % 2 === 1 ? "order-2 md:order-1" : "order-2"}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Équipement</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">{drone.name}</h2>
              <p className="mt-3 text-lg font-medium text-slate-700">{drone.subtitle}</p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">{drone.description}</p>

              <Link
                href="/#galerie"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(14,165,233,0.65)]"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
