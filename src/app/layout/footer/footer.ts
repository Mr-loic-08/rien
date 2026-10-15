import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';

@Component({selector:'app-footer',standalone:true,templateUrl:'./footer.html'})
export class FooterComponent implements AfterViewInit{
 @ViewChild('footerVideo') footerVideo?: ElementRef<HTMLVideoElement>;
 ngAfterViewInit(){
   const video=this.footerVideo?.nativeElement;
   if(video){
     video.muted=true;
     video.volume=0;
     video.defaultMuted=true;
   }
 }
 readonly l=inject(LanguageService);
 readonly year=new Date().getFullYear();
 readonly solutions=[
  ['s-core','ALPHA Platform','#/solutions/core-banking'],['i-bank','ALPHA Bank / Microfinance','#/solutions/core-banking'],['s-collecte','COLLECTE JOURNALIÈRE','#/solutions/collecte-journaliere'],
  ['s-mobile','DIGITAL & MOBILE','#/solutions/digital-mobile'],['s-rh','GESTION RH','#/solutions/gestion-rh'],
  ['s-decl','DÉCLARATION BANCAIRE','#/solutions/declaration-bancaire'],['s-genie','ALPHA MONÉTIQUE','#/solutions/alpha-monetique'],['s-mobile','USSD','#/solutions/ussd']
 ];
 readonly sectors=[['i-bank','Banques','#/secteurs/banques-commerciales'],['i-microfinance','Microfinances','#/secteurs/microfinances'],['i-corporate','Grandes entreprises','#/secteurs/grandes-entreprises']];
 readonly company=[['i-info','À propos','#/entreprise/apropos'],['i-briefcase','Carrières','#/entreprise/carrieres'],['i-handshake','Partenaires','#/entreprise/partenaires'],['i-office',"L'Entreprise",'#/entreprise']];
 readonly resources=[['i-news','Blog','#/ressources'],['i-book','Centre de ressources','#/ressources'],['i-docs','Documentations','#/ressources'],['i-video','Webinaires','#/ressources']];
}
