import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { buildMetadata } from "@/app/lib/seo";
import { getServicePage } from "@/data/services";
import type { Metadata } from "next";

const service = getServicePage("inspection");

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path
});

export default function Page() {
  return <ServicePageTemplate service={service} />;
}
