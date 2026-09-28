import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';

@Component({
  selector:'app-core-banking-page',
  standalone:true,
  templateUrl:'./core-banking.html'
})
export class CoreBankingPageComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly sol=SOLUTIONS.find(s=>s.key==='core-banking')!;
  active=0;
  acc=0;
  readonly features=this.sol.features;
  readonly band=this.sol.band!;
  @ViewChild('architecture') architecture?: ElementRef<HTMLElement>;
  private archObserver?: IntersectionObserver;
  private cardCleanups: Array<()=>void>=[];
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(){ this.timer=setInterval(()=>this.active=(this.active+1)%(this.sol.heroBg?.length||1),7000); }
  ngAfterViewInit(){
    const root=this.architecture?.nativeElement;
    if(!root) return;
    const cards=Array.from(root.querySelectorAll<HTMLElement>('.core-arch-card'));
    const reveal=()=>{
      root.classList.add('is-visible');
      cards.forEach((card,i)=>setTimeout(()=>card.classList.add('is-visible'),120+i*110));
    };
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) reveal();
    else{
      this.archObserver=new IntersectionObserver(entries=>{
        if(entries.some(e=>e.isIntersecting)){ reveal(); this.archObserver?.disconnect(); }
      },{threshold:.16});
      this.archObserver.observe(root);
    }
    if(!window.matchMedia('(hover: none)').matches){
      cards.forEach(card=>{
        const move=(event:MouseEvent)=>{
          const r=card.getBoundingClientRect();
          const px=(event.clientX-r.left)/r.width, py=(event.clientY-r.top)/r.height;
          card.style.setProperty('--mx',`${(px*100).toFixed(1)}%`);
          card.style.setProperty('--my',`${(py*100).toFixed(1)}%`);
          card.style.setProperty('--ry',`${((px-.5)*3.2).toFixed(2)}deg`);
          card.style.setProperty('--rx',`${((.5-py)*2.2).toFixed(2)}deg`);
        };
        const leave=()=>{card.style.setProperty('--ry','0deg');card.style.setProperty('--rx','0deg');};
        card.addEventListener('mousemove',move); card.addEventListener('mouseleave',leave);
        this.cardCleanups.push(()=>{card.removeEventListener('mousemove',move);card.removeEventListener('mouseleave',leave);});
      });
    }
  }
  ngOnDestroy(){
    if(this.timer) clearInterval(this.timer);
    this.archObserver?.disconnect();
    this.cardCleanups.forEach(fn=>fn());
  }
  setSlide(i:number){ this.active=i; }
  toggleAcc(i:number){ this.acc=this.acc===i ? -1 : i; }
}
