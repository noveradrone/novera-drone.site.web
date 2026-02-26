import DroneShowcaseSection from "@/app/components/DroneShowcaseSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone | Novera Drone",
  description: "Découvrez nos drones professionnels: DJI Air 3S et DJI Avata 2, avec aperçu image et modèle 3D."
};

export default function DronePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <div className="pt-20 sm:pt-24">
        <DroneShowcaseSection />
      </div>
      <Footer />
    </main>
  );
}
