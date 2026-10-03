import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type UIEvent,
} from "react";
import { Ic } from "./Sprite";
import { useLanguage } from "../i18n";

const MAPPINGS = [
  {
    tone: "blue",
    icon: "s-core",
    need: "Core Banking",
    needDescription: "Une plateforme centralisée pour une gestion bancaire complète et sécurisée.",
    solution: "Alpha Bank",
    solutionDescription: "La solution au cœur de votre banque.",
    href: "#/solutions/core-banking",
    visual: "bank",
  },
  {
    tone: "green",
    icon: "s-collecte",
    need: "Paiements",
    needDescription: "Des paiements rapides, sûrs et adaptés à tous vos canaux.",
    solution: "Alpha Monétique",
    solutionDescription: "La fluidité de vos transactions.",
    href: "#/solutions/core-banking",
    visual: "card",
  },
  {
    tone: "purple",
    icon: "s-mobile",
    need: "Digital",
    needDescription: "Des services digitaux innovants pour une meilleure expérience client.",
    solution: "Alpha Mobile Banking",
    solutionDescription: "Votre banque, partout et à tout moment.",
    href: "#/solutions/digital-mobile",
    visual: "phone",
  },
  {
    tone: "orange",
    icon: "s-decl",
    need: "Déclarations",
    needDescription: "Une gestion simplifiée et conforme de vos déclarations réglementaires.",
    solution: "Déclaration Bancaire",
    solutionDescription: "Conformité et sérénité.",
    href: "#/solutions/declaration-bancaire",
    visual: "document",
  },
] as const;

type CardStyle = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

