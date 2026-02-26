import AboutIntroSection from "@/app/components/AboutIntroSection";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import PortfolioSection from "@/app/components/PortfolioSection";
import ScrollEffects from "@/app/components/ScrollEffects";
import ServicesSection from "@/app/components/ServicesSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <ScrollEffects />
      <AboutIntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
