import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';
@Component({selector:'app-alpha-monetique-page',standalone:true,templateUrl:'./alpha-monetique.html'})
export class AlphaMonetiquePageComponent {
 readonly l=inject(LanguageService);
 readonly sol=SOLUTIONS.find(s=>s.key==='alpha-monetique')!;
}
