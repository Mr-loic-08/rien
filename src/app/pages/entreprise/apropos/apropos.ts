import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-apropos-page',standalone:true,templateUrl:'./apropos.html'})
export class AproposPageComponent {
 l=inject(LanguageService);
 mission='Accompagner les acteurs économiques dans leur transformation digitale grâce à des solutions fiables, innovantes et adaptées aux réalités africaines.';
 values=[
 {icon:'i-bulb',title:'Innovation',text:'Nous anticipons les évolutions du marché grâce à la recherche et au développement.'},
 {icon:'i-swap',title:'Flexibilité',text:'Nous adaptons nos solutions à chaque contexte et besoin spécifique de nos clients.'},
 {icon:'i-chart',title:'Dynamisme',text:"Nous favorisons l’amélioration continue et l’excellence opérationnelle."}
 ];
 team=[
 {title:'Direction',role:'Pilotage stratégique',image:'https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500'},
 {title:'Experts métiers',role:'Conseil financier',image:'https://images.pexels.com/photos/1181422/pexels-photo-1181422.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500'},
 {title:'Développeurs',role:'Génie logiciel',image:'https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500'},
 {title:'Consultants',role:'Accompagnement',image:'https://images.pexels.com/photos/8547282/pexels-photo-8547282.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500'},
 {title:'Support',role:'Assistance client',image:'https://images.pexels.com/photos/8867410/pexels-photo-8867410.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=500&h=500'}
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
