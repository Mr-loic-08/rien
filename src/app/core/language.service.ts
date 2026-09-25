import { Injectable, signal } from '@angular/core';
export type Language = 'fr'|'en';
const EN: Record<string,string> = {
  'Accueil':'Home','Solutions':'Solutions','Secteurs':'Sectors','Ressources':'Resources',"L'Entreprise":'Company','Contact & Support':'Contact & Support',
  'Demander une démo':'Request a demo','Accélérez la':'Accelerate the','transformation digitale':'digital transformation','de votre institution financière.':'of your financial institution.',
  "I-TECH accompagne les banques, établissements de microfinance et entreprises avec des solutions Core Banking, Mobile Banking, Paiement Digital et Transformation Monétique adaptées aux réalités africaines.":'I-TECH supports banks, microfinance institutions and companies with Core Banking, Mobile Banking, Digital Payment and Card Transformation solutions adapted to African realities.',
  'Découvrir nos solutions':'Discover our solutions',"d'expertise":'of expertise','Conformité':'Compliance','Solutions déployées':'Solutions deployed','en Afrique':'in Africa','Support':'Support',
  'Gamme ALPHA':'ALPHA Range',
  'Des solutions conçues pour les institutions financières modernes':'Solutions designed for modern financial institutions',
  "Une suite logicielle complète pour digitaliser vos opérations, renforcer votre conformité et améliorer l'expérience client.":'A complete software suite to digitize operations, strengthen compliance and improve customer experience.',
  'En savoir plus':'Learn more',
  'Une expertise adaptée à chaque secteur':'Expertise tailored to every sector',
  'Microfinance':'Microfinance','Banques':'Banks','Grandes entreprises':'Large enterprises',
  "Maîtrisez les coûts opérationnels et améliorez l'expérience client.":'Control operating costs and improve the customer experience.',
  'Modernisez vos systèmes et réinventez vos services digitaux.':'Modernize your systems and reinvent your digital services.',
  'Automatisez vos processus financiers et de gestion.':'Automate your financial and management processes.',
  'Focus métier':'Business focus','Diagnostic SI':'IT assessment','Déploiement':'Deployment','Accompagnement':'Support',
  'Nos partenaires':'Our partners','Ils nous font confiance':'They trust us','Rejoignez plus de':'Join more than','250 institutions':'250 institutions','qui ont choisi I-TECH pour leur transformation digitale.':'that chose I-TECH for their digital transformation.','Partenaire I-TECH · institution financière':'I-TECH partner · financial institution','Visiter le site':'Visit website','Visiter':'Visit','Et plus de':'And more than','250 autres institutions':'250 other institutions',"à travers l'Afrique":'across Africa','Voir tous nos partenaires':'See all our partners',
  'Des résultats qui parlent':'Results that speak for themselves',
  "Des indicateurs concrets qui reflètent notre accompagnement des institutions financières en Afrique.":'Concrete indicators that reflect our support for financial institutions across Africa.',
  "Années d'expérience":'Years of experience','Institutions accompagnées':'Institutions supported','Pays en Afrique':'Countries in Africa','Utilisateurs finaux':'End users','Transactions par an':'Transactions per year',
  'Nos clients':'Our clients','Ils nous font':'They put their','confiance':'trust in us',
  'Des institutions financières, entreprises et organisations qui avancent avec nous depuis plus de 19 ans.':'Financial institutions, companies and organizations moving forward with us for over 19 years.',
  'Clients de confiance':'Trusted clients',
  'Pourquoi I-TECH':'Why I-TECH','Un partenaire technologique de confiance':'A trusted technology partner',
  'Cliquez sur une fenêtre pour découvrir chaque engagement.':'Click a window to discover each commitment.',
  'Expertise métier':'Business expertise','Une connaissance approfondie des métiers financiers.':'In-depth knowledge of financial services.',
  'Une assistance réactive et personnalisée.':'Responsive, personalized assistance.',
  'Aux normes COBAC, BEAC et internationales.':'Compliant with COBAC, BEAC and international standards.',
  'Intégration':'Integration','Compatible avec votre écosystème existant.':'Compatible with your existing ecosystem.',
  'Sécurité':'Security','Des données protégées à chaque étape.':'Data protected at every stage.',
  'Innovation':'Innovation','Des solutions évolutives pour demain.':'Scalable solutions for tomorrow.',
  'Ouvrir':'Open',
  'Prêt à accélérer votre transformation digitale ?':'Ready to accelerate your digital transformation?',
  'Échangez avec nos experts et découvrez comment I-TECH peut vous accompagner.':'Talk with our experts and discover how I-TECH can support you.',
  'Demander une démonstration':'Request a demo',
  'Contactez un expert':'Contact an expert','Précédent':'Previous','Suivant':'Next',
  'Voir tous nos clients':'View all our clients','Confiance':'Trust','Des partenariats solides':'Strong partnerships',
  'Performance':'Performance','Des résultats concrets':'Tangible results','Croissance':'Growth','Un développement partagé':'Shared development',
  'Toujours plus loin ensemble':'Going further together','Tous nos clients':'All our clients',
  'NOS CLIENTS':'OUR CLIENTS','Tous ceux qui nous font':'Everyone who puts their',
  'Découvrez les institutions et organisations qui accompagnent l’écosystème I-TECH.':'Discover the institutions and organizations in the I-TECH ecosystem.',
  'Fermer':'Close',
  'À propos':'About us' ,'Carrières':'Careers','Partenaires':'Partners','Contact / Démo':'Contact / Demo','Support Client':'Customer Support','Politique de confidentialité':'Privacy Policy'
};
@Injectable({providedIn:'root'})
export class LanguageService {
  lang = signal<Language>(this.initial());
  private initial():Language { const s=localStorage.getItem('itech-language-preference'); if(s==='fr'||s==='en') return s; return navigator.language.toLowerCase().startsWith('en')?'en':'fr'; }
  toggle(){ const n=this.lang()==='fr'?'en':'fr'; localStorage.setItem('itech-language-preference',n); this.lang.set(n); }
  t(s:string){ return this.lang()==='en' ? (EN[s] ?? s) : s; }
}
