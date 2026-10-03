import { useEffect, useRef, useState } from "react";
import { Ic } from "./Sprite";
import BrandLogo from "./BrandLogo";
import { SOLUTIONS } from "../data/solutions";
import { CIBLES, SECTEURS } from "../data/secteurs";
import { prefetchVideo, useHashRoute, type Route } from "../router";
import { useLanguage } from "../i18n";

const ENTREPRISE = [
  { icon: "i-info", label: "À propos", href: "#/entreprise/apropos" },
  { icon: "i-briefcase", label: "Carrières", href: "#/entreprise/carrieres" },
  { icon: "i-handshake", label: "Partenaires", href: "#/entreprise/partenaires" },
];

const CONTACT_MENU = [
  { icon: "i-demo", label: "Contact / Démo", href: "#/contact/demo" },
  { icon: "i-life", label: "Support Client", href: "#/contact" },
  { icon: "i-shield", label: "Politique de confidentialité", href: "#/contact/confidentialite" },
];

const SOL_MENU_ICON: Record<string, string> = {
  "core-banking": "s-core",
  "collecte-journaliere": "s-collecte",
  "digital-mobile": "s-mobile",
  "gestion-rh": "s-rh",
  "declaration-bancaire": "s-decl",
  "genie-logiciel": "s-genie",
};

const SOLUTIONS_MENU = SOLUTIONS.map((s) => ({
  icon: SOL_MENU_ICON[s.key] ?? s.icon,
  label: s.label,
  href: `#/solutions/${s.key}`,
}));

const SECTEUR_MENU_ICON: Record<string, string> = {
  "microfinances": "i-microfinance",
  "banques-commerciales": "i-bank",
  "grandes-entreprises": "i-corporate",
};

const SECTEURS_MENU = SECTEURS.map((s) => ({
  icon: SECTEUR_MENU_ICON[s.key] ?? s.icon,
  label: s.label,
  href: `#/secteurs/${s.key}`,
  prefetch: s.video.hd,
}));

interface MenuDef {
  label: string;
  icon?: string;
  href?: string;
  activeWhen: (r: Route) => boolean;
  /** "end" = menu déroulant aligné à droite (évite tout débordement) */
  align?: "center" | "end";
  items: { icon: string; label: string; href: string; prefetch?: string }[];
}

const MENUS: MenuDef[] = [
  {
    label: "Solutions",
    icon: "i-layers",
    href: "#/solutions",
    activeWhen: (r) => r.name === "solutions" || r.name === "solution",
    items: SOLUTIONS_MENU,
  },
  {
    label: "Secteurs",
    icon: "i-bank",
    href: "#/secteurs",
    activeWhen: (r) => r.name === "secteurs" || r.name === "secteur",
    items: SECTEURS_MENU,
  },
];

