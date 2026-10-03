import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';

type SectorCard = {
  key:string; label:string; tone:'green'|'blue'|'purple'; icon:string;
  cardImg:string; photoFallback:string; cardDesc:string;
};

@Component({
  selector:'app-secteurs-page',
  standalone:true,
  templateUrl:'./secteurs.html'
})
export class SecteursPageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);

  readonly media = {
    video:{
      hd:'https://videos.pexels.com/video-files/7659850/7659850-uhd_3840_2160_25fps.mp4',
      poster:'https://images.pexels.com/videos/7659850/adult-business-computer-conference-room-7659850.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
    },
    heroBg:[
      'https://images.pexels.com/photos/7792880/pexels-photo-7792880.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
      'https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
      'https://images.pexels.com/photos/29069329/pexels-photo-29069329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
    ]
  };

  readonly sectors:SectorCard[]=[
    {key:'microfinances',label:'Microfinances',tone:'green',icon:'i-users',
      cardImg:'images/secteurs/microfinances.jpg',
      photoFallback:'https://images.pexels.com/photos/8872369/pexels-photo-8872369.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800',
      cardDesc:'Gestion des opérations, conformité COBAC, collecte terrain et digitalisation.'},
    {key:'banques-commerciales',label:'Banques Commerciales',tone:'blue',icon:'i-bank',
      cardImg:'images/secteurs/banques.jpg',
      photoFallback:'https://images.pexels.com/photos/33719774/pexels-photo-33719774.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800',
      cardDesc:'Core Banking, monétique, digital banking et intégration.'},
    {key:'grandes-entreprises',label:'Grandes Entreprises',tone:'purple',icon:'i-chart',
      cardImg:'images/secteurs/grandes-entreprises.jpg',
      photoFallback:'https://images.pexels.com/photos/5233311/pexels-photo-5233311.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=800',
      cardDesc:'RH, comptabilité, GED et développement spécifique.'}
  ];


  readonly stats = [
    { icon:'i-cal', value:'19+', label:"Années d'expérience" },
    { icon:'i-bank', value:'250+', label:'Institutions accompagnées' },
    { icon:'i-globe', value:'10+', label:'Pays en Afrique' },
    { icon:'i-head', value:'24/7', label:'Support disponible' },
    { icon:'i-pin', value:'CEMAC', label:'Présence régionale' }
  ];

  readonly pillars = [
    { icon:'i-users', title:'Centré sur vos métiers', text:'Nous comprenons vos défis et parlons votre langage.' },
    { icon:'i-bulb', title:'Solutions adaptées', text:'Des réponses concrètes à vos problématiques.' },
    { icon:'i-chart', title:'Résultats concrets', text:'Des bénéfices mesurables pour votre organisation.' },
    { icon:'i-head', title:'Accompagnement', text:'Un support expert à chaque étape de votre projet.' }
  ];

  img=0;
  progress=0;
  videoOk=true;
  private raf=0;
  private started=0;
  private readonly duration=6000;

  ngOnInit(){ this.startProgress(); }
  ngOnDestroy(){ cancelAnimationFrame(this.raf); }

  go(i:number){
    this.img=((i%this.media.heroBg.length)+this.media.heroBg.length)%this.media.heroBg.length;
    this.progress=0; this.startProgress();
  }

  videoError(){ this.videoOk=false; }

  imageError(ev:Event, fallback:string){
    const el=ev.currentTarget as HTMLImageElement;
    el.onerror=null; el.src=fallback;
  }

  private startProgress(){
    cancelAnimationFrame(this.raf);
    this.started=performance.now();
    const tick=(now:number)=>{
      this.progress=Math.min(1,(now-this.started)/this.duration);
      if(this.progress>=1){ this.go(this.img+1); return; }
      this.raf=requestAnimationFrame(tick);
    };
    this.raf=requestAnimationFrame(tick);
  }
}
