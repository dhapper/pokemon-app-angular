import { Component, inject, OnInit, Input } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Root } from '../../model/interface/pokemon-info';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() nameOrId: string = '';
  pokemon: Root | null = null; 
  pokeAPIService = inject(PokeAPIService);
  router = inject(Router);

  ngOnInit(): void {
    this.getPokemonData(this.nameOrId);
  }

  getPokemonData(nameOrId: string): void {
    this.pokeAPIService.getPokemon(nameOrId).subscribe(
      data => {
        this.pokemon = data; // Store the response in the pokemon object
      },
      error => {
        console.error('Error fetching Pokémon data:', error); // Handle errors
      }
    );
  }

  onCardClick() {
    // Update @input variable for EntryComponent before loading
    this.router.navigate(['/entry', this.pokemon?.name]);
  }

// Renamed the method to getTypeColor
getTypeColour(type: string): string {
  if (type === 'no-type') {
    return 'rgb(47, 47, 47)';  // Default grey color when no secondary type
  }
  return HelperService.getTypeColour(type);  // Default type color
}


}
