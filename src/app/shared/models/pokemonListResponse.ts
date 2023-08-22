import {PokemonResult} from "./pokemonResult";

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}
