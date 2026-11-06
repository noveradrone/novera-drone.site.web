import type { MetadataRoute } from "next";
import { activeServicePages } from "@/data/services";
import { villeLinks } from "@/data/villes";
import { siteUrl } from "@/app/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

// À compléter à chaque nouvelle page publique (services, pages villes…).
const pages: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...activeServicePages.map((service) => ({ path: service.path, priority: service.key === "etude" ? 0.95 : 0.85, changeFrequency: "monthly" as const })),
  ...villeLinks.map((ville) => ({ path: ville.path, priority: 0.7, changeFrequency: "monthly" as const })),
  { path: "/demander-un-devis", priority: 0.8, changeFrequency: "yearly" },
  { path: "/realisations/immobilier", priority: 0.7, changeFrequency: "monthly" },
  { path: "/realisations/evenement", priority: 0.7, changeFrequency: "monthly" },
  { path: "/drone-associations-humanitaires", priority: 0.6, changeFrequency: "monthly" },
  { path: "/drone", priority: 0.5, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" },
  { path: "/politique-de-confidentialite", priority: 0.2, changeFrequency: "yearly" }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority
  }));
}
