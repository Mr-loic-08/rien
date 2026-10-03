import { COMPANY_EXPERIENCE_PLUS, COMPANY_EXPERIENCE_TEXT } from "./company";

export type EnterpriseKey = "apropos" | "carrieres" | "partenaires";

export const ENTERPRISE_HERO = {
  image: "https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&h=1000",
  title: "L'Entreprise",
  subtitle: "Construisons l'avenir de la transformation digitale en Afrique Centrale",
  text: `Depuis plus de ${COMPANY_EXPERIENCE_TEXT}, I-TECH accompagne les institutions financières et les entreprises dans leur modernisation grâce à des solutions innovantes et adaptées à leur environnement.`,
};

export const ENTERPRISE_STATS = [
  { icon: "i-cal", value: COMPANY_EXPERIENCE_PLUS, label: "Années d'expérience" },
  { icon: "i-bank", value: "250+", label: "Clients accompagnés" },
  { icon: "i-head", value: "24/7", label: "Support technique" },
  { icon: "i-pin", value: "Zone CEMAC", label: "Présence régionale" },
];

export const ENTERPRISE_CARDS = [
  {
    key: "apropos" as EnterpriseKey,
    icon: "i-users",
    title: "À PROPOS",
    text: "Découvrez notre histoire, notre mission, nos valeurs et notre équipe.",
    image: "https://images.pexels.com/photos/8547285/pexels-photo-8547285.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600",
    cta: "En savoir plus",
  },
  {
    key: "carrieres" as EnterpriseKey,
    icon: "i-bulb",
    title: "CARRIÈRES",
    text: "Rejoignez une équipe passionnée par l'innovation et impactez le futur.",
    image: "https://images.pexels.com/photos/7793926/pexels-photo-7793926.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600",
    cta: "Voir les opportunités",
  },
  {
    key: "partenaires" as EnterpriseKey,
    icon: "i-link",
    title: "PARTENAIRES",
    text: "Découvrez les organisations et technologies qui collaborent avec nous.",
    image: "https://images.pexels.com/photos/7979601/pexels-photo-7979601.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600",
    cta: "Voir nos partenaires",
  },
];

export const ABOUT = {
  heroImage: "https://images.pexels.com/photos/8547285/pexels-photo-8547285.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  heroTitle: "À propos de I-TECH",
  heroText: `${COMPANY_EXPERIENCE_TEXT} d'innovation au service de la transformation digitale en Afrique Centrale.`,
  timeline: [
    { year: "2007", title: "Création de l'entreprise", text: "I-TECH SARL" },
    { year: "2012", title: "Lancement de la suite ALPHA", text: "Core Banking" },
    { year: "2016", title: "Expansion régionale", text: "La zone CEMAC" },
    { year: "2020", title: "Plus de 250 institutions", text: "institutions accompagnées" },
    { year: "Aujourd'hui", title: "Leader des solutions", text: "technologiques pour les institutions financières" },
  ],
  mission: "Accompagner les acteurs économiques dans leur transformation digitale grâce à des solutions fiables, innovantes et adaptées aux réalités africaines.",
  values: [
    { icon: "i-bulb", title: "Innovation", text: "Nous anticipons les évolutions du marché grâce à la recherche et au développement." },
    { icon: "i-swap", title: "Flexibilité", text: "Nous adaptons nos solutions à chaque contexte et besoin spécifique de nos clients." },
    { icon: "i-chart", title: "Dynamisme", text: "Nous favorisons l'amélioration continue et l'excellence opérationnelle." },
  ],
  team: [
    { title: "Direction", role: "Pilotage stratégique", image: "https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500" },
    { title: "Experts métiers", role: "Conseil financier", image: "https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500" },
    { title: "Développeurs", role: "Génie logiciel", image: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500" },
    { title: "Consultants", role: "Accompagnement", image: "https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500" },
    { title: "Support", role: "Assistance client", image: "https://images.pexels.com/photos/8867410/pexels-photo-8867410.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500" },
  ],
  reasons: [
    { icon: "i-users", title: "Expertise métier", text: `${COMPANY_EXPERIENCE_TEXT} d'expérience au service de nos clients.` },
    { icon: "i-bulb", title: "Innovation", text: "Des solutions modernes et évolutives." },
    { icon: "i-head", title: "Support local", text: "Une équipe disponible 24/7 pour vous accompagner." },
    { icon: "i-shield", title: "Sécurité", text: "Protection maximale de vos données et opérations." },
    { icon: "i-link", title: "Accompagnement", text: "De l'analyse à la mise en production et au-delà." },
  ],
};

export const CAREERS = {
  heroImage: "https://images.pexels.com/photos/7793926/pexels-photo-7793926.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  heroTitle: "Rejoignez l'équipe I-TECH",
  heroText: "Participez à la conception de solutions financières de demain.",
  highlights: [
    { icon: "i-users", title: "Environnement collaboratif" },
    { icon: "i-chart", title: "Évolution professionnelle" },
    { icon: "i-bulb", title: "Projets stimulants" },
    { icon: "i-globe", title: "Impact concret" },
  ],
  jobs: [
    { icon: "i-layers", title: "Développeur Full Stack", meta: "Yaoundé, Cameroun · CDI", text: "Développer des applications web et mobiles robustes et évolutives." },
    { icon: "i-book", title: "Consultant Fonctionnel", meta: "Yaoundé, Cameroun · CDI", text: "Recueillir les besoins, analyser les processus métiers et accompagner nos clients." },
    { icon: "i-lock", title: "Administrateur Systèmes", meta: "Yaoundé, Cameroun · CDI", text: "Assurer l'administration, la disponibilité et la sécurité des infrastructures." },
    { icon: "i-head", title: "Support Technique", meta: "Yaoundé, Cameroun · CDI", text: "Assurer le support de niveau 1 et 2 auprès de nos utilisateurs." },
  ],
  reasons: [
    { icon: "i-bulb", title: "Apprentissage continu", text: "Formations et montée en compétences régulières." },
    { icon: "i-users", title: "Équilibre vie pro / perso", text: "Horaires flexibles et bien-être au quotidien." },
    { icon: "i-link", title: "Culture d'équipe", text: "Esprit d'entraide et bienveillance au quotidien." },
    { icon: "i-chart", title: "Rémunération attractive", text: "Packages compétitifs et avantages sociaux." },
  ],
};

export const PARTNERS = {
  heroImage: "https://images.pexels.com/photos/7979601/pexels-photo-7979601.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  heroTitle: "Nos partenaires",
  heroText: "Des collaborations solides pour des solutions performantes et durables.",
  techTitle: "Partenaires technologiques",
  techText: "Nous collaborons avec des éditeurs et fournisseurs de technologies de premier plan.",
  tech: [
    { name: "Microsoft", suffix: "Partner", tone: "ms" },
    { name: "ORACLE", suffix: "", tone: "oracle" },
    { name: "aws", suffix: "partner network", tone: "aws" },
    { name: "vmware", suffix: "Partner Connect", tone: "vmware" },
    { name: "DELL", suffix: "Technologies Partner Program", tone: "dell" },
    { name: "FORTINET", suffix: "Partner", tone: "fortinet" },
  ],
  instTitle: "Partenaires institutionnels",
  instText: "Nous travaillons avec des organisations et institutions pour promouvoir l'innovation et la croissance.",
  institutions: ["COBAC", "BEAC", "APBF", "BANGE BANK\nCAMEROUN", "GIMAC"],
};

export function getEnterprisePage(key: EnterpriseKey) {
  return key === "apropos" ? ABOUT : key === "carrieres" ? CAREERS : PARTNERS;
}