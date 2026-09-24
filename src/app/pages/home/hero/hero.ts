import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/language.service';
@Component({selector:'app-hero',standalone:true,imports:[CommonModule],templateUrl:'./hero.html'})
export class HeroComponent implements OnInit,OnDestroy{
 l=inject(LanguageService); current=signal(0); paused=false; timer:any; experience=new Date().getFullYear()-2007;
 slides=[
  {type:'video',local:'videos/hero-video1.mp4',poster:'images/hero-1.jpg'},
  {type:'video',local:'videos/hero-video2.mp4',poster:'images/hero-2.jpg'},
  {type:'image',src:'images/hero-1.jpg'}, {type:'image',src:'images/hero-2.jpg'}];
 feats=[['i-cal',`+${this.experience} ans`,"d'expertise"],['i-conf','Conformité','COBAC & BEAC'],['i-globe','Solutions déployées','en Afrique'],['i-head','Support','24/7']];
 ngOnInit(){this.start()} ngOnDestroy(){clearInterval(this.timer)}
 start(){clearInterval(this.timer); this.timer=setInterval(()=>{if(!this.paused)this.current.update(v=>(v+1)%this.slides.length)},6000)}
}
