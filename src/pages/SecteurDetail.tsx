import type { CSSProperties } from "react";
import { Ic } from "../components/Sprite";
import SecteurHero from "../components/SecteurHero";
import MicrofinanceIssues from "../components/MicrofinanceIssues";
import RecommendedMapping from "../components/RecommendedMapping";
import { SECTEUR_HEX, type Secteur } from "../data/secteurs";
import { useLanguage } from "../i18n";

export default function SecteurDetail({ secteur: s }: { secteur: Secteur }) {
  const { t } = useLanguage();
  const tone = SECTEUR_HEX[s.tone];

  return (
    <div className={`pg sx pg-secteur secteur-${s.key}`} style={{ "--tone": tone } as CSSProperties} key={s.key}>
      <SecteurHero
        media={s}
        trail={[
          { label: t("Accueil"), href: "#accueil" },
          { label: t("Secteurs / Cibles"), href: "#/secteurs" },
          { label: t(s.short) },
        ]}
        eyebrow={t(`Secteur · ${s.short}`)}
        title={t(s.tagline)}
        intro={t(s.intro)}
        cta={t(s.cta)}
      />

      {/* ===== Corps de page : l'image du secteur en fond flou ===== */}
      <div className="sx-body">
        <div className="sx-bodyfx" aria-hidden="true">
          <img
            className="sx-bodyfx-img"
            src={s.photo}
            alt=""
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = s.photoFallback;
            }}
          />
          <div className="sx-bodyfx-veil" />
        </div>

      {/* ===== Enjeux / problématiques ===== */}
      {s.key === "microfinances" ? (
        <MicrofinanceIssues />
      ) : (
        <section className="sx-issues reveal">
          <div className="container">
            <h2 className="sec-title center">{t(s.issuesTitle)}</h2>
            <div className={`sx-issues-grid n${s.issues.length}`}>
              {s.issues.map((it, i) => (
                <div className="sx-issue" key={it.text} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="sx-issue-ic"><Ic id={it.icon} /></span>
                  <span>{t(it.text)}</span>
                  <em>{`0${i + 1}`}</em>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Solutions recommandées ===== */}
      <RecommendedMapping />

      {/* ===== Bénéfices ===== */}
      <section className="sx-benefits reveal">
        <div className="container">
          <h2 className="sec-title center light">{t(s.benefitsTitle)}</h2>
          <div className="sx-ben-grid">
            {s.benefits.map((b, i) => (
              <div className="sx-ben" key={b.text} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="sx-ben-ic"><Ic id={b.icon} /></span>
                <span>{t(b.text)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Architecture bancaire (banques uniquement) ===== */}
      {s.arch && (
        <section className="sx-arch reveal">
          <div className="container">
            <h2 className="sec-title center">{t("Architecture bancaire")}</h2>
            <div className="sx-flow">
              {s.arch.map((step, i) => (
                <div className="sx-step" key={step} style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="sx-step-dot"><Ic id={i === 0 ? "i-users" : i === s.arch!.length - 1 ? "i-chart" : "i-bank"} /></span>
                  <b>{t(step)}</b>
                  {i < s.arch!.length - 1 && <span className="sx-flow-arrow"><Ic id="i-arrow" /></span>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Ils nous font confiance ===== */}
      <section className="sx-proofs reveal">
        <div className="container">
          <h2 className="sec-title center">{t("Ils nous font confiance")}</h2>
          <div className="sx-proofs-grid">
            {s.proofs.map((p, i) => (
              <div className={`sx-proof ${p.kind}`} key={p.title + i} style={{ transitionDelay: `${i * 90}ms` }}>
                {p.kind === "quote" ? (
                  <>
                    <span className="sx-quote-mark">“</span>
                    <b>{t(p.title)}</b>
                    <p>« {t(p.text)} »</p>
                    {p.author && <em>— {t(p.author)}</em>}
                  </>
                ) : (
                  <>
                    <span className="sx-proof-ic"><Ic id="i-check" /></span>
                    <b>{t(p.title)}</b>
                    <span>{t(p.text)}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Barre CTA ===== */}
      <section className="sx-cta reveal">
        <div className="container">
          <div className="sx-cta-panel toned">
            <div>
              <h2>{t(s.ctaTitle)}</h2>
              <p>{t(s.ctaText)}</p>
            </div>
            <div className="cta-actions">
              <a href="#/contact" className="btn btn-primary">{t("Parler à un expert")} <Ic id="i-arrow" /></a>
              <a href="#/secteurs" className="btn btn-ghost-w">{t("Tous les secteurs")}</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
