"use client";

import { galleryItems } from "@/data/content";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";

const filters = [
  {
    key: "event",
    label: "Prise de vue événementielle",
    match: (item: (typeof galleryItems)[number]) => item.id === 1 || item.id === 2
  },
  {
    key: "real-estate",
    label: "Promotion immobilière",
    match: (item: (typeof galleryItems)[number]) => item.id === 5
  },
  {
    key: "inspection",
    label: "Inspections de bâtiment",
    match: (item: (typeof galleryItems)[number]) => item.category === "Inspection"
  }
] as const;

type Filter = (typeof filters)[number];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Filter["key"] | null>(null);

  const list = useMemo(() => {
    if (!activeFilter) return galleryItems;
    const selectedFilter = filters.find((filter) => filter.key === activeFilter);
    if (!selectedFilter) return galleryItems;
    return galleryItems.filter(selectedFilter.match);
  }, [activeFilter]);

  return (
    <section id="galerie" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Galerie"
        title={<>Des réalisations concrètes qui témoignent de notre précision.</>}
        description="Explorez nos projets par catégorie pour découvrir nos domaines d’expertise."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center md:gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter((current) => (current === filter.key ? null : filter.key))}
            className={`rounded-full px-4 py-2 text-xs transition sm:px-5 sm:text-sm ${
              activeFilter === filter.key ? "bg-blue-500 text-white" : "glass text-slate-200 hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="cyl-wrapper relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#020817] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#020817] to-transparent sm:w-16" />
        <div className="cyl-track scrollbar-hide flex gap-3 overflow-x-auto px-2 py-2 sm:gap-4 sm:px-6">
        {list.map((item) => {
          const cardContent = (
            <>
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={1100}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 text-center">
                <p className="text-lg font-medium text-white">{item.title}</p>
              </div>
            </>
          );

          return (
            <motion.article
              key={item.id}
              className="cyl-card group glass relative block w-[220px] shrink-0 overflow-hidden rounded-2xl text-left sm:w-[260px] lg:w-[300px]"
              whileHover={{ y: -4, rotateY: 0 }}
            >
              {item.href ? (
                <Link href={item.href} aria-label={`Voir la galerie ${item.title}`} className="block">
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </motion.article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
