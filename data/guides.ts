/**
 * Guides pratiques (contenu éditorial). Chaque guide renvoie vers le service concerné.
 * Mettre à jour `updated` à chaque modification de fond.
 */

export type GuideSection = { h2: string; paragraphs?: string[]; bullets?: string[] };

export type Guide = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  published: string;
  updated: string;
  readingMinutes: number;
  intro: string;
  sections: GuideSection[];
  /** Afficher le tableau des repères PVGIS par commune. */
  showPvgisTable?: boolean;
  cta: { text: string; label: string; href: string };
};

export const guides: Guide[] = [
  {
    slug: "production-panneau-solaire-normandie",
    path: "/guides/production-panneau-solaire-normandie",
    title: "Combien produisent des panneaux solaires en Normandie ?",
    metaTitle: "Production d'un panneau solaire en Normandie : chiffres PVGIS",
    metaDescription:
      "Combien produit 1 kWc en Normandie ? Chiffres PVGIS pour Caen, Alençon, Saint-Lô, Flers, Vire, Argentan et Avranches, influence de l'orientation et des ombres.",
    excerpt: "Les chiffres PVGIS commune par commune, et ce qui fait vraiment varier la production d'une toiture normande.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readingMinutes: 5,
    intro:
      "« Le solaire, ça ne marche pas en Normandie » : l'idée reçue a la vie dure. Les données de PVGIS, l'outil de la Commission européenne utilisé par les professionnels, montrent pourtant qu'une toiture bien orientée produit ici un peu plus de 1 000 kWh par an et par kWc installé. Voici les chiffres, et les facteurs qui comptent vraiment.",
    sections: [
      {
        h2: "Les chiffres : un peu plus de 1 000 kWh par kWc et par an",
        paragraphs: [
          "Le kWc (kilowatt-crête) mesure la puissance d'une installation dans des conditions standard. Une installation de 3 kWc correspond à 7 ou 8 panneaux courants, soit environ 15 m² de toiture.",
          "Le tableau ci-dessous donne la production annuelle estimée par PVGIS pour 1 kWc, sans ombrage, avec 14 % de pertes système. Il suffit de multiplier par la puissance de votre projet : 3 kWc orientés plein sud à Caen produisent ainsi environ 3 400 kWh par an."
        ]
      },
      {
        h2: "L'orientation : le sud est idéal, l'est et l'ouest restent intéressants",
        paragraphs: [
          "Un pan orienté plein sud donne la meilleure production annuelle. Mais un pan est ou ouest n'est pas à écarter : il produit environ 20 % de moins selon PVGIS, et sa production est mieux répartie entre le matin et le soir, ce qui peut favoriser l'autoconsommation.",
          "Sur une maison avec deux pans est et ouest, il est parfois pertinent d'équiper les deux. L'étude de toiture permet de comparer les scénarios."
        ]
      },
      {
        h2: "L'inclinaison : les toitures normandes sont bien placées",
        paragraphs: [
          "En Normandie, l'inclinaison optimale tourne autour de 35°. Bonne nouvelle : la plupart des toitures traditionnelles, en ardoise ou en tuile, ont des pentes de 35° à 45°, très proches de l'optimum.",
          "Les toitures peu pentues des hangars et bâtiments d'activité (10° environ) perdent moins de 10 % de production par rapport à l'optimum, et compensent largement par leur grande surface."
        ]
      },
      {
        h2: "Les ombrages : le facteur le plus souvent sous-estimé",
        paragraphs: [
          "Une cheminée, une lucarne, un arbre ou un bâtiment voisin peuvent faire de l'ombre une partie de la journée. Selon la façon dont les panneaux sont câblés, une ombre sur un seul module peut réduire la production de toute une série.",
          "C'est le point faible des simulations en ligne, qui supposent une toiture parfaitement dégagée. Dans le bocage, avec ses haies et ses grands arbres, le relevé précis des obstacles fait souvent la différence entre une estimation optimiste et une production réaliste."
        ],
        bullets: [
          "Repérez les obstacles autour du toit : cheminées, antennes, fenêtres de toit, arbres.",
          "Pensez à la croissance des arbres sur la durée de vie des panneaux (25 à 30 ans).",
          "Faites calculer la production avec les ombres réelles avant de signer."
        ]
      },
      {
        h2: "Estimer la production de votre propre toiture",
        paragraphs: [
          "Pour une première idée, le simulateur solaire de Novera Drone interroge PVGIS à partir de votre adresse, de votre surface et de l'orientation de votre toit. Pour un chiffre fiable, l'étude de toiture par drone mesure les pans, les pentes et les ombrages réels, puis propose un calepinage et une estimation de production adaptée."
        ]
      }
    ],
    showPvgisTable: true,
    cta: {
      text: "Estimez en quelques secondes la production de votre toiture, gratuitement.",
      label: "Utiliser le simulateur solaire",
      href: "/simulateur-solaire"
    }
  },
  {
    slug: "verifier-devis-photovoltaique",
    path: "/guides/verifier-devis-photovoltaique",
    title: "Devis photovoltaïque : 8 points à vérifier avant de signer",
    metaTitle: "Vérifier un devis photovoltaïque : 8 points à contrôler",
    metaDescription:
      "Puissance, nombre de panneaux, production annoncée, matériel, certification RGE, démarches : la liste des points à vérifier sur un devis de panneaux solaires.",
    excerpt: "Puissance, production annoncée, matériel, certification, démarches : la check-list avant de signer.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readingMinutes: 6,
    intro:
      "Un projet de panneaux solaires engage pour 25 à 30 ans. Avant de signer, prenez le temps de relire le devis point par point, et d'en comparer plusieurs. Voici les éléments à contrôler, et comment vérifier qu'ils correspondent vraiment à votre toiture.",
    sections: [
      {
        h2: "1. La puissance installée (kWc)",
        paragraphs: [
          "Le devis doit indiquer clairement la puissance totale en kWc, le nombre de panneaux et la puissance unitaire de chaque panneau. Vérifiez que le calcul est cohérent : 8 panneaux de 425 Wc font 3,4 kWc."
        ]
      },
      {
        h2: "2. Le nombre de panneaux est-il réellement posable ?",
        paragraphs: [
          "C'est un point souvent oublié. Un devis réalisé à partir d'une image satellite peut prévoir des panneaux là où se trouvent une fenêtre de toit, une cheminée ou une zone ombragée. Demandez un plan d'implantation (calepinage) et confrontez-le à votre toiture réelle."
        ]
      },
      {
        h2: "3. La production annoncée est-elle réaliste ?",
        paragraphs: [
          "Comparez la production annoncée avec les repères PVGIS : en Normandie, comptez un peu plus de 1 000 kWh par kWc et par an pour un toit bien orienté et sans ombre, et environ 20 % de moins à l'est ou à l'ouest. Une production nettement supérieure doit vous alerter. Demandez les hypothèses utilisées : orientation, inclinaison, pertes, ombrages."
        ]
      },
      {
        h2: "4. Le matériel : marques, modèles et garanties",
        bullets: [
          "Marque et référence exacte des panneaux et de l'onduleur (ou des micro-onduleurs).",
          "Garantie produit et garantie de performance des panneaux, avec leur durée.",
          "Garantie de l'onduleur, souvent plus courte que celle des panneaux.",
          "Type de fixation et compatibilité avec votre couverture (ardoise, tuile, bac acier)."
        ]
      },
      {
        h2: "5. La certification RGE de l'installateur",
        paragraphs: [
          "Pour bénéficier des aides publiques et du contrat d'achat du surplus, l'installation doit en principe être réalisée par un professionnel certifié RGE pour le photovoltaïque (QualiPV par exemple). Vérifiez la certification sur l'annuaire officiel France Rénov' et demandez l'attestation d'assurance décennale."
        ]
      },
      {
        h2: "6. Les démarches incluses",
        bullets: [
          "Déclaration préalable de travaux en mairie.",
          "Demande de raccordement auprès d'Enedis.",
          "Attestation de conformité électrique (Consuel).",
          "Contrat de vente du surplus, si vous choisissez l'autoconsommation avec revente."
        ],
        paragraphs: [
          "Le devis doit préciser qui s'occupe de chaque démarche et si elle est comprise dans le prix."
        ]
      },
      {
        h2: "7. Les aides et la rentabilité annoncées",
        paragraphs: [
          "Les montants de la prime à l'autoconsommation et des tarifs d'achat sont fixés par l'État et évoluent régulièrement. Vérifiez les valeurs en vigueur à la date de votre projet, et méfiez-vous d'un calcul de rentabilité qui suppose une hausse importante et continue du prix de l'électricité."
        ]
      },
      {
        h2: "8. Faire vérifier sa toiture avant de signer",
        paragraphs: [
          "Le meilleur moyen de comparer des devis est de disposer d'une base commune : les vraies dimensions de votre toiture, ses pentes, son orientation et ses ombrages. C'est exactement ce que fournit une étude de toiture par drone, réalisée par un prestataire indépendant qui ne vend pas de panneaux."
        ]
      }
    ],
    cta: {
      text: "Obtenez un relevé indépendant de votre toiture pour comparer les devis sur une base fiable.",
      label: "Demander une étude de toiture",
      href: "/demander-un-devis?prestation=etude"
    }
  },
  {
    slug: "toiture-apres-tempete",
    path: "/guides/toiture-apres-tempete",
    title: "Toiture après une tempête : que vérifier et que faire ?",
    metaTitle: "Toiture après une tempête : que vérifier, que faire ?",
    metaDescription:
      "Tuiles ou ardoises envolées, fuite, cheminée abîmée : les bons réflexes après une tempête, la déclaration à l'assurance et l'inspection de toiture par drone.",
    excerpt: "Sécurité, vérifications depuis le sol, photos, assurance : les bons réflexes après un coup de vent.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readingMinutes: 5,
    intro:
      "En Normandie, les tempêtes d'automne et d'hiver mettent régulièrement les toitures à l'épreuve. Après un coup de vent, il faut agir vite pour limiter les dégâts, sans prendre de risques. Voici les bons réflexes.",
    sections: [
      {
        h2: "1. Ne montez pas sur le toit",
        paragraphs: [
          "Une couverture fragilisée, mouillée ou glissante est très dangereuse. Les chutes de hauteur sont l'une des premières causes d'accidents graves lors de travaux domestiques. Après une tempête, l'inspection se fait depuis le sol, depuis une fenêtre, ou par un professionnel équipé."
        ]
      },
      {
        h2: "2. Ce que vous pouvez vérifier depuis le sol",
        bullets: [
          "Tuiles ou ardoises tombées au pied de la maison, dans le jardin ou les gouttières.",
          "Zones de couverture visiblement manquantes ou déplacées.",
          "Cheminée, antenne ou faîtage de travers.",
          "Gouttières décrochées ou déformées.",
          "Dans les combles : traces d'humidité, jour visible à travers la couverture, isolant mouillé."
        ]
      },
      {
        h2: "3. Prenez des photos datées",
        paragraphs: [
          "Photographiez tout ce qui est visible : débris au sol, toiture, dégâts intérieurs. Ces photos serviront pour votre déclaration à l'assurance. Le problème, c'est que l'essentiel des dégâts d'une toiture ne se voit pas depuis le sol."
        ]
      },
      {
        h2: "4. Déclarez le sinistre rapidement",
        paragraphs: [
          "La plupart des contrats d'assurance habitation imposent de déclarer un sinistre dans un délai court, souvent cinq jours ouvrés. Vérifiez les conditions de votre contrat et conservez les factures des mesures conservatoires (bâchage, par exemple). L'expert mandaté par l'assureur reste seul à décider de la prise en charge."
        ]
      },
      {
        h2: "5. Faites bâcher si de l'eau entre",
        paragraphs: [
          "En cas d'infiltration, faites poser une bâche de protection par un couvreur ou un professionnel équipé. C'est une mesure conservatoire qui limite les dégâts intérieurs en attendant la réparation."
        ]
      },
      {
        h2: "6. Faites inspecter la toiture par drone",
        paragraphs: [
          "Le drone photographie toute la toiture de près en quelques minutes, sans échelle ni échafaudage : tuiles ou ardoises déplacées, faîtage, solins, cheminée, gouttières. Vous obtenez des photos précises et datées à transmettre à votre assurance et au couvreur, qui peut chiffrer la réparation sans monter sur le toit.",
          "Après une tempête, les couvreurs sont très sollicités : arriver avec des photos claires des dégâts permet souvent de gagner du temps."
        ]
      }
    ],
    cta: {
      text: "Faites constater l'état de votre toiture sans monter dessus, avec des photos HD à transmettre à votre assurance.",
      label: "Demander une inspection de toiture",
      href: "/demander-un-devis?prestation=inspection"
    }
  }
];

export function getGuide(slug: string): Guide {
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Guide inconnu : ${slug}`);
  return guide;
}
