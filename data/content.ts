export type ServiceSubItem = {
  title: string;
  description: string;
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
    heroImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=80",
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
      href: "/#galerie"
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
          "Nous réalisons des vues aériennes qui mettent en évidence l'implantation, les accès et l'environnement immédiat d'un bien. Cela aide vos prospects à comprendre rapidement la valeur réelle du site."
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
          "Sites industriels, bureaux, infrastructures logistiques: nous créons des contenus sobres et premium pour vos présentations commerciales, corporate et marque employeur."
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
    slug: "thermographie",
    title: "Thermographie par drone",
    shortTitle: "Thermographie",
    description: "Détection rapide des anomalies thermiques pour maintenance et performance énergétique.",
    heroImage: "/images/thermo1.jpg",
    metaTitle: "Thermographie drone en Normandie | Novera Drone",
    metaDescription:
      "Détectez les anomalies thermiques sur toitures, panneaux solaires et bâtiments en Manche, Orne et Calvados.",
    recommendedSlug: "thermographie-drone-normandie",
    primaryKeyword: "thermographie par drone Normandie",
    secondaryKeywords: [
      "inspection thermique panneaux solaires",
      "détection pont thermique drone",
      "diagnostic énergétique drone",
      "thermographie bâtiment industriel",
      "maintenance préventive thermique",
      "rapport thermographie PDF",
      "devis thermographie Manche",
      "prestataire thermographie Calvados"
    ],
    h1: "Thermographie par drone pour diagnostics rapides et fiables",
    subtitle:
      "Novera Drone inspecte vos actifs en Normandie pour détecter les anomalies invisibles, prioriser les actions de maintenance et réduire les pertes énergétiques.",
    primaryCta: "Demander un devis",
    secondaryCta: {
      label: "Télécharger un exemple de rapport",
      href: "/demander-un-devis"
    },
    whyTitle: "Pourquoi choisir la thermographie par drone ?",
    whyIntro:
      "Les défauts thermiques non identifiés provoquent des pertes de rendement, des surcoûts et des risques d'incident. Sur de grandes surfaces, les contrôles manuels sont souvent trop lents ou partiels. La thermographie drone permet une lecture homogène et rapide de zones étendues, sans intervention lourde. Les données collectées servent à hiérarchiser les priorités et à engager les bonnes actions au bon moment. Novera Drone fournit une restitution structurée, utilisable par vos équipes maintenance, exploitation ou énergie.",
    whyBenefits: [
      "Détection précoce des points chauds et anomalies thermiques critiques.",
      "Couverture rapide de grandes surfaces techniques.",
      "Réduction des accès humains en hauteur et des risques associés.",
      "Rapport clair pour prioriser les interventions et optimiser les budgets."
    ],
    subServices: [
      {
        title: "Inspection thermique de panneaux solaires",
        description:
          "Nous identifions les modules en surchauffe et les zones de perte de performance. Vous ciblez la maintenance uniquement là où elle est nécessaire."
      },
      {
        title: "Détection de ponts thermiques",
        description:
          "L'analyse met en évidence les défauts d'isolation sur bâtiments tertiaires, résidentiels ou publics. Elle facilite la planification des corrections énergétiques."
      },
      {
        title: "Thermographie de bâtiments industriels",
        description:
          "Les zones sensibles sont contrôlées sans immobilisation lourde du site. Vous gagnez en visibilité préventive sur l'état thermique des infrastructures."
      },
      {
        title: "Diagnostic énergétique préventif",
        description:
          "Nous produisons une cartographie thermique exploitable pour orienter les décisions de rénovation ou de maintenance technique."
      },
      {
        title: "Contrôle thermique de toitures",
        description:
          "Le survol thermique permet de repérer des hétérogénéités révélatrices de désordres potentiels, avant aggravation des coûts."
      }
    ],
    methodology: [
      {
        title: "Analyse du besoin",
        description:
          "Nous définissons le périmètre, les actifs à contrôler et les objectifs opérationnels de votre mission thermique."
      },
      {
        title: "Étude réglementaire et planification",
        description:
          "La mission est planifiée sur la bonne fenêtre d'acquisition, avec vérification du cadre réglementaire et des contraintes site."
      },
      {
        title: "Intervention sur site",
        description:
          "Nous réalisons les acquisitions thermiques et visuelles selon un protocole stable pour garantir la qualité de mesure."
      },
      {
        title: "Analyse et traitement des données",
        description:
          "Les anomalies sont qualifiées, hiérarchisées et contextualisées pour faciliter vos arbitrages techniques."
      },
      {
        title: "Livraison des livrables",
        description:
          "Vous recevez un rapport structuré avec visuels annotés et recommandations de priorisation."
      }
    ],
    deliverables: [
      "Cartographie thermique des zones inspectées",
      "Rapport PDF structuré avec anomalies localisées",
      "Captures thermiques annotées",
      "Corrélation image visuelle / image thermique",
      "Synthèse des priorités d'intervention",
      "Fichiers exploitables pour maintenance et assurance"
    ],
    caseStudies: [
      {
        context: "Exploitant photovoltaïque en Calvados constatant une baisse de production.",
        intervention: "Inspection thermique drone complète et identification des modules en anomalie.",
        result: "Maintenance ciblée, réduction des pertes et plan d'action priorisé."
      },
      {
        context: "Gestionnaire de patrimoine dans la Manche avant campagne de travaux énergétiques.",
        intervention: "Analyse thermique multi-bâtiments pour repérage des déperditions majeures.",
        result: "Budget orienté sur les zones les plus impactantes et calendrier de travaux optimisé."
      },
      {
        context: "Site industriel dans l'Orne avec objectif de maintenance préventive.",
        intervention: "Contrôle thermique périodique des zones critiques avant période hivernale.",
        result: "Détection anticipée d'anomalies et baisse du risque d'arrêt non planifié."
      }
    ],
    faq: [
      {
        q: "La thermographie drone remplace-t-elle une expertise complète ?",
        a: "Elle fournit un diagnostic visuel thermique fiable pour orienter les actions. Des contrôles complémentaires peuvent ensuite être ciblés."
      },
      {
        q: "À quelle fréquence faut-il inspecter ?",
        a: "Cela dépend de la criticité des installations. Une approche périodique est recommandée pour les actifs sensibles."
      },
      {
        q: "Peut-on couvrir de grandes surfaces rapidement ?",
        a: "Oui. C'est l'un des principaux avantages du drone pour les inspections thermiques."
      },
      {
        q: "La météo influence-t-elle les résultats ?",
        a: "Oui. Les créneaux d'intervention sont choisis pour garantir une acquisition thermique exploitable."
      },
      {
        q: "Le rapport est-il exploitable par une équipe maintenance ?",
        a: "Oui. La restitution est structurée pour aider la priorisation des actions correctives."
      },
      {
        q: "Comment est établi le tarif ?",
        a: "Le devis dépend de la surface, de la complexité du site et du niveau d'analyse attendu."
      }
    ],
    finalCta: {
      title: "Passez d'un doute thermique à un plan d'action concret",
      text: "Novera Drone intervient en Normandie avec une analyse claire et exploitable pour vos décisions techniques.",
      button: "Demander un devis"
    }
  },
  {
    slug: "inspection-technique",
    title: "Inspection technique par drone",
    shortTitle: "Inspection technique",
    description: "Inspection visuelle de zones complexes avec réduction des risques humains.",
    heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=80",
    metaTitle: "Inspection technique drone Normandie | Novera Drone",
    metaDescription:
      "Inspectez toitures, façades, éoliennes et ouvrages d'art sans exposition directe des équipes en Normandie.",
    recommendedSlug: "inspection-technique-drone-normandie",
    primaryKeyword: "inspection technique par drone Normandie",
    secondaryKeywords: [
      "inspection toiture drone",
      "inspection façade par drone",
      "inspection éolienne drone",
      "inspection pont drone",
      "inspection bâtiment industriel",
      "inspection parcelle agricole",
      "rapport anomalies structure",
      "devis inspection drone Calvados"
    ],
    h1: "Inspection technique par drone pour zones complexes",
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
        title: "Inspection d'éoliennes et d'ouvrages d'art",
        description:
          "Analyse visuelle ciblée des éléments structurels pour orienter les contrôles approfondis et limiter les arrêts prolongés."
      },
      {
        title: "Inspection de terrain et parcelle agricole",
        description:
          "Vue d'ensemble opérationnelle pour identifier rapidement anomalies de surface, accès ou zones à surveiller."
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
        context: "Exploitation agricole dans l'Orne avec zones complexes à contrôler.",
        intervention: "Inspection aérienne des infrastructures et accès sur parcelles étendues.",
        result: "Identification rapide des points sensibles et planification optimisée des actions."
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
  },
  {
    slug: "nettoyage-par-drone",
    title: "Nettoyage par drone",
    shortTitle: "Nettoyage par drone",
    description: "Nettoyage sécurisé de surfaces en hauteur avec déploiement rapide.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80",
    metaTitle: "Nettoyage par drone en Normandie | Novera Drone",
    metaDescription:
      "Nettoyage sécurisé de toitures, façades, vitres et panneaux solaires par drone en Manche, Orne et Calvados.",
    recommendedSlug: "nettoyage-par-drone-normandie",
    primaryKeyword: "nettoyage par drone Normandie",
    secondaryKeywords: [
      "nettoyage toiture drone",
      "nettoyage façade en hauteur",
      "nettoyage panneaux solaires",
      "nettoyage vitres hauteur drone",
      "entretien bâtiment professionnel",
      "prestataire nettoyage drone Calvados",
      "devis nettoyage drone Manche",
      "nettoyage industriel sécurisé"
    ],
    h1: "Nettoyage par drone: rapidité, sécurité et performance",
    subtitle:
      "Novera Drone intervient en Normandie pour le nettoyage de surfaces en hauteur, avec une approche sécurisée, rigoureuse et adaptée aux sites professionnels.",
    primaryCta: "Demander un devis",
    secondaryCta: {
      label: "Voir nos réalisations",
      href: "/#galerie"
    },
    whyTitle: "Pourquoi choisir le nettoyage par drone ?",
    whyIntro:
      "Le nettoyage de zones en hauteur mobilise souvent des moyens lourds, augmente les délais et complique la logistique de site. Le drone permet dans de nombreux cas une intervention plus agile, avec moins de perturbations pour l'activité. Cette approche limite l'exposition humaine aux risques d'accès et améliore la vitesse d'exécution. Elle convient particulièrement aux toitures, façades, vitrages élevés et installations photovoltaïques. Novera Drone prépare chaque mission selon vos contraintes d'exploitation et fournit une traçabilité visuelle du résultat.",
    whyBenefits: [
      "Sécurité renforcée grâce à la réduction des interventions humaines en hauteur.",
      "Déploiement rapide avec logistique allégée sur site.",
      "Perturbation limitée de l'activité pendant l'intervention.",
      "Qualité homogène avec suivi visuel avant et après prestation."
    ],
    subServices: [
      {
        title: "Nettoyage de toiture",
        description:
          "Traitement des surfaces exposées aux mousses, dépôts et salissures, afin de préserver l'état de la couverture et l'image du site."
      },
      {
        title: "Nettoyage de façade",
        description:
          "Intervention sur façades en hauteur pour restaurer l'aspect visuel d'un immeuble tertiaire, industriel ou commercial."
      },
      {
        title: "Nettoyage de panneaux solaires",
        description:
          "Nettoyage ciblé des modules pour limiter les pertes de rendement liées à l'encrassement et maintenir la performance d'exploitation."
      },
      {
        title: "Nettoyage de vitres en hauteur",
        description:
          "Solution adaptée aux zones difficiles d'accès, avec une intervention plus flexible que les méthodes traditionnelles dans de nombreux cas."
      },
      {
        title: "Entretien périodique multi-surfaces",
        description:
          "Mise en place d'un plan d'entretien régulier pour stabiliser la qualité visuelle et éviter les accumulations lourdes."
      }
    ],
    methodology: [
      {
        title: "Analyse du besoin",
        description:
          "Nous évaluons les surfaces à traiter, les contraintes d'accès et vos impératifs d'exploitation."
      },
      {
        title: "Étude réglementaire et planification",
        description:
          "L'intervention est encadrée par un dispositif sécurité conforme au contexte du site et à la réglementation applicable."
      },
      {
        title: "Intervention sur site",
        description:
          "Le nettoyage est réalisé selon un protocole défini, avec contrôle continu des conditions opérationnelles."
      },
      {
        title: "Analyse et traitement des données",
        description:
          "Nous vérifions le résultat, documentons les zones traitées et signalons les points nécessitant un complément éventuel."
      },
      {
        title: "Livraison des livrables",
        description:
          "Un compte-rendu d'intervention clair est transmis pour vos équipes maintenance et exploitation."
      }
    ],
    deliverables: [
      "Compte-rendu d'intervention PDF",
      "Photos avant/après",
      "Synthèse des zones traitées",
      "Recommandations de fréquence d'entretien",
      "Signalement des anomalies visuelles détectées",
      "Fichiers exploitables pour maintenance et suivi interne"
    ],
    caseStudies: [
      {
        context: "Immeuble tertiaire à Caen avec façade haute et accès contraint.",
        intervention: "Nettoyage drone des zones critiques avec sécurisation du périmètre.",
        result: "Remise en état visuelle rapide, avec impact limité sur les occupants."
      },
      {
        context: "Site photovoltaïque dans l'Orne avec encrassement saisonnier marqué.",
        intervention: "Nettoyage des panneaux et contrôle visuel final.",
        result: "Amélioration des conditions d'exploitation et plan d'entretien périodique défini."
      },
      {
        context: "Bâtiment professionnel dans la Manche avec vitrages en grande hauteur.",
        intervention: "Intervention sur créneau court avec protocole adapté au site.",
        result: "Résultat homogène et réduction des contraintes logistiques."
      }
    ],
    faq: [
      {
        q: "Le nettoyage par drone est-il sûr ?",
        a: "Oui, sous réserve d'une préparation technique et réglementaire avec protocole sécurité adapté au site."
      },
      {
        q: "Toutes les surfaces peuvent-elles être traitées ?",
        a: "Une étude de faisabilité est réalisée pour confirmer la compatibilité selon matériaux, hauteur et environnement."
      },
      {
        q: "Intervenez-vous sur des sites occupés ?",
        a: "Oui. L'organisation de mission est conçue pour réduire les perturbations d'activité."
      },
      {
        q: "Quels sont vos délais d'intervention ?",
        a: "Les délais dépendent de la surface et du contexte d'accès, avec une planification rapide dès validation du devis."
      },
      {
        q: "Fournissez-vous un suivi après intervention ?",
        a: "Oui, avec un compte-rendu et des visuels avant/après pour tracer le résultat."
      },
      {
        q: "Comment est défini le prix ?",
        a: "Le tarif dépend des surfaces, de la complexité d'accès, du niveau de service et de la fréquence d'intervention souhaitée."
      }
    ],
    finalCta: {
      title: "Planifiez un nettoyage en hauteur plus sûr et plus efficace",
      text: "Novera Drone vous propose une intervention réactive en Manche, Orne et Calvados avec un suivi exploitable.",
      button: "Demander un devis"
    }
  }
];

