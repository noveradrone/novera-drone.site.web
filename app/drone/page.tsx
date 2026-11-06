import { buildMetadata } from "@/app/lib/seo";
import DroneShowcaseSection from "@/app/components/DroneShowcaseSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Nos drones : DJI Air 3S, Air 3, Avata 2 | Novera Drone",
  description:
    "Le matériel utilisé par Novera Drone pour ses missions en Normandie : DJI Air 3S, Air 3, Avata 2, Mini 2 et caméras 360°.",
  path: "/drone"
});

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
