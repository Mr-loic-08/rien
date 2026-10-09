import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
 selector:'app-grandes-entreprises-page', standalone:true, templateUrl:'./grandes-entreprises.html'
})
export class GrandesEntreprisesPageComponent implements OnInit,OnDestroy{
 readonly l=inject(LanguageService);
 readonly media={
  video:{hd:'https://videos.pexels.com/video-files/5725951/5725951-uhd_3840_2160_30fps.mp4',poster:'https://images.pexels.com/videos/5725951/adult-business-businessman-businesswoman-5725951.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'},
  heroBg:[
   'https://images.pexels.com/photos/7793926/pexels-photo-7793926.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/8547285/pexels-photo-8547285.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ]
 };
 readonly issues=[
  {icon:'i-users',text:'Gestion des Ressources Humaines'},
  {icon:'i-chart',text:'Comptabilité & Finance'},
  {icon:'i-book',text:'Gestion Électronique des Documents'},
  {icon:'i-bulb',text:'Développement Spécifique'}
 ];
 readonly mappings=[
  {tone:'blue',icon:'i-users',need:'RH',needDescription:'',solution:'Alpha RH',solutionDescription:'',href:'#/solutions/gestion-rh',visual:'bank'},
  {tone:'green',icon:'i-chart',need:'Comptabilité',needDescription:'',solution:'Alpha Comptabilité',solutionDescription:'',href:'#/solutions/gestion-rh',visual:'card'},
  {tone:'purple',icon:'i-book',need:'GED',needDescription:'',solution:'I-GED',solutionDescription:'',href:'#/solutions/gestion-rh',visual:'document'},
  {tone:'orange',icon:'i-bulb',need:'Développement',needDescription:'',solution:'Solutions Sur Mesure',solutionDescription:'',href:'#/solutions/digital-mobile',visual:'phone'}
 ];
 readonly benefits=[
 {icon:'i-chart',text:'Productivité accrue'},
 {icon:'i-link',text:'Meilleure traçabilité'},
 {icon:'i-lock',text:'Sécurité des données'},
 {icon:'i-swap',text:'Adaptabilité et évolutivité'}
 ];
 readonly enterpriseProofs=[
 {kind:'project',title:'Projet RH',text:'Digitalisation des processus RH',author:''},
 {kind:'project',title:'Projet Comptabilité',text:'Automatisation comptable',author:''},
 {kind:'quote',title:'Témoignage client',text:'Des solutions adaptées à nos besoins spécifiques.',author:'Directeur Financier'}
 ];
 img=0;progress=0;videoOk=true;private raf=0;private started=0;readonly duration=6000;
 ngOnInit(){this.startProgress()} ngOnDestroy(){cancelAnimationFrame(this.raf)}
 go(i:number){this.img=((i%3)+3)%3;this.progress=0;this.startProgress()}
 videoError(){this.videoOk=false}
 private startProgress(){cancelAnimationFrame(this.raf);this.started=performance.now();const tick=(n:number)=>{this.progress=Math.min(1,(n-this.started)/this.duration);if(this.progress>=1){this.go(this.img+1);return}this.raf=requestAnimationFrame(tick)};this.raf=requestAnimationFrame(tick)}
}
