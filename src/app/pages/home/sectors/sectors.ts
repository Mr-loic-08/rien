import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

type SectorCard = {
  tone: 't1' | 't2' | 't3';
  title: string;
  text: string;
  icon: string;
  key: string;
  photo: string;
  highlights: readonly string[];
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
    { tone: 't2', title: 'Banques', text: 'Modernisez vos systèmes et réinventez vos services digitaux.', icon: 'i-bank', key: 'banques-commerciales', photo: 'images/secteurs/secteurs-v29-banks.webp', highlights: ['Services bancaires digitaux', 'Sécurité des transactions', 'Conformité réglementaire'] },
    { tone: 't1', title: 'Microfinance', text: "Maîtrisez les coûts opérationnels et améliorez l'expérience client.", icon: 'i-microfinance', key: 'microfinances', photo: 'images/secteurs/secteurs-v29-micro.webp', highlights: ['Collecte sur le terrain', 'Suivi des opérations', 'Proximité avec les clients'] },
    { tone: 't3', title: 'Grandes entreprises', text: 'Automatisez vos processus financiers et de gestion.', icon: 'i-corporate', key: 'grandes-entreprises', photo: 'images/secteurs/secteurs-v29-enterprises.webp', highlights: ['Automatisation des processus', 'Intégration des outils métiers', 'Pilotage des activités'] }
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