export const serviceSlugs = services.map((service) => service.slug);

export const whyChooseUs = [
  "Sécurité",
  "Rapidité d'intervention",
  "Technologie professionnelle",
  "Rapport détaillé fourni",
  "Intervention en Normandie (Manche, Orne, Calvados)"
];

export type GalleryCategory = "Photographie" | "Thermographie" | "Inspection" | "Nettoyage";

export type GalleryItem = {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Prise de vue événementielle",
    category: "Photographie",
    image: "/images/mariage.PNG"
  },
  {
    id: 2,
    title: "Suivi thermique de toiture",
    category: "Thermographie",
    image: "/images/thermo.PNG"
  },
  {
    id: 5,
    title: "Promotion immobilière",
    category: "Photographie",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: 6,
    title: "Contrôle structure industrielle",
    category: "Inspection",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80"
  }
];

export const testimonials: Array<{ name: string; quote: string }> = [];

export const faqItems = [
  {
    q: "Intervenez-vous en dehors de la Normandie ?",
    a: "Oui, selon le projet et les contraintes d'intervention, nous pouvons nous déplacer sur demande."
  }
];

export const instagramMock = ["/images/instagram/instagram-01.jpg", "/images/instagram/instagram-02.jpg", "/images/instagram/instagram-03.jpg"];
