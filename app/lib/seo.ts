import type { Metadata } from "next";
import { legalInfo } from "@/data/legal";

// Domaine principal servi par Vercel (noveradrone.fr redirige vers www).
export const siteUrl = "https://www.noveradrone.fr";
export const siteName = "Novera Drone";

/** Image de partage par défaut, générée par app/opengraph-image.tsx. */
const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Novera Drone – Étude solaire et inspection de toiture par drone en Normandie"
};

type PageSeo = {
  /** Titre complet de la page (50-60 caractères conseillés). */
  title: string;
  /** Description unique de la page (140-160 caractères conseillés). */
  description: string;
  /** Chemin de la page, ex. "/demander-un-devis". Sert à la canonique et à og:url. */
  path: string;
  /** Image de partage spécifique (sinon l'image Open Graph par défaut du site). */
  image?: { url: string; width: number; height: number; alt: string };
  noIndex?: boolean;
};

/**
 * Construit les métadonnées d'une page : title, description, canonique,
 * Open Graph et Twitter cohérents. À utiliser dans `export const metadata`
 * ou `generateMetadata` de chaque page.
 */
export function buildMetadata({ title, description, path, image, noIndex }: PageSeo): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const images = [image ?? defaultOgImage];

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "fr_FR",
      type: "website",
      images
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) => img.url)
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {})
  };
}

/** Villes et départements couverts, repris dans les données structurées. */
export const serviceAreas = {
  departements: ["Orne", "Manche", "Calvados"],
  villes: ["Flers", "Vire", "Argentan", "Saint-Lô", "Caen", "Alençon", "Avranches"]
};

/** Services actuellement proposés (matériel disponible). */
export const activeServices = [
  {
    name: "Étude de toiture solaire par drone",
    description:
      "Relevé de toiture par drone, surfaces, pentes, obstacles, calepinage des panneaux et estimation de production PVGIS. Rapport PDF sous 48 h."
  },
  {
    name: "Inspection de toiture et de façade par drone",
    description:
      "Inspection visuelle de toitures et façades par drone, sans échafaudage ni montée sur le toit : après tempête, avant achat, pour les couvreurs."
  },
  {
    name: "Photo et vidéo aérienne",
    description: "Prises de vues aériennes par drone pour l'immobilier, les événements sportifs et la communication."
  }
];

/**
 * Données structurées ProfessionalService.
 * Le nom, l'adresse et le téléphone doivent être STRICTEMENT identiques à la fiche Google Business.
 */
export function localBusinessJsonLd() {
  const sameAs = [legalInfo.googleBusinessUrl, legalInfo.instagramUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#entreprise`,
    name: legalInfo.companyName,
    description:
      "Étude de toiture solaire, inspection de toiture et de façade, photo et vidéo aérienne par drone dans l'Orne, le Calvados et la Manche.",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png/logo_entreprise.png`,
    image: `${siteUrl}/opengraph-image`,
    telephone: legalInfo.phoneHref,
    email: legalInfo.email,
    founder: { "@type": "Person", name: "Enes Ozturk" },
    address: {
      "@type": "PostalAddress",
      ...(legalInfo.address.streetAddress ? { streetAddress: legalInfo.address.streetAddress } : {}),
      ...(legalInfo.address.postalCode ? { postalCode: legalInfo.address.postalCode } : {}),
      ...(legalInfo.address.locality ? { addressLocality: legalInfo.address.locality } : {}),
      addressRegion: "Normandie",
      addressCountry: "FR"
    },
    areaServed: [
      ...serviceAreas.departements.map((name) => ({ "@type": "AdministrativeArea", name })),
      ...serviceAreas.villes.map((name) => ({ "@type": "City", name }))
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services drone",
      itemListElement: activeServices.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.name, description: service.description }
      }))
    },
    ...(sameAs.length ? { sameAs } : {})
  };
}

/** Données structurées FAQPage, à partir des questions affichées sur la page. */
export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
}

/** Données structurées Service, rattachées à l'entreprise. */
export function serviceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: { "@id": `${siteUrl}/#entreprise` },
    areaServed: [
      ...serviceAreas.departements.map((area) => ({ "@type": "AdministrativeArea", name: area })),
      ...serviceAreas.villes.map((city) => ({ "@type": "City", name: city }))
    ]
  };
}

/** Fil d'Ariane pour les résultats Google. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Accueil", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`
    }))
  };
}
