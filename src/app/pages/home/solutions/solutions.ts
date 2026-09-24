import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOLUTIONS } from '../../../data/solutions';
import { LanguageService } from '../../../core/language.service';

const ART: Record<string,string> = {
 'core-banking':'s-core', 'collecte-journaliere':'s-collecte',
 'digital-mobile':'s-mobile','gestion-rh':'s-rh',
 'declaration-bancaire':'s-decl','genie-logiciel':'s-genie'
};
@Component({selector:'app-home-solutions',standalone:true,imports:[CommonModule],templateUrl:'./solutions.html'})
export class HomeSolutionsComponent {
 readonly l = inject(LanguageService);
 readonly solutions = SOLUTIONS;
 art(key:string):string {return ART[key] || 's-core';}
 number(i:number):string {return String(i+1).padStart(2,'0');}
}
