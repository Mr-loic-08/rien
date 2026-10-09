import { Component, inject, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../core/language.service';
@Component({selector:'app-entreprise-page',standalone:true,templateUrl:'./entreprise.html'})
export class EntreprisePageComponent implements AfterViewInit, OnDestroy {
 @ViewChild('enterpriseVideo') enterpriseVideo?: ElementRef<HTMLVideoElement>;
 private enforceMute=()=>{const v=this.enterpriseVideo?.nativeElement;if(v){v.muted=true;v.defaultMuted=true;v.volume=0;}};
 ensureMuted(v:HTMLVideoElement){if(!v.muted || v.volume!==0){v.muted=true;v.volume=0;}}
 ngAfterViewInit(){this.enforceMute();}
 ngOnDestroy(){const v=this.enterpriseVideo?.nativeElement;if(v){v.pause();v.removeAttribute('src');v.querySelectorAll('source').forEach(x=>x.removeAttribute('src'));v.load();}}
 l=inject(LanguageService);
 experience=new Date().getFullYear()-2007;
 cards=[
 {key:'apropos',icon:'i-users',title:'À PROPOS',text:'Découvrez notre histoire, notre mission, nos valeurs et notre équipe.',image:'https://images.pexels.com/photos/8547285/pexels-photo-8547285.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600',cta:'En savoir plus'},
 {key:'carrieres',icon:'i-bulb',title:'CARRIÈRES',text:"Rejoignez une équipe passionnée par l'innovation et impactez le futur.",image:'https://images.pexels.com/photos/7793926/pexels-photo-7793926.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600',cta:'Voir les opportunités'},
 {key:'partenaires',icon:'i-link',title:'PARTENAIRES',text:'Découvrez les organisations et technologies qui collaborent avec nous.',image:'https://images.pexels.com/photos/7979601/pexels-photo-7979601.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=600',cta:'Voir nos partenaires'}
 ];
 subscribe(e:Event){e.preventDefault();}
 stats=[
 {icon:'i-cal',value:String(this.experience)+'+',label:"Années d'expérience"},
 {icon:'i-bank',value:'250+',label:'Clients accompagnés'},
 {icon:'i-head',value:'24/7',label:'Support technique'},
 {icon:'i-pin',value:'Zone CEMAC',label:'Présence régionale'}
 ];
}
