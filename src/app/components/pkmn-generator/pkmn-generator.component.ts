import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { EntryComponent } from "../entry/entry.component";

@Component({
  selector: 'app-pkmn-generator',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    EntryComponent
],
  templateUrl: './pkmn-generator.component.html',
  styleUrls: ['./pkmn-generator.component.css']
})
export class PkmnGeneratorComponent {
  capturedIds: number[] = []; // Array to store captured IDs

  OnCatch() {
    console.log("pressed");
    const newId = Math.floor(Math.random() * 151) + 1; // Generate a new random ID
    this.capturedIds.push(newId); // Add the new ID to the array
  }
}
