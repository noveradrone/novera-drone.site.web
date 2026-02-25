"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/app/components/SectionTitle";

export default function AboutSection() {
  return (
    <section className="section-shell reveal-up">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle
            eyebrow="A propos"
            title={<>Un regard aerien pour des souvenirs cinematographiques.</>}
            description="Novera Drone crée des contenus photo et vidéo premium pour les mariages et événements en Manche, Orne et Calvados. Chaque vol combine esthétique, sécurité et storytelling visuel pour un rendu élégant et émotionnel."
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80"
            alt="Drone en vol"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
