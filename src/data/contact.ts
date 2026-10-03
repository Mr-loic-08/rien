/* =========================================================
   CONTACT & SUPPORT — textes repris de la maquette
   ========================================================= */

export const CONTACT_HERO = {
  images: [
    "https://images.pexels.com/photos/8866794/pexels-photo-8866794.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/7689662/pexels-photo-7689662.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/8867410/pexels-photo-8867410.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  ],
  h1: "Comment pouvons-nous vous aider ?",
  intro:
    "Nos équipes commerciales, techniques et support sont à votre disposition pour répondre à vos besoins.",
};

export const CONTACT_CARDS = [
  {
    icon: "i-users",
    tone: "orange" as const,
    title: "CONTACT / DÉMO",
    text: "Découvrez nos solutions et échangez avec nos experts pour trouver la solution adaptée à vos besoins.",
    cta: "Demander une démo",
    href: "#/contact/demo",
  },
  {
    icon: "i-head",
    tone: "blue" as const,
    title: "SUPPORT CLIENT",
    text: "Obtenez une assistance technique, ouvrez un ticket ou consultez nos ressources d'aide.",
    cta: "Accéder au support",
    href: "#/contact/demo",
  },
];

export const CONTACT_INFOS = [
  { icon: "i-phone", title: "Téléphone", lines: ["(+237) 696 61 39 46 / 243 81 02 96", "Lun - Ven : 8h00 - 17h00"] },
  { icon: "i-mail", title: "Email", lines: ["contacts@i-techsarl.com", "Réponse sous 24h"] },
  { icon: "i-pin", title: "Adresse", lines: ["2ème étage, Immeuble CAMCCUL, Rue Pau, Akwa - Douala", "Cameroun"] },
  { icon: "i-cal", title: "Horaires", lines: ["Lun - Ven : 8h00 - 17h00"] },
];

export const CALLBACK = {
  title: "Besoin d'une réponse rapide ?",
  text: "Envoyez-nous votre demande en quelques secondes. Elle sera transmise directement à notre équipe.",
  cta: "Envoyer une demande",
};

/* ---- Page Contact / Démo ---- */

export const DEMO_HERO = {
  images: [
    "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/33176072/pexels-photo-33176072.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
    "https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  ],
  h1: "Planifiez une démonstration avec nos experts",
  intro:
    "Découvrez comment les solutions I-TECH peuvent accompagner la croissance et la transformation digitale de votre organisation.",
};

export const EXPERTS = [
  {
    icon: "i-bank",
    tone: "blue" as const,
    title: "Banques commerciales",
    text: "Accompagnement des banques commerciales dans leur transformation digitale.",
    href: "#/secteurs/banques-commerciales",
  },
  {
    icon: "i-users",
    tone: "green" as const,
    title: "Microfinances",
    text: "Solutions complètes adaptées aux établissements de microfinance (EMF).",
    href: "#/secteurs/microfinances",
  },
  {
    icon: "i-grid",
    tone: "purple" as const,
    title: "Grandes entreprises",
    text: "Solutions RH, GED, comptabilité et développement spécifique.",
    href: "#/secteurs/grandes-entreprises",
  },
];

export const INTERESTS = [
  "Alpha Bank",
  "Alpha Microfinance",
  "Alpha Mobile Banking",
  "Alpha Monétique",
  "Alpha Comptabilité",
  "Alpha RH",
  "I-Collect",
  "Déclaration Bancaire",
];

export const COUNTRIES = [
  "Cameroun",
  "Gabon",
  "Congo",
  "Tchad",
  "République Centrafricaine",
  "Guinée Équatoriale",
  "Côte d'Ivoire",
  "Sénégal",
  "RD Congo",
  "Autre",
];

export const SECTORS = ["Microfinance", "Banques commerciales", "Grandes entreprises", "Autre"];

export const QUICK_CONTACT = [
  { icon: "i-phone", text: "(+237) 696 61 39 46 / 243 81 02 96" },
  { icon: "i-mail", text: "contacts@i-techsarl.com" },
  { icon: "i-pin", text: "2ème étage, Immeuble CAMCCUL, Rue Pau, Akwa - Douala" },
  { icon: "i-cal", text: "Lun - Ven : 8h00 - 17h00" },
];

export const TRUST_LOGOS = ["CEPAC", "COOPEC", "Crédit du Sahel", "BANGE BANK\nCAMEROUN", "FECECAVAM"];

export const FAQ = [
  {
    q: "Combien coûte une solution I-TECH ?",
    a: "Le coût dépend de la solution choisie, du nombre d'agences et d'utilisateurs, ainsi que des modules activés. Nous vous remettons un devis personnalisé après un premier échange.",
  },
  {
    q: "Combien de temps dure un projet ?",
    a: "Un déploiement standard dure entre 6 et 16 semaines selon le périmètre, la reprise des données et les intégrations à réaliser.",
  },
  {
    q: "Comment se déroule une démonstration ?",
    a: "Un expert I-TECH vous présente la solution en visioconférence ou dans vos locaux, sur la base de vos cas d'usage, pendant environ 45 minutes.",
  },
  {
    q: "Puis-je demander une version d'essai ?",
    a: "Oui, un environnement de démonstration peut être mis à votre disposition pour tester les principales fonctionnalités.",
  },
];

export const DEMO_CTA = {
  title: "Prêt à accélérer votre transformation digitale ?",
  text: "Nos experts sont à votre écoute pour vous accompagner.",
  cta: "Demander une démo",
};
