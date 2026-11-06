/**
 * Les 3 services actifs de Novera Drone.
 * Chaque entrée alimente : sa page dédiée, les cartes de l'accueil, la page /services,
 * le sitemap et le formulaire de devis (champ `formValue`).
 */

export type ServiceKey = "etude" | "inspection" | "photo";

export type ServiceSection = {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServiceContent = {
  key: ServiceKey;
  path: string;
  /** Libellé court (menus, liens). */
  name: string;
  /** Valeur exacte de l'option dans le formulaire de devis. */
  formValue: string;
  card: { title: string; description: string; highlights: string[] };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  primaryCta: string;
  /** Vraie photo de mission uniquement. Laisser vide plutôt que d'illustrer avec une image hors sujet. */
  image?: { src: string; alt: string; width: number; height: number };
  /** Exemple de rapport PDF anonymisé (dans /public). Étude solaire uniquement. */
  reportPdf?: string;
  sections: ServiceSection[];
  steps: { title: string; text: string }[];
  stepsTitle: string;
  faq: { q: string; a: string }[];
  finalCta: { title: string; text: string };
};

export const activeServicePages: ServiceContent[] = [
  {
    key: "etude",
    path: "/etude-toiture-solaire-drone",
    name: "Étude de toiture solaire",
    formValue: "Étude de toiture solaire",
    card: {
      title: "Étude de toiture solaire par drone",
      description:
        "Relevé de toiture, calepinage des panneaux et estimation de production PVGIS. Rapport PDF sous 48 h.",
      highlights: ["Surfaces, pentes et orientation", "Obstacles et ombrages", "Calepinage des panneaux", "Estimation PVGIS"]
    },
    metaTitle: "Étude de toiture solaire par drone en Normandie | Novera Drone",
    metaDescription:
      "Relevé de toiture par drone, calepinage et estimation de production PVGIS. Rapport PDF sous 48 h pour installateurs et particuliers dans l'Orne, le Calvados et la Manche.",
    h1: "Étude de toiture solaire par drone en Normandie",
    lead:
      "Avant de poser des panneaux, il faut connaître la toiture. En un vol d'environ 15 minutes, Novera Drone relève les surfaces, les pentes, l'orientation et les obstacles, puis vous remet sous 48 h un rapport PDF avec un calepinage et une estimation de production.",
    primaryCta: "Demander une étude de toiture",
    // TODO(Enes) : déposer un exemple de rapport anonymisé dans /public/rapports/ puis renseigner le chemin.
    reportPdf: "",
    sections: [
      {
        h2: "Une étude solaire pour les installateurs et les particuliers",
        paragraphs: [
          "Installateurs photovoltaïques : vous obtenez une visite technique complète sans monter sur le toit ni immobiliser un technicien. Le rapport vous donne les cotes utiles pour chiffrer, des photos à montrer à votre client et une implantation des panneaux déjà proposée. Vos devis partent plus vite et reposent sur des mesures prises sur place, pas sur une image satellite parfois ancienne.",
          "Particuliers : vous voulez un avis indépendant avant de signer ? L'étude vous permet de vérifier qu'un devis est cohérent avec votre toiture : nombre de panneaux réellement implantables, ombrages oubliés, production annoncée réaliste ou non. Novera Drone ne vend pas de panneaux : le rapport décrit votre toiture telle qu'elle est.",
          "Agriculteurs, artisans et entreprises : les grandes toitures de hangars, d'ateliers ou de bâtiments agricoles sont souvent les plus intéressantes pour le solaire, mais aussi les plus difficiles d'accès. Le drone les relève en toute sécurité, même sur une couverture fragile."
        ]
      },
      {
        h2: "Ce que contient le rapport d'étude de toiture",
        bullets: [
          "Photos aériennes haute définition de la toiture et de son environnement immédiat.",
          "Surfaces exploitables par pan de toiture, avec pente et orientation.",
          "Relevé des obstacles et des sources d'ombrage : cheminées, fenêtres de toit, antennes, arbres, bâtiments voisins.",
          "Calepinage : proposition d'implantation des panneaux, nombre de modules et puissance crête possible.",
          "Estimation de la production annuelle et mois par mois, calculée avec PVGIS, l'outil de la Commission européenne.",
          "Remarques sur l'état apparent de la couverture, à prendre en compte avant la pose."
        ]
      },
      {
        h2: "Pourquoi relever une toiture par drone plutôt qu'à l'échelle ?",
        paragraphs: [
          "Le drone évite l'échelle, le harnais et l'échafaudage : personne ne monte sur le toit, ce qui supprime le risque de chute et le risque d'abîmer des tuiles ou des ardoises. Il donne aussi une vue d'ensemble impossible à obtenir depuis le sol, avec le détail des obstacles qui créent de l'ombre une partie de la journée.",
          "Comparé aux vues satellites, le drone apporte des images récentes et nettes, prises le jour de l'étude. Une cheminée ajoutée, un arbre qui a grandi ou une extension récente sont bien visibles.",
          "L'analyse est réalisée par Enes, fondateur de Novera Drone, télépilote et diplômé d'un BUT MT2E (métiers de la transition et de l'efficacité énergétiques), une formation qui couvre la thermique du bâtiment et le photovoltaïque. Le rapport n'est donc pas seulement une série de photos : c'est une lecture technique de votre toiture."
        ]
      },
      {
        h2: "Étude de toiture dans l'Orne, le Calvados et la Manche",
        paragraphs: [
          "Novera Drone intervient autour de Flers, Vire, Argentan, Alençon, Saint-Lô, Avranches et Caen, en maison individuelle comme sur des bâtiments professionnels. Toitures en ardoise, en tuiles, en bac acier ou en fibrociment : chaque type de couverture est relevé avec la même méthode."
        ]
      }
    ],
    stepsTitle: "Comment se déroule une étude de toiture solaire",
    steps: [
      { title: "Votre demande", text: "Vous indiquez l'adresse du bâtiment et votre projet (autoconsommation, revente, vérification d'un devis)." },
      { title: "Préparation du vol", text: "Vérification de la zone de vol, de la météo et des autorisations éventuelles, puis choix d'un créneau." },
      { title: "Vol d'environ 15 minutes", text: "Le drone photographie la toiture sous tous les angles. Personne ne monte sur le toit." },
      { title: "Analyse et calepinage", text: "Mesure des pans, relevé des obstacles, implantation des panneaux et simulation PVGIS." },
      { title: "Rapport PDF sous 48 h", text: "Vous recevez un rapport clair, prêt à être partagé avec votre installateur ou votre client." }
    ],
    faq: [
      {
        q: "Combien de temps dure une étude de toiture par drone ?",
        a: "Le vol dure environ 15 minutes pour une maison individuelle. Le rapport PDF complet est envoyé sous 48 heures après le vol."
      },
      {
        q: "Faut-il monter sur le toit ou installer un échafaudage ?",
        a: "Non. Tout le relevé est fait depuis les airs, sans échelle ni échafaudage. C'est plus sûr et cela ne risque pas d'abîmer la couverture."
      },
      {
        q: "L'estimation de production est-elle fiable ?",
        a: "Elle est calculée avec PVGIS, l'outil de la Commission européenne qui s'appuie sur des données d'ensoleillement mesurées. Les hypothèses (orientation, inclinaison, pertes) sont indiquées dans le rapport. C'est une estimation sérieuse, pas une garantie : la production réelle dépend aussi du matériel posé et de la météo de chaque année."
      },
      {
        q: "Je suis particulier : pourquoi ne pas laisser l'installateur faire l'étude ?",
        a: "Vous pouvez, bien sûr. L'étude Novera Drone vous apporte un avis indépendant : elle permet de comparer plusieurs devis sur une base commune et de vérifier que le nombre de panneaux et la production annoncés correspondent à votre toiture."
      },
      {
        q: "Peut-on faire voler un drone partout ?",
        a: "Non : la réglementation encadre les vols près des aérodromes, en ville et au-dessus des personnes. Chaque adresse est vérifiée avant la mission et les autorisations nécessaires sont demandées. Si un vol n'est pas possible, vous êtes prévenu avant toute intervention."
      }
    ],
    finalCta: {
      title: "Faites étudier votre toiture avant d'installer des panneaux",
      text: "Indiquez l'adresse du bâtiment et votre projet : vous recevez une proposition rapidement, puis votre rapport sous 48 h après le vol."
    }
  },
  {
    key: "inspection",
    path: "/inspection-toiture-drone",
    name: "Inspection de toiture",
    formValue: "Inspection de toiture ou de façade",
    card: {
      title: "Inspection de toiture et de façade par drone",
      description:
        "Inspection visuelle détaillée, sans échafaudage ni montée sur le toit : après tempête, avant achat, pour les couvreurs.",
      highlights: ["Après tempête ou coup de vent", "Avant l'achat d'un bien", "Devis de couvreur", "Photos HD annotées"]
    },
    metaTitle: "Inspection de toiture et de façade par drone | Novera Drone",
    metaDescription:
      "Inspection visuelle de toiture et de façade par drone après tempête, avant achat ou pour les couvreurs. Photos HD annotées, sans échafaudage, en Normandie.",
    h1: "Inspection de toiture et de façade par drone",
    lead:
      "Tuiles déplacées après un coup de vent, doute avant d'acheter une maison, devis de couvreur à préparer : le drone photographie votre toiture et vos façades de près, sans échelle ni échafaudage, et vous livre des photos annotées des points à surveiller.",
    primaryCta: "Demander une inspection",
    sections: [
      {
        h2: "Quand faire inspecter sa toiture par drone ?",
        bullets: [
          "Après une tempête ou un fort coup de vent : pour savoir rapidement si des tuiles ou des ardoises ont bougé, et disposer de photos datées pour votre assurance.",
          "Avant d'acheter un bien : pour connaître l'état réel de la couverture avant de signer, et anticiper d'éventuels travaux dans la négociation.",
          "En cas d'infiltration ou de tache au plafond : pour repérer les zones suspectes avant de faire intervenir un artisan.",
          "Pour l'entretien courant : un contrôle régulier permet de traiter un petit défaut avant qu'il ne devienne une fuite.",
          "Pendant ou après des travaux : pour garder une trace de l'état de la toiture et du travail réalisé."
        ]
      },
      {
        h2: "Ce que l'inspection visuelle par drone permet de voir",
        bullets: [
          "Tuiles ou ardoises déplacées, cassées ou manquantes.",
          "Faîtage, rives, arêtiers et solins : fissures, décollements, mortier abîmé.",
          "Cheminées, sorties de toit et fenêtres de toit.",
          "Gouttières et chéneaux encombrés ou déformés.",
          "Mousses et lichens qui retiennent l'humidité.",
          "Façades : fissures, éclats, enduit qui se décolle, joints dégradés, encadrements de fenêtres en hauteur.",
          "Panneaux solaires déjà installés : casse visible, encrassement, fixations apparentes."
        ]
      },
      {
        h2: "Une inspection de toiture utile aux couvreurs et aux artisans",
        paragraphs: [
          "Pour un couvreur, un façadier ou un charpentier, le drone permet de préparer un devis sans monter sur chaque toit. Les photos haute définition montrent précisément les zones à reprendre et servent à expliquer les travaux au client. Elles peuvent aussi documenter l'état avant et après chantier.",
          "Les syndics, gestionnaires de biens et entreprises utilisent la même méthode pour contrôler plusieurs bâtiments en peu de temps, sans nacelle ni interruption d'activité."
        ]
      },
      {
        h2: "Ce que l'inspection n'est pas",
        paragraphs: [
          "Il s'agit d'une inspection visuelle, réalisée avec une caméra classique haute définition. Elle ne remplace pas une expertise d'assurance, un diagnostic de structure ni un contrôle par caméra thermique. Elle vous donne une image précise et objective de l'état apparent de la toiture et des façades, pour décider de la suite en connaissance de cause."
        ]
      },
      {
        h2: "Inspection de toiture dans l'Orne, le Calvados et la Manche",
        paragraphs: [
          "Novera Drone intervient chez les particuliers et les professionnels autour de Flers, Vire, Argentan, Alençon, Saint-Lô, Avranches et Caen. Maisons en ardoise du bocage, longères, bâtiments de la reconstruction, hangars agricoles ou immeubles : chaque mission est préparée en fonction du bâtiment et de son environnement."
        ]
      }
    ],
    stepsTitle: "Comment se déroule une inspection de toiture par drone",
    steps: [
      { title: "Votre demande", text: "Vous décrivez le bâtiment et ce qui vous inquiète : tempête, fuite, achat, devis de travaux." },
      { title: "Préparation", text: "Vérification de la zone de vol et des autorisations, choix d'un créneau météo favorable." },
      { title: "Vol d'inspection", text: "Le drone photographie la toiture et les façades de près, sous plusieurs angles." },
      { title: "Tri et annotation", text: "Les photos utiles sont sélectionnées et les points relevés sont repérés." },
      { title: "Livraison", text: "Vous recevez les photos HD et un rapport photo annoté, facile à transmettre à un artisan ou à votre assurance." }
    ],
    faq: [
      {
        q: "Les photos peuvent-elles servir pour mon assurance ?",
        a: "Oui, les photos datées sont un bon support pour une déclaration de sinistre. L'expert mandaté par votre assurance reste toutefois seul à décider de la prise en charge."
      },
      {
        q: "Le drone peut-il détecter une fuite ?",
        a: "Pas directement : l'inspection est visuelle. En revanche, elle permet souvent de repérer la cause probable d'une infiltration, comme une tuile déplacée, un solin fissuré ou une gouttière bouchée."
      },
      {
        q: "Combien de temps dure une inspection ?",
        a: "Pour une maison individuelle, le vol prend généralement moins d'une demi-heure. La durée dépend de la taille du bâtiment et du nombre de façades à inspecter."
      },
      {
        q: "Dois-je être présent pendant le vol ?",
        a: "Un accès au terrain est nécessaire pour décoller en sécurité. Les modalités sont convenues ensemble à la prise de rendez-vous."
      },
      {
        q: "Intervenez-vous pour les copropriétés et les entreprises ?",
        a: "Oui. Le drone est particulièrement adapté aux grands bâtiments, aux immeubles et aux sites à plusieurs toitures, sans nacelle ni interruption d'activité."
      }
    ],
    finalCta: {
      title: "Faites contrôler votre toiture sans monter sur le toit",
      text: "Décrivez votre bâtiment et votre besoin : vous recevez une proposition claire et un créneau d'intervention."
    }
  },
  {
    key: "photo",
    path: "/photo-video-aerienne",
    name: "Photo et vidéo aérienne",
    formValue: "Photo et vidéo aérienne (immobilier, événement, communication)",
    card: {
      title: "Photo et vidéo aérienne par drone",
      description: "Images aériennes pour l'immobilier, les événements sportifs et la communication des entreprises.",
      highlights: ["Immobilier et visite virtuelle", "Trails, triathlons, événements", "Communication et réseaux sociaux", "Vidéo 4K et FPV"]
    },
    metaTitle: "Photo et vidéo aérienne par drone en Normandie | Novera Drone",
    metaDescription:
      "Photos et vidéos aériennes par drone pour l'immobilier, les événements sportifs et la communication dans l'Orne, le Calvados et la Manche. Formats web et réseaux sociaux.",
    h1: "Photo et vidéo aérienne par drone en Normandie",
    lead:
      "Montrer un bien dans son environnement, filmer une course au plus près des coureurs, donner de l'ampleur à la vidéo de votre entreprise : Novera Drone réalise des photos et vidéos aériennes prêtes à publier, dans l'Orne, le Calvados et la Manche.",
    primaryCta: "Demander un devis photo ou vidéo",
    image: {
      src: "/images/aerien-foret-normandie.webp",
      alt: "Photo aérienne par drone d'une forêt de conifères en Normandie",
      width: 675,
      height: 1200
    },
    sections: [
      {
        h2: "Photo aérienne immobilière",
        paragraphs: [
          "Pour une agence immobilière, un vendeur particulier, un gîte ou un domaine, la vue aérienne montre ce que les photos au sol ne disent pas : la taille du terrain, l'implantation de la maison, les dépendances, l'environnement et les accès. Une annonce avec des vues drone se distingue immédiatement.",
          "Les prises de vues peuvent être complétées par une visite virtuelle 3D de l'intérieur du bien, pour permettre aux acheteurs de visiter à distance."
        ]
      },
      {
        h2: "Vidéo drone d'événements sportifs",
        paragraphs: [
          "Trails, courses nature, triathlons, cyclisme : le drone montre le parcours, les paysages traversés et l'ambiance de l'événement. Le DJI Avata 2, un drone FPV, permet en plus des plans immersifs au plus près de l'action, dans le respect des règles de sécurité vis-à-vis du public.",
          "Chaque tournage est préparé avec l'organisateur : zones de décollage, survol du parcours, autorisations. Vous recevez des vidéos montées, prêtes pour vos réseaux sociaux et la promotion de l'édition suivante."
        ]
      },
      {
        h2: "Images aériennes pour la communication",
        paragraphs: [
          "Entreprises, commerces, collectivités, offices de tourisme : une vidéo aérienne présente un site, un savoir-faire ou un territoire de façon claire et valorisante. Les formats sont adaptés à vos usages : vidéo horizontale pour votre site, format vertical pour Instagram et TikTok, photos pour vos brochures.",
          "Pour un mariage ou un événement privé, quelques plans aériens du lieu et de la sortie de cérémonie complètent le travail de votre photographe."
        ]
      },
      {
        h2: "Le matériel utilisé",
        bullets: [
          "DJI Air 3S et DJI Air 3 : photos et vidéos 4K de haute qualité, double caméra.",
          "DJI Avata 2 : drone FPV pour des plans immersifs et dynamiques.",
          "DJI Mini 2 : drone léger pour les sites sensibles ou contraints.",
          "Caméras 360° pour des contenus immersifs."
        ]
      },
      {
        h2: "Prises de vues aériennes dans l'Orne, le Calvados et la Manche",
        paragraphs: [
          "Novera Drone tourne autour de Flers, Vire, Argentan, Alençon, Saint-Lô, Avranches et Caen, dans le bocage, sur la côte comme en ville, avec une préparation réglementaire adaptée à chaque lieu."
        ]
      }
    ],
    stepsTitle: "Comment se déroule un tournage par drone",
    steps: [
      { title: "Votre projet", text: "Vous expliquez ce que vous voulez montrer, où, quand et sur quels supports." },
      { title: "Préparation", text: "Repérage, vérification de la zone de vol, autorisations et plan de tournage." },
      { title: "Tournage", text: "Prises de vues aériennes sur place, en photo et en vidéo." },
      { title: "Montage et retouche", text: "Sélection, étalonnage et montage selon vos formats." },
      { title: "Livraison", text: "Fichiers prêts pour le web, les réseaux sociaux et l'impression." }
    ],
    faq: [
      {
        q: "Faut-il une autorisation pour filmer par drone ?",
        a: "Cela dépend du lieu : la proximité d'un aérodrome, une zone urbaine ou la présence de public imposent des démarches. Elles sont vérifiées et effectuées avant chaque mission."
      },
      {
        q: "Peut-on filmer un événement avec du public ?",
        a: "Oui, mais le survol des personnes est très encadré. Le plan de vol est préparé avec l'organisateur pour filmer l'événement sans survoler le public."
      },
      {
        q: "Que se passe-t-il s'il pleut ou s'il y a trop de vent ?",
        a: "Le vol est reporté à un créneau favorable, pour garantir la sécurité et la qualité des images. Pour un événement à date fixe, les conditions sont évaluées le jour même."
      },
      {
        q: "Quels sont les délais de livraison ?",
        a: "Les photos sont généralement livrées sous quelques jours. Pour une vidéo montée, le délai dépend de la durée et du montage demandé ; il est précisé dans le devis."
      },
      {
        q: "Dans quels formats recevrai-je les images ?",
        a: "Photos haute définition et vidéos 4K, en format horizontal ou vertical selon vos besoins, optimisées pour le web, les réseaux sociaux ou l'impression."
      }
    ],
    finalCta: {
      title: "Donnez de la hauteur à vos images",
      text: "Présentez votre projet : lieu, date et usage des images. Vous recevez une proposition adaptée."
    }
  }
];

export function getServicePage(key: ServiceKey): ServiceContent {
  const service = activeServicePages.find((item) => item.key === key);
  if (!service) throw new Error(`Service inconnu : ${key}`);
  return service;
}
