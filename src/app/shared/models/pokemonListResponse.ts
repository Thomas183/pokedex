import {PokemonList} from "./pokemonList";

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonList[];
}
