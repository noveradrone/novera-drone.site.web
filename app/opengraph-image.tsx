import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Novera Drone – Étude solaire et inspection de toiture par drone en Normandie";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image de partage par défaut (og:image / twitter:image), héritée par toutes les pages.
// TODO : la remplacer par une vraie photo de mission (1200×630) quand elle sera disponible.
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png/logo_entreprise.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #050b18 0%, #0b1f3f 60%, #12408a 100%)",
          color: "#ffffff"
        }}
      >
        <div style={{ display: "flex", alignSelf: "flex-start", background: "#ffffff", borderRadius: 24, padding: "8px 20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={180} height={120} alt="" style={{ objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
            Étude solaire et inspection de toiture par drone
          </div>
          <div style={{ fontSize: 32, color: "#8ad8ff" }}>
            Orne · Calvados · Manche — Flers, Vire, Argentan, Saint-Lô, Caen
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#cbd5e1" }}>noveradrone.fr · Rapport sous 48 h</div>
      </div>
    ),
    size
  );
}
