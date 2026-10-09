import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-partenaires-page',standalone:true,templateUrl:'./partenaires.html'})
export class PartenairesPageComponent{l=inject(LanguageService)}
