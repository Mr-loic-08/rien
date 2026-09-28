import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { OVERVIEW, SOLUTIONS } from '../../data/solutions';

@Component({
  selector:'app-solutions-page',
  standalone:true,
  templateUrl:'./solutions.html'
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
  readonly images=[
    'https://images.pexels.com/photos/5257196/pexels-photo-5257196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
    'https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
    'https://images.pexels.com/photos/29069329/pexels-photo-29069329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ];
  active=0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){
    this.timer=setInterval(()=>this.active=(this.active+1)%this.images.length,7000);
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