function BankVisual() {
  return (
    <svg viewBox="0 0 150 110" aria-hidden="true">
      <defs>
        <linearGradient id="mv-bank-front" x1="20" y1="15" x2="122" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eef7ff" />
          <stop offset="1" stopColor="#a9cdef" />
        </linearGradient>
        <linearGradient id="mv-bank-side" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#78aede" />
          <stop offset="1" stopColor="#477faf" />
        </linearGradient>
        <filter id="mv-bank-shadow" x="-40%" y="-40%" width="180%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#164f8a" floodOpacity=".22" />
        </filter>
      </defs>
      <ellipse cx="76" cy="96" rx="58" ry="9" fill="#1b5f9e" opacity=".1" />
      <g filter="url(#mv-bank-shadow)">
        <path d="M23 42 73 14l54 28-8 8H31z" fill="url(#mv-bank-front)" stroke="#77a9d2" strokeWidth="1.5" />
        <path d="m127 42 10 7-10 7-8-6z" fill="url(#mv-bank-side)" />
        <path d="M32 50h87v38H32z" fill="#f7fbff" stroke="#8ab5d8" strokeWidth="1.5" />
        {[42, 61, 80, 99].map((x) => (
          <g key={x}>
            <path d={`M${x} 53h11v31H${x}z`} fill="url(#mv-bank-front)" stroke="#80afd4" />
            <path d={`m${x + 11} 53 5 3v28l-5 0z`} fill="url(#mv-bank-side)" />
          </g>
        ))}
        <path d="M24 87h104v8H24z" fill="#dcecf8" stroke="#78a9d0" />
        <path d="M17 95h118v7H17z" fill="#bdd8ed" stroke="#6d9dc6" />
        <circle cx="74" cy="34" r="8" fill="#fff" stroke="#5790c1" />
        <path d="M74 28v12M70 31h6c3 0 3 4 0 4h-4c-3 0-3 4 0 4h6" fill="none" stroke="#327ab7" strokeWidth="1.7" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function CardVisual() {
  return (
    <svg viewBox="0 0 150 110" aria-hidden="true">
      <defs>
        <linearGradient id="mv-card-main" x1="22" y1="14" x2="128" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c8fff2" />
          <stop offset=".55" stopColor="#61d8c4" />
          <stop offset="1" stopColor="#19a58e" />
        </linearGradient>
        <linearGradient id="mv-card-edge" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#118b7a" />
          <stop offset="1" stopColor="#086c61" />
        </linearGradient>
        <filter id="mv-card-shadow" x="-35%" y="-45%" width="180%" height="220%">
          <feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#087563" floodOpacity=".22" />
        </filter>
      </defs>
      <ellipse cx="75" cy="91" rx="60" ry="10" fill="#087563" opacity=".1" />
      <g filter="url(#mv-card-shadow)" transform="rotate(-8 75 55)">
        <rect x="22" y="25" width="102" height="62" rx="12" fill="url(#mv-card-main)" stroke="#109d88" strokeWidth="1.5" />
        <path d="M124 34l8 5v48l-8-1z" fill="url(#mv-card-edge)" opacity=".9" />
        <rect x="22" y="40" width="102" height="11" fill="#087f72" opacity=".72" />
        <rect x="35" y="60" width="24" height="16" rx="4" fill="#fff3b7" stroke="#d5b845" />
        <path d="M42 60v16M52 60v16M35 68h24" stroke="#c9ac35" strokeWidth="1" opacity=".65" />
        <circle cx="104" cy="67" r="9" fill="#fff" opacity=".8" />
        <circle cx="113" cy="67" r="9" fill="#d8fff6" opacity=".75" />
      </g>
    </svg>
  );
}

function PhoneVisual() {
  return (
    <svg viewBox="0 0 150 110" aria-hidden="true">
      <defs>
        <linearGradient id="mv-phone-body" x1="45" y1="4" x2="106" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#816df5" />
          <stop offset="1" stopColor="#3b3db8" />
        </linearGradient>
        <linearGradient id="mv-phone-screen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#eef1ff" />
          <stop offset="1" stopColor="#c8d1ff" />
        </linearGradient>
        <filter id="mv-phone-shadow" x="-50%" y="-35%" width="220%" height="190%">
          <feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#3d339c" floodOpacity=".28" />
        </filter>
      </defs>
      <ellipse cx="77" cy="97" rx="39" ry="8" fill="#4338a8" opacity=".13" />
      <g filter="url(#mv-phone-shadow)" transform="rotate(8 76 55)">
        <rect x="50" y="8" width="54" height="94" rx="13" fill="url(#mv-phone-body)" stroke="#383190" strokeWidth="1.6" />
        <rect x="55" y="15" width="44" height="77" rx="9" fill="url(#mv-phone-screen)" />
        <rect x="68" y="11" width="18" height="3" rx="2" fill="#2f2b80" />
        <rect x="61" y="26" width="32" height="17" rx="6" fill="#5d54d9" />
        <circle cx="66" cy="54" r="5" fill="#fff" />
        <rect x="74" y="50" width="17" height="3" rx="2" fill="#8792dc" />
        <rect x="74" y="57" width="12" height="3" rx="2" fill="#a6afe6" />
        <circle cx="66" cy="72" r="5" fill="#fff" />
        <rect x="74" y="68" width="17" height="3" rx="2" fill="#8792dc" />
        <rect x="74" y="75" width="12" height="3" rx="2" fill="#a6afe6" />
        <circle cx="77" cy="97" r="2.6" fill="#d5d8ff" />
      </g>
      <path d="M107 25c10 6 15 14 17 24M112 17c14 8 22 20 25 34" fill="none" stroke="#7667f8" strokeWidth="3" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

function DocumentVisual() {
  return (
    <svg viewBox="0 0 150 110" aria-hidden="true">
      <defs>
        <linearGradient id="mv-doc-paper" x1="34" y1="10" x2="112" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#ffdfbc" />
        </linearGradient>
        <linearGradient id="mv-doc-side" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#f7aa5b" />
          <stop offset="1" stopColor="#dc721b" />
        </linearGradient>
        <filter id="mv-doc-shadow" x="-40%" y="-40%" width="190%" height="210%">
          <feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#c86b20" floodOpacity=".2" />
        </filter>
      </defs>
      <ellipse cx="75" cy="95" rx="46" ry="9" fill="#d87928" opacity=".1" />
      <g filter="url(#mv-doc-shadow)" transform="rotate(-4 75 55)">
        <path d="M42 12h48l19 19v66H42z" fill="url(#mv-doc-paper)" stroke="#e29a56" strokeWidth="1.5" />
        <path d="M90 12v20h19" fill="#ffd5aa" stroke="#e29a56" strokeWidth="1.5" />
        <path d="M109 32l7 5v60l-7 0z" fill="url(#mv-doc-side)" opacity=".85" />
        <path d="M55 44h39M55 56h39M55 68h22" stroke="#d6a06a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="88" cy="76" r="15" fill="#fff" stroke="#ff8a22" strokeWidth="3" />
        <path d="m80 76 6 6 11-14" fill="none" stroke="#ff8a22" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function MappingVisual({ type }: { type: (typeof MAPPINGS)[number]["visual"] }) {
  if (type === "bank") return <BankVisual />;
  if (type === "card") return <CardVisual />;
  if (type === "phone") return <PhoneVisual />;
  return <DocumentVisual />;
}

function MappingCard({ item, index }: { item: (typeof MAPPINGS)[number]; index: number }) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLAnchorElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    const normalizedX = localX / bounds.width - 0.5;
    const normalizedY = localY / bounds.height - 0.5;

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty("--mouse-x", `${localX}px`);
      element.style.setProperty("--mouse-y", `${localY}px`);
      element.style.transform = `perspective(1200px) rotateX(${-normalizedY * 3}deg) rotateY(${normalizedX * 5}deg) translateY(-5px)`;
    });
  };

  const resetTilt = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    const element = cardRef.current;
    if (!element) return;
    element.style.setProperty("--mouse-x", "50%");
    element.style.setProperty("--mouse-y", "50%");
    element.style.transform = "";
  };

  return (
    <a
      ref={cardRef}
      className={`mapping-card mc-${item.tone}`}
      href={item.href}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
      onBlur={resetTilt}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as CardStyle}
    >
      <span className="mapping-number">{`0${index + 1}`}</span>
      <span className="mapping-icon"><Ic id={item.icon} /></span>

      <span className="mapping-copy mapping-need">
        <strong>{t(item.need)}</strong>
        <small>{t(item.needDescription)}</small>
      </span>

      <span className="mapping-transform" aria-hidden="true">
        <i className="mapping-dashes" />
        <i className="mapping-arrow"><Ic id="i-arrow" /></i>
      </span>

      <span className="mapping-copy mapping-solution">
        <strong>{t(item.solution)}</strong>
        <small>{t(item.solutionDescription)}</small>
      </span>

      <span className="mapping-chevron" aria-hidden="true"><Ic id="i-chev-r" /></span>
      <span className="mapping-visual" aria-hidden="true"><MappingVisual type={item.visual} /></span>
    </a>
  );
}

