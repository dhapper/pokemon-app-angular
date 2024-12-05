import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from "./components/card-layout/card-layout.component";
import { PkmnGeneratorComponent } from "./components/pkmn-generator/pkmn-generator.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CommonModule,
    CardLayoutComponent,
    PkmnGeneratorComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {
  title = 'pokemon_app';


}
