import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { COMPANY_EXPERIENCE_PLUS } from '../../../data/company';

type ImpactItem = { icon: string; value: string; label: string };

@Component({ selector: 'app-home-impact', standalone: true, templateUrl: './impact.html' })
export class HomeImpactComponent implements AfterViewInit, OnDestroy {
  readonly l = inject(LanguageService);
  readonly items: ImpactItem[] = [
    { icon: 'i-cal', value: COMPANY_EXPERIENCE_PLUS, label: "Années d'expérience" },
    { icon: 'i-bank', value: '250+', label: 'Institutions accompagnées' },
    { icon: 'i-globe', value: '10+', label: 'Pays en Afrique' },
    { icon: 'i-users', value: '2,5M+', label: 'Utilisateurs finaux' },
    { icon: 'i-swap', value: '200M+', label: 'Transactions par an' }
  ];
  @ViewChildren('card') cards!: QueryList<ElementRef<HTMLElement>>;
  private io?: IntersectionObserver;
  private timers: number[] = [];
  private rafs: number[] = [];

  ngAfterViewInit(): void {
    const els = this.cards.map(x => x.nativeElement);
    if (!('IntersectionObserver' in window)) { els.forEach((el, i) => this.animate(el, i)); return; }
    this.io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      this.animate(el, Number(el.dataset['index'] || 0));
      this.io?.unobserve(el);
    }), { threshold: .35 });
    els.forEach(el => this.io?.observe(el));
  }
  initial(raw: string): string { return '0' + (raw.match(/^[\d,.]+(.*)$/)?.[1] || ''); }
  private animate(el: HTMLElement, index: number): void {
    if (el.classList.contains('on')) return;
    el.classList.add('on');
    const valueEl = el.querySelector<HTMLElement>('[data-impact-value]');
    if (!valueEl) return;
    const raw = this.items[index].value, m = raw.match(/^([\d,.]+)(.*)$/);
    const target = Number((m?.[1] || '0').replace(',', '.')), suffix = m?.[2] || '', decimal = (m?.[1] || '').includes(',');
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const frame = (now: number) => {
        const p = Math.min(1, (now - start) / 1800), eased = 1 - Math.pow(1 - p, 4), n = target * eased;
        valueEl.textContent = (decimal ? n.toFixed(1).replace('.', ',') : Math.round(n).toString()) + suffix;
        if (p < 1) this.rafs.push(requestAnimationFrame(frame));
      };
      this.rafs.push(requestAnimationFrame(frame));
    }, index * 100);
    this.timers.push(timer);
  }
  ngOnDestroy(): void { this.io?.disconnect(); this.timers.forEach(clearTimeout); this.rafs.forEach(cancelAnimationFrame); }
}
