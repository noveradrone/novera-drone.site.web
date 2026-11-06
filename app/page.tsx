import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";
import AboutIntroSection from "@/app/components/AboutIntroSection";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import PortfolioSection from "@/app/components/PortfolioSection";
import ScrollEffects from "@/app/components/ScrollEffects";
import ServicesSection from "@/app/components/ServicesSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";

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
      <Hero />
      <ScrollEffects />
      <AboutIntroSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
