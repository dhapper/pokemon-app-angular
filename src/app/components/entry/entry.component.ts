import { Component, inject } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Root } from '../../model/interface/pokemon-info';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {

  nameOrId: string = '';
  pokemon: Root | null = null; 
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
      },
      error => {
        console.error('Error fetching Pokémon data:', error); // Handle errors
      }
    );
  }

}
