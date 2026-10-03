import { CURRENT_YEAR } from "../data/company";
import { Ic, SOCIALS } from "./Sprite";
import BrandLogo from "./BrandLogo";
import { SOLUTIONS } from "../data/solutions";
import { SECTEURS } from "../data/secteurs";
import { useLanguage } from "../i18n";

const SOL_MENU_ICON: Record<string, string> = {
  "core-banking": "s-core",
  "collecte-journaliere": "s-collecte",
  "digital-mobile": "s-mobile",
  "gestion-rh": "s-rh",
  "declaration-bancaire": "s-decl",
  "genie-logiciel": "s-genie",
};

const SECTOR_FOOTER_ICONS: Record<string,string> = {
  "microfinances": "i-microfinance",
  "banques-commerciales": "i-bank",
  "grandes-entreprises": "i-corporate",
};

const COLS = [
  { h: "Secteurs", links: SECTEURS.map((s) => ({ label: s.label, href: `#/secteurs/${s.key}`, icon: SECTOR_FOOTER_ICONS[s.key] })) },
  { h: "Entreprise", links: [
    { label: "À propos", href: "#/entreprise/apropos", icon: "i-info" },
    { label: "Carrières", href: "#/entreprise/carrieres", icon: "i-briefcase" },
    { label: "Partenaires", href: "#/entreprise/partenaires", icon: "i-handshake" },
    { label: "L'Entreprise", href: "#/entreprise", icon: "i-office" },
  ]},
  { h: "Ressources", links: [
    { label: "Blog", href: "#/ressources", icon: "i-news" },
    { label: "Centre de ressources", href: "#/ressources", icon: "i-book" },
    { label: "Documentations", href: "#/ressources", icon: "i-docs" },
    { label: "Webinaires", href: "#/ressources", icon: "i-video" },
  ]},
];

export default function Footer({ videoBackground = false }: { videoBackground?: boolean }) {
  const { t } = useLanguage();
  return <footer className={`footer ${videoBackground ? "footer-video-home" : ""}`}>{videoBackground && <div className="footer-video-bg" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/i-tech-motion-bg.mp4" type="video/mp4" /></video><span /></div>}<div className="container"><div className="f-grid">
    <div className="f-col f-brand"><a className="logo" href="#accueil" aria-label="I-TECH"><BrandLogo light /></a><div className="socials">{SOCIALS.map((s)=><a key={s.id} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={s.label}><Ic id={s.id}/></a>)}</div></div>
    <div className="f-col"><h5>{t("Solutions")}</h5>{SOLUTIONS.map((s)=><a href={`#/solutions/${s.key}`} key={s.key} className="f-sol f-link-icon"><span className="f-icon"><Ic id={SOL_MENU_ICON[s.key] ?? s.icon}/></span><span>{t(s.label)}</span></a>)}</div>
    {COLS.map((c)=><div className="f-col" key={c.h}><h5>{t(c.h)}</h5>{c.links.map((l)=><a href={l.href} key={l.label} className="f-link-icon"><span className="f-icon"><Ic id={l.icon}/></span><span>{t(l.label)}</span></a>)}</div>)}
    <div className="f-col"><h5>{t("Contact & Support")}</h5><a href="#/contact/demo" className="f-link-icon"><span className="f-icon"><Ic id="i-demo"/></span><span>{t("Contact / Démo")}</span></a><a href="#/contact" className="f-link-icon"><span className="f-icon"><Ic id="i-life"/></span><span>{t("Support Client")}</span></a><a href="#/contact/confidentialite" className="f-link-icon"><span className="f-icon"><Ic id="i-shield"/></span><span>{t("Politique de confidentialité")}</span></a><ul className="f-contact" style={{marginTop:14}}><li><span className="f-icon contact"><Ic id="i-phone"/></span><a href="tel:+237696613946">(+237) 696 61 39 46 / 243 81 02 96</a></li><li><span className="f-icon contact"><Ic id="i-mail"/></span><a href="mailto:contacts@i-techsarl.com">contacts@i-techsarl.com</a></li><li><span className="f-icon contact"><Ic id="i-pin"/></span><a href="https://maps.app.goo.gl/Vf4j7RvUVxNcZj5D9" target="_blank" rel="noopener noreferrer">{t("2ème étage, Immeuble CAMCCUL, Rue Pau, Akwa - Douala")}</a></li></ul></div>
  </div><div className="f-bottom"><span>© {CURRENT_YEAR} I-TECH. {t("Tous droits réservés.")}</span><span><a href="#">{t("Politique de confidentialité")}</a><a href="#">{t("Mentions légales")}</a><a href="#">{t("Plan du site")}</a></span></div></div></footer>;
}
