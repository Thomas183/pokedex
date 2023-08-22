import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonList} from "../models/pokemonList";
import {PokemonListResponse} from "../models/pokemonListResponse";
import {Observable} from "rxjs";
import {switchMap, map} from "rxjs/operators"
import {PokemonDetails} from "../models/pokemonDetails";
import {SpeciesResponse} from "../models/species-response";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private _httpClient: HttpClient) {

  }

  _pokemonList: PokemonList[] = [];

  getPokemons(offset: number = 0): Observable<PokemonList[]> {
    return this._httpClient.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`).pipe(
      map(res => res.results));
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this._httpClient.get<PokemonDetails>('https://pokeapi.co/api/v2/pokemon/2/').pipe(switchMap(data => {
      const speciesUrl = data.species!.url
      return this._httpClient.get<SpeciesResponse>(speciesUrl).pipe(map(speciesData => {
        return {
          description: speciesData.flavor_text_entries[0],
          id: data.id,
          weight: data.weight,
          height: data.height,
          name: data.name,
        }
      }))
    }))
  }
}
