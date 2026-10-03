import { useMemo, useState, type FormEvent } from "react";
import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import { useLanguage } from "../i18n";

type Category = "Tous les articles" | "Produits" | "Projets" | "Innovation" | "Conseils" | "Événements";

const CATEGORIES: Category[] = ["Tous les articles", "Produits", "Projets", "Innovation", "Conseils", "Événements"];

const ARTICLES = [
  {
    title: "I-COLLECT : La solution qui révolutionne la collecte journalière",
    description: "La collecte journalière constitue l'un des services phares des établissements de microfinance (EMF). Ce dispositif permet aux particuliers, sur leurs lieux d'activité ou de résidence, de constituer une épargne de manière progressive et quotidienne…",
    date: "Publié le 4 novembre 2021",
    author: "Par Maguy Laurence MATALA",
    category: "Produits" as Category,
    image: "https://images.pexels.com/photos/5239806/pexels-photo-5239806.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640",
  },
  {
    title: "Migration du système d'information de la CEPAC vers la plateforme ALPHA : une transition prometteuse",
    description: "Depuis plusieurs semaines, la CEPAC-Solidarité a engagé un processus de rénovation de son core banking system, conçu pour objectif l'intégration de la plateforme ALPHA au sein de son système d'information.",
    date: "Publié le 4 novembre 2021",
    author: "Par M.L. MATALA",
    category: "Projets" as Category,
    image: "https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640",
  },
  {
    title: "Open Banking : vers un écosystème financier plus ouvert et collaboratif",
    description: "L'Open Banking transforme profondément la manière dont les institutions financières interagissent entre elles et avec leurs clients. Grâce aux API, les services deviennent plus fluides…",
    date: "Publié le 25 octobre 2021",
    author: "Par Équipe I-TECH",
    category: "Innovation" as Category,
    image: "https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640",
  },
];

const HERO_IMAGES = [
  "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  "https://images.pexels.com/photos/7691769/pexels-photo-7691769.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
  "https://images.pexels.com/photos/19805885/pexels-photo-19805885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900",
];

function NewsBoard() {
  const { t } = useLanguage();
  return (
    <div className="news-board" aria-hidden="true">
      <div className="nb-top"><i /><i /><i /><span>i-tech.com/actualites</span></div>
      <div className="nb-body">
        <aside><b /><i /><i /><i /><i /></aside>
        <main><div className="nb-title"><b>{t("Actualités")}</b><span /></div>{[0, 1, 2, 3].map((i) => <div className="nb-row" key={i}><span /><div><b /><i /><em /></div></div>)}</main>
      </div>
    </div>
  );
}

export default function RessourcesPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Category>("Tous les articles");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const items = useMemo(() => active === "Tous les articles" ? ARTICLES : ARTICLES.filter((a) => a.category === active), [active]);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="pg resources-page" key="ressources">
      {/* ===== Hero ===== */}
      <section className="resources-hero">
        <HeroBg images={HERO_IMAGES} tint="dark" />
        <div className="container">
          <Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("Ressources") }, { label: t("Actualités") }]} />
          <div className="resources-hero-grid">
            <div className="resources-copy"><span className="res-kicker"><Ic id="i-book" />{t("Veille I-TECH")}</span><h1>{t("Actualités & Ressources")}</h1><p>{t("Restez informés des dernières tendances, projets et innovations du secteur financier.")}</p></div>
            <NewsBoard />
          </div>
        </div>
        <div className="res-cut" aria-hidden="true" />
      </section>

      {/* ===== Filtres + articles ===== */}
      <section className="res-content reveal">
        <div className="container">
          <div className="res-filters" role="tablist" aria-label={t("Filtrer les ressources")}>
            {CATEGORIES.map((c) => <button key={c} type="button" className={active === c ? "on" : ""} onClick={() => { setActive(c); setPage(1); }}>{t(c)}</button>)}
          </div>
          <div className="res-list">
            {items.length ? items.map((a, i) => (
              <article className="res-article" key={a.title} style={{ transitionDelay: `${i * 90}ms` }}>
                <a href="#ressources" className="res-image"><img src={a.image} alt="" loading="lazy" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "images/about.jpg"; }} /><span>{t(a.category)}</span></a>
                <div className="res-article-body"><div className="res-meta"><span>{t(a.date)}</span><i /> <span>{t(a.author)}</span></div><h2>{t(a.title)}</h2><p>{t(a.description)}</p><a className="link" href="#ressources">{t("Lire l'article")} <Ic id="i-arrow" /></a></div>
              </article>
            )) : <div className="res-empty"><Ic id="i-book" /><h2>{t("Aucun article dans cette catégorie")}</h2><p>{t("Revenez prochainement pour découvrir de nouvelles ressources.")}</p></div>}
          </div>
          <nav className="res-pagination" aria-label={t("Pagination")}>
            {[1, 2, 3, 4].map((n) => <button key={n} className={page === n ? "on" : ""} onClick={() => setPage(n)}>{n}</button>)}<span>…</span><button onClick={() => setPage(12)}>12</button><button aria-label={t("Page suivante")} onClick={() => setPage((p) => Math.min(12, p + 1))}><Ic id="i-chev-r" /></button>
          </nav>
        </div>
      </section>

      {/* ===== Newsletter ===== */}
      <section className="res-newsletter reveal">
        <div className="container"><div className="res-news-panel"><span className="res-news-ic"><Ic id="i-mail" /></span><div><h2>{subscribed ? t("Merci pour votre inscription !") : t("Ne manquez aucune actualité")}</h2><p>{subscribed ? t("Vous recevrez nos prochaines actualités et ressources.") : t("Abonnez-vous à notre newsletter et recevez nos dernières actualités et ressources.")}</p></div>{!subscribed && <form onSubmit={onSubscribe}><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("Votre adresse email")} aria-label={t("Votre adresse email")} required /><button className="btn btn-primary" type="submit">{t("S'abonner")}</button></form>}</div></div>
      </section>
    </div>
  );
}