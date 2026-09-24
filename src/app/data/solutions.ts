import { COMPANY_EXPERIENCE_PLUS } from "./company";

/* =========================================================
   SOLUTIONS — source unique (textes repris de la maquette).
   Alimente : menu "Solutions", page Solutions, 5 pages détail
   et colonne "Solutions" du pied de page.
   ========================================================= */

export interface MiniItem {
  icon: string;
  name: string;
  desc?: string;
}

export interface FeatureItem {
  title: string;
  desc?: string;
}

export interface BenefitItem {
  icon: string;
  text: string;
}

export type Tone = "blue" | "green" | "orange" | "purple" | "red";

export const TONE_HEX: Record<Tone, string> = {
  blue: "#2563eb",
  green: "#16a34a",
  purple: "#7c3aed",
  orange: "#f26a21",
  red: "#c92a2a",
};

export interface Solution {
  key: string;
  label: string;
  name: string;
  tagline: string;
  /** Photo d'ambiance pour la carte de la page d'accueil */
  img: string;
  /** 3 photos de fond pour le hero de la page détail */
  heroBg?: string[];
  /** Description courte (cartes "Nos solutions") */
  description: string;
  /** Paragraphe de présentation (hero de la page détail) */
  detail: string;
  /** Puces de la carte "Nos solutions" */
  points: string[];
  icon: string;
  tone: Tone;
  /** Bandeau intermédiaire : "cards" (titre + texte) ou "mini" (pastilles) */
  band?: { title: string; style: "cards" | "mini"; items: MiniItem[] };
  /** true = accordéon, false = liste à cocher */
  accordion: boolean;
  features: FeatureItem[];
  benefitsTitle: string;
  benefits: BenefitItem[];
  shots: "dash" | "collecte" | "mobile" | "hr" | "report";
  visual: "suite" | "collecte" | "mobile" | "laptop" | "report";
  cta: string;
}

