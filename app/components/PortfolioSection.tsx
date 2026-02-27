"use client";

import { galleryItems } from "@/data/content";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";

const filters = ["Tous", "Photographie", "Thermographie", "Inspection", "Nettoyage"] as const;

type Filter = (typeof filters)[number];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");

  // Filtre client-side pour conserver une galerie instantanée et fluide.
  const list = useMemo(() => {
    if (activeFilter === "Tous") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="galerie" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Galerie"
        title={<>Des réalisations terrain qui montrent la précision de nos interventions.</>}
        description="Filtrez nos projets par catégorie pour visualiser les différents domaines d'application."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center md:gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-xs transition sm:px-5 sm:text-sm ${
              activeFilter === filter ? "bg-blue-500 text-white" : "glass text-slate-200 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="cyl-wrapper relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#020817] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#020817] to-transparent sm:w-16" />
        <div className="cyl-track scrollbar-hide flex gap-3 overflow-x-auto px-2 py-2 sm:gap-4 sm:px-6">
        {list.map((item) => (
          <motion.article
            key={item.id}
            className="cyl-card group glass relative block w-[220px] shrink-0 overflow-hidden rounded-2xl text-left sm:w-[260px] lg:w-[300px]"
            whileHover={{ y: -4, rotateY: 0 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={1100}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-center transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-blue-200">{item.category}</p>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          </motion.article>
        ))}
        </div>
      </div>
    </section>
  );
}
