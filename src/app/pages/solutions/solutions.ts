import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';

@Component({
  selector:'app-solutions-page',
  standalone:true,
  templateUrl:'./solutions.html'
})
export class SolutionsPageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly images=[
    'https://images.pexels.com/photos/5257196/pexels-photo-5257196.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
    'https://images.pexels.com/photos/8730120/pexels-photo-8730120.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
    'https://images.pexels.com/photos/29069329/pexels-photo-29069329.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ];
  active=0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){ this.timer=setInterval(()=>this.active=(this.active+1)%this.images.length,7000); }
  ngOnDestroy(){ if(this.timer) clearInterval(this.timer); }
  setSlide(i:number){ this.active=i; }
}
