import { z } from "zod";
import { checkRateLimit, getClientIp, secureApiResponse, validateRequestContext } from "@/app/lib/security";

/**
 * Simulateur solaire : géocode l'adresse (Base Adresse Nationale) puis interroge PVGIS
 * (Commission européenne) côté serveur. Aucune donnée n'est stockée.
 */

const querySchema = z.object({
  adresse: z.string().trim().min(3).max(200),
  kwc: z.coerce.number().min(0.3).max(500),
  inclinaison: z.coerce.number().min(0).max(90),
  orientation: z.coerce.number().min(-180).max(180)
});

type BanResponse = {
  features?: { geometry: { coordinates: [number, number] }; properties: { label: string; score: number } }[];
};

type PvgisResponse = {
  outputs?: {
    totals?: { fixed?: { E_y: number; "H(i)_y"?: number } };
    monthly?: { fixed?: { month: number; E_m: number }[] };
  };
};

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!validateRequestContext(request)) {
    return secureApiResponse({ error: "Requête refusée." }, { status: 403 }, request);
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(`simulateur:${ip}`, 20, 60_000)) {
    return secureApiResponse({ error: "Trop de simulations. Réessayez dans une minute." }, { status: 429 }, request);
  }

  const params = Object.fromEntries(new URL(request.url).searchParams);
  const parsed = querySchema.safeParse(params);
  if (!parsed.success) {
    return secureApiResponse({ error: "Paramètres invalides." }, { status: 400 }, request);
  }
  const { adresse, kwc, inclinaison, orientation } = parsed.data;

  try {
    const banUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=1`;
    const ban = (await (await fetch(banUrl, { signal: AbortSignal.timeout(6000) })).json()) as BanResponse;
    const feature = ban.features?.[0];
    if (!feature || feature.properties.score < 0.4) {
      return secureApiResponse({ error: "Adresse introuvable. Précisez la commune ou le code postal." }, { status: 404 }, request);
    }
    const [lon, lat] = feature.geometry.coordinates;

    const pvgisUrl =
      `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=${lat}&lon=${lon}` +
      `&peakpower=${kwc}&loss=14&angle=${inclinaison}&aspect=${orientation}&outputformat=json`;
    const pvgisRes = await fetch(pvgisUrl, { signal: AbortSignal.timeout(12000), next: { revalidate: 86400 } });
    if (!pvgisRes.ok) throw new Error(`PVGIS ${pvgisRes.status}`);
    const pvgis = (await pvgisRes.json()) as PvgisResponse;

    const annual = pvgis.outputs?.totals?.fixed?.E_y;
    const monthly = pvgis.outputs?.monthly?.fixed;
    if (typeof annual !== "number" || !monthly?.length) throw new Error("PVGIS: réponse incomplète");

    return secureApiResponse(
      {
        adresse: feature.properties.label,
        lat: Math.round(lat * 1000) / 1000,
        lon: Math.round(lon * 1000) / 1000,
        kwc,
        productionAnnuelle: Math.round(annual),
        productibleParKwc: Math.round(annual / kwc),
        mensuel: monthly.map((m) => ({ mois: m.month, kwh: Math.round(m.E_m) }))
      },
      { status: 200 },
      request
    );
  } catch {
    return secureApiResponse(
      { error: "Le service de calcul PVGIS ne répond pas pour le moment. Réessayez dans quelques instants." },
      { status: 502 },
      request
    );
  }
}
