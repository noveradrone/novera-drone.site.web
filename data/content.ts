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
    title: "Un télépilote formé à l'efficacité énergétique",
    text: "Enes, fondateur de Novera Drone, est diplômé d'un BUT MT2E (thermique du bâtiment, photovoltaïque) : vos toitures sont lues avec un regard technique."
  },
  {
    title: "Rapport sous 48 h",
    text: "Après un vol d'environ 15 minutes, l'étude de toiture solaire vous est remise en PDF sous 48 heures."
  },
  {
    title: "Sans échafaudage ni montée sur le toit",
    text: "Aucun risque de chute, aucune tuile abîmée : tout le relevé est fait depuis les airs."
  },
  {
    title: "Un interlocuteur local",
    text: "Intervention dans l'Orne, le Calvados et la Manche : Flers, Vire, Argentan, Alençon, Saint-Lô, Avranches, Caen."
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
