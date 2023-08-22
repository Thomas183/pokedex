import { Component } from '@angular/core';
import { PokeApiService } from "../shared/services/poke-api.service";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  constructor(private _pokeApi : PokeApiService) {
    _pokeApi.getPokemons().subscribe(pokemons => {
      console.log(pokemons)
    })

    _pokeApi.getPokemonDetails('').subscribe(pokemon => {
      console.log(pokemon);
    });
  }

}
