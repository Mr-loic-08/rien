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

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent, HeroComponent, HomeSolutionsComponent, HomeSectorsComponent, HomeImpactComponent, HomeTrustComponent, HomeClientsComponent, HomeWhyComponent, HomeCtaComponent, FooterComponent, SolutionsPageComponent],
  templateUrl: './app.html', styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  isSolutions=false;
  private onHash=()=>{ const h=location.hash.replace(/\/$/,''); this.isSolutions=h==='#/solutions'; };
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
