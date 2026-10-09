import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-demo-page',standalone:true,templateUrl:'./demo.html'})
export class DemoPageComponent{
 l=inject(LanguageService);
 images=[
 'https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
 'https://images.pexels.com/photos/33176072/pexels-photo-33176072.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900',
 'https://images.pexels.com/photos/7793169/pexels-photo-7793169.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'];
 experts=[
 {icon:'i-bank',title:'Banques commerciales',text:'Accompagnement des banques commerciales dans leur transformation digitale.',href:'#/secteurs/banques-commerciales'},
 {icon:'i-users',title:'Microfinances',text:'Solutions complètes adaptées aux établissements de microfinance (EMF).',href:'#/secteurs/microfinances'},
 {icon:'i-grid',title:'Grandes entreprises',text:'Solutions RH, GED, comptabilité et développement spécifique.',href:'#/secteurs/grandes-entreprises'}];
}
