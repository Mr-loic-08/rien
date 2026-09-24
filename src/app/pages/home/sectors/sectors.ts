import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

type SectorCard = {
  tone: 't1' | 't2' | 't3';
  title: string;
  text: string;
  icon: string;
  key: string;
};

@Component({
  selector: 'app-home-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.html'
})
export class HomeSectorsComponent {
  readonly l = inject(LanguageService);

  readonly cards: SectorCard[] = [
    { tone: 't1', title: 'Microfinance', text: "Maîtrisez les coûts opérationnels et améliorez l'expérience client.", icon: 'i-microfinance', key: 'microfinances' },
    { tone: 't2', title: 'Banques', text: 'Modernisez vos systèmes et réinventez vos services digitaux.', icon: 'i-bank', key: 'banques-commerciales' },
    { tone: 't3', title: 'Grandes entreprises', text: 'Automatisez vos processus financiers et de gestion.', icon: 'i-corporate', key: 'grandes-entreprises' }
  ];

  active = 0;
  animationKey = 0;

  get current(): SectorCard { return this.cards[this.active]; }

  select(index: number): void {
    if (index === this.active) return;
    this.active = index;
    this.animationKey++;
  }
}
