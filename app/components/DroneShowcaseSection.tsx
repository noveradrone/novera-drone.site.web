"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DroneShowcaseSection() {
  const drones = [
    {
      name: "DJI Air 3S",
      subtitle: "Performance aérienne professionnelle",
      description:
        "Drone haut de gamme à double caméra avec capteur principal 1″ et télécaméra 70 mm, capable de capturer des photos détaillées et des vidéos 4K HDR fluides. Compact, puissant et doté d'une grande autonomie, il garantit des prises de vue aériennes stables, précises et cinématographiques pour des projets événementiels et promotionnels.",
      imageUrl: "/images/dji-air-3s.jpg",
      fallbackImageUrl:
        "https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&w=1800&q=80",
      embedUrl: "https://sketchfab.com/models/3c7c69f9c77741aa9b7bbfcc6be29202/embed"
    },
    {
      name: "DJI Avata 2",
      subtitle: "Immersion FPV cinématographique",
      description:
        "Drone FPV compact conçu pour des plans dynamiques et immersifs, avec une excellente stabilité en vol et une captation vidéo fluide. Il est idéal pour apporter une perspective spectaculaire à vos projets événementiels, promotionnels et contenus à fort impact visuel.",
      imageUrl: "/images/drone.WEBP",
      fallbackImageUrl:
        "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=1800&q=80",
      embedUrl: "https://sketchfab.com/models/aa73cab74328473493df75be898e26e3/embed"
    },
    {
      name: "DJI Matrice 4T / 4E",
      subtitle: "Plateforme d'inspection et de cartographie avancée",
      description:
        "Drone professionnel conçu pour les missions techniques exigeantes: inspection d'infrastructures, thermographie et relevés de précision. Sa conception robuste et ses capteurs spécialisés en font un outil adapté aux interventions industrielles et de sécurité.",
      imageUrl: "/images/dji4.PNG",
      fallbackImageUrl:
        "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=1800&q=80",
      embedUrl: "https://sketchfab.com/models/a1e1827266964f0eba7529a86b457d0d/embed"
    }
  ];
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({
    "DJI Air 3S": 0,
    "DJI Avata 2": 0,
    "DJI Matrice 4T / 4E": 0
  });

  return (
    <section data-light-section="true" className="reveal-up w-full bg-slate-50 py-16 sm:py-20">
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
                      {activeSlides[drone.name] === 0 ? (
                        <img
                          src={drone.imageUrl}
                          alt={`${drone.name} photo produit`}
                          className="absolute inset-0 h-full w-full object-contain bg-white"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            const fallback = (drone as { fallbackImageUrl?: string }).fallbackImageUrl;
                            if (fallback && target.src !== fallback) {
                              target.src = fallback;
                            }
                          }}
                        />
                      ) : (
                        <iframe
                          title={`${drone.name} en 3D`}
                          src={drone.embedUrl}
                          className="absolute inset-0 h-full w-full"
                          allow="autoplay; fullscreen; xr-spatial-tracking"
                          allowFullScreen
                          loading="lazy"
                        />
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlides((prev) => ({
                            ...prev,
                            [drone.name]: prev[drone.name] === 0 ? 1 : 0
                          }))
                        }
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                      >
                        Précédent
                      </button>
                      <div className="flex items-center gap-2">
                        {[0, 1].map((slide) => (
                          <button
                            key={slide}
                            type="button"
                            onClick={() => setActiveSlides((prev) => ({ ...prev, [drone.name]: slide }))}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              activeSlides[drone.name] === slide ? "bg-blue-500" : "bg-slate-300"
                            }`}
                            aria-label={slide === 0 ? "Voir image" : "Voir modèle 3D"}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlides((prev) => ({
                            ...prev,
                            [drone.name]: prev[drone.name] === 0 ? 1 : 0
                          }))
                        }
                        className="rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
                      >
                        Suivant
                      </button>
                    </div>
                  </div>
                ) : null}
                {!drone.imageUrl ? (
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
                ) : null}
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
