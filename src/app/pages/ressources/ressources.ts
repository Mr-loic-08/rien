import {Component,inject} from '@angular/core';
import {LanguageService} from '../../core/language.service';
@Component({selector:'app-ressources-page',standalone:true,templateUrl:'./ressources.html'})
export class RessourcesPageComponent {
 l=inject(LanguageService);active='Tous les articles';page=1;
 categories=['Tous les articles','Produits','Projets','Innovation','Conseils','Événements'];
 heroImages=['https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900','https://images.pexels.com/photos/7691769/pexels-photo-7691769.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900','https://images.pexels.com/photos/19805885/pexels-photo-19805885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'];
 articles=[
 {title:'I-COLLECT : La solution qui révolutionne la collecte journalière',description:"La collecte journalière constitue l'un des services phares des établissements de microfinance (EMF). Ce dispositif permet aux particuliers, sur leurs lieux d'activité ou de résidence, de constituer une épargne de manière progressive et quotidienne…",date:'Publié le 4 novembre 2021',author:'Par Maguy Laurence MATALA',category:'Produits',image:'https://images.pexels.com/photos/5239806/pexels-photo-5239806.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640'},
 {title:"Migration du système d'information de la CEPAC vers la plateforme ALPHA : une transition prometteuse",description:"Depuis plusieurs semaines, la CEPAC-Solidarité a engagé un processus de rénovation de son core banking system, conçu pour objectif l'intégration de la plateforme ALPHA au sein de son système d'information.",date:'Publié le 4 novembre 2021',author:'Par M.L. MATALA',category:'Projets',image:'https://images.pexels.com/photos/33719016/pexels-photo-33719016.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640'},
 {title:'Open Banking : vers un écosystème financier plus ouvert et collaboratif',description:"L'Open Banking transforme profondément la manière dont les institutions financières interagissent entre elles et avec leurs clients. Grâce aux API, les services deviennent plus fluides…",date:'Publié le 25 octobre 2021',author:'Par Équipe I-TECH',category:'Innovation',image:'https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=640'}];
 get filtered(){return this.active==='Tous les articles'?this.articles:this.articles.filter(a=>a.category===this.active)}
}
