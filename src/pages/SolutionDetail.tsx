import { useState, type CSSProperties } from "react";
import { Ic } from "../components/Sprite";
import SolutionArt from "../components/SolutionArt";
import { Crumbs, ShotDash, ShotDoc, ShotPhone } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import CoreBankingArchitecture from "../components/CoreBankingArchitecture";
import { TONE_HEX, type Solution } from "../data/solutions";
import { useLanguage } from "../i18n";

function Shots({ sol }: { sol: Solution }) {
  const { t } = useLanguage();
  switch (sol.shots) {
    case "collecte":
      return (
        <div className="shots-row2">
          <ShotPhone mode="collecte" title="I-Collect" />
          <ShotPhone mode="bank" title="MyCollect" />
        </div>
      );
    case "mobile":
      return (
        <div className="shots-row2">
          <ShotPhone mode="dark" title="ALPHA" />
          <ShotPhone mode="bank" title="ALPHA" />
        </div>
      );
    case "hr":
      return (
        <>
          <ShotDash seed={4} label={t("Gestion du personnel")} />
          <div className="shots-row"><ShotDoc /><ShotDash seed={2} label={t("Reporting RH")} /></div>
        </>
      );
    case "report":
      return (
        <>
          <ShotDash seed={3} label={t("États réglementaires")} />
          <div className="shots-row"><ShotDoc /><ShotDash seed={5} label={t("Contrôles & validations")} /></div>
        </>
      );
    default:
      return (
        <>
          <ShotDash seed={1} label={t("Tableau de bord")} />
          <div className="shots-row"><ShotDash seed={2} label={t("Comptes")} /><ShotDash seed={3} label={t("Reporting")} /></div>
        </>
      );
  }
}

export default function SolutionDetail({ sol }: { sol: Solution }) {
  const { t } = useLanguage();
  const [acc, setAcc] = useState(0);
  const [feat, setFeat] = useState(0);
  const tone = TONE_HEX[sol.tone];

  return (
    <div className={`pg pg-detail ${sol.key === "core-banking" ? "core-banking-page" : ""}`} style={{ "--tone": tone } as CSSProperties} key={sol.key}>
      {/* ===== Hero (photo carrousel dédiée + panneau vitré) ===== */}
      <section className="pg-hero detail on-photo">
        <HeroBg images={sol.heroBg ?? []} tint="dark" />
        <div className="container">
          <Crumbs
            trail={[
              { label: t("Accueil"), href: "#accueil" },
              { label: t("Solutions"), href: "#/solutions" },
              { label: t(sol.name) },
            ]}
          />
          <div className="pg-hero-grid solo">
            <div className="pg-hero-copy reveal visible">
              <span className="detail-art"><SolutionArt id={sol.key} className="detail-art-svg" /></span>
              <span className="pg-eyebrow"><Ic id="i-layers" />{t("Solution ALPHA")}</span>
              <h1>{t(sol.name)}</h1>
              <p className="pg-tagline">{t(sol.tagline)}</p>
              <p className="pg-detail-text">{t(sol.detail)}</p>
              <div className="hero-actions">
                <a href="#/contact/demo" className="btn btn-primary">{t("Demander une démo")}</a>
                <a href="#/contact" className="btn btn-glass">{t("Parler à un expert")} <Ic id="i-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="pg-hero-wave" aria-hidden="true" />
      </section>

      {/* ===== Bandeau : architecture / mini fonctionnalités ===== */}
      {sol.band && (
        sol.key === "core-banking" ? (
          <CoreBankingArchitecture title={t(sol.band.title)} items={sol.band.items.map((m) => ({ ...m, name: t(m.name), desc: m.desc ? t(m.desc) : undefined }))} />
        ) : (
          <section className="band reveal">
            <div className="container">
              <h2 className="sec-title center">{t(sol.band.title)}</h2>
              {sol.band.style === "cards" ? (
                <div className="band-cards">
                  {sol.band.items.map((m) => (
                    <div className="band-card" key={m.name}>
                      <span className="band-ic"><Ic id={m.icon} /></span>
                      <b>{t(m.name)}</b>
                      {m.desc && <span>{t(m.desc)}</span>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="band-mini">
                  {sol.band.items.map((m) => (
                    <div className="mini-item" key={m.name}>
                      <span className="mini-ic"><Ic id={m.icon} /></span>
                      <span>{t(m.name)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      )}

      {/* ===== Fonctionnalités + captures ===== */}
      <section className="featshots reveal">
        <div className="container">
          <div className="featshots-grid">
            <div className="feats">
              <h2 className="sec-title left">{t("Fonctionnalités clés")}</h2>
              {sol.accordion ? (
                <div className="accordion">
                  {sol.features.map((f, i) => (
                    <div className={`acc-item ${acc === i ? "open" : ""}`} key={f.title}>
                      <button type="button" onClick={() => setAcc(acc === i ? -1 : i)} aria-expanded={acc === i}>
                        {t(f.title)}
                        <span className="acc-plus" />
                      </button>
                      <div className="acc-body"><p>{f.desc ? t(f.desc) : ""}</p></div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="feat-select">
                  {sol.features.map((f, i) => (
                    <li key={f.title}>
                      <button
                        type="button"
                        className={`feat-chip ${feat === i ? "sel" : ""}`}
                        onClick={() => setFeat(i)}
                        onMouseEnter={() => setFeat(i)}
                      >
                        <span className="feat-num">{`0${i + 1}`}</span>
                        <span className="feat-chk"><Ic id="i-check" /></span>
                        <span className="feat-txt">{t(f.title)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="shots">
              <h2 className="sec-title left">{t("Captures d’écran")}</h2>
              <Shots sol={sol} />
              <a href="#" className="link shots-more">{t("Voir plus de captures")} <Ic id="i-arrow" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bénéfices ===== */}
      <section className="benefits reveal">
        <div className="container">
          <h2 className="sec-title center">{t(sol.benefitsTitle)}</h2>
          <div className="ben-grid">
            {sol.benefits.map((b, i) => (
              <div className="ben-item" key={b.text} style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="ben-ic"><Ic id={b.icon} /></span>
                <span className="ben-txt">{t(b.text)}</span>
                <span className="ben-num">{`0${i + 1}`}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Barre CTA ===== */}
      <section className="ctabar reveal">
        <div className="container">
          <div className="ctabar-panel">
            <p>{t(sol.cta)}</p>
            <div className="cta-actions">
              <a href="#/contact/demo" className="btn btn-primary">{t("Demander une démo")}</a>
              <a href="#/contact" className="btn btn-ghost-w">{t("Parler à un expert")}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
