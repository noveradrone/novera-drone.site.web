import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://noveradrone.fr";
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date()
    },
    {
      url: `${base}/novera-drone-solidaire`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: new Date()
    }
  ];
}
