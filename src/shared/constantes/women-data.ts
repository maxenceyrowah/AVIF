import { Podcast } from "../models";

export const INSPIRING_WOMEN = [
  {
    id: 1,
    name: "Marie Curie",
    role: "Physicienne et Chimiste",
    image: "/assets/images/marie-curie.jpg",
    category: "pioneer",
    description:
      "Première femme à remporter un prix Nobel et seule personne à en gagner dans plusieurs sciences.",
    longDescription:
      "Marie Curie était une physicienne et chimiste pionnière qui a mené des recherches révolutionnaires sur la radioactivité. Elle fut la première femme à remporter un prix Nobel et reste la seule personne à avoir reçu des prix Nobel dans plusieurs domaines scientifiques. Ses découvertes ont conduit à des avancées majeures dans le traitement du cancer.",
    testimonial:
      "Son dévouement à la science a changé le cours de l'histoire et ouvert des portes aux femmes dans les domaines STEM. Son travail continue d'inspirer des générations de scientifiques.",
    achievements: [
      "Prix Nobel de Physique (1903)",
      "Prix Nobel de Chimie (1911)",
      "Découverte du polonium et du radium",
      "Développement des machines à rayons X",
    ],
    impactQuotes: [
      "Dans la vie, rien n'est à craindre, tout est à comprendre.",
      "On ne remarque jamais ce qui a été fait ; on ne voit que ce qui reste à faire.",
    ],
    bibliography: [
      "Née Maria Skłodowska à Varsovie, Pologne (1867)",
      "Déménagement à Paris pour ses études supérieures en 1891",
      "Mariage avec Pierre Curie en 1895",
      "Découverte de la radioactivité avec Pierre Curie",
      "Première femme professeure à l'Université de Paris",
      "Décédée en 1934 d'une anémie aplasique due à l'exposition aux radiations",
    ],
  },
  {
    id: 2,
    name: "Rosa Parks",
    role: "Militante des droits civiques",
    category: "pioneer",
    image: "/assets/images/rosa-parks.jpg",
    description: "Connue comme la mère du mouvement des droits civiques.",
    longDescription:
      "Rosa Parks était une militante américaine dont le refus de céder sa place de bus à un passager blanc est devenu un symbole du Mouvement des Droits Civiques. Son acte courageux de désobéissance et le boycott des bus de Montgomery qui a suivi sont devenus des symboles importants du mouvement.",
    testimonial:
      "Sa force tranquille et sa détermination inébranlable ont déclenché un mouvement qui a transformé la société américaine. Elle a montré que le courage d'une seule personne peut changer le monde.",
    achievements: [
      "Médaille présidentielle de la Liberté",
      "Médaille d'or du Congrès",
      "Déclenchement du boycott des bus de Montgomery",
      "Reconnaissance à vie pour son engagement dans les droits civiques",
    ],
    impactQuotes: [
      "Les gens disent toujours que je n'ai pas cédé ma place parce que j'étais fatiguée, mais ce n'est pas vrai. Je n'étais pas fatiguée physiquement... J'étais fatiguée de céder.",
      "Chaque personne doit vivre sa vie comme un modèle pour les autres.",
    ],
    bibliography: [
      "Née à Tuskegee, Alabama (1913)",
      "A travaillé comme couturière à Montgomery",
      "Devenue secrétaire de la NAACP de Montgomery",
      "Arrêtée pour désobéissance civile en 1955",
      "Déménagement à Detroit en 1957",
      "Décédée en 2005 à l'âge de 92 ans",
    ],
  },
  {
    id: 3,
    name: "Malala Yousafzai",
    role: "Militante pour l'éducation",
    category: "leader",
    image: "/assets/images/malala.jpg",
    description:
      "Plus jeune lauréate du prix Nobel, défendant l'éducation des filles.",
    longDescription:
      "Malala Yousafzai est une militante pakistanaise pour l'éducation des femmes et la plus jeune lauréate du prix Nobel. Elle est connue pour son plaidoyer en faveur des droits humains, en particulier l'éducation des femmes et des enfants dans sa vallée natale de Swat au Pakistan.",
    testimonial:
      "Malgré une opposition menaçant sa vie, elle est devenue une voix mondiale pour l'éducation des filles. Sa résilience et son plaidoyer ont inspiré des millions de personnes à travers le monde.",
    achievements: [
      "Prix Nobel de la Paix (2014)",
      "Messagère de la Paix des Nations Unies",
      "Fondatrice du Fonds Malala",
      "Publication de 'Moi, Malala'",
    ],
    impactQuotes: [
      "Un enfant, un professeur, un livre et un stylo peuvent changer le monde.",
      "Quand le monde entier se tait, même une seule voix devient puissante.",
    ],
    bibliography: [
      "Née à Mingora, Pakistan (1997)",
      "A commencé à bloguer pour BBC Urdu à l'âge de 11 ans",
      "A survécu à une tentative d'assassinat en 2012",
      "A poursuivi ses études à Birmingham, Royaume-Uni",
      "Diplômée de l'Université d'Oxford en 2020",
      "Continue son plaidoyer mondial pour l'éducation des filles",
    ],
  },
];
export const WOMEN_DATA = [
  {
    name: "BOUADOU Epse KOUADIO N'Da Kadiatou",
    fonction: "Cheffe de Cabinet du ministre",
    description:
      "Que ce soit en tant que femme au foyer, femme en entreprise, artisans ou militantes ; que ce soit en tant que mère, épouse ou jeune fille, la femme contribue, au quotidien, à la construction d’un monde de valeurs où s’épanouissent nos talents. Aujourd’hui plus que jamais, notre pays a besoin d’une plus grande valorisation de son rôle et de cette contribution afin qu’elle puisse offrir le meilleur d’elle-même. Cela signifie qu’ensemble, nous devons faire en sorte de promouvoir l'égalité des genres. Ensemble, nous devons agir pour éliminer les barrières qui empêchent les femmes et les filles de développer leur plein potentiel au profit de l’humanité. C’est à cette tâche que tous, nous devons nous atteler car, comme l’écrit le Secrétaire Général de l’UNESCO à l’occasion de la JIF 2025 : « L’épanouissement des femmes et des filles profite à tout le monde. »",
    image: "/assets/images/cheffe_cabinet.jpeg",
    buttonLabel: "Voir son message pour la journée",
  },
  {
    name: "Sakanoko Siata Ouattara",
    fonction: "Cheffe de Projet E2C_TIC Cote d'Ivoire",
    description: `
Un parcours au service du développement
Madame Sakanoko Siata Ouattara est une figure clé du développement de la formation professionnelle en Côte d'Ivoire. Engagée dans l’accompagnement des jeunes vers l’emploi, elle œuvre pour leur insertion à travers des programmes adaptés aux réalités du marché du travail.
Titulaire d’un Diplôme d’Expert en Finance et Économie (2020) et d’un Diplôme de Spécialiste en Politiques Publiques et Administration (2021) de la Bircham International University, elle a acquis une solide expertise dans la gestion de projets de formation et d’insertion.
Sa carrière est marquée par son engagement en faveur de l’École de la Deuxième Chance (E2C), un programme gouvernemental visant à offrir une opportunité aux jeunes sans emploi ou en quête de reconversion professionnelle.

Une cheffe de projet au service des jeunes et des femmes
Dans le cadre de ses fonctions à l’Agence Nationale de la Formation Professionnelle (ANFP), Mme Sakanoko joue un rôle stratégique dans la mise en place de projets visant à améliorer l’employabilité des jeunes, notamment dans les secteurs du numérique et des métiers en forte demande.
Son action se traduit par :
•	La coordination de formations adaptées aux besoins du marché du travail.
•	L’accompagnement des bénéficiaires vers une insertion durable, notamment en les mettant en relation avec des entreprises partenaires.
•	La promotion de l’égalité des chances, en mettant un accent particulier sur l’inclusion des femmes dans les programmes de formation.
Elle a également représenté la Côte d’Ivoire dans des événements internationaux, notamment dans le Programme de Leadership en EFTP de l’UNESCO-UNEVOC, où elle a plaidé pour un renforcement des capacités des jeunes et des femmes à travers la formation.

Vision et impact
Mme Sakanoko Siata Ouattara croit fermement que l’éducation et la formation sont les piliers d’un développement inclusif et durable. Son engagement au sein du programme E2C et d’autres initiatives démontre sa volonté de transformer positivement la vie des jeunes Ivoiriens.
"Chaque jeune formé est un avenir bâti. Mon ambition est de donner aux générations futures les outils nécessaires pour s’insérer dignement dans la société et contribuer activement au développement du pays." – Sakanoko Siata Ouattara
Grâce à son leadership et sa vision, elle inspire de nombreux jeunes et professionnels du secteur de la formation en Côte d’Ivoire. Son travail continue d’impacter positivement des milliers de bénéficiaires, en particulier les jeunes femmes qui trouvent à travers ses actions une opportunité de s’émanciper et de s’insérer professionnellement.
`,
    image: "/assets/images/madame_sakanoko.png",
    buttonLabel: "Voir la biographie",
  },
  {
    name: "Traoré Kadidjatou",
    fonction: "Directrice de GOMYCODE",
    description: `Passionnée par l’infographie et la création visuelle, Traoré Kadidjatou est une jeune designer graphique talentueuse qui met son savoir-faire au service de la communication visuelle. Son sens de la créativité et de l’innovation lui permet de concevoir des affiches publicitaires percutantes, aidant ainsi les marques à améliorer leur visibilité et à dynamiser leurs ventes.
Dotée d’un excellent relationnel et d’un esprit collaboratif, Kadidjatou sait mobiliser une équipe autour d’un objectif commun, apportant à chaque projet une vision unique et originale.
Parcours et Expériences
•	2018 - 2024 : Vente de produits cosmétiques, pagnes et accessoires pour femmes
•	2021 - 2022 : Bénévole au GS le Merina
Grâce à son expérience dans la vente, elle comprend l’importance du marketing visuel et sait comment capter l’attention des consommateurs à travers des supports graphiques efficaces.
Ambitions et Perspectives
En intégrant le programme E2C, Kadidjatou a renforcé ses compétences en design et en communication visuelle. Elle aspire à développer sa carrière dans le domaine du branding et du marketing digital, en mettant son esprit créatif et sa maîtrise des outils graphiques au service d’entreprises désireuses de se démarquer.
Toujours en quête d’évolution, elle ambitionne de lancer sa propre agence de design graphique, où elle pourra accompagner les marques dans la création de leur identité visuelle et leur stratégie de communication.
`,
    image: "/assets/images/directrice_gomycode.jpeg",
    buttonLabel: "Voir la biographie",
  },
  {
    name: "Etilié Philomene",
    fonction: "Proviseure du lycée Technique de Cocody",
    description: `La proviseure du lycée Technique de Cocody, Madame Etilié Philomène, est une éducatrice passionnée et une leader reconnue dans le domaine de l'enseignement. Née en Côte d'Ivoire, elle a grandi dans un environnement où l'importance de l'éducation était primordiale. Dès son plus jeune âge, elle a montré un intérêt particulier pour les sciences et les mathématiques, des domaines qui allaient devenir sa spécialité. Après avoir obtenu son baccalauréat scientifique, elle poursuit des études supérieures à l'Université Félix Houphouët-Boigny d’Abidjan, où elle obtient une maîtrise en sciences de l’éducation.

Forte de son diplôme, elle débute sa carrière en tant qu’enseignante de mathématiques dans divers établissements secondaires. Grâce à sa rigueur académique et son approche innovante de l'enseignement, elle se distingue rapidement et gagne la reconnaissance de ses pairs et de ses élèves. Elle est notamment connue pour sa capacité à rendre les mathématiques accessibles à tous, en mettant l'accent sur la compréhension profonde des concepts plutôt que sur la simple mémorisation.

Au fil des années, Madame Etilié gravit les échelons du système éducatif ivoirien. Elle occupe successivement des postes de responsabilité, allant de conseillère pédagogique à directrice adjointe dans plusieurs établissements. Son leadership naturel, sa gestion efficace des équipes pédagogiques et sa vision stratégique pour l'avenir de l'éducation font d'elle une figure incontournable dans le milieu éducatif ivoirien.

En 2020, elle est nommée proviseure du lycée Technique de Cocody, un établissement de renom situé à Abidjan. Dans ce rôle, elle met en place des réformes visant à moderniser l'enseignement technique et à préparer les élèves aux défis du monde professionnel. Sous sa direction, le lycée a développé des partenariats avec des entreprises locales et internationales, offrant ainsi aux élèves des opportunités de stages et de formations en alternance. Elle milite également pour une plus grande inclusion des filles dans les filières techniques, un domaine historiquement dominé par les garçons.

Madame Etilié Philomène incarne l’engagement, l’innovation et l’excellence. Elle est convaincue que l'éducation est la clé du développement personnel et national, et elle œuvre sans relâche pour offrir aux jeunes Ivoiriens une éducation de qualité, capable de répondre aux besoins d’un monde en constante évolution.`,
    image: "/assets/images/proviseure.jpg",
    buttonLabel: "Voir la biographie",
  },
  {
    name: "Essis Marie-Helène",
    fonction: "Informaticienne Développeuse web FullStack  certifiée",
    description: `Essis Helène est une développeuse web Full-Stack certifiée, passionnée par la création d’applications dynamiques et performantes. Avec une solide formation en informatique et plusieurs années d’expérience dans le développement web, elle a su se démarquer par son expertise technique et sa capacité à concevoir des solutions innovantes adaptées aux besoins des entreprises et des utilisateurs.

Parcours académique et certifications
Dès son plus jeune âge,  s’est intéressée aux technologies numériques et à la programmation. Elle a suivi des études en informatique, obtenant un diplôme en développement logiciel et en ingénierie informatique. Toujours avide d’apprendre, elle a poursuivi son parcours en obtenant des certifications reconnues dans le domaine du développement web Full-Stack, attestant de sa maîtrise des langages et frameworks les plus utilisés tels que JavaScript, TypeScript, React.js, Node.js, Next.js, et MongoDB.

Sa volonté de perfectionnement l’a également poussée à se spécialiser dans des domaines tels que les architectures cloud, les bases de données NoSQL et SQL, ainsi que les bonnes pratiques DevOps. Grâce à ces compétences, elle est en mesure de concevoir des applications robustes et scalables répondant aux exigences des entreprises modernes.

Expérience professionnelle
Avec plusieurs années d’expérience en tant que développeuse web Full-Stack,  a travaillé sur divers projets, allant de la conception de sites vitrines interactifs à des plateformes SaaS complexes. Elle a collaboré avec des start-ups, des PME et des grandes entreprises, contribuant à l’élaboration de solutions digitales optimisées.

Dans son rôle, elle maîtrise aussi bien le développement front-end, en créant des interfaces utilisateur réactives et intuitives avec React.js, Next.js et Bootstrap, que le développement back-end, où elle construit des API performantes en utilisant Node.js, Express et MongoDB. Son expertise couvre également l’intégration des bonnes pratiques en matière de sécurité web, de performance et d’accessibilité.

Compétences et spécialités
Développement Full-Stack : HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL.
Conception d'architectures backend optimisées et scalables.
Gestion de bases de données relationnelles et NoSQL.
Expérience avec les outils CI/CD, Docker, Git et GitHub Actions.
Respect des standards de sécurité, performance et accessibilité web.
Collaboration avec des équipes Agile et utilisation de méthodologies Scrum/Kanban.
Engagement et vision
Au-delà de son rôle technique,  est une fervente défenseuse du partage de connaissances et de la diversité dans la tech. Elle participe régulièrement à des conférences, hackathons et meetups, où elle échange avec d’autres professionnels et contribue à la communauté des développeurs.

En tant que mentore et formatrice, elle accompagne les nouveaux développeurs dans leur apprentissage, les aidant à acquérir des compétences solides et à évoluer dans un domaine en constante mutation.

Conclusion
Grâce à son expertise, son engagement et sa passion pour l’innovation, continue de repousser les limites du développement web. Sa capacité à combiner compétences techniques, esprit analytique et sens du design fait d’elle une informaticienne accomplie, prête à relever tous les défis du digital.`,
    image: "/assets/images/dele.jpg",
    buttonLabel: "Voir la biographie",
  },
  {
    name: "Koné Assata",
    fonction: "Informaticienne Développeuse web FullStack  certifiée",
    description: `Koné Assata est une développeuse web Full-Stack certifiée, passionnée par la création d’applications dynamiques et performantes. Avec une solide formation en informatique et plusieurs années d’expérience dans le développement web, elle a su se démarquer par son expertise technique et sa capacité à concevoir des solutions innovantes adaptées aux besoins des entreprises et des utilisateurs.

Parcours académique et certifications
Dès son plus jeune âge,  s’est intéressée aux technologies numériques et à la programmation. Elle a suivi des études en informatique, obtenant un diplôme en développement logiciel et en ingénierie informatique. Toujours avide d’apprendre, elle a poursuivi son parcours en obtenant des certifications reconnues dans le domaine du développement web Full-Stack, attestant de sa maîtrise des langages et frameworks les plus utilisés tels que JavaScript, TypeScript, React.js, Node.js, Next.js, et MongoDB.

Sa volonté de perfectionnement l’a également poussée à se spécialiser dans des domaines tels que les architectures cloud, les bases de données NoSQL et SQL, ainsi que les bonnes pratiques DevOps. Grâce à ces compétences, elle est en mesure de concevoir des applications robustes et scalables répondant aux exigences des entreprises modernes.

Expérience professionnelle
Avec plusieurs années d’expérience en tant que développeuse web Full-Stack, a travaillé sur divers projets, allant de la conception de sites vitrines interactifs à des plateformes SaaS complexes. Elle a collaboré avec des start-ups, des PME et des grandes entreprises, contribuant à l’élaboration de solutions digitales optimisées.

Dans son rôle, elle maîtrise aussi bien le développement front-end, en créant des interfaces utilisateur réactives et intuitives avec React.js, Next.js et Bootstrap, que le développement back-end, où elle construit des API performantes en utilisant Node.js, Express et MongoDB. Son expertise couvre également l’intégration des bonnes pratiques en matière de sécurité web, de performance et d’accessibilité.

Compétences et spécialités
Développement Full-Stack : HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL.
Conception d'architectures backend optimisées et scalables.
Gestion de bases de données relationnelles et NoSQL.
Expérience avec les outils CI/CD, Docker, Git et GitHub Actions.
Respect des standards de sécurité, performance et accessibilité web.
Collaboration avec des équipes Agile et utilisation de méthodologies Scrum/Kanban.
Engagement et vision
Au-delà de son rôle technique, est une fervente défenseuse du partage de connaissances et de la diversité dans la tech. Elle participe régulièrement à des conférences, hackathons et meetups, où elle échange avec d’autres professionnels et contribue à la communauté des développeurs.

En tant que mentore et formatrice, elle accompagne les nouveaux développeurs dans leur apprentissage, les aidant à acquérir des compétences solides et à évoluer dans un domaine en constante mutation.

Conclusion
Grâce à son expertise, son engagement et sa passion pour l’innovation, continue de repousser les limites du développement web. Sa capacité à combiner compétences techniques, esprit analytique et sens du design fait d’elle une informaticienne accomplie, prête à relever tous les défis du digital.`,
    image: "/assets/images/Kone.jpeg",
    buttonLabel: "Voir la biographie",
  },
  {
    name: "Timité Mariam",
    fonction: "Informaticienne Développeuse web FullStack  certifiée  ",
    description: `Mariam est une développeuse web Full-Stack certifiée, passionnée par la création d’applications dynamiques et performantes. Avec une solide formation en informatique et plusieurs années d’expérience dans le développement web, elle a su se démarquer par son expertise technique et sa capacité à concevoir des solutions innovantes adaptées aux besoins des entreprises et des utilisateurs.

Parcours académique et certifications
Dès son plus jeune âge, s’est intéressée aux technologies numériques et à la programmation. Elle a suivi des études en informatique, obtenant un diplôme en développement logiciel et en ingénierie informatique. Toujours avide d’apprendre, elle a poursuivi son parcours en obtenant des certifications reconnues dans le domaine du développement web Full-Stack, attestant de sa maîtrise des langages et frameworks les plus utilisés tels que JavaScript, TypeScript, React.js, Node.js, Next.js, et MongoDB.

Sa volonté de perfectionnement l’a également poussée à se spécialiser dans des domaines tels que les architectures cloud, les bases de données NoSQL et SQL, ainsi que les bonnes pratiques DevOps. Grâce à ces compétences, elle est en mesure de concevoir des applications robustes et scalables répondant aux exigences des entreprises modernes.

Expérience professionnelle
Avec plusieurs années d’expérience en tant que développeuse web Full-Stack, a travaillé sur divers projets, allant de la conception de sites vitrines interactifs à des plateformes SaaS complexes. Elle a collaboré avec des start-ups, des PME et des grandes entreprises, contribuant à l’élaboration de solutions digitales optimisées.

Dans son rôle, elle maîtrise aussi bien le développement front-end, en créant des interfaces utilisateur réactives et intuitives avec React.js, Next.js et Bootstrap, que le développement back-end, où elle construit des API performantes en utilisant Node.js, Express et MongoDB. Son expertise couvre également l’intégration des bonnes pratiques en matière de sécurité web, de performance et d’accessibilité.

Compétences et spécialités
Développement Full-Stack : HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL.
Conception d'architectures backend optimisées et scalables.
Gestion de bases de données relationnelles et NoSQL.
Expérience avec les outils CI/CD, Docker, Git et GitHub Actions.
Respect des standards de sécurité, performance et accessibilité web.
Collaboration avec des équipes Agile et utilisation de méthodologies Scrum/Kanban.
Engagement et vision
Au-delà de son rôle technique,  est une fervente défenseuse du partage de connaissances et de la diversité dans la tech. Elle participe régulièrement à des conférences, hackathons et meetups, où elle échange avec d’autres professionnels et contribue à la communauté des développeurs.

En tant que mentore et formatrice, elle accompagne les nouveaux développeurs dans leur apprentissage, les aidant à acquérir des compétences solides et à évoluer dans un domaine en constante mutation.

Conclusion
Grâce à son expertise, son engagement et sa passion pour l’innovation,  continue de repousser les limites du développement web. Sa capacité à combiner compétences techniques, esprit analytique et sens du design fait d’elle une informaticienne accomplie, prête à relever tous les défis du digital.`,
    image: "/assets/images/Timite.jpeg",
    buttonLabel: "Voir la biographie",
  },
];
export const RECENT_PODCASTS: Podcast[] = [
  {
    id: 1,
    title: "Euphrasie Kouassi Yao",
    host: "France 24",
    guest: "Euphrasie Kouassi Yao",
    duration: "12 min",
    description:
      "Titulaire de la chaire UNESCO sur les femmes et le pouvoir, elle évalue les efforts déployés pour les droits des femmes en Côte d'Ivoire",
    image: "/assets/images/euphrasie-yaoImg2.jpg",
    audio: "/assets/audio/euphrasieyao-france-24.m4a",
  },
  {
    id: 2,
    title: "Témoignage de Tia Philomène",
    host: "AVIF",
    guest: "TIA Philomene EPSE GLAO",
    duration: "15 min",
    description:
      "L'histoire inspirante d'une femme qui a surmonté un mariage forcé à 17 ans pour devenir une pionnière du transport en Côte d'Ivoire",
    image: "/assets/images/TiaPhilomeneImg.jpg",
    audio: "/assets/audio/histoire-tia-glao.MP3",
  },
];
export const PODCASTS_DATA = [
  {
    name: "Euphrasie Kouassi Yao",
    image: "/assets/images/euphrasie-yaoImg2.jpg",
    quote:
      "Nous allons essayer de faire un bilan et d'évaluer l'ampleur des efforts déployés dans un pays du continent, la Côte d'Ivoire. Nous en discutons avec Euphrasie Kouassi Yao, titulaire de la chaire UNESCO sur les femmes et le pouvoir.",
    description:
      "Decouvrez l'interview d'Euphrasie Kouassi Yao sur les droits des femmes en Côte d'Ivoire.",
    audio: "/assets/audio/euphrasieyao-france-24.m4a",
    bio: "Euphrasie Yao est connue pour son engagement en faveur de l'éducation et de l'autonomisation des femmes, notamment en Afrique. Elle a travaillé sur plusieurs projets visant à améliorer l'accès à l'éducation pour les filles et à promouvoir des initiatives qui soutiennent leur développement personnel et professionnel. Elle est également impliquée dans des campagnes de sensibilisation sur les droits des femmes et des enfants. Son travail met souvent en lumière les défis auxquels font face les femmes dans divers contextes, tout en encourageant des solutions durables.",
  },
  {
    name: "TIA Philomene EPSE GLAO",
    image: "/assets/images/TiaPhilomeneImg.jpg",
    quote:
      "À seulement 17 ans, Mme Tia Glao a subi l'abus de ses droits en étant mariée à un homme beaucoup plus âgé. Écoutez son histoire marquante, celle d'une femme qui est partie de rien et a su surmonter les obstacles pour bâtir sa vie",
    audio: "/assets/audio/histoire-tia-glao.MP3",
    bio: "Tia Philomène, pionnière du transport en Côte d'Ivoire avec sa compagnie MT International, incarne la force des femmes dans des secteurs dominés par les hommes. Bien qu'elle n'ait pas eu la chance de faire des études, son parcours exceptionnel lui a valu le titre de femme leader en 2016. Elle inspire les femmes africaines à surmonter les obstacles et à investir dans l'éducation de leurs enfants. Son message est simple : « Apprenez de vos échecs et ne laissez jamais les difficultés vous freiner. » Tia prouve que la détermination peut transformer des vies et ouvrir la voie à l'égalité des sexes.",
  },
  {
    name: "Kadhy Touré",
    image: "/assets/images/kadhy-toure.jpg",
    quote:
      "L'actrice et productrice Kadhy Touré témoigne de sa résilience dans son premier livre.",
    description:
      "Kadhy Touré est actrice, productrice, présentatrice de télévision et entrepreneuse, cumulant avec brio des rôles qui témoignent de sa passion, de sa résilience et de sa créativité. Découvrez son interview par Fatimata Wane, sur le plateau de France 24.",
    audio: "/assets/audio/kadhytoure-temoignage.mp4",
    bio: "Actrice ivoirienne, traductrice de langues anglais/français et responsable communication d'entreprise, Kadhy Touré a réalisé des exploits dans le monde cinématographique à l'extérieur avant de s'installer définitivement en Côte d'Ivoire dans l'optique d'aider au développement du cinéma ivoirien.",
  },
];
