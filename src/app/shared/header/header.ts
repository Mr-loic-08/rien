import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/language.service';
@Component({selector:'app-header',standalone:true,imports:[CommonModule],templateUrl:'./header.html'})
export class HeaderComponent{
  l=inject(LanguageService); scrolled=signal(false); menuOpen=signal(false); open=signal<string|null>(null); progress=signal(0);
  solutions=['CORE BANKING','COLLECTE JOURNALIÈRE','DIGITAL & MOBILE','GESTION RH','DÉCLARATION BANCAIRE','GÉNIE LOGICIEL'];
  secteurs=['Microfinances','Banques commerciales','Grandes entreprises'];
  entreprise=['À propos','Carrières','Partenaires']; contact=['Contact / Démo','Support Client','Politique de confidentialité'];
  @HostListener('window:scroll') onScroll(){ const y=window.scrollY; this.scrolled.set(y>20); const h=document.documentElement.scrollHeight-innerHeight; this.progress.set(h>0?Math.min(1,y/h):0); }
  toggleLang(){this.l.toggle()}
}
