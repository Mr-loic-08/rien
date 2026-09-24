import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header';
import { HeroComponent } from './pages/home/hero/hero';
@Component({selector:'app-root',standalone:true,imports:[HeaderComponent,HeroComponent],templateUrl:'./app.html',styleUrl:'./app.css'})
export class App {}
