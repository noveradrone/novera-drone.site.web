import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/app/components/CookieConsent";
import { buildMetadata, localBusinessJsonLd, siteUrl } from "@/app/lib/seo";
import "./globals.css";
import "./cookies.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: "Étude solaire & inspection de toiture par drone en Normandie",
    description:
      "Étude de toiture solaire, inspection de toiture et photo aérienne par drone dans l'Orne, le Calvados et la Manche. Rapport sous 48 h.",
    path: "/"
  }),
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
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Analytics />
        <Script src="/cookies.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
