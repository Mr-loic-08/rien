import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import { ENTERPRISE_CARDS, ENTERPRISE_HERO, ENTERPRISE_STATS } from "../data/entreprise";
import { useLanguage } from "../i18n";

export default function EntreprisePage() {
  const { t } = useLanguage();
  return (
    <div className="pg ent-page" key="entreprise">
      <section className="ent-hero">
        <div className="ent-hero-media" aria-hidden="true">
          <div className="ent-hero-photo ent-hero-media-photo" style={{ backgroundImage: `url('${ENTERPRISE_HERO.image}')` }} />
          <video className="ent-hero-video" autoPlay muted loop playsInline preload="metadata">
            <source src="/i-tech-enterprise-hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="ent-hero-veil" />
        <div className="container">
          <Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("L'Entreprise") }]} />
          <div className="ent-hero-copy">
            <span className="ent-kicker"><Ic id="i-users" />I-TECH SARL</span>
            <h1>{t(ENTERPRISE_HERO.title)}</h1>
            <h2>{t(ENTERPRISE_HERO.subtitle)}</h2>
            <p>{t(ENTERPRISE_HERO.text)}</p>
            <div className="hero-actions">
              <a href="#/entreprise/apropos" className="btn btn-primary">{t("Découvrir notre histoire")} <Ic id="i-arrow" /></a>
              <a href="#/entreprise/carrieres" className="btn btn-glass">{t("Rejoindre notre équipe")}</a>
            </div>
          </div>
        </div>
        <span className="ent-hero-grid" aria-hidden="true" />
      </section>

      <section className="ent-stats reveal">
        <span className="ent-stats-night-layer" aria-hidden="true" />
        <div className="container"><div className="ent-stat-row">
          {ENTERPRISE_STATS.map((s: any) => <div className="ent-stat" key={t(s.label)}><span className={s.img ? "has-img" : ""}>{s.img ? <img src={s.img} alt="" loading="lazy" /> : <Ic id={s.icon} />}</span><b>{s.value}</b><small>{t(s.label)}</small></div>)}
        </div></div>
      </section>

      <section className="ent-universe reveal">
        <span className="ent-universe-night-layer" aria-hidden="true" />
        <div className="container">
          <span className="sec-kicker center">{t("Notre univers")}</span>
          <h2 className="sec-title center">{t("Découvrez l'univers I-TECH")}</h2>
          <div className="ent-card-grid">
            {ENTERPRISE_CARDS.map((card) => <a className="ent-card" href={`#/entreprise/${card.key}`} key={card.key}>
              <div className="ent-card-img"><img src={card.image} alt={t(card.title)} loading="lazy" /><span className="ent-card-ico"><Ic id={card.icon} /></span></div>
              <div className="ent-card-body"><h3>{t(card.title)}</h3><p>{t(card.text)}</p><span className="link">{t(card.cta)} <Ic id="i-arrow" /></span></div>
            </a>)}
          </div>
        </div>
      </section>

      <section className="ent-news reveal"><div className="container"><div><Ic id="i-mail" /><div><h2>{t("Restez informé de nos actualités")}</h2><p>{t("Recevez nos dernières actualités, événements et ressources.")}</p></div></div><form><input type="email" placeholder={t("Votre adresse e-mail")} aria-label={t("Votre adresse e-mail")} required /><button className="btn btn-primary" type="submit">{t("S'abonner")}</button></form></div></section>
    </div>
  );
}