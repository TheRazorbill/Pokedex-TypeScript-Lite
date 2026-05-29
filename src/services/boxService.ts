import type { PokemonResumo } from "../models/pokemon.js";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.name} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.name} adicionado ao catálogo.`);
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log("[AVISO] Catálogo vazio.");
      return;
    }

    console.log("Catálogo atual:");
    this.pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} ${pokemon.name} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`,
      );
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log("[OK] Pokémon removido do catálogo.");
  }
}

const pokemonCatalogo = new CatalogoPokemon();

pokemonCatalogo.adicionar({
  id: 1,
  name: "Bulbasaur",
  tipos: ["grama", "veneno"],
  altura: 7,
  peso: 69,
});
pokemonCatalogo.adicionar({
  id: 4,
  name: "Charmander",
  tipos: ["fogo"],
  altura: 6,
  peso: 85,
});

pokemonCatalogo.listar();

pokemonCatalogo.remover(1);

pokemonCatalogo.listar();
