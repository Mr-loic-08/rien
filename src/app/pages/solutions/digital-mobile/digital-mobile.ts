import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';

@Component({
  selector:'app-digital-mobile-page',
  standalone:true,
  templateUrl:'./digital-mobile.html'
})
export class DigitalMobilePageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly sol=SOLUTIONS.find(s=>s.key==='digital-mobile')!;
  active=0;
  readonly band=this.sol.band!;
  readonly features=this.sol.features;
  readonly benefits=this.sol.benefits;
  feat=0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){ this.timer=setInterval(()=>this.active=(this.active+1)%(this.sol.heroBg?.length||1),7000); }
  ngOnDestroy(){ if(this.timer) clearInterval(this.timer); }
  setSlide(i:number){ this.active=i; }
  setFeat(i:number){ this.feat=i; }
}
