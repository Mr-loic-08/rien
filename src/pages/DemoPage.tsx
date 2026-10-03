import { useState, type FormEvent } from "react";
import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import {
  COUNTRIES,
  DEMO_CTA,
  DEMO_HERO,
  EXPERTS,
  FAQ,
  INTERESTS,
  QUICK_CONTACT,
  SECTORS,
} from "../data/contact";
import { useLanguage } from "../i18n";

export default function DemoPage() {
  const { t } = useLanguage();
  const [interests, setInterests] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [sector, setSector] = useState("");

  const toggle = (name: string) =>
    setInterests((prev) => (prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pg dm-page" key="demo">
      {/* ===== Hero clair ===== */}
      <section className="dm-hero">
        <HeroBg images={DEMO_HERO.images} tint="dark" showDots={false} />
        <div className="container">
          <Crumbs
            trail={[
              { label: t("Accueil"), href: "#accueil" },
              { label: t("Contact & Support"), href: "#/contact" },
              { label: t("Contact / Démo") },
            ]}
          />
          <div className="dm-hero-copy">
            <h1>{t(DEMO_HERO.h1)}</h1>
            <p>{t(DEMO_HERO.intro)}</p>
          </div>
        </div>
      </section>

      {/* ===== 3 colonnes ===== */}
      <section className="dm-main reveal">
        <div className="container">
          <div className="dm-grid">
            {/* Parler à un expert */}
            <aside className="dm-experts">
              <h2>{t("Parler à un expert")}</h2>
              {EXPERTS.map((x, i) => (
                <a href={x.href} className={`dm-expert tone-${x.tone}`} key={x.title} style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="dm-expert-ic"><Ic id={x.icon} /></span>
                  <span className="dm-expert-txt"><b>{t(x.title)}</b><span>{t(x.text)}</span></span>
                  <Ic id="i-chev-r" />
                </a>
              ))}
            </aside>

            {/* Formulaire */}
            <div className="dm-form-card">
              {sent ? (
                <div className="dm-success">
                  <span><Ic id="i-check" /></span>
                  <h2>{t("Demande envoyée !")}</h2>
                  <p>{t("Merci pour votre intérêt. Un expert I-TECH vous contactera sous 24h ouvrées pour planifier votre démonstration.")}</p>
                  <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>{t("Envoyer une autre demande")}</button>
                </div>
              ) : (
                <form onSubmit={submit} className="dm-form">
                  <h2>{t("Demander une démonstration")}</h2>
                  <div className="dm-row">
                    <label><span className="dm-label-text">{t("Nom")}<i>*</i></span><input required name="nom" /></label>
                    <label><span className="dm-label-text">{t("Prénom")}<i>*</i></span><input required name="prenom" /></label>
                  </div>
                  <div className="dm-row">
                    <label><span className="dm-label-text">{t("Organisation / Société")}<i>*</i></span><input required name="org" /></label>
                    <label><span className="dm-label-text">{t("Fonction")}</span><input name="fonction" /></label>
                  </div>
                  <div className="dm-row">
                    <label><span className="dm-label-text">{t("Email professionnel")}<i>*</i></span><input type="email" required name="email" /></label>
                    <label><span className="dm-label-text">{t("Téléphone")}<i>*</i></span><input type="tel" required name="tel" /></label>
                  </div>
                  <div className="dm-row">
                    <label><span className="dm-label-text">{t("Pays")}<i>*</i></span>
                      <select required defaultValue="">
                        <option value="" disabled>{t("Sélectionnez votre pays")}</option>
                        {COUNTRIES.map((c) => <option key={c}>{t(c)}</option>)}
                      </select>
                    </label>
                    <label><span className="dm-label-text">{t("Secteur d'activité")}<i>*</i></span>
                      <select required value={sector} onChange={(e) => setSector(e.target.value)} name="secteur">
                        <option value="" disabled>{t("Sélectionnez votre secteur")}</option>
                        {SECTORS.map((c) => <option key={c} value={c}>{t(c)}</option>)}
                      </select>
                    </label>
                  </div>
                  {sector === "Autre" && (
                    <label className="dm-full dm-sector-other">
                      <span className="dm-label-text">{t("Précisez votre secteur d'activité")}<i>*</i></span>
                      <input
                        required
                        name="secteurAutre"
                        type="text"
                        autoComplete="organization-title"
                        placeholder={t("Ex. : Télécommunications, santé, industrie…")}
                      />
                    </label>
                  )}
                  <label className="dm-full"><span className="dm-label-text">{t("Solution(s) souhaitée(s)")}<i>*</i></span>
                    <div className="dm-chips">
                      {interests.length === 0 && <span className="dm-chips-empty">{t("Sélectionnez une ou plusieurs solutions dans la liste à droite")}</span>}
                      {interests.map((s) => (
                        <button type="button" key={s} className="dm-chip" onClick={() => toggle(s)}>{t(s)} <Ic id="i-close" /></button>
                      ))}
                    </div>
                    <input type="text" value={interests.join(", ")} readOnly required aria-hidden="true" tabIndex={-1} className="dm-hidden" />
                  </label>
                  <label className="dm-full"><span className="dm-label-text">{t("Votre message (facultatif)")}</span>
                    <textarea rows={3} placeholder={t("Décrivez brièvement vos besoins ou votre projet…")} />
                  </label>
                  <label className="dm-check"><input type="checkbox" required /><span>{t("J’ai lu et j’accepte la")} <a className="dm-privacy-link" href="#/contact/confidentialite">{t("Politique de confidentialité")}</a>.</span></label>
                  <button type="submit" className="btn btn-primary dm-submit">{t("Envoyer ma demande")} <Ic id="i-arrow" /></button>
                </form>
              )}
            </div>

            {/* Colonne droite */}
            <aside className="dm-side">
              <div className="dm-box">
                <h3>{t("Je suis intéressé par :")}</h3>
                <ul className="dm-interests">
                  {INTERESTS.map((it) => (
                    <li key={it}>
                      <label>
                        <input type="checkbox" checked={interests.includes(it)} onChange={() => toggle(it)} />
                        <span className="dm-cb" /> {t(it)}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dm-box">
                <h3>{t("Contact rapide")}</h3>
                <ul className="dm-quick">
                  {QUICK_CONTACT.map((q) => {
                    const isMail = q.icon === "i-mail";
                    const isPhone = q.icon === "i-phone";
                    const isPin = q.icon === "i-pin";
                    const content = <><Ic id={q.icon} /><span>{t(q.text)}</span></>;
                    if (isMail) return <li key={q.text}><a href={`mailto:${q.text}`}>{content}</a></li>;
                    if (isPhone) return <li key={q.text}><a href="tel:+237696613946">{content}</a></li>;
                    if (isPin) return <li key={q.text}><a href="https://maps.app.goo.gl/Vf4j7RvUVxNcZj5D9" target="_blank" rel="noopener noreferrer">{content}</a></li>;
                    return <li key={q.text}>{content}</li>;
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== Confiance + FAQ ===== */}
      <section className="dm-bottom reveal">
        <div className="container">
          <div className="dm-bottom-grid dm-bottom-grid-faq-only">
            <div className="dm-faq">
              <h2>{t("Questions fréquentes")}</h2>
              {FAQ.map((f, i) => (
                <div className={`dm-faq-item ${faq === i ? "open" : ""}`} key={f.q}>
                  <button type="button" onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}>
                    {t(f.q)}<Ic id="i-chev-r" />
                  </button>
                  <div className="dm-faq-body"><p>{t(f.a)}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="dm-cta reveal">
        <div className="container">
          <div className="dm-cta-panel">
            <div><h2>{t(DEMO_CTA.title)}</h2><p>{t(DEMO_CTA.text)}</p></div>
            <a href="#/contact/demo" className="btn btn-primary" onClick={() => { setSent(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              {t(DEMO_CTA.cta)} <Ic id="i-arrow" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
