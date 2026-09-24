import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './pages/home/hero/hero';
import { HomeSolutionsComponent } from './pages/home/solutions/solutions';

@Component({
  selector: 'app-root', standalone: true,
  imports: [HeaderComponent, HeroComponent, HomeSolutionsComponent],
  templateUrl: './app.html', styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;
  private sections: HTMLElement[] = [];
  private raf = 0;

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
    } else revealElements.forEach(el => el.classList.add('visible'));

    // V17.20.4 : chaque bloc devient une scène avec profondeur liée au scroll.
    this.sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
    this.sections.forEach(section => section.classList.add('itech-scene'));
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.updateScenes();
      window.addEventListener('scroll', this.onSceneScroll, { passive: true });
      window.addEventListener('resize', this.onSceneScroll, { passive: true });
    }
  }

  private onSceneScroll = () => {
    if (!this.raf) this.raf = requestAnimationFrame(() => { this.raf = 0; this.updateScenes(); });
  };

  private updateScenes(): void {
    const vh = window.innerHeight || 1;
    this.sections.forEach(section => {
      const r = section.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (vh * .5 - (r.top + r.height * .5)) / Math.max(vh, r.height)));
      section.style.setProperty('--scene-progress', progress.toFixed(3));
    });
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    window.removeEventListener('scroll', this.onSceneScroll);
    window.removeEventListener('resize', this.onSceneScroll);
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
