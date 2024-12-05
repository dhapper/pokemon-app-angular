import { Component, inject, OnInit } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Root } from '../../model/interface/pokemon-info';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../../services/helper.service'; // Ensure HelperService is imported

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'] // Ensure this file exists and is properly styled
})
export class EntryComponent implements OnInit {

  nameOrId: string = '';
  pokemon: Root | null = null; 
  primaryTypeColor: string = '#ffffff'; // Default color (white)

  pokeAPIService = inject(PokeAPIService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nameOrId = params.get('nameOrId') || 'monferno';  // Default to 'monferno' if not provided
      this.getPokemonData(this.nameOrId);  // Fetch the Pokémon data based on the route parameter
    });
  }

  getPokemonData(nameOrId: string): void {
    this.pokeAPIService.getPokemon(nameOrId).subscribe(
      data => {
        this.pokemon = data; // Store the response in the pokemon object

        // Set the primary type color for theming
        if (this.pokemon) {
          const primaryType = this.pokemon.types[0].type.name;
          this.primaryTypeColor = HelperService.getTypeColour(primaryType); // Access static method
        }
      },
      error => {
        console.error('Error fetching Pokémon data:', error); // Handle errors
      }
    );
  }

  // Wrapper method to call the static method from HelperService
  getTypeColor(typeName: string): string {
    return HelperService.getTypeColour(typeName);
  }
}
