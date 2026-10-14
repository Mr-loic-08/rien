import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';

export type DisplayState = '404' | 'offline' | '500' | '503';
@Component({
  selector: 'app-site-error', standalone: true,
  template: `
  <main class="itech-error" [class.itech-error--offline]="kind === 'offline'" [class.itech-error--notfound]="kind === '404'" [class.itech-error--server]="kind === '500'" [class.itech-error--maintenance]="kind === '503'">
    <div class="itech-error__shade"></div>
    <div class="itech-error__inner">
      <div class="itech-error__symbol" aria-hidden="true">
        @if (kind === '404') { <span class="itech-error__number">404</span> }
        @else if (kind === 'offline') { <span class="itech-error__glyph">⌁</span><span class="itech-error__x">×</span> }
        @else if (kind === '503') { <span class="itech-error__glyph">⚙</span> }
        @else { <span class="itech-error__glyph">⚠</span> }
      </div>
      <p class="itech-error__eyebrow">I-TECH SARL · {{ english ? 'ASSISTANCE' : 'ASSISTANCE' }}</p>
      <h1>{{ title }}</h1>
      <p class="itech-error__message">{{ message }}</p>
      <div class="itech-error__actions">
        @if (kind === '404') {
          <a class="itech-error__button" href="#/">{{ english ? 'Back to home' : 'Retour à l’accueil' }} <span>→</span></a>
          <button class="itech-error__button itech-error__button--outline" type="button" (click)="goBack()">{{ english ? 'Previous page' : 'Page précédente' }}</button>
        } @else {
          <button class="itech-error__button" type="button" (click)="retry()">↻ {{ english ? 'Try again' : 'Réessayer' }}</button>
          <a class="itech-error__button itech-error__button--outline" [href]="kind === '500' ? '#/contact' : '#/'">{{ kind === '500' ? (english ? 'Contact support' : 'Contacter le support') : (english ? 'Back to home' : 'Retour à l’accueil') }}</a>
        }
      </div>
      <div class="itech-error__tip">
        @if (kind === 'offline') { {{ english ? 'Check Wi-Fi or mobile data, then try again.' : 'Vérifiez votre Wi-Fi ou vos données mobiles, puis réessayez.' }} }
        @else if (kind === '404') { {{ english ? 'The address may have changed or been mistyped.' : 'L’adresse a peut-être changé ou contient une erreur.' }} }
        @else if (kind === '503') { {{ english ? 'The service is temporarily unavailable. Please try again later.' : 'Le service est temporairement indisponible. Veuillez réessayer plus tard.' }} }
        @else { {{ english ? 'If the issue persists, please contact our support team.' : 'Si le problème persiste, contactez notre équipe support.' }} }
      </div>
    </div>
  </main>`,
  styleUrl: './site-error.css'
})
export class SiteErrorComponent {
  @Input({required:true}) kind: DisplayState = '404';
  readonly language = inject(LanguageService);
  get english() { return this.language.lang() === 'en'; }
  get title() { const t = {
    '404': ['Page introuvable', 'Page not found'],
    offline: ['Pas de connexion Internet', 'No Internet connection'],
    '500': ['Erreur technique', 'Technical error'],
    '503': ['Service temporairement indisponible', 'Service temporarily unavailable']
  }; return t[this.kind][this.english ? 1 : 0]; }
  get message() { const t = {
    '404': ['La page que vous recherchez n’existe pas ou a été déplacée.', 'The page you are looking for does not exist or has moved.'],
    offline: ['Vérifiez votre connexion réseau et réessayez.', 'Check your network connection and try again.'],
    '500': ['Une erreur interne est survenue. Nous vous invitons à réessayer.', 'An internal error occurred. Please try again.'],
    '503': ['Ce service n’est pas disponible pour le moment.', 'This service is currently unavailable.']
  }; return t[this.kind][this.english ? 1 : 0]; }
  retry() { window.location.reload(); }
  goBack() { if (history.length > 1) history.back(); else location.hash = '#/'; }
}
