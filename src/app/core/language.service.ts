import { Injectable, signal } from '@angular/core';
export type Language = 'fr'|'en';
const EN: Record<string,string> = {
  'Accueil':'Home','Solutions':'Solutions','Secteurs':'Sectors','Ressources':'Resources',"L'Entreprise":'Company','Contact & Support':'Contact & Support',
  'Demander une démo':'Request a demo','Accélérez la':'Accelerate the','transformation digitale':'digital transformation','de votre institution financière.':'of your financial institution.',
  "I-TECH accompagne les banques, établissements de microfinance et entreprises avec des solutions Core Banking, Mobile Banking, Paiement Digital et Transformation Monétique adaptées aux réalités africaines.":'I-TECH supports banks, microfinance institutions and companies with Core Banking, Mobile Banking, Digital Payment and Card Transformation solutions adapted to African realities.',
  'Découvrir nos solutions':'Discover our solutions',"d'expertise":'of expertise','Conformité':'Compliance','Solutions déployées':'Solutions deployed','en Afrique':'in Africa','Support':'Support',
  'À propos':'About us','Carrières':'Careers','Partenaires':'Partners','Contact / Démo':'Contact / Demo','Support Client':'Customer Support','Politique de confidentialité':'Privacy Policy'
};
@Injectable({providedIn:'root'})
export class LanguageService {
  lang = signal<Language>(this.initial());
  private initial():Language { const s=localStorage.getItem('itech-language-preference'); if(s==='fr'||s==='en') return s; return navigator.language.toLowerCase().startsWith('en')?'en':'fr'; }
  toggle(){ const n=this.lang()==='fr'?'en':'fr'; localStorage.setItem('itech-language-preference',n); this.lang.set(n); }
  t(s:string){ return this.lang()==='en' ? (EN[s] ?? s) : s; }
}
