import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
@Component({selector:'app-entreprise-page',standalone:true,templateUrl:'./entreprise.html'})
export class EntreprisePageComponent {
 l=inject(LanguageService);
 experience=new Date().getFullYear()-2007;
 scrollTo(e:Event,id:string){e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
}
