import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://noveradrone.fr";
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date()
    }
  ];
}