export default function RecommendedMapping() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScroll = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const center = track.scrollLeft + track.clientWidth * 0.5;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const next = Math.abs(center - (card.offsetLeft + card.offsetWidth * 0.5));
      if (next < distance) {
        closest = index;
        distance = next;
      }
    });
    setActive(closest);
  };

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
    setActive(index);
  };

  return (
    <section className="sx-recos mapping-section reveal" aria-labelledby="mapping-title">
      <div className="mapping-deco" aria-hidden="true">
        <span className="mapping-chart">
          <i /><i /><i /><i />
          <Ic id="i-arrow" />
        </span>
        <span className="mapping-note">{t("Plus de")}<br /><strong>{t("performances")}</strong><br />{t("ensemble !")}</span>
      </div>

      <div className="container mapping-container">
        <header className="mapping-head">
          <span className="mapping-kicker"><i />{t("MAPPING BESOINS")}<i /></span>
          <h2 id="mapping-title">{t("Nos solutions recommandées")}</h2>
          <p>{t("Des solutions adaptées à chaque besoin pour accélérer")}<br className="mapping-break" />{t(" votre performance financière.")}</p>
        </header>

        <div className="mapping-column-labels" aria-hidden="true">
          <span>{t("BESOIN")}</span>
          <span>{t("SOLUTION")}</span>
        </div>

        <div className="mapping-track" ref={trackRef} onScroll={onScroll}>
          {MAPPINGS.map((item, index) => (
            <div
              className="mapping-slide"
              key={item.need}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
            >
              <MappingCard item={item} index={index} />
            </div>
          ))}
        </div>

        <div className="mapping-dots" aria-label={t("Sélectionner une recommandation")}>
          {MAPPINGS.map((item, index) => (
            <button
              type="button"
              key={item.need}
              className={`md-${item.tone} ${active === index ? "active" : ""}`}
              aria-label={`Afficher ${item.need} vers ${item.solution}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>

        <div className="mapping-assurance">
          <Ic id="i-shield" />
          <span>{t("Des solutions fiables pour un avenir plus solide.")}</span>
        </div>
      </div>
    </section>
  );
}