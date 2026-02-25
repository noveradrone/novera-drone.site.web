import SectionTitle from "@/app/components/SectionTitle";
import { instagramMock } from "@/data/content";
import Image from "next/image";

export default function InstagramSection() {
  return (
    <section className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Instagram"
        title={<>Les derniers apercus visuels.</>}
        description="Intégration optimisée pour présenter un flux social cohérent avec votre identité premium."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {instagramMock.slice(0, 3).map((src, idx) => (
          <a
            key={src}
            href="https://www.instagram.com/noveradrone?igsh=NXdqOWZoMzVlcnRj&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="group glass relative overflow-hidden rounded-2xl"
            aria-label={`Post Instagram ${idx + 1}`}
          >
            <Image
              src={src}
              alt={`Post Instagram ${idx + 1}`}
              width={800}
              height={800}
              loading="lazy"
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <span className="text-sm text-white">Voir sur Instagram</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
