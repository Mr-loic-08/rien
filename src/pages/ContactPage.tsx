import { useState, type FormEvent } from "react";
import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import HeroBg from "../components/HeroBg";
import { CALLBACK, CONTACT_CARDS, CONTACT_HERO, CONTACT_INFOS } from "../data/contact";
import { useLanguage } from "../i18n";

function CallbackWidget() {
  return (
    <div className="cb-widget" aria-hidden="true">
      <div className="cb-screen">
        <div className="cb-bar"><i /><i /><i /></div>
        <div className="cb-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={i === 4 || i === 7 ? "on" : ""} />
          ))}
        </div>
      </div>
      <span className="cb-phone"><Ic id="i-phone" /></span>
      <span className="cb-ping" />
    </div>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [quickStatus, setQuickStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [quickForm, setQuickForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submitQuickRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!quickForm.name.trim() || !quickForm.email.trim() || !quickForm.message.trim()) return;

    setQuickStatus("sending");
    const body = new URLSearchParams({
      "form-name": "quick-response",
      name: quickForm.name.trim(),
      email: quickForm.email.trim(),
      phone: quickForm.phone.trim(),
      message: quickForm.message.trim(),
      source: "Contact & Support — Besoin d'une réponse rapide",
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      setQuickStatus("done");
      setQuickForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setQuickStatus("error");
    }
  };

  return (
    <div className="pg ct-page" key="contact">
      {/* ===== Hero ===== */}
      <section className="ct-hero">
        <HeroBg images={CONTACT_HERO.images} tint="dark" />
        <div className="container">
          <Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("Contact & Support") }]} />
          <div className="ct-hero-copy">
            <h1>{t(CONTACT_HERO.h1)}</h1>
            <p>{t(CONTACT_HERO.intro)}</p>
          </div>
        </div>
      </section>

      {/* ===== Cartes Contact / Support (superposées au hero) ===== */}
      <section className="ct-cards-wrap">
        <div className="container">
          <div className="ct-cards">
            {CONTACT_CARDS.map((c, i) => (
              <article className={`ct-card tone-${c.tone}`} key={c.title} style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
                <span className="ct-card-ic"><Ic id={c.icon} /></span>
                <div className="ct-card-body">
                  <h2>{t(c.title)}</h2>
                  <p>{t(c.text)}</p>
                  <a href={c.href} className={`btn ${c.tone === "orange" ? "btn-primary" : "btn-blue"}`}>
                    {t(c.cta)} <Ic id="i-arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Informations de contact ===== */}
      <section className="ct-infos reveal">
        <div className="container">
          <h2 className="sec-title center">{t("Informations de contact")}</h2>
          <div className="ct-info-grid">
            {CONTACT_INFOS.map((it, i) => (
              <div className="ct-info" key={it.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="ct-info-ic"><Ic id={it.icon} /></span>
                <b>{t(it.title)}</b>
                {it.lines.map((l, j) => {
                  const cls = j === 0 ? "ct-main" : "ct-sub";
                  if (j === 0 && it.title === "Email") return <a key={l} className={cls} href={`mailto:${l}`}>{l}</a>;
                  if (j === 0 && it.title === "Téléphone") return <a key={l} className={cls} href="tel:+237696613946">{l}</a>;
                  if (j === 0 && it.title === "Adresse") return <a key={l} className={cls} href="https://maps.app.goo.gl/Vf4j7RvUVxNcZj5D9" target="_blank" rel="noopener noreferrer">{l}</a>;
                  return <span key={l} className={cls}>{t(l)}</span>;
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Réponse rapide ===== */}
      <section className="ct-callback reveal">
        <div className="container">
          <div className="ct-cb-panel">
            <div className="ct-cb-copy">
              <h2>{t(CALLBACK.title)}</h2>
              <p>{t(CALLBACK.text)}</p>
              {quickStatus !== "done" ? (
                <form className="ct-cb-form ct-quick-form" name="quick-response" method="POST" data-netlify="true" onSubmit={submitQuickRequest}>
                  <input type="hidden" name="form-name" value="quick-response" />
                  <div className="ct-quick-grid">
                    <label>
                      <span>{t("Nom complet")} <b>*</b></span>
                      <input name="name" type="text" autoComplete="name" value={quickForm.name} onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })} required />
                    </label>
                    <label>
                      <span>{t("Email")} <b>*</b></span>
                      <input name="email" type="email" autoComplete="email" value={quickForm.email} onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })} required />
                    </label>
                    <label className="ct-quick-phone">
                      <span>{t("Téléphone")}</span>
                      <input name="phone" type="tel" autoComplete="tel" value={quickForm.phone} onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })} />
                    </label>
                    <label className="ct-quick-message">
                      <span>{t("Votre demande")} <b>*</b></span>
                      <textarea name="message" rows={4} value={quickForm.message} onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })} required />
                    </label>
                  </div>
                  <div className="ct-quick-actions">
                    <button type="submit" className="btn btn-primary" disabled={quickStatus === "sending"}>
                      {quickStatus === "sending" ? t("Envoi en cours…") : t("Envoyer ma demande")} <Ic id="i-arrow" />
                    </button>
                    {quickStatus === "error" && <p className="ct-cb-error">{t("Impossible d'envoyer votre demande. Veuillez réessayer ou écrire à contacts@i-techsarl.com.")}</p>}
                  </div>
                </form>
              ) : (
                <p className="ct-cb-ok"><Ic id="i-check" />{t("Votre demande a bien été envoyée. Notre équipe vous répondra dans les meilleurs délais.")}</p>
              )}
            </div>
            <CallbackWidget />
          </div>
        </div>
      </section>
    </div>
  );
}
