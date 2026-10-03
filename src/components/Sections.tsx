import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Ic } from "./Sprite";
import SolutionArt from "./SolutionArt";
import { SOLUTIONS } from "../data/solutions";
import { COMPANY_EXPERIENCE_PLUS } from "../data/company";
import { useLanguage } from "../i18n";

/* ============ STATS — compteurs + cartes impact ============ */
function parseStat(raw: string) {
  const m = raw.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return { n: 0, suffix: raw, decimals: 0 };
  const num = m[1].replace(",", ".");
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { n: parseFloat(num), suffix: m[2] || "", decimals };
}

function formatN(n: number, decimals: number) {
  if (decimals > 0) return n.toFixed(decimals).replace(".", ",");
  return Math.round(n).toString();
}

function StatCard({
  icon,
  img,
  b,
  s,
  delay,
}: {
  icon: string;
  img?: string;
  b: string;
  s: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState("0");
  const [run, setRun] = useState(false);
  const { n, suffix, decimals } = parseStat(b);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1800;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(formatN(n * eased, decimals) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const wait = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(wait);
      cancelAnimationFrame(raf);
    };
  }, [run, n, suffix, decimals, delay]);

  return (
    <div ref={ref} className={`impact-card ${run ? "on" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <span className="impact-ico has-img" aria-hidden="true">
        {img ? <img src={img} alt="" loading="lazy" /> : <Ic id={icon} />}
      </span>
      <b>{run ? val : "0" + suffix}</b>
      <span>{s}</span>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const items = [
    { icon: "i-cal", b: COMPANY_EXPERIENCE_PLUS, s: t("Années d'expérience") },
    { icon: "i-bank", b: "250+", s: t("Institutions accompagnées") },
    { icon: "i-globe", b: "10+", s: t("Pays en Afrique") },
    { icon: "i-users", b: "2,5M+", s: t("Utilisateurs finaux") },
    { icon: "i-swap", b: "200M+", s: t("Transactions par an") },
  ];
  return (
    <section className="stats reveal">
      <div className="stats-aurora" aria-hidden="true" />
      <div className="container">
        <div className="stats-head">
          <span className="sec-kicker light">Impact</span>
          <h3>{t("Des résultats qui parlent")}</h3>
          <p>{t("Des indicateurs concrets qui reflètent notre accompagnement des institutions financières en Afrique.")}</p>
        </div>
        <div className="impact-grid">
          {items.map((i, idx) => (
            <ImpactCard key={i.s} {...i} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactCard(props: { icon: string; img?: string; b: string; s: string; delay: number }) {
  return <StatCard {...props} />;
}

/* ============ SOLUTIONS — grille 3+3 (accueil) ============ */
export function Solutions() {
  const { t } = useLanguage();
  return (
    <section className="solutions reveal" id="solutions">
      <div className="container">
        <div className="sol-head">
          <span className="sec-kicker">{t("Gamme ALPHA")}</span>
          <h2 className="sec-title left">{t("Des solutions conçues pour les institutions financières modernes")}</h2>
          <p className="sol-intro">
            {t("Une suite logicielle complète pour digitaliser vos opérations, renforcer votre conformité et améliorer l'expérience client.")}
          </p>
        </div>

        <div className="sol-grid">
          {SOLUTIONS.map((c, i) => (
            <article className={`sol-card tone-${c.tone}`} key={c.key}>
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
                  {c.points.slice(0, 3).map((p) => (
                    <li key={p}><Ic id="i-check" />{t(p)}</li>
                  ))}
                </ul>
              )}
              <a href={`#/solutions/${c.key}`} className="link sol-more">
                {t("En savoir plus")} <Ic id="i-arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SECTEURS — tabs + panneau immersif ============ */
export function Sectors() {
  const { t } = useLanguage();
  const cards = [
    { t: "t1", h: "Microfinance", p: "Maîtrisez les coûts opérationnels et améliorez l'expérience client.", icon: "i-users", key: "microfinances" },
    { t: "t2", h: "Banques", p: "Modernisez vos systèmes et réinventez vos services digitaux.", icon: "i-bank", key: "banques-commerciales" },
    { t: "t3", h: "Grandes entreprises", p: "Automatisez vos processus financiers et de gestion.", icon: "i-chart", key: "grandes-entreprises" },
  ];
  const [active, setActive] = useState(0);
  const cur = cards[active];

  return (
    <section className="sectors reveal" id="secteurs">
      <div className="container">
        <div className="sec-head-row">
          <div>
            <span className="sec-kicker">{t("Secteurs")}</span>
            <h2 className="sec-title left">{t("Une expertise adaptée à chaque secteur")}</h2>
          </div>
          <div className="sec-tabs" role="tablist">
            {cards.map((c, i) => (
              <button
                key={c.h}
                role="tab"
                aria-selected={i === active}
                className={i === active ? "on" : ""}
                onClick={() => setActive(i)}
              >
                <Ic id={c.icon} />
                {t(c.h)}
              </button>
            ))}
          </div>
        </div>

        <div className="sec-stage" key={cur.h}>
          <div className={`sec-visual ${cur.t}`}>
            <div className="sv-grid" />
            <div className="sv-glow" />
            <div className="sv-badge">
              <Ic id={cur.icon} />
              <span>0{active + 1} / 03</span>
            </div>
            <div className="sv-orbit" />
            <h3 className="sv-title">{t(cur.h)}</h3>
          </div>
          <div className="sec-panel">
            <span className="sp-label">{t("Focus métier")}</span>
            <h4>{t(cur.h)}</h4>
            <p>{t(cur.p)}</p>
            <div className="sp-steps">
              <div><b>01</b><span>{t("Diagnostic SI")}</span></div>
              <div><b>02</b><span>{t("Déploiement")}</span></div>
              <div><b>03</b><span>{t("Accompagnement")}</span></div>
            </div>
            <a href={`#/secteurs/${cur.key}`} className="btn btn-primary">{t("En savoir plus")} <Ic id="i-arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ PARTENAIRE — fenêtres cliquables + modal ============ */
const PARTNER_ITEMS = [
  { icon: "i-users", b: "Expertise métier", s: "Une connaissance approfondie des métiers financiers." },
  { icon: "i-head", b: "Support", s: "Une assistance réactive et personnalisée." },
  { icon: "i-shield", b: "Conformité", s: "Aux normes COBAC, BEAC et internationales." },
  { icon: "i-link", b: "Intégration", s: "Compatible avec votre écosystème existant." },
  { icon: "i-lock", b: "Sécurité", s: "Des données protégées à chaque étape." },
  { icon: "i-bulb", b: "Innovation", s: "Des solutions évolutives pour demain." },
];

export function Partner() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const current = open !== null ? PARTNER_ITEMS[open] : null;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <section className="partner reveal">
      <div className="partner-deco" aria-hidden="true" />
      <div className="container">
        <div className="partner-head">
          <span className="sec-kicker light">{t("Pourquoi I-TECH")}</span>
          <h3>{t("Un partenaire technologique de confiance")}</h3>
          <p>{t("Cliquez sur une fenêtre pour découvrir chaque engagement.")}</p>
        </div>

        <div className="p-windows">
          {PARTNER_ITEMS.map((i, idx) => (
            <button
              type="button"
              className="p-win"
              key={i.b}
              onClick={() => setOpen(idx)}
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="pw-chrome">
                <span /><span /><span />
                <em>{t(i.b)}</em>
              </div>
              <div className="pw-body">
                <div className="pw-ico"><Ic id={i.icon} /></div>
                <b>{t(i.b)}</b>
                <span>{t(i.s)}</span>
                <i className="pw-open">{t("Ouvrir")}</i>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && open !== null && (
        <div className="p-modal" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <div className="p-modal-win" onClick={stop}>
            <div className="pw-chrome">
              <span /><span /><span />
              <em>{t(current.b)}</em>
              <button type="button" className="pw-x" aria-label={t("Fermer")} onClick={() => setOpen(null)}>
                <Ic id="i-close" />
              </button>
            </div>
            <div className="p-modal-body">
              <div className="pw-ico lg"><Ic id={current.icon} /></div>
              <h4>{t(current.b)}</h4>
              <p>{t(current.s)}</p>
              <div className="p-modal-nav">
                <button type="button" onClick={() => setOpen((open - 1 + PARTNER_ITEMS.length) % PARTNER_ITEMS.length)}>
                  <Ic id="i-chev-l" /> {t("Précédent")}
                </button>
                <span>{open + 1} / {PARTNER_ITEMS.length}</span>
                <button type="button" onClick={() => setOpen((open + 1) % PARTNER_ITEMS.length)}>
                  {t("Suivant")} <Ic id="i-chev-r" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ============ CTA ============ */
export function Cta() {
  const { t } = useLanguage();
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-left">
          <div className="cta-ico"><Ic id="i-chart" /></div>
          <div>
            <h3>{t("Prêt à accélérer votre transformation digitale ?")}</h3>
            <p>{t("Échangez avec nos experts et découvrez comment I-TECH peut vous accompagner.")}</p>
          </div>
        </div>
        <div className="cta-actions">
          <a href="#/contact/demo" className="btn btn-white">{t("Demander une démonstration")}</a>
          <a href="#/contact" className="btn btn-ghost-w">{t("Contactez un expert")}</a>
        </div>
      </div>
    </section>
  );
}
