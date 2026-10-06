import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

@Component({
 selector:'app-grandes-entreprises-page', standalone:true, templateUrl:'./grandes-entreprises.html'
})
export class GrandesEntreprisesPageComponent implements OnInit,OnDestroy{
 readonly l=inject(LanguageService);
 readonly media={
  video:{hd:'https://videos.pexels.com/video-files/3255275/3255275-uhd_3840_2160_25fps.mp4',poster:'https://images.pexels.com/videos/3255275/free-video-3255275.jpg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'},
  heroBg:[
   'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
   'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'
  ]
 };
 img=0;progress=0;videoOk=true;private raf=0;private started=0;readonly duration=6000;
 ngOnInit(){this.startProgress()} ngOnDestroy(){cancelAnimationFrame(this.raf)}
 go(i:number){this.img=((i%3)+3)%3;this.progress=0;this.startProgress()}
 videoError(){this.videoOk=false}
 private startProgress(){cancelAnimationFrame(this.raf);this.started=performance.now();const tick=(n:number)=>{this.progress=Math.min(1,(n-this.started)/this.duration);if(this.progress>=1){this.go(this.img+1);return}this.raf=requestAnimationFrame(tick)};this.raf=requestAnimationFrame(tick)}
}
