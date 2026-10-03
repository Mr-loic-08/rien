import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Ic } from "./Sprite";
import BrandLogo from "./BrandLogo";

type ArchitectureItem = {
  icon: string;
  name: string;
  desc?: string;
};

type Props = {
  title: string;
  items: ArchitectureItem[];
};

const ACCENTS = ["#2f6bff", "#2f6bff", "#f26722", "#f26722"];

export default function CoreBankingArchitecture({ title, items }: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll<HTMLElement>(".core-arch-card"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      root.classList.add("is-visible");
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            root.classList.add("is-visible");
            cards.forEach((card, index) => {
              window.setTimeout(() => card.classList.add("is-visible"), 120 + index * 110);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16 }
    );

    observer.observe(root);

    const cleanups = cards.map((card) => {
      let raf = 0;
      const move = (event: MouseEvent) => {
        if (window.matchMedia("(hover: none)").matches) return;
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
          card.style.setProperty("--ry", `${((px - 0.5) * 3.2).toFixed(2)}deg`);
          card.style.setProperty("--rx", `${((0.5 - py) * 2.2).toFixed(2)}deg`);
        });
      };
      const leave = () => {
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--rx", "0deg");
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      return () => {
        cancelAnimationFrame(raf);
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section ref={rootRef} className="core-arch" aria-label={title}>
      <div className="core-arch-backdrop" aria-hidden="true">
        <img className="core-arch-bg" src="/images/core-banking-phone.jpg" alt="" />
        <span className="core-arch-bg-cover" />
        <span className="core-arch-grid" />
        <span className="core-arch-glow core-arch-glow-a" />
        <span className="core-arch-glow core-arch-glow-b" />
      </div>

      <div className="container core-arch-inner">
        <header className="core-arch-head">
          <h2>{title}</h2>
        </header>

        <div className="core-arch-scene">
          <div className="core-arch-lines" aria-hidden="true">
            <span className="core-line core-line-1" />
            <span className="core-line core-line-2" />
            <span className="core-line core-line-3" />
            <span className="core-line core-line-4" />
          </div>

          <div className="core-arch-hub" aria-hidden="true">
            <span className="core-arch-hub-ring" />
            <BrandLogo className="core-arch-logo" light />
          </div>

          <div className="core-arch-cards">
            {items.map((item, i) => (
              <article
                key={item.name}
                className={`core-arch-card core-arch-card-${i + 1}`}
                style={{ "--card-accent": ACCENTS[i] } as CSSProperties}
              >
                <span className="core-arch-card-num">0{i + 1}</span>
                <span className="core-arch-card-icon"><Ic id={item.icon} /></span>
                <div className="core-arch-card-copy">
                  <strong>{item.name}</strong>
                  {item.desc && <p>{item.desc}</p>}
                </div>
                <span className="core-arch-card-arrow" aria-hidden="true"><Ic id="i-arrow" /></span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
