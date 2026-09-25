import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
  selector:'app-home-cta',
  standalone:true,
  templateUrl:'./cta.html'
})
export class HomeCtaComponent{
  readonly l=inject(LanguageService);
}
