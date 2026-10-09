import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-carrieres-page',standalone:true,templateUrl:'./carrieres.html'})
export class CarrieresPageComponent {
 l=inject(LanguageService);
 highlights=[
 {icon:'i-users',title:'Environnement collaboratif'},
 {icon:'i-chart',title:'Évolution professionnelle'},
 {icon:'i-bulb',title:'Projets stimulants'},
 {icon:'i-globe',title:'Impact concret'}
 ];
}
