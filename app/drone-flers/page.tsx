import VillePageTemplate from "@/app/components/VillePageTemplate";
import { buildMetadata } from "@/app/lib/seo";
import { getVille } from "@/data/villes";
import type { Metadata } from "next";

const ville = getVille("flers");

export const metadata: Metadata = buildMetadata({
  title: ville.metaTitle,
  description: ville.metaDescription,
  path: ville.path
});

export default function Page() {
  return <VillePageTemplate ville={ville} />;
}
