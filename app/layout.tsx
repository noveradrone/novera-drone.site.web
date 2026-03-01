import type { Metadata } from "next";
import Script from "next/script";
import CookieConsent from "@/app/components/CookieConsent";
import "./globals.css";
import "./cookies.css";

const siteUrl = "https://noveradrone.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Novera Drone | Services drone professionnels en Normandie",
  description:
    "Novera Drone accompagne les entreprises et collectivités: photographie aérienne, thermographie, inspection technique et nettoyage par drone en Normandie.",
  keywords: [
    "Services drone Normandie",
    "Inspection technique drone",
    "Thermographie drone",
    "Nettoyage par drone",
    "Photographie aérienne professionnelle"
  ],
  openGraph: {
    title: "Novera Drone",
    description: "L'expertise aérienne au service de vos projets.",
    url: siteUrl,
    siteName: "Novera Drone",
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Novera Drone",
    description: "Services drone premium en Normandie."
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
      { url: "/favicon.png?v=3", type: "image/png" }
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/favicon.png?v=3"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Novera Drone",
    description: "Photographie aérienne, thermographie, inspection technique et nettoyage par drone en Normandie",
    areaServed: ["Manche", "Orne", "Calvados"],
    telephone: "+33 6 00 00 00 00",
    url: siteUrl,
    sameAs: ["https://www.instagram.com/noveradrone?igsh=NXdqOWZoMzVlcnRj&utm_source=qr"]
  };

  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Script src="/cookies.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
