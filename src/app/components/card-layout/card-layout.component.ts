import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-layout',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.css'
})
export class CardLayoutComponent {

  @Input() renderedIndex : number[] = [];

}
