import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonResult} from "../models/pokemonResult";
import {PokemonListResponse} from "../models/pokemonListResponse";
import {Observable} from "rxjs";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private _httpClient: HttpClient) {

  }

  _pokemonList: PokemonResult[] = [];

  getPokemons(offset: number = 0): Observable<PokemonResult[]> {
    return this._httpClient.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`).pipe(
      map(res => res.results));
  }

  getPokemonDetail(url: string) : void{

  }
}