export const SOLUTIONS: Solution[] = [
  {
    key: "core-banking",
    label: "Core Banking",
    name: "Core Banking",
    tagline: "La plateforme bancaire qui centralise toutes vos opérations.",
    description:
      "Centralisez toutes vos opérations bancaires sur une plateforme fiable et évolutive.",
    detail:
      "Gérez les comptes, crédits, épargne, opérations de caisse et reporting depuis une plateforme unique, sécurisée et évolutive.",
    points: ["Comptes, prêts & épargne", "Multi-agences & devises", "Reporting réglementaire"],
    icon: "i-bank",
    tone: "blue",
    img: "https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/12008066/pexels-photo-12008066.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/7821710/pexels-photo-7821710.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/12008048/pexels-photo-12008048.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    band: {
      title: "Une architecture complète et intégrée",
      style: "cards",
      items: [
        { icon: "i-bank", name: "Alpha Bank", desc: "Gestion bancaire complète" },
        { icon: "i-users", name: "Alpha Microfinance", desc: "Solutions adaptées aux EMF" },
        { icon: "i-chart", name: "Alpha Comptabilité", desc: "Comptabilité intégrée et reporting" },
        { icon: "i-card", name: "Alpha Monétique", desc: "Émission de cartes et transactions" },
      ],
    },
    accordion: true,
    features: [
      { title: "Gestion des comptes", desc: "Créez et administrez comptes courants, épargne et comptes professionnels depuis un référentiel client unique." },
      { title: "Gestion du crédit", desc: "Instruisez, octroyez et suivez les crédits avec échéanciers, garanties et relances automatiques." },
      { title: "Gestion de l'épargne", desc: "Proposez des produits d'épargne souples, avec intérêts calculés automatiquement et relevés détaillés." },
      { title: "Gestion des agences", desc: "Pilotez votre réseau multi-agences : caisses, utilisateurs, habilitations et consolidations." },
      { title: "Reporting & BI", desc: "Exploitez tableaux de bord et états de pilotage pour décider vite, sur des données fiables." },
    ],
    benefitsTitle: "Les bénéfices pour votre institution",
    benefits: [
      { icon: "i-link", text: "Centralisation des opérations" },
      { icon: "i-shield", text: "Fiabilité et sécurité" },
      { icon: "i-conf", text: "Conformité réglementaire" },
      { icon: "i-chart", text: "Gain de temps et productivité" },
      { icon: "i-bulb", text: "Meilleure prise de décision" },
    ],
    shots: "dash",
    visual: "suite",
    cta: "Découvrez comment ALPHA peut transformer la gestion de votre institution.",
  },
  {
    key: "collecte-journaliere",
    label: "Collecte Journalière",
    name: "Collecte Journalière",
    tagline: "Digitalisez vos encaissements et rapprochez-vous de vos clients.",
    description:
      "Simplifiez la collecte et le suivi de vos agents collecteurs sur le terrain.",
    detail:
      "I-Collect simplifie la collecte terrain, sécurise les opérations et améliore le suivi des collecteurs en temps réel.",
    points: ["Gestion des collecteurs", "Suivi en temps réel", "Commissions automatisées"],
    icon: "i-book",
    tone: "green",
    img: "https://images.pexels.com/photos/7654426/pexels-photo-7654426.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/7654426/pexels-photo-7654426.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/4971946/pexels-photo-4971946.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/12008048/pexels-photo-12008048.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    band: {
      title: "Une solution complète pour la collecte terrain",
      style: "mini",
      items: [
        { icon: "i-book", name: "Collecte sur le terrain" },
        { icon: "i-swap", name: "Synchronisation en temps réel" },
        { icon: "i-users", name: "Suivi & contrôle des équipes" },
        { icon: "i-chart", name: "Rapprochement comptable" },
        { icon: "i-card", name: "Commissions automatisées" },
      ],
    },
    accordion: false,
    features: [
      { title: "Gestion des collecteurs et tournées" },
      { title: "Encaissements sécurisés (POS & Mobile)" },
      { title: "Reçus électroniques instantanés" },
      { title: "Suivi en temps réel des activités" },
      { title: "Gestion des accréditations" },
      { title: "Calcul automatique des commissions" },
      { title: "I-Collect Admin pour les managers" },
      { title: "Application épargnant: MyCollect" },
    ],
    benefitsTitle: "Les bénéfices pour votre institution",
    benefits: [
      { icon: "i-chart", text: "Efficacité opérationnelle" },
      { icon: "i-lock", text: "Sécurité renforcée" },
      { icon: "i-users", text: "Meilleur contrôle des équipes" },
      { icon: "i-head", text: "Expérience client améliorée" },
      { icon: "i-swap", text: "Augmentation de la rentabilité" },
    ],
    shots: "collecte",
    visual: "collecte",
    cta: "Digitalisez votre collecte journalière dès aujourd'hui.",
  },
  {
    key: "digital-mobile",
    label: "Digital & Mobile",
    name: "Digital & Mobile",
    tagline: "Offrez une expérience bancaire digitale fluide et sécurisée.",
    description: "Offrez une expérience bancaire digitale fluide et sécurisée.",
    detail:
      "Alpha Mobile Banking et les services digitaux I-TECH permettent à vos clients d'accéder à leurs services 24h/24 et 7j/7.",
    points: ["Mobile Banking", "Portails clients", "Paiements digitaux"],
    icon: "i-phone",
    tone: "purple",
    img: "https://images.pexels.com/photos/6969615/pexels-photo-6969615.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/6969615/pexels-photo-6969615.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/6969739/pexels-photo-6969739.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/6969663/pexels-photo-6969663.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    band: {
      title: "Une expérience digitale complète",
      style: "mini",
      items: [
        { icon: "i-phone", name: "Mobile Banking" },
        { icon: "i-globe", name: "Portails Clients" },
        { icon: "i-card", name: "Paiements Digitaux" },
        { icon: "i-mail", name: "Notifications & Alertes" },
        { icon: "i-lock", name: "Sécurité Avancée" },
      ],
    },
    accordion: false,
    features: [
      { title: "Consultation de comptes" },
      { title: "Virements & transferts" },
      { title: "Paiement de factures & marchands" },
      { title: "Historique des opérations" },
      { title: "Géolocalisation des agences" },
      { title: "Notifications push & SMS" },
      { title: "Authentification forte" },
    ],
    benefitsTitle: "Les bénéfices pour votre institution",
    benefits: [
      { icon: "i-users", text: "Fidélisation des clients" },
      { icon: "i-chart", text: "Réduction des coûts opérationnels" },
      { icon: "i-globe", text: "Disponibilité 24/7" },
      { icon: "i-bulb", text: "Image moderne et innovante" },
      { icon: "i-phone", text: "Croissance des usages digitaux" },
    ],
    shots: "mobile",
    visual: "mobile",
    cta: "Offrez le meilleur de la banque digitale à vos clients.",
  },
  {
    key: "gestion-rh",
    label: "Gestion RH",
    name: "Gestion RH",
    tagline: "Gérez vos talents, la paie et l'administration du personnel.",
    description: "Gérez efficacement vos talents et processus administratifs.",
    detail:
      "Alpha RH centralise la gestion des ressources humaines pour gagner en efficacité et rester conforme.",
    points: ["Paie & déclarations", "Congés & absences", "Évaluations & reporting"],
    icon: "i-users",
    tone: "orange",
    img: "https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/5439141/pexels-photo-5439141.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/5257196/pexels-photo-5257196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    accordion: false,
    features: [
      { title: "Gestion du personnel" },
      { title: "Paie & déclarations sociales" },
      { title: "Gestion des congés & absences" },
      { title: "Évaluations & entretiens" },
      { title: "Reporting RH" },
    ],
    benefitsTitle: "Les bénéfices pour votre organisation",
    benefits: [
      { icon: "i-chart", text: "Automatisation des processus" },
      { icon: "i-shield", text: "Conformité légale" },
      { icon: "i-users", text: "Meilleure gestion des talents" },
      { icon: "i-check", text: "Réduction des erreurs" },
      { icon: "i-bulb", text: "Décisions RH éclairées" },
    ],
    shots: "hr",
    visual: "laptop",
    cta: "Optimisez la gestion de vos ressources humaines.",
  },
  {
    key: "declaration-bancaire",
    label: "Déclaration Bancaire",
    name: "Déclaration Bancaire",
    tagline: "Automatisez vos déclarations réglementaires et assurez votre conformité.",
    description: "Automatisez vos déclarations et restez conforme en continu.",
    detail:
      "Alpha Déclaration Bancaire génère automatiquement vos états réglementaires et vos reportings dans les formats exigés par les régulateurs.",
    points: ["Déclarations COBAC", "Reporting réglementaire", "Contrôles & validations"],
    icon: "i-chart",
    tone: "red",
    img: "https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/8296977/pexels-photo-8296977.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/7821540/pexels-photo-7821540.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/7821708/pexels-photo-7821708.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    accordion: false,
    features: [
      { title: "Déclarations COBAC" },
      { title: "Reporting réglementaire" },
      { title: "Contrôles & validations" },
      { title: "Génération automatique des états" },
      { title: "Archivage sécurisé" },
    ],
    benefitsTitle: "Les bénéfices pour votre institution",
    benefits: [
      { icon: "i-conf", text: "Conformité assurée" },
      { icon: "i-chart", text: "Gain de temps significatif" },
      { icon: "i-shield", text: "Réduction des risques" },
      { icon: "i-link", text: "Traçabilité complète" },
      { icon: "i-lock", text: "Archivage sécurisé" },
    ],
    shots: "report",
    visual: "report",
    cta: "Simplifiez vos déclarations et restez conforme.",
  },
  {
    key: "genie-logiciel",
    label: "Génie Logiciel",
    name: "Génie Logiciel",
    tagline: "Concevez des solutions logicielles adaptées à votre métier",
    description: "Développez des plateformes web, mobiles et métiers robustes, évolutives et sécurisées.",
    detail:
      "Nous développons des plateformes web, mobiles et métiers robustes, évolutives et sécurisées pour accompagner la croissance de votre organisation.",
    points: ["Applications Web", "Applications Mobiles", "API & Intégrations"],
    icon: "i-layers",
    tone: "blue",
    img: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    heroBg: [
      "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
      "https://images.pexels.com/photos/19805878/pexels-photo-19805878.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    ],
    accordion: false,
    features: [
      { title: "Applications Web" },
      { title: "Applications Mobiles" },
      { title: "Core Banking" },
      { title: "API & Intégrations" },
      { title: "Gestion Documentaire" },
      { title: "Solutions Sur Mesure" },
    ],
    benefitsTitle: "Pourquoi choisir I-TECH ?",
    benefits: [
      { icon: "i-users", text: "Expertise Métier" },
      { icon: "i-head", text: "Équipe Locale" },
      { icon: "i-shield", text: "Sécurité" },
      { icon: "i-link", text: "Intégration" },
      { icon: "i-swap", text: "Évolutivité" },
    ],
    shots: "dash",
    visual: "laptop",
    cta: "Concevez une solution logicielle adaptée à votre métier.",
  },
];

