import { Component, OnInit } from '@angular/core';
import { CardLayoutComponent } from "../card-layout/card-layout.component";

@Component({
  selector: 'app-dex-gen-one',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './dex-gen-one.component.html',
  styleUrl: './dex-gen-one.component.css'
})
export class DexGenOneComponent implements OnInit {

  renderedIndex: number[] = [];

  ngOnInit(): void {
    this.renderedIndex = Array.from({ length: 151 }, (_, i) => i + 1); // Generates an array from 1 to 151
  }

}
