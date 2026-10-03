import { useEffect, useRef, useState } from "react";
import { Ic } from "../components/Sprite";
import SolutionArt from "../components/SolutionArt";
import { Crumbs } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import { getSolution, OVERVIEW, SOLUTIONS } from "../data/solutions";
import { useLanguage } from "../i18n";

const STORY_MS = 4800;

const CTA_PHOTO =
  "https://images.pexels.com/photos/7993903/pexels-photo-7993903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

/* Carrousel stories pour les cartes solutions (page Solutions) */
function NosSolutionsStories() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState<"next" | "prev" | null>(null);
  const [fromActive, setFromActive] = useState<number | null>(null);
  const motionTimer = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const n = SOLUTIONS.length;

  /* V17.18.4 — la molette n'agit plus sur la Gamme ALPHA.
     Le changement de gamme se fait uniquement via les contrôles et
     automatiquement toutes les 10 secondes, en boucle. */
  useEffect(() => {
    return () => {
      if (motionTimer.current) window.clearTimeout(motionTimer.current);
    };
  }, []);

  const go = (i: number, direction?: "next" | "prev") => {
    const wrapped = ((i % n) + n) % n;
    const dir = direction ?? (wrapped > active ? "next" : "prev");
    if (wrapped === active) return;
    setFromActive(active);
    setMotion(dir);
    if (motionTimer.current) window.clearTimeout(motionTimer.current);
    motionTimer.current = window.setTimeout(() => { setMotion(null); setFromActive(null); }, 860);
    setActive(wrapped);
  };


  useEffect(() => {
    const timer = window.setInterval(() => {
      go(active + 1, "next");
    }, 10000);
    return () => window.clearInterval(timer);
  }, [active, n]);

  return (
    <section className="nossol sol-focus-section" ref={sectionRef} style={{ "--sol-count": n } as React.CSSProperties}>
      <div className="sol-focus-sticky">
        <div className="container sol-focus-heading">
          <span className="sec-kicker center">{t("Gamme ALPHA")}</span>
          <h2 className="sec-title center">{t(OVERVIEW.nosSolutions)}</h2>
          <p className="sol-intro" style={{ textAlign: "center", margin: "14px auto 0" }}>
            {t("Une suite logicielle complète pour digitaliser vos opérations, renforcer votre conformité et améliorer l'expérience client.")}
          </p>
        </div>

        <div className={`sol-focus-stage ${motion ? `is-switching is-switching-${motion}` : ""}`} aria-live="polite">
          {SOLUTIONS.map((c, i) => {
            const delta = i - active;
            return (
              <article
                className={`sol-card tone-${c.tone} sol-focus-card ${i === active ? "is-active is-entering" : ""} ${i === fromActive && motion ? "is-exiting" : ""} ${delta < 0 ? "is-past" : "is-future"}`}
                style={{ "--sol-delta": delta, "--sol-abs": Math.abs(delta) } as React.CSSProperties}
                key={c.key}
                aria-hidden={Math.abs(delta) > 2}
              >
                <span className="sol-media" style={{ backgroundImage: `url('${c.img}')` }} aria-hidden="true" />
                <span className="sol-veil" aria-hidden="true" />
                <div className="sol-card-top">
                  <span className="sol-art"><SolutionArt id={c.key} className="sol-art-svg" /></span>
                  <span className="sol-index">{`0${i + 1}`}</span>
                </div>
                {c.tagline && <span className="st-tagline">{t(c.tagline)}</span>}
                <h4>{t(c.name)}</h4>
                <p>{t(c.description)}</p>
                {c.points && c.points.length > 0 && (
                  <ul className="sol-points">
                    {c.points.slice(0, 3).map((p) => <li key={p}><Ic id="i-check" />{t(p)}</li>)}
                  </ul>
                )}
                <a href={`#/solutions/${c.key}`} className="link sol-more">{t("En savoir plus")} <Ic id="i-arrow" /></a>
              </article>
            );
          })}
        </div>

        <div className="container sol-focus-controls">
          <div className="sol-story-nav">
            <button className="ssn-btn" aria-label={t("Précédent")} onClick={() => go(active - 1, "prev")}><Ic id="i-chev-l" /></button>
            <span className="ssn-count"><b>{`0${active + 1}`}</b> / {`0${n}`}</span>
            <button className="ssn-btn" aria-label={t("Suivant")} onClick={() => go(active + 1, "next")}><Ic id="i-chev-r" /></button>
          </div>
          <div className="sol-focus-progress" aria-hidden="true"><span style={{ width: `${((active + 1) / n) * 100}%` }} /></div>
        </div>
      </div>
    </section>
  );
}