/* ===== Page Solutions (vue d'ensemble) ===== */

export const OVERVIEW = {
  heroBg: [
    "https://images.pexels.com/photos/5257196/pexels-photo-5257196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/29069329/pexels-photo-29069329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  ],
  h1: "Des solutions innovantes au service de l'accélération de votre transformation digitale",
  intro:
    "Découvrez la suite ALPHA et les solutions I-TECH : des outils performants dédiés aux banques, aux institutions de microfinance et aux entreprises en quête d'efficacité.",
  stats: [
    { icon: "i-cal", value: COMPANY_EXPERIENCE_PLUS, label: "Années d'expérience" },
    { icon: "i-bank", value: "250+", label: "Institutions accompagnées" },
    { icon: "i-globe", value: "10+", label: "Pays en Afrique" },
    { icon: "i-head", value: "24/7", label: "Support disponible" },
    { icon: "i-pin", value: "CEMAC", label: "Présence régionale" },
  ],
  ecosystemTitle: "Un écosystème intégré pour couvrir tous vos besoins métier",
  ecosystemLeft: ["core-banking", "collecte-journaliere", "digital-mobile"],
  ecosystemRight: ["gestion-rh", "declaration-bancaire"],
  ecosystemDesc: {
    "core-banking": "Gestion complète des opérations bancaires et financières",
    "collecte-journaliere": "Digitalisez vos encaissements et rapprochements terrain",
    "digital-mobile": "Services digitaux & mobiles pour vous démarquer de vos concurrents",
    "gestion-rh": "Gérez efficacement vos talents, la paie et l'administration du personnel",
    "declaration-bancaire": "Déclarations réglementaires et reporting bancaire",
  } as Record<string, string>,
  suiteTitle: "ALPHA SUITE",
  suiteText: "Une suite complète et intégrée",
  nosSolutions: "Nos solutions",
  ctaTitle: "Prêt à transformer votre institution ?",
  ctaText: "Échangez avec nos experts et découvrez la solution la plus adaptée à vos besoins.",
};

export function getSolution(key: string): Solution {
  return SOLUTIONS.find((s) => s.key === key) ?? SOLUTIONS[0];
}
