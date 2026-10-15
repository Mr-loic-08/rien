import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
 selector:'app-microfinances-page', standalone:true, templateUrl:'./microfinances.html'
})
export class MicrofinancesPageComponent implements OnInit,OnDestroy{
 readonly l=inject(LanguageService);
 readonly testimonials = [
  {quote:'Grâce aux solutions I-TECH, nous avons pu digitaliser l’ensemble de nos opérations et améliorer significativement la qualité de service offerte à nos membres.',image:'images/secteurs/mf-avis-1-v97.png'},
  {quote:'Exemple d’avis client à remplacer après validation : simplification du suivi des opérations et des membres.',image:'images/secteurs/mf-avis-2-v97.png'},
  {quote:'Exemple d’avis client à remplacer après validation : meilleur accès aux informations pour les équipes.',image:'images/secteurs/mf-avis-3-v97.png'},
  {quote:'Exemple d’avis client à remplacer après validation : accompagnement dans la transformation digitale.',image:'images/secteurs/mf-avis-4-v97.png'}
 ];
 testimonialIndex=0;
 private testimonialTimer: ReturnType<typeof setInterval> | undefined;
 showTestimonial(index:number){this.testimonialIndex=(index+this.testimonials.length)%this.testimonials.length;this.restartTestimonials()}
 private restartTestimonials(){if(this.testimonialTimer)clearInterval(this.testimonialTimer);this.testimonialTimer=setInterval(()=>{this.testimonialIndex=(this.testimonialIndex+1)%this.testimonials.length},3500)}

 readonly media={
  video:{hd:'https://videos.pexels.com/video-files/37080143/15708451_3840_2160_60fps.mp4',poster:'https://images.pexels.com/videos/37080143/counting-money-lagos-market-marina-market-market-woman-37080143.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'},
  heroBg:[
   'https://images.pexels.com/photos/8069481/pexels-photo-8069481.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/7654426/pexels-photo-7654426.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/8154768/pexels-photo-8154768.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ]
 };
 readonly issues=[
  {icon:'i-card',title:'Gestion des crédits',description:'Gérez vos crédits, échéances et suivis en toute simplicité.',href:'#/solutions/core-banking'},
  {icon:'i-bank',title:"Gestion de l'épargne",description:"Optimisez la collecte et la gestion de l'épargne de vos clients.",href:'#/solutions/core-banking'},
  {icon:'i-book',title:'Collecte journalière',description:'Simplifiez la collecte et le suivi des opérations quotidiennes.',href:'#/solutions/collecte-journaliere'},
  {icon:'i-conf',title:'Conformité COBAC',description:'Assurez la conformité de vos opérations avec les normes COBAC.',href:'#/solutions/declaration-bancaire'}
 ];

 readonly mappings=[
  {tone:'blue',icon:'s-core',need:'ALPHA Platform',needDescription:'Une plateforme centralisée pour une gestion bancaire complète et sécurisée.',solution:'ALPHA Bank / Microfinance',solutionDescription:'La solution au cœur de votre banque.',href:'#/solutions/core-banking',visual:'bank'},
  {tone:'green',icon:'s-collecte',need:'Paiements',needDescription:'Des paiements rapides, sûrs et adaptés à tous vos canaux.',solution:'Alpha Monétique',solutionDescription:'La fluidité de vos transactions.',href:'#/solutions/core-banking',visual:'card'},
  {tone:'purple',icon:'s-mobile',need:'Digital',needDescription:'Des services digitaux innovants pour une meilleure expérience client.',solution:'Alpha Mobile Banking',solutionDescription:'Votre banque, partout et à tout moment.',href:'#/solutions/digital-mobile',visual:'phone'},
  {tone:'orange',icon:'s-decl',need:'Déclarations',needDescription:'Une gestion simplifiée et conforme de vos déclarations réglementaires.',solution:'Déclaration Bancaire',solutionDescription:'Conformité et sérénité.',href:'#/solutions/declaration-bancaire',visual:'document'}
 ];
 readonly proofs=[
  {kind:'project',title:'Projet CEPAC',text:"Déploiement d'Alpha Microfinance"},
  {kind:'project',title:'Projet EMF',text:'Digitalisation de la collecte terrain'},
  {kind:'quote',title:'Témoignage client',text:'I-TECH a transformé notre manière de travailler.',author:'Directeur Général'}
 ];

 readonly benefits=[
  {icon:'i-chart',text:'Réduction des tâches manuelles'},
  {icon:'i-shield',text:'Contrôle renforcé'},
  {icon:'i-conf',text:'Conformité réglementaire'},
  {icon:'i-globe',text:'Digitalisation du réseau'}
 ];
 mappingActive=0;
 goMapping(i:number,el:HTMLElement){this.mappingActive=i;const card=el.children.item(i) as HTMLElement|null;card?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})}
 onMappingScroll(el:HTMLElement){let best=0,d=Infinity,c=el.scrollLeft+el.clientWidth/2;Array.from(el.children).forEach((x,i)=>{const e=x as HTMLElement,n=Math.abs(e.offsetLeft+e.offsetWidth/2-c);if(n<d){d=n;best=i}});this.mappingActive=best}

 img=0; progress=0; videoOk=true; active=0; private raf=0; private started=0; readonly duration=6000;
 ngOnInit(){this.startProgress();this.restartTestimonials()}
 ngOnDestroy(){cancelAnimationFrame(this.raf);if(this.testimonialTimer)clearInterval(this.testimonialTimer)}
 go(i:number){this.img=((i%3)+3)%3;this.progress=0;this.startProgress()}
 videoError(){this.videoOk=false}
 scrollToCard(i:number,el:HTMLElement){this.active=i; const card=el.children.item(i) as HTMLElement|null; card?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'})}
 onTrackScroll(el:HTMLElement){let best=0,d=Infinity,c=el.scrollLeft+el.clientWidth/2;Array.from(el.children).forEach((x,i)=>{const e=x as HTMLElement,n=Math.abs(e.offsetLeft+e.offsetWidth/2-c);if(n<d){d=n;best=i}});this.active=best}
 moveGlow(ev:PointerEvent){const e=ev.currentTarget as HTMLElement,r=e.getBoundingClientRect();e.style.setProperty('--mouse-x',`${ev.clientX-r.left}px`);e.style.setProperty('--mouse-y',`${ev.clientY-r.top}px`)}
 resetGlow(ev:PointerEvent){const e=ev.currentTarget as HTMLElement;e.style.setProperty('--mouse-x','50%');e.style.setProperty('--mouse-y','50%')}
 private startProgress(){cancelAnimationFrame(this.raf);this.started=performance.now();const tick=(n:number)=>{this.progress=Math.min(1,(n-this.started)/this.duration);if(this.progress>=1){this.go(this.img+1);return}this.raf=requestAnimationFrame(tick)};this.raf=requestAnimationFrame(tick)}
}
