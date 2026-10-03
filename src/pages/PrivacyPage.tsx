import { Ic } from "../components/Sprite";
import { Crumbs } from "../components/Mockups";
import { useLanguage } from "../i18n";

const sections = [
  ["1. Responsable du traitement", "Les informations transmises via le site sont traitées par I-TECH SARL. Pour toute question relative à vos données personnelles ou à l'exercice de vos droits, vous pouvez écrire à contacts@i-techsarl.com."],
  ["2. Données susceptibles d'être collectées", "Lorsque vous utilisez le formulaire Contact / Démo, nous pouvons recueillir les informations que vous renseignez : nom, prénom, entreprise, fonction, adresse e-mail professionnelle, téléphone, pays, secteur d'activité, solutions souhaitées et contenu de votre message."],
  ["3. Finalités du traitement", "Ces informations sont utilisées pour répondre à votre demande, organiser une démonstration, vous recontacter au sujet de votre projet et assurer le suivi de la relation avec I-TECH."],
  ["4. Caractère obligatoire des informations", "Les champs marqués d'un astérisque sont nécessaires au traitement de la demande. Les autres informations sont facultatives. Sans les informations obligatoires, I-TECH peut ne pas être en mesure de donner suite à la demande."],
  ["5. Destinataires des données", "Les données sont destinées aux équipes I-TECH habilitées à traiter les demandes commerciales, techniques ou de support. Elles ne sont pas destinées à être vendues à des tiers."],
  ["6. Durée de conservation", "Les données sont conservées pendant la durée nécessaire au traitement et au suivi de la demande, puis selon les durées applicables aux obligations administratives, contractuelles ou légales d'I-TECH. Les durées précises doivent être validées par I-TECH avant publication définitive."],
  ["7. Sécurité", "I-TECH met en œuvre des mesures organisationnelles et techniques adaptées afin de limiter l'accès non autorisé, la perte, l'altération ou la divulgation des données personnelles."],
  ["8. Vos droits", "Vous pouvez contacter I-TECH pour demander l'accès à vos données, leur rectification ou, lorsque les conditions applicables le permettent, leur suppression, leur limitation ou vous opposer à certains traitements."],
  ["9. Préférences et stockage local", "Le site peut utiliser le stockage local du navigateur pour mémoriser certaines préférences, notamment la langue choisie. Ces informations servent au fonctionnement et au confort de navigation du site."],
  ["10. Mise à jour de la politique", "Cette politique peut évoluer afin de refléter les changements du site, des traitements ou des exigences applicables. La version publiée sur cette page est celle accessible aux visiteurs."],
] as const;

export default function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <div className="pg privacy-page" key="privacy">
      <section className="privacy-hero">
        <div className="privacy-hero-photo privacy-hero-photo-a" aria-hidden="true" />
        <div className="privacy-hero-photo privacy-hero-photo-b" aria-hidden="true" />
        <div className="privacy-hero-orb privacy-hero-orb-a" aria-hidden="true" />
        <div className="privacy-hero-orb privacy-hero-orb-b" aria-hidden="true" />
        <div className="privacy-hero-grid" aria-hidden="true" />
        <div className="container">
          <Crumbs trail={[{ label: t("Accueil"), href: "#accueil" }, { label: t("Contact & Support"), href: "#/contact" }, { label: t("Politique de confidentialité") }]} />
          <div className="privacy-hero-copy">
            <span className="privacy-hero-icon"><Ic id="i-shield" /></span>
            <div><p className="privacy-kicker">I-TECH SARL</p><h1>{t("Politique de confidentialité")}</h1><p>{t("Cette page explique comment les informations transmises via le site I-TECH sont utilisées et protégées.")}</p></div>
          </div>
        </div>
      </section>
      <main className="privacy-main">
        <div className="privacy-main-glow privacy-main-glow-a" aria-hidden="true" />
        <div className="privacy-main-glow privacy-main-glow-b" aria-hidden="true" />
        <div className="container privacy-layout">
          <aside className="privacy-note"><Ic id="i-info" /><div><b>{t("Information importante")}</b><p>{t("Cette politique doit être validée par I-TECH avant sa publication définitive, notamment pour les durées de conservation et les éventuels prestataires traitant des données.")}</p></div></aside>
          <div className="privacy-sections">
            {sections.map(([title, text]) => <section className="privacy-card reveal" key={title}><h2>{t(title)}</h2><p>{t(text)}</p></section>)}
            <section className="privacy-contact reveal"><span><Ic id="i-mail" /></span><div><h2>{t("Une question sur vos données ?")}</h2><p>{t("Contactez I-TECH à l'adresse suivante :")} <a href="mailto:contacts@i-techsarl.com">contacts@i-techsarl.com</a></p></div></section>
          </div>
        </div>
      </main>
    </div>
  );
}
