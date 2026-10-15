import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOLUTIONS } from '../../../data/solutions';
import { LanguageService } from '../../../core/language.service';

@Component({selector:'app-home-solutions',standalone:true,imports:[CommonModule],templateUrl:'./solutions.html'})
export class HomeSolutionsComponent {
 readonly l = inject(LanguageService);
 readonly solutions = SOLUTIONS;
 art(key:string):string {return SOLUTIONS.find(s => s.key === key)?.icon || 'i-bank';}
 number(i:number):string {return String(i+1).padStart(2,'0');}
}
