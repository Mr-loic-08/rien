import { Ic } from "../components/Sprite";
import SecteurHero from "../components/SecteurHero";
import { prefetchVideo } from "../router";
import { CIBLES, SECTEURS } from "../data/secteurs";
import { useLanguage } from "../i18n";

export default function SecteursPage() {
  const { t } = useLanguage();
  return (
    <div className="pg sx pg-secteurs">
      <SecteurHero
        media={CIBLES}
        trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("Secteurs / Cibles") }]}
        eyebrow={t("Secteurs · Cibles")}
        title={t(CIBLES.h1)}
        intro={t(CIBLES.intro)}
        cta={t(CIBLES.cta)}
        ctaHref="#sx-pick"
        ghostHref="#sx-approche"
        ghostLabel={t("Notre approche")}
      />

      {/* ===== Choisissez votre secteur ===== */}
      <section className="sx-pick reveal" id="sx-pick">
        <div className="container">
          <h2 className="sec-title center">{t(CIBLES.pickTitle)}</h2>
          <p className="sec-sub center">{t(CIBLES.pickSub)}</p>
          <div className="sx-cards">
            {SECTEURS.map((s) => (
              <a
                key={s.key}
                href={`#/secteurs/${s.key}`}
                className={`sx-secteur-card sx-tone-${s.tone}`}
                onMouseEnter={() => prefetchVideo(s.video.hd)}
              >
                <span className="sx-sc-photo">
                  <img
                    src={s.cardImg}
                    alt={t(s.label)}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = s.photoFallback;
                    }}
                  />
                  <span className={`ico sx-sc-ico ${s.tone === "green" ? "green" : s.tone === "blue" ? "blue" : "purple"}`}>
                    <Ic id={s.icon} />
                  </span>
                </span>
                <span className="sx-sc-body">
                  <b>{t(s.label)}</b>
                  <span>{t(s.cardDesc)}</span>
                  <em className="link">{t("Découvrir")} <Ic id="i-arrow" /></em>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="sx-stats reveal">
        <div className="container">
          <div className="sx-stats-row">
            {CIBLES.stats.map((s: any) => (
              <div className="sx-stat" key={s.label}>
                <span className={`sx-stat-ic ${s.img ? "has-img" : ""}`}>{s.img ? <img src={s.img} alt="" loading="lazy" /> : <Ic id={s.icon} />}</span>
                <b>{s.value}</b>
                <span>{t(s.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Notre approche ===== */}
      <section className="sx-approche reveal" id="sx-approche">
        <div className="container">
          <div className="sx-approche-grid">
            <div className="sx-approche-copy">
              <span className="sec-kicker">{t("Méthode")}</span>
              <h2 className="sec-title left">{t(CIBLES.approcheTitle)}</h2>
              <p>{t(CIBLES.approcheText)}</p>
              <a href="#/contact" className="btn btn-primary">{t("Parler à un expert")} <Ic id="i-arrow" /></a>
            </div>
            <div className="sx-pillars">
              {CIBLES.pillars.map((p, i) => (
                <div className="sx-pillar" key={p.title} style={{ transitionDelay: `${i * 90}ms` }}>
                  <span className="sx-pillar-ic"><Ic id={p.icon} /></span>
                  <div>
                    <b>{t(p.title)}</b>
                    <span>{t(p.text)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="sx-cta reveal">
        <div className="container">
          <div className="sx-cta-panel">
            <div>
              <h2>{t("Vous ne savez pas par où commencer ?")}</h2>
              <p>{t("Décrivez-nous votre activité, nous vous orientons vers le secteur et les solutions adaptés.")}</p>
            </div>
            <div className="cta-actions">
              <a href="#/contact/demo" className="btn btn-primary">{t("Trouver ma solution")} <Ic id="i-arrow" /></a>
              <a href="#/contact" className="btn btn-ghost-w">{t("Parler à un expert")}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
