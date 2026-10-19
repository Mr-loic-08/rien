import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';
import { SOLUTIONS } from '../../../data/solutions';

@Component({
  selector:'app-declaration-bancaire-page',
  standalone:true,
  templateUrl:'./declaration-bancaire.html'
})
export class DeclarationBancairePageComponent implements OnInit, OnDestroy {
  readonly l=inject(LanguageService);
  readonly sol=SOLUTIONS.find(s=>s.key==='declaration-bancaire')!;
  active=0;
  readonly features=this.sol.features;
  readonly benefits=this.sol.benefits;
  feat=0;
  galleryOpen=false;
  galleryIndex=0;
  readonly galleryImages=[
    {src:'/images/solutions/declaration-bancaire/0-Acceuil.png',title:'Accueil de Déclaration Bancaire'},
    {src:'/images/solutions/declaration-bancaire/Menu.png',title:'Menu de navigation'},
    {src:'/images/solutions/declaration-bancaire/Ecran de parametrage.png',title:'Écran de paramétrage'},
    {src:'/images/solutions/declaration-bancaire/Ecran de consolidation des comptes.png',title:'Écran de consolidation des comptes'},
    {src:'/images/solutions/declaration-bancaire/4-Generation des Fichiers Sesames.png',title:'Génération des fichiers Sésame'}
  ];
  private timer?: ReturnType<typeof setInterval>;
  ngOnInit(){ this.timer=setInterval(()=>this.active=(this.active+1)%(this.sol.heroBg?.length||1),7000); }
  ngOnDestroy(){ if(this.timer) clearInterval(this.timer); }
  setSlide(i:number){ this.active=i; }
  setFeat(i:number){ this.feat=i; }
  openGallery(i:number){ this.galleryIndex=(i+this.galleryImages.length)%this.galleryImages.length; this.galleryOpen=true; }
  closeGallery(){ this.galleryOpen=false; }
  nextImage(){ this.galleryIndex=(this.galleryIndex+1)%this.galleryImages.length; }
  previousImage(){ this.galleryIndex=(this.galleryIndex-1+this.galleryImages.length)%this.galleryImages.length; }
}
