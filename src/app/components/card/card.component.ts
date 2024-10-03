import { Component, inject, OnInit } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Root } from '../../model/interface/pokemon-info';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  pokemon: Root = {} as Root; // Initialize as an empty object

  pokeAPIService = inject(PokeAPIService);

  ngOnInit(): void {
    this.getPokemonData("1"); // Call the method with a Pokémon name or ID
  }
  
  getPokemonData(nameOrId: string): void {
    this.pokeAPIService.getPokemon(nameOrId).subscribe(
      data => {
        this.pokemon = data; // Store the response in the pokemon object
        console.log(this.pokemon); // Log the data to see its structure
      },
      error => {
        console.error('Error fetching Pokémon data:', error); // Handle errors
      }
    );
  }

}
