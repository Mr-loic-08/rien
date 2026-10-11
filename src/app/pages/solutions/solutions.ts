import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { OVERVIEW, SOLUTIONS } from '../../data/solutions';

@Component({
  selector:'app-solutions-page',
  standalone:true,
  templateUrl:'./solutions.html',
  styleUrl:'./solutions-hero.css'
})
export class SolutionsPageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly stats=OVERVIEW.stats;
  readonly ecosystemTitle=OVERVIEW.ecosystemTitle;
  readonly suiteTitle=OVERVIEW.suiteTitle;
  readonly suiteText=OVERVIEW.suiteText;
  readonly ecosystemLeft=OVERVIEW.ecosystemLeft.map(k=>this.eco(k));
  readonly ecosystemRight=OVERVIEW.ecosystemRight.map(k=>this.eco(k));
  readonly solutionCards=SOLUTIONS;
  readonly nosSolutions=OVERVIEW.nosSolutions;
  readonly ctaTitle=OVERVIEW.ctaTitle;
  readonly ctaText=OVERVIEW.ctaText;
  readonly ctaPhoto='https://images.pexels.com/photos/7993903/pexels-photo-7993903.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';
  solutionActive=0;
  solutionMotion:'next'|'prev'|null=null;
  solutionFrom:number|null=null;
  private solutionTimer?: ReturnType<typeof setInterval>;
  private motionTimer?: ReturnType<typeof setTimeout>;
  // Photographies documentaires, non générées par IA.
  // Les photos Wikimedia Commons sont sous CC BY-SA 4.0 : conserver les crédits.
  readonly images=[
    'https://discover-cameroon.com/wp-content/uploads/2018/10/P1010590.jpg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Afriland_First_bank.jpg?width=1600',
    'https://commons.wikimedia.org/wiki/Special:FilePath/SCB_Cameroon_Bonanjo.jpg?width=1600'
  ];
  readonly scenes=['Yaoundé · Cameroun','Finance au Cameroun','Écosystème bancaire'];
  // La vidéo YouTube s'ouvre sur demande (pas d'autoplay en fond).
  videoOpen=false;
  readonly youtubeVideo='https://www.youtube-nocookie.com/embed/jgDjl2iM1f8?autoplay=1&rel=0';
  openVideo(){this.videoOpen=true;}
  closeVideo(){this.videoOpen=false;}
  active=0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){
    this.startSolutionTimer();
  }
  ngOnDestroy(){
    if(this.timer) clearInterval(this.timer);
    if(this.solutionTimer) clearInterval(this.solutionTimer);
    if(this.motionTimer) clearTimeout(this.motionTimer);
  }
  setSlide(i:number){ this.active=i; }

  solutionDelta(i:number){ return i-this.solutionActive; }
  solutionAbs(i:number){ return Math.abs(this.solutionDelta(i)); }
  goSolution(i:number,direction?:'next'|'prev'){
    const n=this.solutionCards.length;
    const wrapped=((i%n)+n)%n;
    if(wrapped===this.solutionActive) return;
    const dir=direction ?? (wrapped>this.solutionActive?'next':'prev');
    this.solutionFrom=this.solutionActive;
    this.solutionMotion=dir;
    if(this.motionTimer) clearTimeout(this.motionTimer);
    this.motionTimer=setTimeout(()=>{this.solutionMotion=null;this.solutionFrom=null;},860);
    this.solutionActive=wrapped;
    this.startSolutionTimer();
  }
  private startSolutionTimer(){
    if(this.solutionTimer) clearInterval(this.solutionTimer);
    this.solutionTimer=setInterval(()=>this.goSolution(this.solutionActive+1,'next'),10000);
  }

  private eco(key:string){
    const sol=SOLUTIONS.find(x=>x.key===key)!;
    return {key:sol.key,name:sol.name,icon:sol.icon,tone:sol.tone,desc:OVERVIEW.ecosystemDesc[key]};
  }
}
