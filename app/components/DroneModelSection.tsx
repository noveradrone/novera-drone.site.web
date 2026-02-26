import SectionTitle from "@/app/components/SectionTitle";

export default function DroneModelSection() {
  return (
    <section id="modele-3d" className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Modèle 3D"
        title={<>Découvrez un drone en 3D interactive</>}
        description="Faites pivoter le modèle et visualisez les détails."
      />

      <div className="glass overflow-hidden rounded-3xl p-3 sm:p-4 md:p-6">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ paddingTop: "56.25%" }}>
          <iframe
            title="Drone 3D"
            src="https://sketchfab.com/models/3c7c69f9c77741aa9b7bbfcc6be29202/embed"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          Modèle source: Sketchfab (DJI Air 3)
        </p>
      </div>
    </section>
  );
}