function EcoItem({ solKey }: { solKey: string }) {
  const { t } = useLanguage();
  const s = getSolution(solKey);
  return (
    <a className={`eco-item tone-${s.tone}`} href={`#/solutions/${s.key}`}>
      <span className="eco-art" aria-hidden="true"><Ic id={s.icon} /></span>
      <span className="eco-txt">
        <b>{t(s.name)}</b>
        <span>{t(OVERVIEW.ecosystemDesc[solKey])}</span>
      </span>
      <Ic id="i-chev-r" />
    </a>
  );
}

export default function SolutionsPage() {
  const { t } = useLanguage();
  return (
    <div className="pg pg-solutions">
      {/* ===== Hero (photo carrousel + panneau vitré) ===== */}
      <section className="pg-hero on-photo">
        <HeroBg images={OVERVIEW.heroBg} tint="dark" />
        <div className="container">
          <Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("Solutions") }]} />
          <div className="pg-hero-grid solo">
            <div className="pg-hero-copy reveal visible">
              <span className="pg-eyebrow"><Ic id="i-layers" />{t("Gamme ALPHA · Solutions I-TECH")}</span>
              <h1>{t(OVERVIEW.h1)}</h1>
              <p>{t(OVERVIEW.intro)}</p>
              <div className="hero-actions">
                <a href="#/contact/demo" className="btn btn-primary">{t("Demander une démonstration")}</a>
                <a href="#/contact" className="btn btn-glass">{t("Parler à un expert")} <Ic id="i-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="pg-hero-wave" aria-hidden="true" />
      </section>

      {/* ===== Stats — 4 en haut + 1 centré, cartes en verre ===== */}
      <section className="ov-stats reveal">
        <div className="ov-stats-deco" aria-hidden="true" />
        <div className="container">
          <div className="ov-stats-row">
            {OVERVIEW.stats.map((s: any, i: number) => (
              <div className="ov-stat" key={s.label} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className={`ov-stat-ic ${s.img ? "has-img" : ""}`}>{s.img ? <img src={s.img} alt="" loading="lazy" /> : <Ic id={s.icon} />}</span>
                <b>{s.value}</b>
                <span>{t(s.label)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Écosystème ===== */}
      <section className="eco reveal">
        <div className="container">
          <h2 className="sec-title center">{t(OVERVIEW.ecosystemTitle)}</h2>
          <div className="eco-grid">
            <div className="eco-col">
              {OVERVIEW.ecosystemLeft.map((k) => <EcoItem key={k} solKey={k} />)}
            </div>
            <div className="eco-core">
              <span className="eco-ring r1" /><span className="eco-ring r2" />
              <div className="eco-circle">
                <b>{t(OVERVIEW.suiteTitle)}</b>
                <span>{t(OVERVIEW.suiteText)}</span>
              </div>
            </div>
            <div className="eco-col">
              {OVERVIEW.ecosystemRight.map((k) => <EcoItem key={k} solKey={k} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Nos solutions — carrousel stories ===== */}
      <NosSolutionsStories />

      {/* ===== CTA ===== */}
      <section className="ov-cta reveal">
        <div className="container">
          <div className="ov-cta-panel">
            <div className="ov-cta-copy">
              <h2>{t(OVERVIEW.ctaTitle)}</h2>
              <p>{t(OVERVIEW.ctaText)}</p>
              <div className="cta-actions">
                <a href="#/contact/demo" className="btn btn-primary">{t("Demander une démonstration")}</a>
                <a href="#/contact" className="btn btn-ghost-w">{t("Parler à un expert")}</a>
              </div>
            </div>
            <div className="ov-cta-photo">
              <img
                src={CTA_PHOTO}
                alt={t("Échange avec nos experts")}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "images/about.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
