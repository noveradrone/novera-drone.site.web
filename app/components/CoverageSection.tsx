import SectionTitle from "@/app/components/SectionTitle";

const zones = [
  { name: "Manche", left: "20%", top: "38%" },
  { name: "Orne", left: "47%", top: "56%" },
  { name: "Calvados", left: "56%", top: "30%" }
];

export default function CoverageSection() {
  return (
    <section className="section-shell reveal-up">
      <SectionTitle
        eyebrow="Zone d'intervention"
        title={<>Normandie: Manche, Orne, Calvados.</>}
        description="Photographe drone mariage Manche, vidéo drone Calvados, drone mariage Normandie: un positionnement local fort pour votre visibilité SEO."
      />
      <div className="glass relative overflow-hidden rounded-3xl p-8">
        <div className="grid-fade absolute inset-0" />
        <div className="relative h-[360px] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/50">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: zone.left, top: zone.top }}
            >
              <div className="h-3 w-3 animate-ping rounded-full bg-blue-400" />
              <span className="absolute left-3 top-0 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{zone.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
