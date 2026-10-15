import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/language.service';

type MenuItem = { icon: string; label: string; href: string };
type MenuDef = { label: string; icon: string; href: string; items: MenuItem[]; alignEnd?: boolean };

@Component({selector:'app-header',standalone:true,imports:[CommonModule],templateUrl:'./header.html',styleUrl:'./header-scroll.css'})
export class HeaderComponent{
  l=inject(LanguageService);
  scrolled=signal(false); menuOpen=signal(false); open=signal<string|null>(null); sub=signal<string|null>(null); progress=signal(0);

  solutions: MenuItem[] = [
    {icon:'s-core',label:'ALPHA Platform',href:'#/solutions/core-banking'},
    {icon:'s-collecte',label:'COLLECTE JOURNALIÈRE',href:'#/solutions/collecte-journaliere'},
    {icon:'s-mobile',label:'DIGITAL & MOBILE',href:'#/solutions/digital-mobile'},
    {icon:'s-rh',label:'GESTION RH',href:'#/solutions/gestion-rh'},
    {icon:'s-decl',label:'DÉCLARATION BANCAIRE',href:'#/solutions/declaration-bancaire'},
    {icon:'s-genie',label:'ALPHA MONÉTIQUE',href:'#/solutions/alpha-monetique'},
    {icon:'s-mobile',label:'USSD',href:'#/solutions/ussd'},
  ];
  secteurs: MenuItem[] = [
    {icon:'i-bank',label:'Banques',href:'#/secteurs/banques-commerciales'},
    {icon:'i-microfinance',label:'Microfinances',href:'#/secteurs/microfinances'},
    {icon:'i-corporate',label:'Grandes entreprises',href:'#/secteurs/grandes-entreprises'},
  ];
  entreprise: MenuItem[] = [
    {icon:'i-compass',label:'À propos',href:'#/entreprise/apropos'},
    {icon:'i-briefcase',label:'Carrières',href:'#/entreprise/carrieres'},
    {icon:'i-handshake',label:'Partenaires',href:'#/entreprise/partenaires'},
  ];
  contact: MenuItem[] = [
    {icon:'i-demo',label:'Contact / Démo',href:'#/contact/demo'},
    {icon:'i-life',label:'Support Client',href:'https://wa.me/237696613946?text=Bonjour%2C%20je%20contacte%20le%20support%20client%20d%E2%80%99I-TECH%20SARL.%20J%E2%80%99ai%20besoin%20d%E2%80%99assistance.'},
    {icon:'i-shield',label:'Politique de confidentialité',href:'#/contact/confidentialite'},
  ];
  menus: MenuDef[] = [
    {label:'Solutions',icon:'i-layers',href:'#/solutions',items:this.solutions},
    {label:'Secteurs',icon:'i-sectors',href:'#/secteurs',items:this.secteurs},
  ];

  @HostListener('window:scroll') onScroll(){
    const y=Math.max(0,window.scrollY);
    this.scrolled.set(y>20);
    const h=document.documentElement.scrollHeight-window.innerHeight;
    this.progress.set(h>0?Math.min(1,y/h):0);

  }
  toggleLang(){this.l.toggle()}
  toggleSub(name:string){ this.sub.set(this.sub()===name?null:name); }
  closeMobile(){this.menuOpen.set(false); this.sub.set(null)}

  navigateTop(event: Event, href: string){
    event.preventDefault();
    this.open.set(null);
    this.menuOpen.set(false);
    if(href === '#accueil'){
      if(location.hash) history.pushState(null,'',location.pathname + location.search);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      window.scrollTo({top:0,behavior:'instant'});
      return;
    }
    if(location.hash === href){
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }else{
      location.hash = href;
    }
    window.scrollTo({top:0,behavior:'instant'});
  }

  isHome(){
    const h=location.hash;
    return !h || h==='#accueil' || h==='#/';
  }

  isActive(href:string){
    const current=location.hash.replace(/\/$/,'');
    const target=href.replace(/\/$/,'');
    if(target==='#/solutions') return current==='#/solutions' || current.startsWith('#/solutions/');
    return current===target;
  }
}
