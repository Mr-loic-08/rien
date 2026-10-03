import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import { getSolution } from "../data/solutions";
import { COMPANY_EXPERIENCE_TEXT } from "../data/company";

const EXPERTISES = [
  { icon: "i-grid", title: "Applications Web", text: "Portails clients, ERP, plateformes métiers sur mesure." },
  { icon: "i-phone", title: "Applications Mobiles", text: "Solutions natives Android et iOS performantes." },
  { icon: "i-bank", title: "Core Banking", text: "Plateformes financières complètes et spécialisées." },
  { icon: "i-link", title: "API & Intégrations", text: "Connexion et intégration avec vos systèmes tiers." },
  { icon: "i-book", title: "Gestion Documentaire", text: "GED, archivage et automatisation documentaire." },
  { icon: "i-bulb", title: "Solutions Sur Mesure", text: "Développement spécifique selon vos besoins métiers." },
];

const METHOD = [
  { icon: "i-book", n: "01", title: "Analyse", text: "Compréhension du besoin et étude de faisabilité" },
  { icon: "i-bulb", n: "02", title: "Conception", text: "Architecture, design et spécifications" },
  { icon: "i-layers", n: "03", title: "Développement", text: "Production de la solution, qualité et sécurité" },
  { icon: "i-conf", n: "04", title: "Tests", text: "Validation, optimisation" },
  { icon: "i-chart", n: "05", title: "Déploiement", text: "Mise en production et transfert de compétences" },
  { icon: "i-head", n: "06", title: "Support", text: "Maintenance, évolutions et accompagnement" },
];

const REASONS = [
  { icon: "i-users", title: "Expertise Métier", text: `${COMPANY_EXPERIENCE_TEXT} d'expérience dans le secteur financier` },
  { icon: "i-head", title: "Équipe Locale", text: "Proximité, réactivité et compréhension du terrain" },
  { icon: "i-shield", title: "Sécurité", text: "Protection des données et conformité réglementaire" },
  { icon: "i-link", title: "Intégration", text: "Connexion fluide avec vos systèmes existants" },
  { icon: "i-swap", title: "Évolutivité", text: "Des solutions prêtes à évoluer avec votre croissance" },
  { icon: "i-check", title: "Accompagnement", text: "Support expert pendant et après le déploiement" },
];

const PROJECTS = [
  {
    title: "CEPAC",
    tag: "Core Banking",
    text: "Migration du système d'information vers ALPHA Core Banking.",
    image: "https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=560",
  },
  {
    title: "COOPEC",
    tag: "Digitalisation",
    text: "Digitalisation des opérations de collecte et de gestion.",
    image: "https://images.pexels.com/photos/8069481/pexels-photo-8069481.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=560",
  },
  {
    title: "Banque Bank Cameroon",
    tag: "Mobile Banking",
    text: "Développement de l'application Mobile Banking complète.",
    image: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=560",
  },
];

export default function GenieLogicielPage() {
  const sol = getSolution("genie-logiciel");
  return (
    <div className="pg genie-page" key="genie-logiciel">
      {/* ===== Hero ===== */}
      <section className="genie-hero">
        <HeroBg images={sol.heroBg ?? []} tint="dark" />
        <div className="container">
          <Crumbs trail={[{ label: "Accueil", href: "#accueil" }, { label: "Solutions", href: "#/solutions" }, { label: "Génie Logiciel" }]} />
          <div className="genie-hero-grid solo">
            <div className="genie-copy">
              <span className="genie-kicker"><Ic id="i-layers" />Solutions sur mesure</span>
              <h1>Génie Logiciel</h1>
              <h2>Concevez des solutions logicielles adaptées à votre métier</h2>
              <p>Nous développons des plateformes web, mobiles et métiers robustes, évolutives et sécurisées pour accompagner la croissance de votre organisation.</p>
              <div className="hero-actions">
                <a href="#/contact" className="btn btn-primary">Parler à un expert <Ic id="i-arrow" /></a>
                <a href="#/contact/demo" className="btn btn-glass">Demander une démonstration</a>
              </div>
            </div>
          </div>
        </div>
        <div className="genie-cut" aria-hidden="true" />
      </section>

      {/* ===== Pourquoi sur mesure ===== */}
      <section className="genie-why reveal">
        <div className="container">
          <h2 className="sec-title center">Pourquoi développer une solution sur mesure ?</h2>
          <div className="genie-why-grid">
            <div className="genie-why-card">
              <span><Ic id="i-swap" /></span><div><b>Automatiser</b><p>Réduisez les tâches manuelles et améliorez la productivité de vos équipes.</p></div>
            </div>
            <div className="genie-why-card">
              <span><Ic id="i-grid" /></span><div><b>Centraliser</b><p>Regroupez vos données et processus sur une plateforme unique et sécurisée.</p></div>
            </div>
            <div className="genie-why-card">
              <span><Ic id="i-chart" /></span><div><b>Évoluer</b><p>Disposez d'une solution qui s'adapte à votre croissance et à vos besoins.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Domaines d'expertise ===== */}
      <section className="genie-domains reveal">
        <div className="container">
          <div className="genie-title-row"><span className="sec-kicker">Expertise</span><h2 className="sec-title left">Nos domaines d'expertise</h2></div>
          <div className="genie-domain-grid">
            {EXPERTISES.map((e) => (
              <article className="genie-domain" key={e.title}>
                <span className="genie-domain-ic"><Ic id={e.icon} /></span>
                <div><h3>{e.title}</h3><p>{e.text}</p></div>
                <Ic id="i-arrow" className="genie-domain-arr" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Méthodologie ===== */}
      <section className="genie-method reveal">
        <div className="container">
          <span className="sec-kicker center">De l'idée au déploiement</span>
          <h2 className="sec-title center">Notre méthodologie</h2>
          <div className="genie-timeline">
            {METHOD.map((m, i) => (
              <div className="genie-step" key={m.n}>
                <span className="genie-step-line" aria-hidden="true" />
                <span className="genie-step-ic"><Ic id={m.icon} /></span>
                <b>{m.n}</b><h3>{m.title}</h3><p>{m.text}</p>
                {i === METHOD.length - 1 ? null : <span className="genie-arrow"><Ic id="i-arrow" /></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pourquoi I-TECH ===== */}
      <section className="genie-reasons reveal">
        <div className="container">
          <h2 className="sec-title center">Pourquoi choisir I-TECH ?</h2>
          <div className="genie-reason-grid">
            {REASONS.map((r) => (
              <article className="genie-reason" key={r.title}>
                <span><Ic id={r.icon} /></span><h3>{r.title}</h3><p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Projets ===== */}
      <section className="genie-projects reveal">
        <div className="container">
          <div className="genie-project-heading"><div><span className="sec-kicker">Réalisations</span><h2 className="sec-title left">Des projets concrets</h2></div><a href="#realisations" className="link">Voir toutes nos réalisations <Ic id="i-arrow" /></a></div>
          <div className="genie-project-grid">
            {PROJECTS.map((p) => (
              <article className="genie-project" key={p.title}>
                <div className="genie-project-img"><img src={p.image} alt={p.title} loading="lazy" /><span>{p.tag}</span></div>
                <div className="genie-project-body"><h3>{p.title}</h3><p>{p.text}</p><a href="#realisations" className="link">Voir l'étude de cas <Ic id="i-arrow" /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
