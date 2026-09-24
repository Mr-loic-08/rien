import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/language.service';

type MenuItem = { icon: string; label: string; href: string };
type MenuDef = { label: string; icon: string; href: string; items: MenuItem[]; alignEnd?: boolean };

@Component({selector:'app-header',standalone:true,imports:[CommonModule],templateUrl:'./header.html'})
export class HeaderComponent{
  l=inject(LanguageService);
  scrolled=signal(false); menuOpen=signal(false); open=signal<string|null>(null); sub=signal<string|null>(null); progress=signal(0);

  solutions: MenuItem[] = [
    {icon:'s-core',label:'CORE BANKING',href:'#/solutions/core-banking'},
    {icon:'s-collecte',label:'COLLECTE JOURNALIÈRE',href:'#/solutions/collecte-journaliere'},
    {icon:'s-mobile',label:'DIGITAL & MOBILE',href:'#/solutions/digital-mobile'},
    {icon:'s-rh',label:'GESTION RH',href:'#/solutions/gestion-rh'},
    {icon:'s-decl',label:'DÉCLARATION BANCAIRE',href:'#/solutions/declaration-bancaire'},
    {icon:'s-genie',label:'GÉNIE LOGICIEL',href:'#/solutions/genie-logiciel'},
  ];
  secteurs: MenuItem[] = [
    {icon:'i-microfinance',label:'Microfinances',href:'#/secteurs/microfinances'},
    {icon:'i-bank',label:'Banques commerciales',href:'#/secteurs/banques-commerciales'},
    {icon:'i-corporate',label:'Grandes entreprises',href:'#/secteurs/grandes-entreprises'},
  ];
  entreprise: MenuItem[] = [
    {icon:'i-info',label:'À propos',href:'#/entreprise/apropos'},
    {icon:'i-briefcase',label:'Carrières',href:'#/entreprise/carrieres'},
    {icon:'i-handshake',label:'Partenaires',href:'#/entreprise/partenaires'},
  ];
  contact: MenuItem[] = [
    {icon:'i-demo',label:'Contact / Démo',href:'#/contact/demo'},
    {icon:'i-life',label:'Support Client',href:'#/contact'},
    {icon:'i-shield',label:'Politique de confidentialité',href:'#/contact/confidentialite'},
  ];
  menus: MenuDef[] = [
    {label:'Solutions',icon:'i-layers',href:'#/solutions',items:this.solutions},
    {label:'Secteurs',icon:'i-bank',href:'#/secteurs',items:this.secteurs},
  ];

  @HostListener('window:scroll') onScroll(){ const y=window.scrollY; this.scrolled.set(y>20); const h=document.documentElement.scrollHeight-innerHeight; this.progress.set(h>0?Math.min(1,y/h):0); }
  toggleLang(){this.l.toggle()}
  toggleSub(name:string){ this.sub.set(this.sub()===name?null:name); }
  closeMobile(){this.menuOpen.set(false); this.sub.set(null)}
}
