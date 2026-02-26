import Footer from "@/app/components/Footer";
import DroneShowcaseSection from "@/app/components/DroneShowcaseSection";
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
      <PortfolioSection />
      <ServicesSection />
      <DroneShowcaseSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
