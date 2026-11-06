import { buildMetadata } from "@/app/lib/seo";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Demander un devis drone – Orne, Calvados, Manche | Novera Drone",
  description:
    "Demandez un devis pour une étude de toiture solaire, une inspection de toiture ou des photos aériennes par drone à Flers, Vire, Argentan, Saint-Lô ou Caen.",
  path: "/demander-un-devis"
});

export default function QuotePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
