import { Component, HostListener, inject } from '@angular/core';
import { LanguageService } from '../../../core/language.service';

type ClientLogo = { src: string; alt: string; href: string };
@Component({
  selector: 'app-home-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients-logos.css'
})
export class HomeClientsComponent {
  readonly l = inject(LanguageService);
  showAll = false;
  readonly logos: ClientLogo[] = [
    {src:'images/clients/client-01.png',alt:'!',href:''},
    {src:'images/clients/mupeci.png',alt:'MUPECI',href:'https://www.mupeci.cm/'},
    {src:'images/clients/camccul.png',alt:'CamCCUL',href:'https://camccul.cm/'},
    {src:'images/clients/safi.png',alt:'SAFI',href:''},
    {src:'images/clients/figec.png',alt:'FIGEC',href:'https://web.facebook.com/figecgrandissonsensemble/?_rdc=1&_rdr#'},
    {src:'images/clients/mitaccul.png',alt:'MitaCCUL',href:'https://mitaccul.org/'},
    {src:'images/clients/bapccul.png',alt:'BAPCCUL',href:'https://bapccul.com/'},
    {src:'images/clients/cpcd.png',alt:'CPCD',href:''},
    {src:'images/clients/cepac.png',alt:'CEPAC',href:'https://www.cepac-solidarite.com/'}
  ];
  readonly first = [...this.logos,...this.logos];
  readonly second = [...this.logos.slice(4),...this.logos.slice(0,4),...this.logos.slice(4),...this.logos.slice(0,4)];
  paused: boolean[] = [false,false];
  shift: number[] = [0,0];

  step(row: number, direction: number) {
    this.paused[row] = true;
    this.shift[row] += direction * 208;
  }
  resume(row: number) {
    this.paused[row] = false;
    this.shift[row] = 0;
  }
  open() {
    this.showAll = true;
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.showAll = false;
    document.body.style.overflow = '';
  }
  @HostListener('document:keydown.escape')
  escape() { if (this.showAll) this.close(); }
  ngOnDestroy() { document.body.style.overflow = ''; }
}
