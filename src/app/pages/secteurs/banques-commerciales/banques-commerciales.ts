import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
 selector:'app-banques-commerciales-page', standalone:true, templateUrl:'./banques-commerciales.html'
})
export class BanquesCommercialesPageComponent implements OnInit,OnDestroy{
 readonly l=inject(LanguageService);
 readonly media={
  video:{hd:'https://videos.pexels.com/video-files/12719805/12719805-uhd_3840_2160_24fps.mp4',poster:'https://images.pexels.com/videos/12719805/pexels-photo-12719805.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'},
  heroBg:[
   'https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/19107852/pexels-photo-19107852.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ]
 };
 readonly mappings=[
  {tone:'blue',icon:'i-bank',need:'Core Banking',needDescription:'Une plateforme centralisée pour une gestion bancaire complète et sécurisée.',solution:'Alpha Bank',solutionDescription:'La solution au cœur de votre banque.',href:'#/solutions/core-banking',visual:'bank'},
  {tone:'green',icon:'i-card',need:'Paiements',needDescription:'Des paiements rapides, sûrs et adaptés à tous vos canaux.',solution:'Alpha Monétique',solutionDescription:'La fluidité de vos transactions.',href:'#/solutions/core-banking',visual:'card'},
  {tone:'purple',icon:'i-phone',need:'Digital',needDescription:'Des services digitaux innovants pour une meilleure expérience client.',solution:'Alpha Mobile Banking',solutionDescription:'Votre banque, partout et à tout moment.',href:'#/solutions/digital-mobile',visual:'phone'},
  {tone:'orange',icon:'i-book',need:'Déclarations',needDescription:'Une gestion simplifiée et conforme de vos déclarations réglementaires.',solution:'Déclaration Bancaire',solutionDescription:'Conformité et sérénité.',href:'#/solutions/declaration-bancaire',visual:'document'}
 ];
 readonly benefits=[
  {icon:'i-link',text:'Centralisation des opérations'},
  {icon:'i-chart',text:'Réduction des coûts'},
  {icon:'i-users',text:'Expérience client améliorée'},
  {icon:'i-lock',text:'Sécurité renforcée'}
 ];
 mappingActive=0;
 goMapping(i:number,el:HTMLElement){this.mappingActive=i;const card=el.children.item(i) as HTMLElement|null;card?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})}
 onMappingScroll(el:HTMLElement){let best=0,d=Infinity,c=el.scrollLeft+el.clientWidth/2;Array.from(el.children).forEach((x,i)=>{const e=x as HTMLElement,n=Math.abs(e.offsetLeft+e.offsetWidth/2-c);if(n<d){d=n;best=i}});this.mappingActive=best}
 moveGlow(ev:PointerEvent){const e=ev.currentTarget as HTMLElement,r=e.getBoundingClientRect();e.style.setProperty('--mouse-x',`${ev.clientX-r.left}px`);e.style.setProperty('--mouse-y',`${ev.clientY-r.top}px`)}
 resetGlow(ev:PointerEvent){const e=ev.currentTarget as HTMLElement;e.style.setProperty('--mouse-x','50%');e.style.setProperty('--mouse-y','50%')}

 readonly issues=[
  {icon:'i-bank',text:'Core Banking'},
  {icon:'i-card',text:'Monétique'},
  {icon:'i-phone',text:'Digital Banking'},
  {icon:'i-chart',text:'Reporting réglementaire'},
  {icon:'i-link',text:'Intégration API'}
 ];
 img=0; progress=0; videoOk=true; private raf=0; private started=0; readonly duration=6000;
 ngOnInit(){this.startProgress()}
 ngOnDestroy(){cancelAnimationFrame(this.raf)}
 go(i:number){this.img=((i%3)+3)%3;this.progress=0;this.startProgress()}
 videoError(){this.videoOk=false}
 private startProgress(){cancelAnimationFrame(this.raf);this.started=performance.now();const tick=(n:number)=>{this.progress=Math.min(1,(n-this.started)/this.duration);if(this.progress>=1){this.go(this.img+1);return}this.raf=requestAnimationFrame(tick)};this.raf=requestAnimationFrame(tick)}
}
