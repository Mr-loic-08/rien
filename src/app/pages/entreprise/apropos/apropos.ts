import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-apropos-page',standalone:true,templateUrl:'./apropos.html',styleUrl:'./apropos.css'})
export class AproposPageComponent {
 l=inject(LanguageService);
 mission='Accompagner les acteurs économiques dans leur transformation digitale grâce à des solutions fiables, innovantes et adaptées aux réalités africaines.';
 values=[
 {icon:'i-bulb',title:'Innovation',text:'Nous anticipons les évolutions du marché grâce à la recherche et au développement.'},
 {icon:'i-swap',title:'Flexibilité',text:'Nous adaptons nos solutions à chaque contexte et besoin spécifique de nos clients.'},
 {icon:'i-chart',title:'Dynamisme',text:"Nous favorisons l’amélioration continue et l’excellence opérationnelle."}
 ];
 showAllMembers=false;
 selectedMember: any=null;
 openMember(m:any){this.selectedMember=m;}
 closeMember(){this.selectedMember=null;}
 team=[
 {title:'Direction générale',role:'Directeur général',image:'',description:'Assure la direction stratégique de I-TECH, coordonne les activités de l’entreprise et veille à la qualité des relations avec les clients et partenaires.'},
 {title:'Stephane',role:'Responsable du département Core Banking',image:'/images/equipe/stephane.webp',description:'Pilote les activités Core Banking et coordonne les solutions destinées à la gestion des opérations bancaires et de microfinance.'},
 {title:'Gervais',role:'Responsable monétique',image:'/images/equipe/gervais.webp',description:'Supervise les projets monétiques et les solutions associées aux moyens de paiement et aux transactions électroniques.'},
 {title:'Danté',role:'Développeur .NET',image:'/images/equipe/dante.webp',description:'Conçoit et maintient des applications .NET, en veillant à la qualité et à la fiabilité du code.'},
 {title:'Wilfried',role:'Développeur Mobile',image:'/images/equipe/wilfried.webp',description:'Développe des applications mobiles adaptées aux usages et aux besoins des clients.'},
 {title:'Christine',role:'Développeur web',image:'/images/equipe/christine.webp',description:'Participe à la conception et au développement des interfaces et applications web.'},
 {title:'Liro',role:'Responsable département WEB & mobile',image:'/images/equipe/liro.webp',description:'Coordonne les projets web et mobile, de la conception à la livraison des solutions.'},
 {title:'Secrétaire',role:'Secrétariat et accueil',image:'/images/equipe/secretaire.webp',description:'Assure l’accueil, l’organisation administrative et la coordination des communications et rendez-vous.'}
 ];
 reasons=[
 {icon:'i-users',title:'Expertise métier',text:"19 ans d'expérience au service de nos clients."},
 {icon:'i-bulb',title:'Innovation',text:'Des solutions modernes et évolutives.'},
 {icon:'i-head',title:'Support local',text:'Une équipe disponible 24/7 pour vous accompagner.'},
 {icon:'i-shield',title:'Sécurité',text:'Protection maximale de vos données et opérations.'},
 {icon:'i-link',title:'Accompagnement',text:"De l'analyse à la mise en production et au-delà."}
 ];
 timeline=[
 {year:'2007',title:"Création de l’entreprise",text:'I-TECH SARL'},
 {year:'2012',title:'Lancement de la suite ALPHA',text:'Core Banking'},
 {year:'2016',title:'Expansion régionale',text:'La zone CEMAC'},
 {year:'2020',title:'Plus de 250 institutions',text:'institutions accompagnées'},
 {year:"Aujourd’hui",title:'Leader des solutions',text:'technologiques pour les institutions financières'}
 ];
}
