import type { Locale } from './en'

export const fr = {
  meta: {
    title: 'Ahmed Salah | Développeur Logiciel & Passionné de SOC',
    description:
      "Ahmed Salah est étudiant en dernière année de développement logiciel, spécialisé dans le développement d'APIs, l'ingénierie logicielle, la cybersécurité, le SOC, le cloud, le DevOps et le développement assisté par l'IA.",
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    experience: 'Expérience',
    projects: 'Projets',
    certifications: 'Certifications',
    contact: 'Contact',
    cv: 'Télécharger le CV',
    menu: 'Menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },
  hero: {
    eyebrow: 'Étudiant en développement logiciel',
    name: 'Ahmed Salah',
    role: 'Développeur Logiciel en Dernière Année & Passionné de SOC',
    tags: 'Développement Logiciel • APIs • Cybersécurité • Cloud & DevOps',
    paragraph:
      "Je conçois des applications modernes, je développe et consomme des APIs, je travaille avec des bases de données relationnelles et NoSQL, et je continue de développer mes compétences en cybersécurité, cloud, DevOps et développement assisté par l'IA.",
    ctaProjects: 'Voir les projets',
    ctaAbout: 'À propos de moi',
    scrollHint: 'Défiler',
  },
  cv: {
    choose: 'Choisir une langue',
    english: 'Anglais',
    french: 'Français',
    unavailable: "Ce CV n'est pas disponible pour le moment.",
  },
  about: {
    eyebrow: 'À propos',
    heading: 'À propos de moi',
    paragraph1:
      "Je suis étudiant en dernière année de développement logiciel et j'aime construire des applications complètes — de l'interface jusqu'à la base de données et à l'infrastructure qui la fait fonctionner. Une grande partie de mon travail récent porte sur la conception et la consommation d'APIs, la connexion à des bases de données relationnelles et NoSQL, et la compréhension du fonctionnement global des systèmes.",
    paragraph2:
      "En parallèle du développement logiciel, je construis une base solide en cybersécurité et en opérations SOC — surveillance, détection et bonnes pratiques de sécurité. Je travaille aussi régulièrement avec Docker, Git et des outils liés au cloud, et j'utilise des outils d'IA comme Claude Code et ChatGPT pour accélérer la recherche, le débogage et la documentation.",
    highlightsLabel: "Domaines d'intérêt",
    highlights: [
      'Ingénierie Logicielle',
      "Développement d'APIs",
      'Cybersécurité & SOC',
      'Cloud & DevOps',
      "Développement Assisté par l'IA",
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    heading: 'Stack Technique',
    subheading:
      "Les outils et technologies que j'utilise à travers toute la stack — de l'interface à l'infrastructure.",
    categories: {
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      databases: 'Bases de données',
      devops: 'DevOps & Outils',
      ai: 'IA & Productivité',
    },
    flow: {
      frontend: 'Frontend',
      api: 'API / Backend',
      database: 'Base de données',
      devops: 'DevOps / Déploiement',
      caption:
        "Comment les éléments s'articulent : les interfaces communiquent avec les APIs, les APIs avec les bases de données, et le DevOps relie le tout pour le déploiement.",
    },
  },
  focus: {
    eyebrow: 'Focus Actuel',
    heading: 'Focus Actuel',
    subheading: 'Là où je consacre le plus de temps à apprendre en ce moment.',
    primaryBadge: 'Focus Principal',
    items: {
      api: {
        title: "Développement d'APIs",
        description:
          "Conception, développement, test, consommation et intégration d'APIs modernes.",
      },
      security: {
        title: 'Cybersécurité & SOC',
        description:
          'Construction de bases solides en cybersécurité et compréhension des opérations SOC, de la surveillance, de la détection et des pratiques de sécurité.',
      },
      cloud: {
        title: 'Cloud & DevOps',
        description:
          'Approfondissement de mes connaissances sur les conteneurs, Docker, les workflows de déploiement et les technologies cloud.',
      },
      ai: {
        title: "Développement Assisté par l'IA",
        description:
          "Utilisation d'outils comme Claude Code et ChatGPT pour accélérer le développement, la recherche, le débogage, la documentation et l'automatisation des workflows.",
      },
    },
  },
  experience: {
    eyebrow: 'Expérience',
    heading: 'Expérience',
    subheading: "Stages et expérience d'enseignement durant mes études en développement logiciel.",
    internshipLabel: 'Stage',
    trainerLabel: 'Formateur',
    items: {
      bna: {
        org: 'BNA',
        orgFull: '',
        description:
          "Expérience de stage à la BNA où j'ai développé une application tout en découvrant l'environnement réseau et l'infrastructure informatique de l'organisation.",
      },
      tifert: {
        org: 'TIFERT',
        orgFull: 'Tunisian Indian Fertilizers',
        description:
          "Expérience de stage à TIFERT où j'ai développé une application de gestion des tâches et découvert l'utilisation des technologies cloud en environnement professionnel.",
      },
      trainer: {
        org: 'Formateur',
        orgFull: '',
        description:
          "Formateur auprès d'étudiants, animant des sessions pratiques en Python, HTML, CSS et JavaScript.",
      },
    },
  },
  projects: {
    eyebrow: 'Projets',
    heading: 'Projets',
    subheading:
      "Une sélection d'applications développées au cours de mon apprentissage du full-stack.",
    viewGithub: 'Voir sur GitHub',
    technologiesLabel: 'Technologies',
    mediaUnavailable: 'Aperçu bientôt disponible',
    categories: {
      management: 'Application de gestion',
      lms: "Système de gestion de l'apprentissage",
    },
    items: {
      gym: {
        title: 'Application de Gestion de Salle de Sport',
        description:
          "Une application de gestion conçue pour organiser et gérer les opérations d'une salle de sport.",
      },
      lms: {
        title: "Système de Gestion de l'Apprentissage",
        description:
          "Un système de gestion de l'apprentissage conçu pour soutenir l'organisation et la gestion des activités pédagogiques.",
      },
      doctor: {
        title: 'Application de Gestion de Cabinet Médical',
        description:
          'Une application de gestion conçue pour aider les médecins à organiser et gérer les activités de leur cabinet.',
      },
    },
  },
  carousel: {
    previous: 'Diapositive précédente',
    next: 'Diapositive suivante',
    goTo: 'Aller à la diapositive {n}',
    play: 'Lancer le diaporama',
    pause: 'Mettre en pause',
    slideOf: 'Diapositive {current} sur {total}',
  },
  certifications: {
    eyebrow: 'Certifications & Apprentissage',
    heading: 'Certifications & Apprentissage',
    subheading: 'Formations et certifications complétées en parallèle de mes études.',
    viewCertificate: 'Voir le certificat',
    openPdf: 'Ouvrir le PDF',
    unavailable: 'Certificat temporairement indisponible',
    items: {
      flutter: {
        title: 'Développement Mobile avec Flutter',
        description:
          "Certificat de participation à une formation Orange Digital Center où j'ai découvert Flutter et exploré le développement d'applications mobiles.",
      },
      ai: {
        title: 'Intelligence Artificielle',
        description:
          "Certification en apprentissage et développement de l'IA, reflétant l'importance de l'intelligence artificielle et du développement assisté par l'IA.",
      },
      cyber: {
        title: 'Introduction à la Cybersécurité',
        description:
          "Certification d'introduction à la cybersécurité soutenant le développement continu de mes connaissances en sécurité.",
      },
      wordpress: {
        title: 'WordPress',
        description: 'Certification WordPress obtenue via Coursera.',
      },
      hackathon: {
        title: 'IEEE Xtreme — Participation à un Hackathon',
        description:
          'Participation à un hackathon/événement de programmation lié à IEEE. Participation à IEEE Xtreme, un défi mondial de programmation compétitive.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Contact',
    subheading: 'Ouvert aux stages, aux postes de développeur junior et aux projets freelance.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    emailAction: 'Envoyer un email',
    whatsappAction: 'Envoyer un message',
    linkedinAction: 'Voir le profil',
    githubAction: 'Voir le profil',
  },
  footer: {
    role: 'Développeur Logiciel en Dernière Année & Passionné de SOC',
    rights: 'Tous droits réservés.',
    backToTop: 'Retour en haut',
  },
  a11y: {
    skipToContent: 'Passer au contenu principal',
    doctorGifMissing: "Aperçu de l'application de gestion médicale non disponible",
  },
} satisfies Locale