const ENTREPRISE_MENU: MenuDef = {
  label: "L'Entreprise",
  icon: "i-company",
  href: "#/entreprise",
  activeWhen: (r) => r.name === "entreprise" || r.name === "entreprise-detail",
  items: ENTREPRISE,
};

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  const [languageChanging, setLanguageChanging] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const route = useHashRoute();
  /* Header transparent + animation identique à l'accueil sur toutes les pages.
     Seule la page Démo a un hero clair : elle garde un header lisible. */
  const solid = route.name === "demo";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const animateLanguageToggle = () => {
    if (languageChanging) return;
    const next = lang === "fr" ? "en" : "fr";
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) { setLang(next); return; }
    setLanguageChanging(true);
    window.setTimeout(() => setLang(next), 430);
    window.setTimeout(() => setLanguageChanging(false), 1250);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Ferme le menu mobile quand on change de page */
  useEffect(() => {
    setMenuOpen(false);
    setOpen(null);
  }, [route]);

  const drop = (m: MenuDef) => {
    const active = m.activeWhen(route);
    return (
      <li
        key={m.label}
        className={`${open === m.label ? "open" : ""} ${m.align === "end" ? "drop-end" : ""}`.trim()}
        onMouseEnter={() => {
          setOpen(m.label);
          if (m.label === "Secteurs") prefetchVideo(CIBLES.video.hd);
        }}
        onMouseLeave={() => setOpen(null)}
      >
        {m.href ? (
          <a
            href={m.href}
            className={active ? "active" : ""}
            aria-expanded={open === m.label}
            aria-haspopup="true"
            aria-current={active ? "page" : undefined}
            onClick={() => setOpen(null)}
          >
            {m.icon && <Ic id={m.icon} className="ic nav-section-ic" />} {t(m.label)} <Ic id="i-chev-r" className="ic chev" />
          </a>
        ) : (
          <button
            type="button"
            aria-expanded={open === m.label}
            aria-haspopup="true"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === m.label ? null : m.label);
            }}
          >
            {m.icon && <Ic id={m.icon} className="ic nav-section-ic" />} {t(m.label)} <Ic id="i-chev-r" className="ic chev" />
          </button>
        )}
        <div className="dropdown">
          {m.items.map((it, i) => (
            <a
              key={i}
              href={it.href}
              onClick={() => setOpen(null)}
              onMouseEnter={() => it.prefetch && prefetchVideo(it.prefetch)}
            >
              <Ic id={it.icon} /> {t(it.label)}
            </a>
          ))}
        </div>
      </li>
    );
  };

  return (
    <>
      <div className={`head-wrap ${scrolled ? "scrolled" : ""} ${solid ? "solid" : ""}`}>
        {/* couche 1 — progression de lecture */}
        <div className="scroll-progress">
          <i style={{ transform: `scaleX(${progress})` }} />
        </div>

        {/* header principal */}
        <header className="header" id="header">
          <div className="container">
            <a className="logo" href="#accueil" aria-label="I-TECH">
              <BrandLogo />
            </a>

            <ul className="nav" id="nav" ref={navRef}>
              <li>
                <a
                  href="#accueil"
                  className={route.name === "home" ? "active" : ""}
                  aria-current={route.name === "home" ? "page" : undefined}
                >
                  <Ic id="i-home" className="ic nav-home-ic" />{t("Accueil")}
                </a>
              </li>
              {MENUS.map(drop)}
              <li><a href="#/ressources" className={route.name === "ressources" ? "active" : ""} aria-current={route.name === "ressources" ? "page" : undefined}><Ic id="i-news" className="ic nav-section-ic" />{t("Ressources")}</a></li>
              {drop(ENTREPRISE_MENU)}
              {drop({
                label: "Contact & Support",
                icon: "i-head",
                href: "#/contact",
                activeWhen: (r) => r.name === "contact" || r.name === "demo" || r.name === "privacy",
                items: CONTACT_MENU,
                align: "end",
              })}
            </ul>

            <a href="#/contact/demo" className="btn btn-primary">{t("Demander une démo")}</a>
            <button type="button" className={`language-toggle language-energy-toggle ${languageChanging ? "is-changing" : ""}`} onClick={animateLanguageToggle} aria-label={lang === "fr" ? "Switch to English" : "Passer en français"} title={lang === "fr" ? "English" : "Français"}>
              <span className={lang === "fr" ? "active" : ""}>FR</span><i>/</i><span className={lang === "en" ? "active" : ""}>EN</span>
            </button>
            <button
              className="burger"
              id="burger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Ic id={menuOpen ? "i-close" : "i-menu"} />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobileMenu" aria-hidden={!menuOpen}>
        <div className="m-item">
          <a href="#accueil" className={route.name === "home" ? "active" : ""} onClick={() => setMenuOpen(false)}>{t("Accueil")}</a>
        </div>
        {([
          { label: "Solutions", icon: "i-layers", all: "#/solutions", allLabel: "Toutes les solutions", items: SOLUTIONS_MENU },
          { label: "Secteurs", icon: "i-bank", all: "#/secteurs", allLabel: "Tous les secteurs", items: SECTEURS_MENU },
          { label: "L'Entreprise", icon: "i-company", all: "#/entreprise", allLabel: "L'Entreprise", items: ENTREPRISE },
        ] as { label: string; icon: string; all: string; allLabel: string; items: MenuDef["items"] }[]).map((m) => (
          <div className="m-item" key={m.label}>
            <button
              type="button"
              className={sub === m.label ? "open" : ""}
              onClick={() => setSub(sub === m.label ? null : m.label)}
            >
              <span className="m-menu-label"><Ic id={m.icon} className="ic menu-brand-ic" />{t(m.label)}</span> <Ic id="i-chev-r" />
            </button>
            <div className={`m-sub ${sub === m.label ? "open" : ""}`}>
              {m.all && (
                <a href={m.all} className="m-all" onClick={() => setMenuOpen(false)}>
                  {t(m.allLabel)}
                </a>
              )}
              {m.items.map((it, i) => (
                <a key={i} href={it.href} className="has-art" onClick={() => setMenuOpen(false)}>
                  <Ic id={it.icon} className="ic m-art-ic" />{t(it.label)}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="m-item"><a href="#/ressources" className={route.name === "ressources" ? "active" : ""} onClick={() => setMenuOpen(false)}><span className="m-menu-label"><Ic id="i-news" className="ic menu-brand-ic" />{t("Ressources")}</span></a></div>
        <div className="m-item">
          <button type="button" className={sub === "Contact" ? "open" : ""} onClick={() => setSub(sub === "Contact" ? null : "Contact")}>
            <span className="m-menu-label"><Ic id="i-head" className="ic menu-brand-ic" />{t("Contact & Support")}</span> <Ic id="i-chev-r" />
          </button>
          <div className={`m-sub ${sub === "Contact" ? "open" : ""}`}>
            <a href="#/contact" className="m-all" onClick={() => setMenuOpen(false)}>{t("Contact & Support")}</a>
            {CONTACT_MENU.map((it) => (
              <a key={it.href} href={it.href} className="has-art" onClick={() => setMenuOpen(false)}><Ic id={it.icon} className="ic m-art-ic" />{t(it.label)}</a>
            ))}
          </div>
        </div>
        <div className="m-language-row"><span>Language</span><button type="button" className={`language-toggle mobile language-energy-toggle ${languageChanging ? "is-changing" : ""}`} onClick={animateLanguageToggle}><span className={lang === "fr" ? "active" : ""}>FR</span><i>/</i><span className={lang === "en" ? "active" : ""}>EN</span></button></div>
        <div className="m-cta">
          <a href="#/contact/demo" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
            {t("Demander une démo")}
          </a>
        </div>
      </nav>
    </>
  );
}
