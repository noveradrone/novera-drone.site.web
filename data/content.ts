export type ServiceSubItem = {
  title: string;
  description: string;
  href?: string;
};

export type ServiceCaseStudy = {
  context: string;
  intervention: string;
  result: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type GoogleReview = {
  name: string;
  quote: string;
  rating?: 5 | 4 | 3 | 2 | 1;
  source?: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  recommendedSlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: {
    label: string;
    href: string;
  };
  whyTitle: string;
  whyIntro: string;
  whyBenefits: string[];
  subServices: ServiceSubItem[];
  methodology: { title: string; description: string }[];
  deliverables: string[];
  caseStudies: ServiceCaseStudy[];
  faq: ServiceFaq[];
  finalCta: {
    title: string;
    text: string;
    button: string;
  };
};

export const services: ServicePageContent[] = [
  {
    slug: "photographie-aerienne",
    title: "Photographie aérienne",
    shortTitle: "Photographie aérienne",
    description: "Images et vidéos immersives pour valoriser vos actifs, événements et territoires.",
    heroImage: "/images/instagram/instagram-02.jpg",
    metaTitle: "Photographie aérienne pro en Normandie | Novera Drone",
    metaDescription:
      "Valorisez vos biens, événements et territoires avec des images aériennes premium en Manche, Orne et Calvados.",
    recommendedSlug: "photographie-aerienne-drone-normandie",
    primaryKeyword: "photographie aérienne professionnelle Normandie",
    secondaryKeywords: [
      "prise de vue drone Manche",
      "vidéo aérienne Calvados",
      "drone immobilier Orne",
      "captation drone événement Normandie",
      "photos drone tourisme",
      "prestataire drone entreprise",
      "devis photographie aérienne",
      "vidéo 4K drone professionnel"
    ],
    h1: "Photographie aérienne professionnelle en Normandie",
    subtitle:
      "Novera Drone réalise des photos et vidéos aériennes à forte valeur visuelle pour l'immobilier, l'événementiel, le tourisme et les entreprises en Manche, Orne et Calvados.",
    primaryCta: "Demander un devis",
    secondaryCta: {
      label: "Voir nos réalisations",
      href: "/realisations/evenement"
    },
    whyTitle: "Pourquoi choisir la photographie aérienne ?",
    whyIntro:
      "Une prise de vue au sol ne suffit pas toujours à montrer les volumes, l'environnement, les accès et la qualité d'un site. Le drone permet d'obtenir des angles stratégiques qui renforcent la lisibilité d'un projet et la qualité perçue de vos supports de communication. Pour une agence, une collectivité ou une entreprise, le bénéfice est direct: plus de clarté dans le message, plus d'impact visuel et une meilleure qualification des contacts entrants. Novera Drone combine cadrage, pilotage réglementé et post-production propre pour livrer des contenus exploitables rapidement.",
    whyBenefits: [
      "Valorisation commerciale plus forte de vos biens, événements ou infrastructures.",
      "Production visuelle rapide, compatible avec vos impératifs de publication.",
      "Intervention sécurisée et conforme au cadre réglementaire en vigueur.",
      "Livrables multi-formats réutilisables pour web, print et présentations internes."
    ],
    subServices: [
      {
        title: "Photographie drone pour l'immobilier",
        description:
          "Nous réalisons des vues aériennes qui mettent en évidence l'implantation, les accès et l'environnement immédiat d'un bien. Cela aide vos prospects à comprendre rapidement la valeur réelle du site.",
        href: "/realisations/immobilier"
      },
      {
        title: "Vidéo aérienne pour événements",
        description:
          "Pour un salon, un événement institutionnel ou une compétition, nous capturons les plans qui restituent l'échelle et la dynamique. Les contenus sont pensés pour une diffusion immédiate sur vos canaux."
      },
      {
        title: "Promotion touristique et territoriale",
        description:
          "Nous produisons des images qui valorisent paysages, équipements et parcours, afin de renforcer l'attractivité d'une destination. Les visuels sont conçus pour campagnes digitales et supports institutionnels."
      },
      {
        title: "Communication d'entreprise",
        description:
          "Sites industriels, bureaux, plateformes logistiques : des contenus sobres et haut de gamme pour valoriser votre image professionnelle."
      },
      {
        title: "Mariage et événements privés",
        description:
          "Quelques plans aériens du lieu, de la sortie de cérémonie ou de la photo de groupe pour compléter le travail de votre photographe."
      },
      {
        title: "Captation événement sportif",
        description:
          "Les plans aériens montrent le tracé, l'affluence et l'intensité de l'événement. Vous disposez ainsi d'une base visuelle solide pour la communication post-événement."
      }
    ],
    methodology: [
      {
        title: "Analyse du besoin",
        description:
          "Nous cadrons vos objectifs de communication, vos contraintes terrain et les formats attendus pour éviter les prises de vue inutiles."
      },
      {
        title: "Étude réglementaire et planification",
        description:
          "Chaque mission fait l'objet d'une vérification de faisabilité, des conditions de sécurité et des autorisations applicables."
      },
      {
        title: "Intervention sur site",
        description:
          "La captation suit un plan de vol défini en amont, avec pilotage précis et gestion active des aléas météo."
      },
      {
        title: "Analyse et traitement des données",
        description:
          "Nous réalisons le tri, la retouche et l'assemblage des contenus pour produire un rendu cohérent avec votre image de marque."
      },
      {
        title: "Livraison des livrables",
        description:
          "Les fichiers sont remis dans les formats demandés, avec une nomenclature claire pour intégration immédiate dans vos outils."
      }
    ],
    deliverables: [
      "Photos HD et 4K optimisées web et print",
      "Vidéos stabilisées en 4K (formats horizontal et vertical)",
      "Sélection d'images retouchées pour diffusion rapide",
      "Exports adaptés site web, réseaux sociaux et présentations",
      "Fichiers exploitables pour dossiers commerciaux et institutionnels"
    ],
    caseStudies: [
      {
        context: "Agence immobilière à Caen avec programme neuf peu lisible en photos classiques.",
        intervention:
          "Captation drone des volumes, accès et environnement, puis livraison d'un pack photo + vidéo courte.",
        result:
          "Annonces plus claires, meilleure compréhension du projet et contacts entrants mieux qualifiés."
      },
      {
        context: "Collectivité dans la Manche souhaitant renforcer la promotion touristique locale.",
        intervention:
          "Tournage aérien sur plusieurs créneaux pour valoriser littoral, patrimoine et zones d'activité.",
        result:
          "Création d'une bibliothèque visuelle réutilisable pour campagnes web et supports print."
      },
      {
        context: "Entreprise industrielle dans l'Orne préparant un dossier investisseurs.",
        intervention:
          "Prises de vue aériennes du site et des flux logistiques pour illustrer les capacités opérationnelles.",
        result: "Présentation plus crédible et message technique mieux compris par les décideurs."
      }
    ],
    faq: [
      {
        q: "Faut-il des autorisations pour filmer par drone ?",
        a: "Oui. Chaque mission est préparée en fonction de la zone, du scénario de vol et des obligations réglementaires applicables."
      },
      {
        q: "Intervenez-vous en zone urbaine ?",
        a: "Oui, lorsque les conditions de sécurité et de conformité sont réunies après étude de faisabilité."
      },
      {
        q: "Quels sont vos délais de livraison ?",
        a: "Selon le volume de captation et la post-production, les livrables sont généralement transmis sous quelques jours ouvrés."
      },
      {
        q: "Que se passe-t-il si la météo est défavorable ?",
        a: "Nous replanifions l'intervention sur une fenêtre adaptée pour garantir sécurité et qualité d'image."
      },
      {
        q: "Les fichiers sont-ils adaptés au web et à l'impression ?",
        a: "Oui. Nous livrons des formats optimisés selon vos usages: site, réseaux sociaux, print ou présentation commerciale."
      },
      {
        q: "Comment est calculé le devis ?",
        a: "Le devis dépend du temps de captation, de la complexité du site, des livrables attendus et du niveau de post-production."
      }
    ],
    finalCta: {
      title: "Valorisez vos projets avec une image aérienne qui fait la différence",
      text: "Recevez une proposition claire et adaptée à vos objectifs. Novera Drone intervient rapidement en Normandie.",
      button: "Demander un devis"
    }
  },
  {
    slug: "inspection-technique",
    title: "Inspection technique par drone",
    shortTitle: "Inspection technique",
    description: "Inspection visuelle de zones complexes avec réduction des risques humains.",
    heroImage: "/images/instagram/instagram-03.jpg",
    metaTitle: "Inspection technique drone Normandie | Novera Drone",
    metaDescription:
      "Inspection visuelle de toitures et façades par drone dans l'Orne, le Calvados et la Manche : sans échafaudage, rapport photo détaillé.",
    recommendedSlug: "inspection-technique-drone-normandie",
    primaryKeyword: "inspection technique par drone Normandie",
    secondaryKeywords: [
      "inspection toiture drone",
      "inspection façade par drone",
      "inspection toiture après tempête",
      "inspection bâtiment industriel",
      "rapport anomalies structure",
      "devis inspection drone Calvados"
    ],
    h1: "Inspection de toiture et de façade par drone en Normandie",
    subtitle:
      "Novera Drone sécurise l'inspection de vos infrastructures en Manche, Orne et Calvados avec des prises de vue précises et des constats exploitables.",
    primaryCta: "Demander un devis",
    secondaryCta: {
      label: "Être rappelé",
      href: "/demander-un-devis"
    },
    whyTitle: "Pourquoi choisir l'inspection technique par drone ?",
    whyIntro:
      "L'inspection d'ouvrages en hauteur mobilise souvent des moyens lourds et expose les équipes à des environnements contraints. Le drone offre une alternative plus sûre et plus rapide pour observer les zones critiques sans perturber fortement l'exploitation. Cette méthode améliore la traçabilité visuelle des constats et facilite la priorisation des interventions. Pour les industriels, gestionnaires immobiliers ou collectivités, c'est un outil de pilotage concret pour la maintenance préventive et la maîtrise des risques.",
    whyBenefits: [
      "Réduction de l'exposition des équipes aux travaux en hauteur.",
      "Collecte rapide des données visuelles sur zones difficiles d'accès.",
      "Documentation fiable pour suivre l'évolution d'un ouvrage dans le temps.",
      "Rapport d'anomalies structuré pour décider et planifier efficacement."
    ],
    subServices: [
      {
        title: "Inspection de toiture",
        description:
          "Contrôle des éléments de couverture, points singuliers et zones d'usure pour déclencher une maintenance au bon moment."
      },
      {
        title: "Inspection de façade",
        description:
          "Repérage visuel des fissures, altérations et désordres apparents, utile pour préparer diagnostics et travaux."
      },
      {
        title: "Inspection de bâtiment industriel",
        description:
          "Observation des parties hautes et structures techniques sans déployer de moyens d'accès lourds sur l'ensemble du site."
      },
      {
        title: "Inspection de structures difficiles d'accès",
        description:
          "Intervention adaptée aux environnements contraints où la sécurité et la rapidité d'observation sont prioritaires."
      }
    ],
    methodology: [
      {
        title: "Analyse du besoin",
        description:
          "Nous identifions les zones critiques, le niveau de détail attendu et les contraintes de fonctionnement de votre site."
      },
      {
        title: "Étude réglementaire et planification",
        description:
          "Le scénario de vol est préparé pour respecter exigences réglementaires, sécurité périmétrique et contraintes locales."
      },
      {
        title: "Intervention sur site",
        description:
          "La captation suit une check-list technique pour garantir une couverture complète des points à inspecter."
      },
      {
        title: "Analyse et traitement des données",
        description:
          "Les images sont triées, annotées et regroupées par niveau de criticité pour faciliter la prise de décision."
      },
      {
        title: "Livraison des livrables",
        description:
          "Nous remettons un rapport visuel exploitable pour maintenance, assurance ou préparation d'expertise complémentaire."
      }
    ],
    deliverables: [
      "Photos HD des zones inspectées",
      "Rapport PDF avec localisation visuelle des constats",
      "Liste d'anomalies par niveau de priorité",
      "Recommandations techniques de premier niveau",
      "Historique photo pour suivi comparatif",
      "Fichiers utilisables pour assurance et maintenance"
    ],
    caseStudies: [
      {
        context: "Bâtiment logistique dans la Manche avec suspicion de désordres en toiture.",
        intervention: "Inspection drone des zones hautes et points de jonction de couverture.",
        result: "Constats hiérarchisés et plan de maintenance déclenché sans délai."
      },
      {
        context: "Gestionnaire immobilier en Calvados sur un parc de façades vieillissantes.",
        intervention: "Relevé visuel complet avec annotation des zones dégradées.",
        result: "Phasage des travaux simplifié et chiffrage technique mieux préparé."
      },
      {
        context: "Maison individuelle dans l'Orne après un coup de vent, tuiles suspectées déplacées.",
        intervention: "Survol de la couverture, des faîtages et de la cheminée sans monter sur le toit.",
        result: "Photos précises des dégâts à transmettre au couvreur et à l'assurance."
      }
    ],
    faq: [
      {
        q: "Le drone est-il adapté aux infrastructures sensibles ?",
        a: "Oui, sous réserve d'une préparation réglementaire et d'un protocole de sécurité strict."
      },
      {
        q: "Peut-on limiter l'arrêt d'activité pendant l'inspection ?",
        a: "Oui. L'intervention drone est généralement plus légère et moins intrusive que des moyens traditionnels."
      },
      {
        q: "Le rapport permet-il de planifier les travaux ?",
        a: "Oui. Il sert de base de priorisation et facilite la coordination avec les prestataires techniques."
      },
      {
        q: "Intervenez-vous sur plusieurs sites ?",
        a: "Oui. Nous organisons des campagnes multi-sites selon vos priorités opérationnelles."
      },
      {
        q: "Que se passe-t-il en cas de météo défavorable ?",
        a: "Nous replanifions sur un créneau adapté pour conserver le niveau de sécurité et de qualité attendu."
      },
      {
        q: "Comment est établi le devis ?",
        a: "Le devis est basé sur le type d'ouvrage, la complexité d'accès, le volume de captation et la restitution demandée."
      }
    ],
    finalCta: {
      title: "Sécurisez vos inspections et gagnez en efficacité opérationnelle",
      text: "Confiez vos contrôles techniques à Novera Drone pour disposer d'un état visuel précis et exploitable en Normandie.",
      button: "Demander un devis"
    }
  }
];

export const serviceSlugs = services.map((service) => service.slug);

/** Services en préparation (pas encore de matériel) : affichés uniquement dans la section « Prochainement ». */
export const upcomingServices = [
  {
    title: "Thermographie par drone",
    description: "Détection de déperditions thermiques et contrôle de panneaux solaires par caméra thermique."
  },
  {
    title: "Nettoyage par drone",
    description: "Nettoyage de toitures, façades et panneaux solaires sans nacelle."
  }
];

export const whyChooseUs = [
  "Sécurité",
  "Rapidité d'intervention",
  "Technologie professionnelle",
  "Rapport détaillé fourni",
  "Intervention en Normandie (Manche, Orne, Calvados)"
];

export type GalleryCategory = "Photographie" | "Inspection";

export type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  href?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Mariage",
    category: "Photographie",
    alt: "Photo de mariage devant un château",
    image: "/images/mariage.PNG"
  },
  {
    id: 2,
    title: "Événement sportif",
    category: "Photographie",
    alt: "Coureur sur un trail, captation vidéo d'événement sportif en Normandie",
    image: "/images/sport.PNG",
    href: "/realisations/evenement"
  },
  {
    id: 5,
    title: "Promotion immobilière",
    category: "Photographie",
    alt: "Visite virtuelle 3D d'un local commercial, réalisation immobilière Novera Drone",
    image: "/images/local3.jpg",
    href: "/realisations/immobilier"
  }
];

export const googleReviewsLink = "";

export const testimonials: GoogleReview[] = [
  {
    name: "Maxence",
    rating: 5,
    source: "Google",
    quote:
      "Excellente expérience ! Je suis très satisfait du résultat final, qui est parfaitement conforme au devis initial. Un travail de qualité respectant les engagements pris, je recommande."
  },
  {
    name: "Eliot FICHET",
    rating: 5,
    source: "Google",
    quote:
      "Enes était présent sur la premier édition de La Veroise le 12 avril dernier. Il a mené un travail exemplaire digne d’un professionnel avec des images aériennes de notre course d’une grande qualité."
  }
];

export const faqItems = [
  {
    q: "Intervenez-vous en dehors de la Normandie ?",
    a: "Oui, selon le projet et les contraintes d'intervention, nous pouvons nous déplacer sur demande."
  }
];

export const instagramMock = ["/images/instagram/instagram-01.jpg", "/images/instagram/instagram-02.jpg", "/images/instagram/instagram-03.jpg"];
