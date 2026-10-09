import {Component,inject} from '@angular/core';
import {LanguageService} from '../../core/language.service';
@Component({selector:'app-contact-page',standalone:true,templateUrl:'./contact.html'})
export class ContactPageComponent {
 l=inject(LanguageService);
 sending=false; sent=false; error=false;
 name=''; email=''; phone=''; message='';
 infos=[{icon:'i-phone',title:'Téléphone',lines:['(+237) 696 61 39 46 / 243 81 02 96','Lun - Ven : 8h00 - 17h00'],href:'tel:+237696613946'},{icon:'i-mail',title:'Email',lines:['contacts@i-techsarl.com','Réponse sous 24h'],href:'mailto:contacts@i-techsarl.com'},{icon:'i-pin',title:'Adresse',lines:['2ème étage, Immeuble CAMCCUL, Rue Pau, Akwa - Douala','Cameroun'],href:'https://maps.app.goo.gl/Vf4j7RvUVxNcZj5D9'},{icon:'i-cal',title:'Horaires',lines:['Lun - Ven : 8h00 - 17h00'],href:''}];
 async submitQuick(e:Event){e.preventDefault();if(this.sending||!this.name.trim()||!this.email.trim()||!this.message.trim())return;this.sending=true;this.error=false;const body=new URLSearchParams({'form-name':'quick-response',name:this.name.trim(),email:this.email.trim(),phone:this.phone.trim(),message:this.message.trim(),source:'Contact & Support — Besoin d\'une réponse rapide'});try{const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()});if(!r.ok)throw Error('Submission failed');this.sent=true;this.name=this.email=this.phone=this.message='';}catch{this.error=true;}finally{this.sending=false;}}
 images=['https://images.pexels.com/photos/8866794/pexels-photo-8866794.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900','https://images.pexels.com/photos/7689662/pexels-photo-7689662.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900','https://images.pexels.com/photos/8867410/pexels-photo-8867410.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&h=900'];
 cards=[{icon:'i-users',tone:'orange',title:'CONTACT / DÉMO',text:'Découvrez nos solutions et échangez avec nos experts pour trouver la solution adaptée à vos besoins.',cta:'Demander une démo',href:'#/contact/demo'},{icon:'i-head',tone:'blue',title:'SUPPORT CLIENT',text:"Obtenez une assistance technique, ouvrez un ticket ou consultez nos ressources d'aide.",cta:'Accéder au support',href:'#/contact/support'}];
}
