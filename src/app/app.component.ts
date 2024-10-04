import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardLayoutComponent } from "./components/card-layout/card-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    CommonModule,
    CardLayoutComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent {
  title = 'pokemon_app';

  renderedIndex: number[] = [];

  ngOnInit(): void {
    this.renderedIndex = Array.from({ length: 151 }, (_, i) => i + 1); // Generates an array from 1 to 151
  }

}
