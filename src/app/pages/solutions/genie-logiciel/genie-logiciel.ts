import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';

@Component({
  selector:'app-genie-logiciel-page',
  standalone:true,
  templateUrl:'./genie-logiciel.html'
})
export class GenieLogicielPageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly sol=SOLUTIONS.find(s=>s.key==='genie-logiciel')!;
  active=0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){ this.timer=setInterval(()=>this.active=(this.active+1)%(this.sol.heroBg?.length||1),7000); }
  ngOnDestroy(){ if(this.timer) clearInterval(this.timer); }
  setSlide(i:number){ this.active=i; }
}
