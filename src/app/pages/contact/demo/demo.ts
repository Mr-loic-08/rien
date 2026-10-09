import {Component,inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-demo-page',standalone:true,imports:[FormsModule],templateUrl:'./demo.html'})
export class DemoPageComponent{
 l=inject(LanguageService);
 sent=false; faqOpen:number|null=0; sector=''; interests:string[]=[];
 countries=['Cameroun','Gabon','Congo','Tchad','République Centrafricaine','Guinée Équatoriale',"Côte d’Ivoire",'Sénégal','RD Congo','Autre'];
 sectors=['Microfinance','Banques commerciales','Grandes entreprises','Autre'];
 solutions=['Alpha Bank','Alpha Microfinance','Alpha Mobile Banking','Alpha Monétique','Alpha Comptabilité','Alpha RH','I-Collect','Déclaration Bancaire'];
 faqs=[
 {q:'Combien coûte une solution I-TECH ?',a:"Le coût dépend de la solution choisie, du nombre d'agences et d'utilisateurs, ainsi que des modules activés. Nous vous remettons un devis personnalisé après un premier échange."},
 {q:'Combien de temps dure un projet ?',a:'Un déploiement standard dure entre 6 et 16 semaines selon le périmètre, la reprise des données et les intégrations à réaliser.'},
 {q:'Comment se déroule une démonstration ?',a:'Un expert I-TECH vous présente la solution en visioconférence ou dans vos locaux, sur la base de vos cas d’usage, pendant environ 45 minutes.'},
 {q:"Puis-je demander une version d'essai ?",a:'Oui, un environnement de démonstration peut être mis à votre disposition pour tester les principales fonctionnalités.'}];
 toggle(v:string){this.interests=this.interests.includes(v)?this.interests.filter(x=>x!==v):[...this.interests,v]}
 submit(f:any){if(!f.valid||!this.interests.length)return;this.sent=true;}

 images=[
 'https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
 'https://images.pexels.com/photos/33176072/pexels-photo-33176072.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
 'https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'];
 experts=[
 {icon:'i-bank',title:'Banques commerciales',text:'Accompagnement des banques commerciales dans leur transformation digitale.',href:'#/secteurs/banques-commerciales'},
 {icon:'i-users',title:'Microfinances',text:'Solutions complètes adaptées aux établissements de microfinance (EMF).',href:'#/secteurs/microfinances'},
 {icon:'i-grid',title:'Grandes entreprises',text:'Solutions RH, GED, comptabilité et développement spécifique.',href:'#/secteurs/grandes-entreprises'}];
}
