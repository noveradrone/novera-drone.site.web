/**
 * Pages locales : une page par ville, avec un contenu propre à chacune.
 * Règle : ne jamais dupliquer un texte en changeant seulement le nom de la ville.
 * Les « besoins types » décrivent des situations courantes, pas des missions réalisées.
 */

import type { ServiceKey } from "@/data/services";

export type VilleLink = { slug: string; name: string; path: string };

export type VilleContent = VilleLink & {
  departement: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  contexte: { h2: string; paragraphs: string[] };
  toitures: { h2: string; paragraphs: string[] };
  services: { key: ServiceKey; text: string }[];
  besoins: { h2: string; items: string[] };
  communes: string[];
  faq: { q: string; a: string }[];
};

export const villes: VilleContent[] = [
  {
    slug: "flers",
    name: "Flers",
    path: "/drone-flers",
    departement: "Orne",
    metaTitle: "Drone à Flers (Orne) : étude solaire et inspection de toiture",
    metaDescription:
      "Télépilote drone à Flers et dans le bocage ornais : étude de toiture solaire, inspection de toiture et de façade, photo aérienne. Rapport sous 48 h.",
    h1: "Drone à Flers : étude solaire et inspection de toiture",
    lead:
      "Novera Drone est basé dans l'Orne et intervient à Flers et dans tout le Pays de Flers pour les études de toiture solaire, les inspections de couverture et les prises de vues aériennes.",
    contexte: {
      h2: "Un télépilote drone dans le bocage ornais",
      paragraphs: [
        "Flers est la principale ville du bocage ornais, entre la Suisse normande et le Domfrontais. Autour du centre et de son château, on trouve des quartiers pavillonnaires, d'anciens bâtiments industriels hérités du textile, des zones d'activités et, très vite, la campagne et ses fermes entourées de haies.",
        "Cette variété de bâtiments est idéale pour le drone : une maison de lotissement, un atelier en bac acier ou un corps de ferme se relèvent avec la même méthode, sans échelle ni nacelle."
      ]
    },
    toitures: {
      h2: "Les toitures autour de Flers",
      paragraphs: [
        "Dans le bocage, l'ardoise domine sur les maisons anciennes, souvent avec des pentes marquées et des lucarnes. Les constructions plus récentes sont fréquemment couvertes de tuiles, et les bâtiments agricoles et artisanaux de bac acier ou de fibrociment.",
        "Pour un projet solaire, ce sont souvent les grands pans des hangars et des ateliers qui offrent le plus de surface. Les haies et les arbres du bocage créent en revanche des ombres qu'il faut relever précisément : c'est l'un des points clés de l'étude par drone."
      ]
    },
    services: [
      { key: "etude", text: "Relevé de votre toiture à Flers, calepinage et estimation PVGIS, rapport PDF sous 48 h." },
      { key: "inspection", text: "Contrôle des ardoises, tuiles, faîtages et cheminées après un coup de vent ou avant un achat." },
      { key: "photo", text: "Vues aériennes de maisons à vendre, d'entreprises et d'événements du Pays de Flers." }
    ],
    besoins: {
      h2: "Exemples de besoins autour de Flers",
      items: [
        "Un artisan qui veut équiper la toiture de son atelier en zone d'activités et vérifier la surface utile.",
        "Un particulier qui hésite entre deux devis photovoltaïques pour sa maison et souhaite un avis indépendant.",
        "Un propriétaire de longère qui veut contrôler l'état de ses ardoises après une tempête d'hiver."
      ]
    },
    communes: ["La Ferté-Macé", "Athis-Val de Rouvre", "Tinchebray-Bocage", "Condé-en-Normandie", "Briouze", "Messei", "La Lande-Patry"],
    faq: [
      {
        q: "Vous déplacez-vous dans les communes autour de Flers ?",
        a: "Oui. Novera Drone intervient dans tout le Pays de Flers et le bocage ornais, ainsi que dans les communes voisines du Calvados."
      },
      {
        q: "Les arbres et les haies gênent-ils l'étude solaire ?",
        a: "Ils ne gênent pas le vol, mais ils peuvent faire de l'ombre aux panneaux. Le drone permet justement de les relever et d'en tenir compte dans le calepinage et l'estimation de production."
      }
    ]
  },
  {
    slug: "vire",
    name: "Vire",
    path: "/drone-vire",
    departement: "Calvados",
    metaTitle: "Drone à Vire (Calvados) : toiture solaire, inspection, photo",
    metaDescription:
      "Novera Drone intervient à Vire Normandie et dans le bocage virois : étude de toiture solaire, inspection de toiture par drone, photo et vidéo aérienne.",
    h1: "Drone à Vire : étude de toiture solaire et inspection",
    lead:
      "À Vire Normandie et dans le bocage virois, Novera Drone relève les toitures pour les projets photovoltaïques, inspecte les couvertures sans échafaudage et réalise des images aériennes.",
    contexte: {
      h2: "Vire Normandie, entre centre reconstruit et bocage",
      paragraphs: [
        "Très largement détruite en juin 1944, Vire a été reconstruite après-guerre autour de la Porte-Horloge, l'un des rares monuments rescapés. Le centre-ville présente donc beaucoup d'immeubles et de maisons de la Reconstruction, tandis que les communes déléguées de Vire Normandie gardent un caractère rural.",
        "Le bocage virois, vallonné, alterne prairies d'élevage, fermes et hameaux : un territoire où le drone fait gagner beaucoup de temps pour observer des toitures parfois difficiles d'accès."
      ]
    },
    toitures: {
      h2: "Des toitures très différentes d'un quartier à l'autre",
      paragraphs: [
        "Les bâtiments de la Reconstruction ont souvent des toitures régulières, en ardoise ou en tuile, avec des cheminées et des souches nombreuses à contrôler. Dans la campagne, on retrouve des corps de ferme en pierre, des longères et de grands bâtiments d'élevage.",
        "Ces bâtiments agricoles représentent un fort potentiel pour le solaire. Avant tout projet, il est utile de vérifier l'état de la couverture existante, notamment sur les plaques anciennes : le drone permet de le faire sans marcher sur le toit."
      ]
    },
    services: [
      { key: "etude", text: "Étude solaire de maison, de bâtiment d'élevage ou de local professionnel à Vire et alentours." },
      { key: "inspection", text: "Inspection des toitures et souches de cheminées du centre reconstruit, sans échafaudage." },
      { key: "photo", text: "Photos et vidéos aériennes pour les biens à vendre, les entreprises et les courses du bocage." }
    ],
    besoins: {
      h2: "Exemples de besoins à Vire",
      items: [
        "Un éleveur qui envisage des panneaux sur un bâtiment agricole et veut connaître la surface exploitable.",
        "Une copropriété du centre-ville qui souhaite faire contrôler ses toitures sans installer d'échafaudage.",
        "Un organisateur de trail qui veut des images aériennes du parcours dans le bocage."
      ]
    },
    communes: ["Saint-Germain-de-Tallevende", "Vaudry", "Roullours", "Saint-Sever-Calvados", "Valdallière", "Souleuvre-en-Bocage", "Noues de Sienne"],
    faq: [
      {
        q: "Intervenez-vous dans toutes les communes de Vire Normandie ?",
        a: "Oui, ainsi que dans le reste du bocage virois et dans le sud-Manche voisin."
      },
      {
        q: "Peut-on faire une étude solaire sur une toiture en fibrociment ?",
        a: "Oui, le relevé par drone est même la méthode la plus sûre, puisque personne ne marche sur la couverture. Le rapport signale l'état apparent des plaques pour que vous en parliez avec votre installateur."
      }
    ]
  },
  {
    slug: "argentan",
    name: "Argentan",
    path: "/drone-argentan",
    departement: "Orne",
    metaTitle: "Drone à Argentan (Orne) : étude solaire, toiture, photo aérienne",
    metaDescription:
      "Étude de toiture solaire, inspection de toiture et photo aérienne par drone à Argentan et dans la plaine d'Argentan. Télépilote local, rapport sous 48 h.",
    h1: "Drone à Argentan : étude solaire et inspection de toiture",
    lead:
      "Sous-préfecture de l'Orne, Argentan est entourée d'une plaine agricole ouverte où les grands bâtiments ne manquent pas. Novera Drone y réalise des études de toiture solaire, des inspections et des prises de vues aériennes.",
    contexte: {
      h2: "Argentan et sa plaine, un territoire ouvert",
      paragraphs: [
        "Fortement touchée en août 1944, lors des combats de la poche de Falaise-Chambois, Argentan a été en grande partie reconstruite. Autour de la ville s'étend la plaine d'Argentan, plus ouverte que le bocage, avec de grandes exploitations céréalières et des élevages, notamment de chevaux, dans les environs du Haras national du Pin.",
        "Les toitures y sont souvent bien dégagées, ce qui est favorable au solaire. Le drone permet de mesurer rapidement de grandes surfaces sans perdre de temps sur place."
      ]
    },
    toitures: {
      h2: "Hangars, écuries et maisons : des toitures à fort potentiel",
      paragraphs: [
        "Les hangars agricoles, écuries et bâtiments de stockage de la plaine offrent de grands pans de toiture, souvent bien orientés. En ville, on trouve des maisons et immeubles de la Reconstruction, ainsi que des bâtiments d'activité en périphérie.",
        "Sur ces grandes surfaces, l'étude par drone permet de proposer rapidement un calepinage complet et une estimation de production, bâtiment par bâtiment, y compris sur un site qui en compte plusieurs."
      ]
    },
    services: [
      { key: "etude", text: "Relevé et calepinage de hangars, écuries ou maisons à Argentan, avec estimation PVGIS." },
      { key: "inspection", text: "Contrôle de grandes toitures agricoles ou de bâtiments de la Reconstruction, sans nacelle." },
      { key: "photo", text: "Images aériennes de propriétés, de haras et d'entreprises du Pays d'Argentan." }
    ],
    besoins: {
      h2: "Exemples de besoins dans le Pays d'Argentan",
      items: [
        "Une exploitation qui veut chiffrer un projet solaire sur plusieurs hangars et comparer les toitures.",
        "Un installateur photovoltaïque qui a besoin des relevés d'un grand bâtiment pour finaliser son devis.",
        "Un propriétaire de domaine équestre qui souhaite des vues aériennes pour une vente ou une location."
      ]
    },
    communes: ["Écouché-les-Vallées", "Sarceaux", "Trun", "Putanges-le-Lac", "Rânes", "Le Pin-au-Haras", "Mortrée"],
    faq: [
      {
        q: "Pouvez-vous étudier plusieurs bâtiments sur un même site ?",
        a: "Oui. Le drone relève plusieurs toitures au cours d'une même intervention, et le rapport présente chaque bâtiment séparément avec son calepinage et sa production estimée."
      },
      {
        q: "Intervenez-vous près des haras et des élevages ?",
        a: "Oui, en adaptant le vol pour ne pas effrayer les animaux : distance, hauteur et horaire sont convenus avec vous à l'avance."
      }
    ]
  },
  {
    slug: "saint-lo",
    name: "Saint-Lô",
    path: "/drone-saint-lo",
    departement: "Manche",
    metaTitle: "Drone à Saint-Lô (Manche) : étude solaire et inspection toiture",
    metaDescription:
      "Télépilote drone à Saint-Lô et dans le centre-Manche : étude de toiture solaire, inspection de toiture et de façade, photo et vidéo aérienne.",
    h1: "Drone à Saint-Lô : étude de toiture solaire et inspection",
    lead:
      "Préfecture de la Manche, Saint-Lô et son agglomération mêlent quartiers de la Reconstruction, zones d'activités et campagne d'élevage. Novera Drone y intervient pour les études solaires, les inspections de toiture et les images aériennes.",
    contexte: {
      h2: "Saint-Lô, ville reconstruite au cœur du bocage de la Manche",
      paragraphs: [
        "Presque entièrement détruite en 1944, Saint-Lô a été surnommée « la capitale des ruines » avant d'être reconstruite autour de ses remparts. La ville est aujourd'hui entourée d'un bocage d'élevage laitier et de nombreuses exploitations, avec une tradition équestre marquée par son haras national.",
        "Entre immeubles de la Reconstruction, pavillons, bâtiments publics, zones d'activités et fermes, les besoins en relevé de toiture sont très variés."
      ]
    },
    toitures: {
      h2: "Des toitures exposées au climat de la Manche",
      paragraphs: [
        "Le climat océanique, humide et venté, met les couvertures à rude épreuve : ardoises qui glissent, mousses qui s'installent, gouttières encombrées. Une inspection par drone après l'hiver permet de repérer ces petits désordres avant qu'ils ne provoquent une infiltration.",
        "Pour le solaire, l'ensoleillement de la Manche reste suffisant pour un projet rentable, à condition de bien choisir les pans et d'éviter les ombrages. L'estimation PVGIS du rapport tient compte de la localisation exacte du bâtiment."
      ]
    },
    services: [
      { key: "etude", text: "Étude solaire de maison, de bâtiment d'élevage ou d'entreprise à Saint-Lô, avec production estimée localement." },
      { key: "inspection", text: "Inspection des toitures et façades après tempête ou avant travaux, sans échafaudage." },
      { key: "photo", text: "Vues aériennes de biens, d'entreprises et d'événements du Saint-Lois." }
    ],
    besoins: {
      h2: "Exemples de besoins autour de Saint-Lô",
      items: [
        "Un exploitant laitier qui veut connaître la production possible sur la toiture de sa stabulation.",
        "Un particulier qui remarque des ardoises déplacées après une tempête et veut des photos pour son assurance.",
        "Une entreprise de zone d'activités qui souhaite une vidéo aérienne de son site pour son recrutement."
      ]
    },
    communes: ["Agneaux", "Saint-Georges-Montcocq", "Condé-sur-Vire", "Torigny-les-Villes", "Marigny-le-Lozon", "Pont-Hébert", "Canisy"],
    faq: [
      {
        q: "Le solaire est-il intéressant dans la Manche ?",
        a: "Oui, à condition de bien dimensionner l'installation. L'étude calcule la production avec les données d'ensoleillement propres à la localisation de votre bâtiment, ce qui évite les estimations trop optimistes."
      },
      {
        q: "Le vent empêche-t-il de voler ?",
        a: "Les drones utilisés supportent un vent modéré. En cas de vent fort ou de pluie, l'intervention est simplement décalée à un meilleur créneau."
      }
    ]
  },
  {
    slug: "caen",
    name: "Caen",
    path: "/drone-caen",
    departement: "Calvados",
    metaTitle: "Drone à Caen : étude solaire, inspection de toiture, photo",
    metaDescription:
      "Étude de toiture solaire, inspection de toiture et photo aérienne par drone à Caen et dans l'agglomération. Vols préparés en zone urbaine, rapport sous 48 h.",
    h1: "Drone à Caen : étude solaire et inspection de toiture",
    lead:
      "À Caen et dans l'agglomération Caen la Mer, Novera Drone réalise des études de toiture solaire, des inspections de couverture et de façade et des prises de vues aériennes, avec une préparation adaptée aux vols en ville.",
    contexte: {
      h2: "Voler à Caen : une préparation spécifique",
      paragraphs: [
        "Caen est une grande agglomération : zones urbaines denses, quartiers résidentiels, campus, zones d'activités et, à l'ouest, l'aéroport de Caen-Carpiquet. Dans ce contexte, un vol de drone se prépare : selon l'adresse, il peut nécessiter une autorisation ou un protocole particulier.",
        "Chaque mission à Caen commence donc par une vérification de la zone de vol. Si des démarches sont nécessaires, elles sont faites avant l'intervention ; si le vol n'est pas possible, vous êtes prévenu avant tout engagement."
      ]
    },
    toitures: {
      h2: "Pierre de Caen, Reconstruction et grandes toitures d'activité",
      paragraphs: [
        "Le centre ancien, autour des abbayes et du château, compte de nombreux bâtiments en pierre de Caen aux toitures d'ardoise complexes. Une grande partie de la ville a été reconstruite après 1944, avec des immeubles aux toitures plus régulières. En périphérie, les plateformes logistiques, commerces et ateliers offrent de grandes surfaces planes ou en bac acier.",
        "Pour un immeuble ou un bâtiment professionnel, le drone évite la nacelle et la location de matériel, tout en donnant une vue complète de la toiture et des équipements en hauteur."
      ]
    },
    services: [
      { key: "etude", text: "Étude solaire de maison, de copropriété ou de bâtiment professionnel dans l'agglomération caennaise." },
      { key: "inspection", text: "Inspection de toitures et de façades d'immeubles sans nacelle, pour syndics, gestionnaires et artisans." },
      { key: "photo", text: "Photos et vidéos aériennes pour l'immobilier, les entreprises et la communication." }
    ],
    besoins: {
      h2: "Exemples de besoins dans l'agglomération de Caen",
      items: [
        "Un syndic qui veut faire inspecter la toiture et les façades d'un immeuble avant de voter des travaux.",
        "Une entreprise en zone d'activités qui étudie l'installation de panneaux sur son bâtiment.",
        "Une agence immobilière qui souhaite des vues aériennes d'une maison avec jardin en périphérie."
      ]
    },
    communes: ["Hérouville-Saint-Clair", "Mondeville", "Ifs", "Fleury-sur-Orne", "Bretteville-sur-Odon", "Ouistreham", "Colombelles"],
    faq: [
      {
        q: "Peut-on faire voler un drone en ville à Caen ?",
        a: "Oui, mais pas n'importe comment : la proximité de l'aéroport de Carpiquet et la densité urbaine imposent de vérifier chaque adresse. Les autorisations nécessaires sont demandées avant la mission."
      },
      {
        q: "Intervenez-vous pour les copropriétés ?",
        a: "Oui. L'inspection par drone permet au syndic et au conseil syndical de disposer de photos précises de la toiture et des façades, sans échafaudage, avant de décider des travaux."
      }
    ]
  },
  {
    slug: "alencon",
    name: "Alençon",
    path: "/drone-alencon",
    departement: "Orne",
    metaTitle: "Drone à Alençon (Orne) : étude solaire et inspection de toiture",
    metaDescription:
      "Étude de toiture solaire, inspection de toiture et photo aérienne par drone à Alençon et dans la communauté urbaine. Télépilote ornais, rapport sous 48 h.",
    h1: "Drone à Alençon : étude solaire et inspection de toiture",
    lead:
      "À Alençon, préfecture de l'Orne, et dans les communes voisines de l'Orne et de la Sarthe, Novera Drone réalise des études de toiture solaire, des inspections de couverture et des prises de vues aériennes.",
    contexte: {
      h2: "Alençon, entre centre historique et portes du Maine",
      paragraphs: [
        "Ville de la dentelle au point d'Alençon, Alençon a conservé un centre ancien riche en hôtels particuliers et maisons à pans de bois, autour de la Maison d'Ozé et de la basilique Notre-Dame. Autour de ce cœur historique s'étendent des quartiers résidentiels, des zones d'activités et une agglomération qui déborde sur la Sarthe voisine.",
        "Au nord, la forêt d'Écouves et, plus largement, le Parc naturel régional Normandie-Maine encadrent un territoire où se côtoient maisons de bourg, longères et exploitations agricoles."
      ]
    },
    toitures: {
      h2: "Toitures anciennes et projets solaires à Alençon",
      paragraphs: [
        "Dans le centre ancien, les toitures d'ardoise à fortes pentes, souvent complexes, se prêtent mal à une inspection à l'échelle : le drone permet de les observer sans intervenir sur la couverture. Les quartiers plus récents et les bâtiments d'activité offrent des toitures régulières, plus simples à équiper en panneaux.",
        "Côté solaire, Alençon fait partie des secteurs les mieux exposés de la région : selon PVGIS, 1 kWc orienté plein sud y produit environ 1 140 kWh par an. À noter : en secteur protégé, la pose de panneaux peut demander l'avis de l'architecte des bâtiments de France. Les photos du rapport aident à préparer ce dossier."
      ]
    },
    services: [
      { key: "etude", text: "Relevé et calepinage de votre toiture à Alençon, avec estimation PVGIS localisée." },
      { key: "inspection", text: "Inspection des toitures d'ardoise et façades anciennes sans échafaudage, pour particuliers et syndics." },
      { key: "photo", text: "Vues aériennes de biens, d'entreprises et d'événements de la communauté urbaine." }
    ],
    besoins: {
      h2: "Exemples de besoins à Alençon",
      items: [
        "Un propriétaire du centre historique qui veut connaître l'état de sa toiture avant de lancer des travaux.",
        "Un particulier en périphérie qui souhaite vérifier le devis d'un installateur avant de signer.",
        "Une entreprise de zone d'activités qui étudie l'autoconsommation sur son bâtiment."
      ]
    },
    communes: ["Damigny", "Valframbert", "Saint-Germain-du-Corbéis", "Condé-sur-Sarthe", "Cerisé", "Sées", "Écouves"],
    faq: [
      {
        q: "Intervenez-vous côté Sarthe, autour d'Alençon ?",
        a: "Oui. Les communes sarthoises de l'agglomération d'Alençon font partie de la zone d'intervention habituelle."
      },
      {
        q: "Peut-on installer des panneaux solaires dans le centre ancien ?",
        a: "Cela dépend du secteur : à proximité des monuments historiques, le projet peut être soumis à l'avis de l'architecte des bâtiments de France. L'étude par drone fournit des photos et un calepinage utiles pour constituer la demande."
      }
    ]
  },
  {
    slug: "avranches",
    name: "Avranches",
    path: "/drone-avranches",
    departement: "Manche",
    metaTitle: "Drone à Avranches (Manche) : étude solaire, toiture, photo",
    metaDescription:
      "Télépilote drone à Avranches et dans le sud-Manche : étude de toiture solaire, inspection de toiture exposée au vent, photo aérienne pour gîtes et immobilier.",
    h1: "Drone à Avranches : étude solaire et inspection de toiture",
    lead:
      "Face à la baie du Mont-Saint-Michel, Avranches et le sud-Manche combinent maisons de caractère, hébergements touristiques et exploitations agricoles. Novera Drone y intervient pour les études solaires, les inspections de toiture et les images aériennes.",
    contexte: {
      h2: "Avranches et la baie : un territoire exposé",
      paragraphs: [
        "Perchée sur son promontoire, Avranches domine la baie du Mont-Saint-Michel. La ville et ses environs vivent beaucoup du tourisme, avec de nombreux gîtes, chambres d'hôtes et résidences secondaires, mais aussi de l'agriculture dans l'arrière-pays.",
        "Attention : la baie et le Mont-Saint-Michel sont soumis à des restrictions de survol. Chaque adresse est vérifiée avant la mission et les démarches nécessaires sont effectuées ; si un vol n'est pas autorisé, vous en êtes informé avant toute intervention."
      ]
    },
    toitures: {
      h2: "Des toitures qui subissent le vent et l'air marin",
      paragraphs: [
        "Proche de la mer, le sud-Manche est régulièrement balayé par le vent, et l'air marin accélère l'usure des fixations, des faîtages et des solins. Après une tempête, une inspection par drone permet de vérifier rapidement ardoises, tuiles et cheminées sans monter sur le toit.",
        "Pour le solaire, la côte est bien ensoleillée : selon PVGIS, 1 kWc orienté plein sud produit environ 1 130 kWh par an autour d'Avranches. Les toitures de gîtes et de bâtiments agricoles offrent souvent des surfaces intéressantes."
      ]
    },
    services: [
      { key: "etude", text: "Étude solaire de maison, de gîte ou de bâtiment agricole dans le sud-Manche." },
      { key: "inspection", text: "Contrôle des toitures après tempête, avec photos datées pour votre assurance." },
      { key: "photo", text: "Photos et vidéos aériennes de gîtes, de biens à vendre et d'événements autour de la baie." }
    ],
    besoins: {
      h2: "Exemples de besoins autour d'Avranches",
      items: [
        "Un propriétaire de gîte qui veut des vues aériennes pour ses annonces de location.",
        "Un particulier qui a perdu des ardoises lors d'un coup de vent et doit documenter les dégâts.",
        "Un agriculteur qui envisage des panneaux sur un hangar et veut connaître la surface utile."
      ]
    },
    communes: ["Saint-Quentin-sur-le-Homme", "Le Val-Saint-Père", "Pontaubault", "Ducey-Les Chéris", "Sartilly-Baie-Bocage", "Pontorson", "Granville"],
    faq: [
      {
        q: "Pouvez-vous filmer près du Mont-Saint-Michel ?",
        a: "Le secteur est soumis à des restrictions de survol strictes. Chaque demande est étudiée au cas par cas, et seuls les vols autorisés sont réalisés."
      },
      {
        q: "Le climat marin abîme-t-il plus vite les toitures ?",
        a: "Le vent et le sel sollicitent davantage les fixations, les faîtages et les éléments métalliques. Un contrôle visuel régulier par drone permet de repérer ces signes d'usure avant qu'une fuite n'apparaisse."
      }
    ]
  }
];

export const villeLinks: VilleLink[] = villes.map(({ slug, name, path }) => ({ slug, name, path }));

export function getVille(slug: string): VilleContent {
  const ville = villes.find((item) => item.slug === slug);
  if (!ville) throw new Error(`Ville inconnue : ${slug}`);
  return ville;
}
