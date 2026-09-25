import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

type WhyItem={icon:string;b:string;s:string};
@Component({selector:'app-home-why',standalone:true,templateUrl:'./why.html'})
export class HomeWhyComponent{
 readonly l=inject(LanguageService);
 open:number|null=null;
 readonly items:WhyItem[]=[
  {icon:'i-users',b:'Expertise métier',s:'Une connaissance approfondie des métiers financiers.'},
  {icon:'i-head',b:'Support',s:'Une assistance réactive et personnalisée.'},
  {icon:'i-shield',b:'Conformité',s:'Aux normes COBAC, BEAC et internationales.'},
  {icon:'i-link',b:'Intégration',s:'Compatible avec votre écosystème existant.'},
  {icon:'i-lock',b:'Sécurité',s:'Des données protégées à chaque étape.'},
  {icon:'i-bulb',b:'Innovation',s:'Des solutions évolutives pour demain.'}
 ];
 get current(){return this.open===null?null:this.items[this.open]}
 show(i:number){this.open=i;document.body.style.overflow='hidden'}
 close(){this.open=null;document.body.style.overflow=''}
 prev(){if(this.open!==null)this.open=(this.open-1+this.items.length)%this.items.length}
 next(){if(this.open!==null)this.open=(this.open+1)%this.items.length}
 @HostListener('document:keydown.escape') escape(){if(this.open!==null)this.close()}
 ngOnDestroy(){document.body.style.overflow=''}
}
