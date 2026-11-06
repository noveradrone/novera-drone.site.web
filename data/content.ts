export type GoogleReview = {
  name: string;
  quote: string;
  rating?: 5 | 4 | 3 | 2 | 1;
  source?: string;
};

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
  {
    title: "Formé au solaire",
    text: "Diplômé BUT MT2E (thermique, photovoltaïque)."
  },
  {
    title: "Rapport sous 48 h",
    text: "Vol de 15 min, rapport PDF sous 48 h."
  },
  {
    title: "Sans échafaudage",
    text: "Personne ne monte sur le toit."
  },
  {
    title: "Local",
    text: "Orne, Calvados et Manche."
  }
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
    image: "/images/mariage.webp"
  },
  {
    id: 2,
    title: "Événement sportif",
    category: "Photographie",
    alt: "Coureur sur un trail, captation vidéo d'événement sportif en Normandie",
    image: "/images/sport.webp",
    href: "/realisations/evenement"
  },
  {
    id: 5,
    title: "Promotion immobilière",
    category: "Photographie",
    alt: "Visite virtuelle 3D d'un local commercial, réalisation immobilière Novera Drone",
    image: "/images/immobilier-visite-virtuelle.webp",
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

export const instagramMock = ["/images/aerien-foret-normandie.webp", "/images/aerien-cote-rochers.webp", "/images/aerien-bocage-parcelles.webp"];
