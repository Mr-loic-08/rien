import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';
@Component({selector:'app-ussd-page',standalone:true,templateUrl:'./ussd.html'})
export class UssdPageComponent {
 readonly l=inject(LanguageService);
 readonly sol=SOLUTIONS.find(s=>s.key==='ussd')!;
}
