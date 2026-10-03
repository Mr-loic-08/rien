import { COMPANY_EXPERIENCE_PLUS } from "./company";

/* =========================================================
   SECTEURS — source unique (textes repris de la maquette).
   Page mère "Cibles" + 3 pages détail.
   ========================================================= */

export type SecteurTone = "green" | "blue" | "purple";

export const SECTEUR_HEX: Record<SecteurTone, string> = {
  green: "#16a34a",
  blue: "#1a56b0",
  purple: "#7c3aed",
};

export interface RecoRow {
  besoin: string;
  solution: string;
  /** clé de la page solution cible (optionnel) */
  solKey?: string;
}

export interface ProofItem {
  kind: "project" | "quote";
  title: string;
  text: string;
  author?: string;
}

export interface Secteur {
  key: string;
  label: string;
  short: string;
  tagline: string;
  intro: string;
  cta: string;
  tone: SecteurTone;
  icon: string;
  /** vidéo + images de fond du hero */
  video: { hd: string; poster: string };
  heroBg: string[];
  /** image officielle du secteur (carte + fond flou des pages détail) */
  photo: string;
  /** secours en ligne si le fichier local est absent */
  photoFallback: string;
  /** photo de la carte sur la page mère */
  cardImg: string;
  cardDesc: string;
  issuesTitle: string;
  issues: { icon: string; text: string }[];
  recos: RecoRow[];
  benefitsTitle: string;
  benefits: { icon: string; text: string }[];
  proofs: ProofItem[];
  arch?: string[];
  ctaTitle: string;
  ctaText: string;
}

