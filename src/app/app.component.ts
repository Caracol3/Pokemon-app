import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})



export class AppComponent {
  

}











// pokemonList: Pokemon[] = POKEMONS;
// pokemonSelected: Pokemon | undefined;
// ;

//   ngOnInit(): void {
//     console.table(this.pokemonList); 
//   }

//   selectPokemon(pokemonId: string) {
//     const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
//     if (pokemon) {
//       console.log(`Vous avez cliqué sur le pokemon  ${pokemon.name}`);
//       this.pokemonSelected = pokemon;
//     } else {
//       console.log(`Le pokemon avec l'id ${pokemonId} n'existe pas`);
//     }
//   }