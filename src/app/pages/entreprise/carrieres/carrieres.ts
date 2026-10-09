import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-carrieres-page',standalone:true,templateUrl:'./carrieres.html'})
export class CarrieresPageComponent {
 l=inject(LanguageService);
 query='';
 jobs=[
 {icon:'i-layers',title:'Développeur Full Stack',meta:'Yaoundé, Cameroun · CDI',text:'Développer des applications web et mobiles robustes et évolutives.'},
 {icon:'i-book',title:'Consultant Fonctionnel',meta:'Yaoundé, Cameroun · CDI',text:'Recueillir les besoins, analyser les processus métiers et accompagner nos clients.'},
 {icon:'i-lock',title:'Administrateur Systèmes',meta:'Yaoundé, Cameroun · CDI',text:"Assurer l’administration, la disponibilité et la sécurité des infrastructures."},
 {icon:'i-head',title:'Support Technique',meta:'Yaoundé, Cameroun · CDI',text:'Assurer le support de niveau 1 et 2 auprès de nos utilisateurs.'}
 ];
 reasons=[
 {icon:'i-bulb',title:'Apprentissage continu',text:'Formations et montée en compétences régulières.'},
 {icon:'i-users',title:'Équilibre vie pro / perso',text:'Horaires flexibles et bien-être au quotidien.'},
 {icon:'i-link',title:"Culture d'équipe",text:"Esprit d'entraide et bienveillance au quotidien."},
 {icon:'i-chart',title:'Rémunération attractive',text:'Packages compétitifs et avantages sociaux.'}
 ];
 get visibleJobs(){const q=this.query.trim().toLocaleLowerCase();return q?this.jobs.filter(j=>[j.title,j.meta,j.text].some(v=>this.l.t(v).toLocaleLowerCase().includes(q))):this.jobs;}
 highlights=[
 {icon:'i-users',title:'Environnement collaboratif'},
 {icon:'i-chart',title:'Évolution professionnelle'},
 {icon:'i-bulb',title:'Projets stimulants'},
 {icon:'i-globe',title:'Impact concret'}
 ];
}