export const SECTEURS: Secteur[] = [
  {
    key: "microfinances",
    label: "Microfinances",
    short: "Microfinances",
    tagline: "Les solutions conçues pour les établissements de microfinance",
    intro:
      "Optimisez la gestion de votre institution grâce à des outils conformes aux exigences réglementaires et adaptés aux réalités du terrain.",
    cta: "Demander une démonstration",
    tone: "green",
    icon: "i-users",
    video: {
      hd: "https://videos.pexels.com/video-files/37080143/15708451_3840_2160_60fps.mp4",
      poster:
        "https://images.pexels.com/videos/37080143/counting-money-lagos-market-marina-market-market-woman-37080143.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    },
    heroBg: [
      "https://images.pexels.com/photos/8069481/pexels-photo-8069481.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/7654426/pexels-photo-7654426.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/8154768/pexels-photo-8154768.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    photo: "images/secteurs/microfinances.jpg",
    photoFallback:
      "https://images.pexels.com/photos/8872369/pexels-photo-8872369.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
    cardImg: "images/secteurs/microfinances.jpg",
    cardDesc: "Gestion des opérations, conformité COBAC, collecte terrain et digitalisation.",
    issuesTitle: "Vos problématiques au quotidien",
    issues: [
      { icon: "i-card", text: "Gestion des crédits" },
      { icon: "i-bank", text: "Gestion de l'épargne" },
      { icon: "i-book", text: "Collecte journalière" },
      { icon: "i-conf", text: "Conformité COBAC" },
    ],
    recos: [
      { besoin: "Gestion EMF", solution: "Alpha Microfinance", solKey: "core-banking" },
      { besoin: "Collecte", solution: "I-Collect", solKey: "collecte-journaliere" },
      { besoin: "Mobile", solution: "Alpha Mobile Banking", solKey: "digital-mobile" },
      { besoin: "Reporting", solution: "Déclaration Bancaire", solKey: "declaration-bancaire" },
    ],
    benefitsTitle: "Les bénéfices pour votre institution",
    benefits: [
      { icon: "i-chart", text: "Réduction des tâches manuelles" },
      { icon: "i-shield", text: "Contrôle renforcé" },
      { icon: "i-conf", text: "Conformité réglementaire" },
      { icon: "i-globe", text: "Digitalisation du réseau" },
    ],
    proofs: [
      { kind: "project", title: "Projet CEPAC", text: "Déploiement d'Alpha Microfinance" },
      { kind: "project", title: "Projet EMF", text: "Digitalisation de la collecte terrain" },
      {
        kind: "quote",
        title: "Témoignage client",
        text: "I-TECH a transformé notre manière de travailler.",
        author: "Directeur Général",
      },
    ],
    ctaTitle: "Prêt à transformer votre institution ?",
    ctaText: "Découvrez comment nos solutions peuvent répondre à vos défis.",
  },
  {
    key: "banques-commerciales",
    label: "Banques Commerciales",
    short: "Banques Commerciales",
    tagline: "Accélérez la transformation digitale de votre banque",
    intro:
      "Des solutions robustes pour moderniser les opérations bancaires, les paiements et les services digitaux.",
    cta: "Parler à un expert",
    tone: "blue",
    icon: "i-bank",
    video: {
      hd: "https://videos.pexels.com/video-files/12719805/12719805-uhd_3840_2160_24fps.mp4",
      poster:
        "https://images.pexels.com/videos/12719805/pexels-photo-12719805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    },
    heroBg: [
      "https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/19107852/pexels-photo-19107852.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    photo: "images/secteurs/banques.jpg",
    photoFallback:
      "https://images.pexels.com/photos/33719774/pexels-photo-33719774.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
    cardImg: "images/secteurs/banques.jpg",
    cardDesc: "Core Banking, monétique, digital banking et intégration.",
    issuesTitle: "Vos enjeux bancaires",
    issues: [
      { icon: "i-bank", text: "Core Banking" },
      { icon: "i-card", text: "Monétique" },
      { icon: "i-phone", text: "Digital Banking" },
      { icon: "i-chart", text: "Reporting réglementaire" },
      { icon: "i-link", text: "Intégration API" },
    ],
    recos: [
      { besoin: "Core Banking", solution: "Alpha Bank", solKey: "core-banking" },
      { besoin: "Paiements", solution: "Alpha Monétique", solKey: "core-banking" },
      { besoin: "Digital", solution: "Alpha Mobile Banking", solKey: "digital-mobile" },
      { besoin: "Déclarations", solution: "Déclaration Bancaire", solKey: "declaration-bancaire" },
    ],
    benefitsTitle: "Les bénéfices pour votre banque",
    benefits: [
      { icon: "i-link", text: "Centralisation des opérations" },
      { icon: "i-chart", text: "Réduction des coûts" },
      { icon: "i-users", text: "Expérience client améliorée" },
      { icon: "i-lock", text: "Sécurité renforcée" },
    ],
    proofs: [
      { kind: "project", title: "Migration bancaire", text: "Modernisation du SI bancaire" },
      { kind: "project", title: "Déploiement monétique", text: "Mise en place de la plateforme monétique" },
      {
        kind: "quote",
        title: "Témoignage client",
        text: "Un partenaire fiable pour notre projet stratégique.",
        author: "DSI Banque",
      },
    ],
    arch: ["Clients", "Mobile Banking", "Core Banking", "Monétique", "Reporting"],
    ctaTitle: "Construisons ensemble votre banque digitale",
    ctaText: "Nos experts vous accompagnent à chaque étape de votre transformation.",
  },
  {
    key: "grandes-entreprises",
    label: "Grandes Entreprises",
    short: "Grandes Entreprises",
    tagline: "Des solutions sur mesure pour les grandes entreprises",
    intro: "Optimisez vos processus, gérez vos talents et sécurisez vos informations.",
    cta: "Demander une démonstration",
    tone: "purple",
    icon: "i-chart",
    video: {
      hd: "https://videos.pexels.com/video-files/5725951/5725951-uhd_3840_2160_30fps.mp4",
      poster:
        "https://images.pexels.com/videos/5725951/adult-business-businessman-businesswoman-5725951.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    },
    heroBg: [
      "https://images.pexels.com/photos/7793926/pexels-photo-7793926.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/8547285/pexels-photo-8547285.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    photo: "images/secteurs/grandes-entreprises.jpg",
    photoFallback:
      "https://images.pexels.com/photos/5233311/pexels-photo-5233311.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800",
    cardImg: "images/secteurs/grandes-entreprises.jpg",
    cardDesc: "RH, comptabilité, GED et développement spécifique.",
    issuesTitle: "Vos enjeux métiers",
    issues: [
      { icon: "i-users", text: "Gestion des Ressources Humaines" },
      { icon: "i-chart", text: "Comptabilité & Finance" },
      { icon: "i-book", text: "Gestion Électronique des Documents" },
      { icon: "i-bulb", text: "Développement Spécifique" },
    ],
    recos: [
      { besoin: "RH", solution: "Alpha RH", solKey: "gestion-rh" },
      { besoin: "Comptabilité", solution: "Alpha Comptabilité", solKey: "gestion-rh" },
      { besoin: "GED", solution: "I-GED", solKey: "gestion-rh" },
      { besoin: "Développement", solution: "Solutions Sur Mesure", solKey: "digital-mobile" },
    ],
    benefitsTitle: "Les bénéfices pour votre entreprise",
    benefits: [
      { icon: "i-chart", text: "Productivité accrue" },
      { icon: "i-link", text: "Meilleure traçabilité" },
      { icon: "i-lock", text: "Sécurité des données" },
      { icon: "i-swap", text: "Adaptabilité et évolutivité" },
    ],
    proofs: [
      { kind: "project", title: "Projet RH", text: "Digitalisation des processus RH" },
      { kind: "project", title: "Projet Comptabilité", text: "Automatisation comptable" },
      {
        kind: "quote",
        title: "Témoignage client",
        text: "Des solutions adaptées à nos besoins spécifiques.",
        author: "Directeur Financier",
      },
    ],
    ctaTitle: "Digitalisez vos processus, gagnez en performance",
    ctaText: "Nos solutions s'adaptent à votre organisation.",
  },
];

/* ===== Page mère "Cibles" ===== */
export const CIBLES = {
  video: {
    hd: "https://videos.pexels.com/video-files/7659850/7659850-uhd_3840_2160_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/7659850/adult-business-computer-conference-room-7659850.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  },
  heroBg: [
    "https://images.pexels.com/photos/7792880/pexels-photo-7792880.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/29069329/pexels-photo-29069329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  ],
  h1: "Des solutions adaptées à votre secteur d'activité",
  intro:
    "Découvrez comment I-TECH accompagne les institutions financières et les entreprises grâce à des solutions spécialisées.",
  cta: "Trouver ma solution",
  pickTitle: "Choisissez votre secteur",
  pickSub:
    "Nous comprenons vos enjeux métier et proposons des solutions adaptées à vos défis quotidiens.",
  stats: [
    { icon: "i-cal", value: COMPANY_EXPERIENCE_PLUS, label: "Années d'expérience" },
    { icon: "i-bank", value: "250+", label: "Institutions accompagnées" },
    { icon: "i-globe", value: "10+", label: "Pays en Afrique" },
    { icon: "i-head", value: "24/7", label: "Support disponible" },
    { icon: "i-pin", value: "CEMAC", label: "Présence régionale" },
  ],
  approcheTitle: "Notre approche",
  approcheText:
    "La section « Cibles » permet de parler directement aux besoins des différents types de clients. Contrairement à la section « Solutions » qui présente les produits, cette section présente les problématiques métiers de chaque secteur et les solutions adaptées. Cette approche permet aux visiteurs de s'identifier rapidement et améliore fortement la conversion.",
  pillars: [
    { icon: "i-users", title: "Centré sur vos métiers", text: "Nous comprenons vos défis et parlons votre langage." },
    { icon: "i-bulb", title: "Solutions adaptées", text: "Des réponses concrètes à vos problématiques." },
    { icon: "i-chart", title: "Résultats concrets", text: "Des bénéfices mesurables pour votre organisation." },
    { icon: "i-head", title: "Accompagnement", text: "Un support expert à chaque étape de votre projet." },
  ],
};

export function getSecteur(key: string): Secteur {
  return SECTEURS.find((s) => s.key === key) ?? SECTEURS[0];
}
