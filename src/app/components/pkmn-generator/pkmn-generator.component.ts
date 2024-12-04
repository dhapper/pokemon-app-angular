import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaughtPokemon } from '../../model/interface/caught-pokemon';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-pkmn-generator',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './pkmn-generator.component.html',
  styleUrls: ['./pkmn-generator.component.css']
})
export class PkmnGeneratorComponent {
  capturedIds: number[] = []; // Ensure this is declared

  onCatch() {
    console.log("pressed");
    const newId = Math.floor(Math.random() * 151) + 1; // Generate a new random ID
    this.capturedIds.push(newId); // Add the new ID to the array
  }
}
