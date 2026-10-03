import { useState } from "react";
import { Ic } from "./Sprite";
import { useLanguage } from "../i18n";

/* =========================================================
   NOS PARTENAIRES — logos
   ---------------------------------------------------------
   Deux façons d'afficher le logo exact d'un client :

   1) LOCALEMENT (recommandé) :
      déposez le fichier dans  public/images/logos/  et indiquez
      son chemin dans `img` (ex. "images/logos/camccul.png").
      → C'est le chemin utilisé aujourd'hui.

   2) VIA UNE URL DIRECTE vers le fichier image du site du client.
      (les pages d'accueil ne contiennent pas le logo en général)

   Si le fichier est absent, un monogramme élégant s'affiche
   automatiquement (aucune image cassée).
   ========================================================= */

const CLIENTS = [
  {
    name: "CONTABO",
    alt: "CONTABO",
    href: "https://my.contabo.com/account/login",
    img: "images/logos/contabo.png",
    cat: "microfinance",
    initials: "CT",
    // vert/teal tech
    c1: "#0f9b8e",
    c2: "#0b5f57",
  },
  {
    name: "DESJARDINS",
    alt: "Desjardins",
    href: "https://www.desjardins.com/qc/fr.html",
    img: "images/logos/desjardins.png",
    cat: "banque",
    initials: "DJ",
    // vert Desjardins
    c1: "#12864a",
    c2: "#0b5c33",
  },
  {
    name: "CAMCCUL",
    alt: "CAMCCUL",
    href: "https://camccul.cm",
    img: "images/logos/camccul.png",
    cat: "microfinance",
    initials: "CC",
    // bleu institutionnel
    c1: "#1a4f9c",
    c2: "#0d2b4a",
  },
  {
    name: "OMOA",
    alt: "OMOA",
    href: "https://www.omoa-group.com",
    img: "images/logos/omoa.png",
    cat: "microfinance",
    initials: "OM",
    // orange/or OMOA
    c1: "#f2a11e",
    c2: "#c07407",
  },
];



/* Monogramme SVG de secours : propre, aligné sur les couleurs du client */
function Monogram({ name, initials, c1, c2 }: { name: string; initials: string; c1: string; c2: string }) {
  const id = `mg-${initials.toLowerCase()}`;
  return (
    <svg viewBox="0 0 360 120" role="img" aria-label={name}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="360" y2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor={c1}/><stop offset="1" stopColor={c2}/></linearGradient></defs>
      <rect width="360" height="120" rx="26" fill="#fff"/>
      <rect x="8" y="8" width="104" height="104" rx="22" fill={`url(#${id})`}/>
      <text x="60" y="72" textAnchor="middle" fontSize="32" fontWeight="900" fontFamily="Inter, Arial, sans-serif" fill="#fff">{initials}</text>
      <text x="132" y="68" fontSize="28" fontWeight="850" fontFamily="Inter, Arial, sans-serif" fill={c2}>{name}</text>
      <path d="M132 82h168" stroke={c1} strokeWidth="4" strokeLinecap="round" opacity=".28"/>
    </svg>
  );
}
function ClientLogo({ src, alt, name, initials, c1, c2 }: { src: string; alt: string; name: string; initials: string; c1: string; c2: string }) {
  const [broken, setBroken] = useState(false);
  if (broken) return <Monogram name={name} initials={initials} c1={c1} c2={c2} />;
  return <img src={src} alt={alt} onError={() => setBroken(true)} />;
}

export default function Trust() {
  const { t } = useLanguage();
  const [focused, setFocused] = useState(0);

  const visible = CLIENTS;
  const active = visible[Math.min(focused, Math.max(0, visible.length - 1))] ?? CLIENTS[0];

  return (
    <section className="trust reveal" id="partenaires-accueil">
      {/* décor de fond en couches */}
      <div className="trust-deco" aria-hidden="true">
        <span className="td-ring a" />
        <span className="td-ring b" />
        <span className="td-blob" />
      </div>

      <div className="container">
        {/* en-tête asymétrique */}
        <div className="trust-head">
          <div className="trust-head-l">
            <span className="sec-kicker">{t("Nos partenaires")}</span>
            <h2 className="sec-title left">{t("Ils nous font confiance")}</h2>
            <p className="sec-sub left">
              {t("Rejoignez plus de")} <strong>{t("250 institutions")}</strong> {t("qui ont choisi I-TECH pour leur transformation digitale.")}
            </p>
            <div className="trust-proof-strip" aria-label="Repères I-TECH">
              <span title="Institutions financières"><Ic id="i-bank" /></span>
              <span title="Institutions connectées"><Ic id="i-link" /></span>
              <span title="Utilisateurs accompagnés"><Ic id="i-users" /></span>
            </div>
          </div>
        </div>

        {/* layout spotlight : grande carte + rail */}
        <div className="trust-stage">
          <a
            className="trust-spotlight"
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            key={active.name}
          >
            <div className="ts-glow" />
            <div className="ts-logo">
              <ClientLogo
                src={active.img}
                alt={active.alt}
                name={active.name}
                initials={active.initials}
                c1={active.c1}
                c2={active.c2}
              />
            </div>
            <div className="ts-meta">
              <h3>{active.name}</h3>
              <p>{t("Partenaire I-TECH · institution financière")}</p>
              <span className="ts-cta">
                {t("Visiter le site")} <Ic id="i-arrow" />
              </span>
            </div>
            <div className="ts-num">0{Math.min(focused, visible.length - 1) + 1}</div>
          </a>

          <div className="trust-rail" id="clientsGrid">
            {visible.map((c, i) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`client-card ${i === focused ? "is-on" : ""}`}
                onMouseEnter={() => setFocused(i)}
                onFocus={() => setFocused(i)}
              >
                <div className="client-logo">
                  <ClientLogo src={c.img} alt={c.alt} name={c.name} initials={c.initials} c1={c.c1} c2={c.c2} />
                </div>
                <div className="client-info">
                  <h4>{c.name}</h4>
                </div>
                <span className="visit-badge">{t("Visiter")}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="trust-cta">
          <p>
            {t("Et plus de")} <strong>{t("250 autres institutions")}</strong> {t("à travers l'Afrique")}
          </p>
          <a href="#/contact" className="btn btn-outline" style={{ marginTop: 16 }}>
            {t("Voir tous nos partenaires")}
            <Ic id="i-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
