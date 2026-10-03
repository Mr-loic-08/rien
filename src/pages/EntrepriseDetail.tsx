import { useMemo, useState } from "react";
import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import { ABOUT, CAREERS, PARTNERS, type EnterpriseKey } from "../data/entreprise";
import { useLanguage } from "../i18n";

function DetailHero({ title, text, image, eyebrow }: { title: string; text: string; image: string; eyebrow: string }) {
  const { t } = useLanguage();
  return <section className="ent-detail-hero"><div className="ent-detail-photo" style={{ backgroundImage: `url('${image}')` }} /><div className="ent-detail-veil" /><div className="container"><Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("L'Entreprise"), href: "#/entreprise" }, { label: t(eyebrow) }]} /><div className="ent-detail-copy"><span className="ent-kicker"><Ic id="i-layers" />{t(eyebrow)}</span><h1>{t(title)}</h1><p>{t(text)}</p></div></div></section>;
}

function AboutPage() {
  const { t } = useLanguage();
  return <>
    <DetailHero title={ABOUT.heroTitle} text={ABOUT.heroText} image={ABOUT.heroImage} eyebrow="À propos" />
    <section className="about-path reveal"><div className="container"><h2 className="sec-title center">{t("Notre parcours")}</h2><div className="about-timeline">{ABOUT.timeline.map((item) => <div className="about-time" key={item.year}><span className="about-dot" /><b>{t(item.year)}</b><h3>{t(item.title)}</h3><p>{t(item.text)}</p></div>)}</div></div></section>
    <section className="about-mission reveal"><div className="container"><span className="about-big-ic"><Ic id="i-users" /></span><div><span className="sec-kicker">{t("Notre raison d'être")}</span><h2 className="sec-title left">{t("Notre mission")}</h2><p>{t(ABOUT.mission)}</p></div></div></section>
    <section className="about-values reveal"><div className="container"><h2 className="sec-title center">{t("Nos valeurs")}</h2><div className="about-value-grid">{ABOUT.values.map((v) => <article key={t(v.title)}><span><Ic id={v.icon} /></span><h3>{t(v.title)}</h3><p>{t(v.text)}</p></article>)}</div></div></section>
    <section className="about-team reveal"><div className="container"><h2 className="sec-title center">{t("Notre équipe")}</h2><div className="about-team-grid">{ABOUT.team.map((m) => <div className="about-member" key={t(m.title)}><img src={m.image} alt={t(m.title)} loading="lazy" /><b>{t(m.title)}</b><span>{t(m.role)}</span></div>)}</div><a href="#/entreprise/carrieres" className="btn btn-outline">{t("Voir toute l'équipe")} <Ic id="i-arrow" /></a></div></section>
    <ReasonBand />
  </>;
}

function ReasonBand() {
  const { t } = useLanguage();
  return <section className="ent-reasons reveal"><div className="container"><h2 className="sec-title center light">{t("Pourquoi nous choisir")}</h2><div className="ent-reason-grid">{ABOUT.reasons.map((r) => <div key={t(r.title)}><span><Ic id={r.icon} /></span><b>{t(r.title)}</b><p>{t(r.text)}</p></div>)}</div></div></section>;
}

function CareersPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const visibleJobs = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return CAREERS.jobs;
    return CAREERS.jobs.filter((job) =>
      [job.title, job.meta, job.text].some((value) => t(value).toLocaleLowerCase().includes(needle))
    );
  }, [query, t]);

  return <>
    <DetailHero title={CAREERS.heroTitle} text={CAREERS.heroText} image={CAREERS.heroImage} eyebrow="Carrières" />

    <section className="career-intro reveal">
      <div className="container career-intro-grid">
        <div>
          <span className="sec-kicker">{t("Construisez votre avenir")}</span>
          <h2>{t("Grandissez avec I-TECH")}</h2>
          <p>{t("Rejoignez des équipes qui conçoivent des solutions utiles, apprennent ensemble et accompagnent la transformation digitale de nos clients.")}</p>
        </div>
        <div className="career-highlight-grid">{CAREERS.highlights.map((h) => <div key={t(h.title)}><span><Ic id={h.icon} /></span><b>{t(h.title)}</b></div>)}</div>
      </div>
    </section>

    <section className="career-jobs reveal">
      <div className="container">
        <div className="career-heading career-heading-modern">
          <div><span className="sec-kicker">{t("Recrutement")}</span><h2 className="sec-title left">{t("Trouvez votre prochaine opportunité")}</h2></div>
          <p>{t("Découvrez les opportunités actuellement présentées par I-TECH et trouvez celle qui correspond à votre profil.")}</p>
        </div>
        <div className="career-search" role="search">
          <span><Ic id="i-search" /></span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("Rechercher un poste, un métier ou un mot-clé")} aria-label={t("Rechercher une opportunité")} />
          {query && <button type="button" onClick={() => setQuery("")} aria-label={t("Effacer la recherche")}>×</button>}
        </div>
        <div className="career-result-line"><b>{visibleJobs.length}</b> {t(visibleJobs.length > 1 ? "opportunités disponibles" : "opportunité disponible")}</div>
        <div className="career-job-list career-job-grid">{visibleJobs.map((j) => <article key={t(j.title)}><span className="career-job-ic"><Ic id={j.icon} /></span><div><h3>{t(j.title)}</h3><small>{t(j.meta)}</small><p>{t(j.text)}</p><a href="#/contact" className="link">{t("Voir l'offre")} <Ic id="i-arrow" /></a></div></article>)}</div>
        {visibleJobs.length === 0 && <div className="career-empty"><span><Ic id="i-search" /></span><h3>{t("Aucune opportunité trouvée")}</h3><p>{t("Essayez un autre mot-clé ou envoyez-nous une candidature spontanée.")}</p></div>}
      </div>
    </section>

    <section className="career-reasons reveal"><div className="container"><span className="sec-kicker career-center-kicker">{t("Votre expérience I-TECH")}</span><h2 className="sec-title center">{t("Pourquoi travailler chez I-TECH ?")}</h2><div className="career-reason-grid">{CAREERS.reasons.map((r) => <div key={t(r.title)}><span><Ic id={r.icon} /></span><b>{t(r.title)}</b><p>{t(r.text)}</p></div>)}</div></div></section>
    <section className="career-cta"><div className="container"><div><span className="career-cta-kicker">{t("Candidature spontanée")}</span><h2>{t("Vous ne trouvez pas le poste idéal ?")}</h2><p>{t("Envoyez-nous votre candidature spontanée.")}</p></div><a href="#/contact" className="btn btn-primary">{t("Postuler spontanément")} <Ic id="i-arrow" /></a></div></section>
  </>;
}

function PartnersPage() {
  const { t } = useLanguage();
  return <>
    <DetailHero title={PARTNERS.heroTitle} text={PARTNERS.heroText} image={PARTNERS.heroImage} eyebrow="Partenaires" />
    <section className="partner-directory reveal"><div className="container"><span className="sec-kicker">{t("Écosystème")}</span><h2 className="sec-title left">{t(PARTNERS.techTitle)}</h2><p className="partner-lead">{t(PARTNERS.techText)}</p><div className="partner-logo-grid">{PARTNERS.tech.map((p) => <div className={`partner-logo ${p.tone}`} key={p.name}><b>{p.name}</b><span>{p.suffix}</span></div>)}</div></div></section>
    <section className="partner-directory institution reveal"><div className="container"><span className="sec-kicker">{t("Coopération")}</span><h2 className="sec-title left">{t(PARTNERS.instTitle)}</h2><p className="partner-lead">{t(PARTNERS.instText)}</p><div className="partner-inst-grid">{PARTNERS.institutions.map((p) => <div key={p} className="partner-inst">{p}</div>)}</div></div></section>
    <section className="partner-join reveal"><div className="container"><div><span className="sec-kicker light">{t("Construisons ensemble")}</span><h2>{t("Devenez partenaire")}</h2><p>{t("Vous souhaitez collaborer avec I-TECH ? Construisons ensemble des solutions innovantes et créons de la valeur pour nos clients.")}</p></div><a href="#/contact" className="btn btn-primary">{t("Nous contacter")} <Ic id="i-arrow" /></a></div></section>
  </>;
}

export default function EntrepriseDetail({ page }: { page: EnterpriseKey }) {
  if (page === "apropos") return <div className="enterprise-detail" key={page}><AboutPage /></div>;
  if (page === "carrieres") return <div className="enterprise-detail" key={page}><CareersPage /></div>;
  return <div className="enterprise-detail" key={page}><PartnersPage /></div>;
}