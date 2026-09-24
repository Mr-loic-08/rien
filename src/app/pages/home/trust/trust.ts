import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

type Partner = { name:string; alt:string; href:string; img:string; initials:string; c1:string; c2:string };
@Component({selector:'app-home-trust',standalone:true,templateUrl:'./trust.html'})
export class HomeTrustComponent {
 readonly l=inject(LanguageService); focused=0;
 readonly partners:Partner[]=[
  {name:'CONTABO',alt:'CONTABO',href:'https://my.contabo.com/account/login',img:'images/logos/contabo.png',initials:'CT',c1:'#0f9b8e',c2:'#0b5f57'},
  {name:'DESJARDINS',alt:'Desjardins',href:'https://www.desjardins.com/qc/fr.html',img:'images/logos/desjardins.png',initials:'DJ',c1:'#12864a',c2:'#0b5c33'},
  {name:'CAMCCUL',alt:'CAMCCUL',href:'https://camccul.cm',img:'images/logos/camccul.png',initials:'CC',c1:'#1a4f9c',c2:'#0d2b4a'},
  {name:'OMOA',alt:'OMOA',href:'https://www.omoa-group.com',img:'images/logos/omoa.png',initials:'OM',c1:'#f2a11e',c2:'#c07407'}
 ];
 get active(){return this.partners[this.focused] ?? this.partners[0]}
 setFocused(i:number){this.focused=i}
 imageError(e:Event){const img=e.target as HTMLImageElement; img.style.display='none'; const fb=img.nextElementSibling as HTMLElement|null; if(fb) fb.style.display='grid'}
}
