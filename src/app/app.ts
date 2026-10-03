import { OnInit, AfterViewInit, Component, OnDestroy } from '@angular/core';
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

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent, HeroComponent, HomeSolutionsComponent, HomeSectorsComponent, HomeImpactComponent, HomeTrustComponent, HomeClientsComponent, HomeWhyComponent, HomeCtaComponent, FooterComponent, SolutionsPageComponent, CoreBankingPageComponent, CollecteJournalierePageComponent, DigitalMobilePageComponent, GestionRhPageComponent, DeclarationBancairePageComponent, GenieLogicielPageComponent, SecteursPageComponent, MicrofinancesPageComponent],
  templateUrl: './app.html', styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  isSolutions=false;
  isCoreBanking=false;
  isCollecteJournaliere=false;
  isDigitalMobile=false;
  isGestionRh=false;
  isDeclarationBancaire=false;
  isGenieLogiciel=false;
  isSecteurs=false;
  isMicrofinances=false;
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
  };
  ngOnInit(){ this.onHash(); window.addEventListener('hashchange',this.onHash); }
  private revealObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.visible)'));
    if ('IntersectionObserver' in window) {
      this.revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
      revealElements.forEach(el => this.revealObserver?.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('visible'));
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('hashchange',this.onHash);
    this.revealObserver?.disconnect();
  }
}
