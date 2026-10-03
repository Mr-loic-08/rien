import { useRef, useState, type CSSProperties, type PointerEvent, type UIEvent } from "react";
import { Ic } from "./Sprite";
import { useLanguage } from "../i18n";

const ITEMS = [
  {
    icon: "i-card",
    title: "Gestion des crédits",
    description: "Gérez vos crédits, échéances et suivis en toute simplicité.",
    href: "#/solutions/core-banking",
  },
  {
    icon: "i-bank",
    title: "Gestion de l'épargne",
    description: "Optimisez la collecte et la gestion de l'épargne de vos clients.",
    href: "#/solutions/core-banking",
  },
  {
    icon: "i-book",
    title: "Collecte journalière",
    description: "Simplifiez la collecte et le suivi des opérations quotidiennes.",
    href: "#/solutions/collecte-journaliere",
  },
  {
    icon: "i-conf",
    title: "Conformité COBAC",
    description: "Assurez la conformité de vos opérations avec les normes COBAC.",
    href: "#/solutions/declaration-bancaire",
  },
];

type GlowStyle = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

export default function MicrofinanceIssues() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScroll = (event: UIEvent<HTMLDivElement>) => {
    const track = event.currentTarget;
    const reference = track.scrollLeft + track.clientWidth * 0.5;
    let closest = 0;
    let distance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth * 0.5;
      const nextDistance = Math.abs(reference - cardCenter);
      if (nextDistance < distance) {
        closest = index;
        distance = nextDistance;
      }
    });

    setActive(closest);
  };

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActive(index);
  };

  const moveGlow = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section className="sx-issues mf-issues reveal" aria-labelledby="mf-issues-title">
      <div className="container">
        <header className="mf-issues-head">
          <span className="mf-issues-label">
            <i aria-hidden="true" />
            {t("NOS SOLUTIONS")}
            <i aria-hidden="true" />
          </span>
          <h2 id="mf-issues-title">{t("Vos problématiques au quotidien")}</h2>
          <p>{t("Des solutions adaptées pour simplifier la gestion de vos activités financières.")}</p>
        </header>

        <div
          className="mf-issues-track"
          ref={trackRef}
          onScroll={onScroll}
          aria-label={t("Solutions aux problématiques de microfinance")}
        >
          {ITEMS.map((item, index) => (
            <div
              className="mf-issue-card"
              key={item.title}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as GlowStyle}
              onPointerMove={moveGlow}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty("--mouse-x", "50%");
                event.currentTarget.style.setProperty("--mouse-y", "50%");
              }}
            >
              <span className="mf-issue-number" aria-hidden="true">{`0${index + 1}`}</span>
              <span className="mf-issue-icon" aria-hidden="true"><Ic id={item.icon} /></span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.description)}</p>
              <a href={item.href} className="mf-issue-link">
                {t("Découvrir")} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="mf-issues-dots" aria-label={t("Sélectionner une carte")}>
          {ITEMS.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={active === index ? "active" : ""}
              aria-label={`Afficher ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}