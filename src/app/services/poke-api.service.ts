import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(private http: HttpClient) { }

  // Method to get Pokémon by ID or name
  getPokemon(nameOrId: string): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + nameOrId);
  }

}
