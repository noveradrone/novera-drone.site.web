import FinalCtaSection from "@/app/components/FinalCtaSection";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import PortfolioSection from "@/app/components/PortfolioSection";
import ScrollEffects from "@/app/components/ScrollEffects";
import ServicesSection from "@/app/components/ServicesSection";
import ToolsSection from "@/app/components/ToolsSection";
import SportsSection from "@/app/components/SportsSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import { buildMetadata } from "@/app/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Drone en Normandie : étude solaire, toiture, trails et triathlons",
  description:
    "Étude de toiture solaire, inspection de toiture et vidéo drone de trails, marathons et triathlons dans l'Orne, le Calvados et la Manche. Rapport sous 48 h.",
  path: "/"
});

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero
        compactTitle
        title="Étude solaire, inspection de toiture et vidéo drone d'événements sportifs en Normandie"
        subtitle="Orne, Calvados, Manche – Flers, Vire, Argentan, Saint-Lô, Caen"
        supportText="Sans échafaudage · rapport sous 48 h · courses filmées en aérien et FPV"
        ctaLabel="Demander une étude de toiture"
        ctaHref="/demander-un-devis?prestation=etude"
        secondaryCtaLabel="Devis événement sportif"
        secondaryCtaHref="/demander-un-devis?prestation=sport"
      />
      <ScrollEffects />
      <ServicesSection />
      <SportsSection />
      <WhyChooseSection />
      <ToolsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
