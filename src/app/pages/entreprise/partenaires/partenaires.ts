import {Component,inject} from '@angular/core';
import {LanguageService} from '../../../core/language.service';
@Component({selector:'app-partenaires-page',standalone:true,templateUrl:'./partenaires.html'})
export class PartenairesPageComponent{l=inject(LanguageService);
 tech=[{name:'Microsoft',suffix:'Partner',tone:'ms'},{name:'ORACLE',suffix:'',tone:'oracle'},{name:'aws',suffix:'partner network',tone:'aws'},{name:'vmware',suffix:'Partner Connect',tone:'vmware'},{name:'DELL',suffix:'Technologies Partner Program',tone:'dell'},{name:'FORTINET',suffix:'Partner',tone:'fortinet'}];
 institutions=['COBAC','BEAC','APBF','BANGE BANK\nCAMEROUN','GIMAC'];
}
