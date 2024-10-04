import { Component, inject, OnInit, Input } from '@angular/core';
import { PokeAPIService } from '../../services/poke-api.service';
import { Root } from '../../model/interface/pokemon-info';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input() nameOrId: string = '';

  pokemon: Root | null = null; 
  pokeAPIService = inject(PokeAPIService);

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

}
