import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander un devis | Novera Drone",
  description:
    "Demandez votre devis pour une prestation drone en Normandie: photographie aérienne, thermographie, inspection technique ou nettoyage."
};

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
