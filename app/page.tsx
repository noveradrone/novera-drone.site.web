import FinalCtaSection from "@/app/components/FinalCtaSection";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import PortfolioSection from "@/app/components/PortfolioSection";
import ScrollEffects from "@/app/components/ScrollEffects";
import ServicesSection from "@/app/components/ServicesSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import { buildMetadata } from "@/app/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Étude solaire & inspection de toiture par drone en Normandie",
  description:
    "Étude de toiture solaire, inspection de toiture et photo aérienne par drone dans l'Orne, le Calvados et la Manche. Rapport sous 48 h.",
  path: "/"
});

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero
        compactTitle
        title="Étude solaire et inspection de toiture par drone en Normandie"
        subtitle="Orne, Calvados, Manche – Flers, Vire, Argentan, Saint-Lô, Caen"
        supportText="Relevé de toiture, calepinage et estimation de production : rapport PDF sous 48 h, sans échafaudage."
        ctaLabel="Demander une étude de toiture"
        ctaHref="/demander-un-devis?prestation=etude"
        secondaryCtaLabel="Demander un devis"
        secondaryCtaHref="/demander-un-devis"
      />
      <ScrollEffects />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
