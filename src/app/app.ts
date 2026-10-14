import { CarrieresPageComponent } from './pages/entreprise/carrieres/carrieres';
import { PartenairesPageComponent } from './pages/entreprise/partenaires/partenaires';
import { ConfidentialitePageComponent } from './pages/contact/confidentialite/confidentialite';
import { DemoPageComponent } from './pages/contact/demo/demo';
import { ContactPageComponent } from './pages/contact/contact';
import { AproposPageComponent } from './pages/entreprise/apropos/apropos';
import { EntreprisePageComponent } from './pages/entreprise/entreprise';
import { RessourcesPageComponent } from './pages/ressources/ressources';
import { OnInit, Component, OnDestroy, signal } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './pages/home/hero/hero';
import { HomeSolutionsComponent } from './pages/home/solutions/solutions';
import { HomeSectorsComponent } from './pages/home/sectors/sectors';
import { HomeImpactComponent } from './pages/home/impact/impact';
import { HomeTrustComponent } from './pages/home/trust/trust';
import { HomeClientsComponent } from './pages/home/clients/clients';
import { HomeWhyComponent } from './pages/home/why/why';
import { HomeCtaComponent } from './pages/home/cta/cta';
import { FooterComponent } from './layout/footer/footer';
import { SolutionsPageComponent } from './pages/solutions/solutions';
import { CoreBankingPageComponent } from './pages/solutions/core-banking/core-banking';
import { CollecteJournalierePageComponent } from './pages/solutions/collecte-journaliere/collecte-journaliere';
import { DigitalMobilePageComponent } from './pages/solutions/digital-mobile/digital-mobile';
import { GestionRhPageComponent } from './pages/solutions/gestion-rh/gestion-rh';
import { DeclarationBancairePageComponent } from './pages/solutions/declaration-bancaire/declaration-bancaire';
import { GenieLogicielPageComponent } from './pages/solutions/genie-logiciel/genie-logiciel';
import { SecteursPageComponent } from './pages/secteurs/secteurs';
import { MicrofinancesPageComponent } from './pages/secteurs/microfinances/microfinances';
import { BanquesCommercialesPageComponent } from './pages/secteurs/banques-commerciales/banques-commerciales';
import { GrandesEntreprisesPageComponent } from './pages/secteurs/grandes-entreprises/grandes-entreprises';

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent, HeroComponent, HomeSolutionsComponent, HomeSectorsComponent, HomeImpactComponent, HomeTrustComponent, HomeClientsComponent, HomeWhyComponent, HomeCtaComponent, FooterComponent, SolutionsPageComponent, CoreBankingPageComponent, CollecteJournalierePageComponent, DigitalMobilePageComponent, GestionRhPageComponent, DeclarationBancairePageComponent, GenieLogicielPageComponent, SecteursPageComponent, MicrofinancesPageComponent, BanquesCommercialesPageComponent, GrandesEntreprisesPageComponent, RessourcesPageComponent, EntreprisePageComponent, AproposPageComponent, ContactPageComponent, DemoPageComponent, ConfidentialitePageComponent, CarrieresPageComponent, PartenairesPageComponent],
  templateUrl: './app.html', styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
  // Transition globale pour la navigation par hash utilisée dans ce projet.
  readonly pageTransition = signal(false);
  private transitionTimer: ReturnType<typeof setTimeout> | undefined;
  private readonly onNavigation = () => {
    this.onHash();
    if (typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
    this.pageTransition.set(false);
    // Relancer l'animation même lors de navigations rapides.
    requestAnimationFrame(() => {
      this.pageTransition.set(true);
      this.transitionTimer = setTimeout(() => this.pageTransition.set(false), 720);
    });
  };
  isSolutions=false;
  isCoreBanking=false;
  isCollecteJournaliere=false;
  isDigitalMobile=false;
  isGestionRh=false;
  isDeclarationBancaire=false;
  isGenieLogiciel=false;
  isSecteurs=false;
  isMicrofinances=false;
  isBanquesCommerciales=false;
  isGrandesEntreprises=false;
  isRessources=false;
  isEntreprise=false;
  isApropos=false;
  isContact=false;
  isDemo=false;
  isPrivacy=false;
  isCarrieres=false;
  isPartenaires=false;
  private onHash=()=>{
    const h=location.hash.replace(/\/$/,'');
    this.isSolutions=h==='#/solutions';
    this.isCoreBanking=h==='#/solutions/core-banking';
    this.isCollecteJournaliere=h==='#/solutions/collecte-journaliere';
    this.isDigitalMobile=h==='#/solutions/digital-mobile';
    this.isGestionRh=h==='#/solutions/gestion-rh';
    this.isDeclarationBancaire=h==='#/solutions/declaration-bancaire';
    this.isGenieLogiciel=h==='#/solutions/genie-logiciel';
    this.isSecteurs=h==='#/secteurs';
    this.isMicrofinances=h==='#/secteurs/microfinances';
    this.isBanquesCommerciales=h==='#/secteurs/banques-commerciales';
    this.isGrandesEntreprises=h==='#/secteurs/grandes-entreprises';
    this.isRessources=h==='#/ressources'||h==='#ressources';
    this.isEntreprise=h==='#/entreprise'||h==='#entreprise';
    this.isApropos=h==='#/entreprise/apropos';
    this.isContact=h==='#/contact'||h==='#/contact-support';
    this.isDemo=h==='#/contact/demo';
    this.isPrivacy=h==='#/contact/confidentialite';
    this.isCarrieres=h==='#/entreprise/carrieres';
    this.isPartenaires=h==='#/entreprise/partenaires';
  };
  ngOnInit(){ this.onHash(); window.addEventListener('hashchange',this.onNavigation); }
  ngOnDestroy(): void {
    window.removeEventListener('hashchange',this.onNavigation);
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
  }
}
