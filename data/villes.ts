/** Pages locales : une page par ville, avec un contenu propre à chacune (voir app/[ville]/). */
export type VilleLink = { slug: string; name: string; path: string };

export const villeLinks: VilleLink[] = [
  { slug: "flers", name: "Flers", path: "/drone-flers" },
  { slug: "vire", name: "Vire", path: "/drone-vire" },
  { slug: "argentan", name: "Argentan", path: "/drone-argentan" },
  { slug: "saint-lo", name: "Saint-Lô", path: "/drone-saint-lo" },
  { slug: "caen", name: "Caen", path: "/drone-caen" }
];
