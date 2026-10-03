import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "../i18n";

const SESSION_KEY = "itech-language-choice-shown";

export default function LanguageWelcome() {
  const { lang, setLang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [changing, setChanging] = useState<Language | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    const id = window.setTimeout(() => setVisible(true), 5000);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const choose = (next: Language) => {
    if (changing) return;
    setChanging(next);
    // Synchronisé avec le "burst" de l'animation fournie.
    timers.current.push(window.setTimeout(() => setLang(next), 430));
    timers.current.push(window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
      setChanging(null);
    }, 1450));
  };

  if (!visible) return null;

  return (
    <div className={`lang-welcome ${changing ? "is-changing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="lang-welcome-title">
      <div className="lang-welcome-backdrop" aria-hidden="true">
        <video className="lang-welcome-video" autoPlay muted loop playsInline preload="auto">
          <source src="/i-tech-motion-bg.mp4" type="video/mp4" />
        </video>
        <span className="lang-welcome-video-veil" />
      </div>
      <section className="lang-welcome-panel">
        <div className="lang-welcome-orbit" aria-hidden="true"><i/><i/><i/></div>
        <div className="lang-welcome-kicker">I-TECH</div>
        <h2 id="lang-welcome-title">Choisissez votre langue <span>/</span> Choose your language</h2>
        <p>Votre choix sera appliqué immédiatement au site.</p>
        <div className="lang-welcome-actions">
          <button className={`lang-energy-btn ${changing === "fr" ? "is-active" : ""}`} onClick={() => choose("fr")} disabled={!!changing}>
            <span className="lang-energy-rings" aria-hidden="true"><i/><i/><i/></span>
            <span className="lang-energy-icon" aria-hidden="true">FR</span>
            <span className="lang-energy-copy"><b>Français</b><small>Continuer en français</small></span>
            <span className="lang-energy-shine" aria-hidden="true" />
          </button>
          <button className={`lang-energy-btn ${changing === "en" ? "is-active" : ""}`} onClick={() => choose("en")} disabled={!!changing}>
            <span className="lang-energy-rings" aria-hidden="true"><i/><i/><i/></span>
            <span className="lang-energy-icon" aria-hidden="true">EN</span>
            <span className="lang-energy-copy"><b>English</b><small>Continue in English</small></span>
            <span className="lang-energy-shine" aria-hidden="true" />
          </button>
        </div>
        <div className="lang-welcome-current">{lang === "fr" ? "Langue actuelle : Français" : "Current language: English"}</div>
      </section>
    </div>
  );
}
