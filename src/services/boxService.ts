import type { PokemonResumo } from "../models/pokemon.js";
import { TerminalController } from "../controllers/terminalController.js";
import { capitalizarTexto } from "../utils/textFormatters.js";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      TerminalController.exibirAviso(`${capitalizarTexto(pokemon.name)} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    TerminalController.exibirSucesso(`${capitalizarTexto(pokemon.name)} adicionado ao catálogo.`);
  }

  listar(): void {
    TerminalController.renderizarCatalogo(this.pokemons);
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      TerminalController.exibirAviso(`Nenhum Pokémon encontrado com o ID #${id}.`);
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    TerminalController.exibirSucesso("Pokémon removido do catálogo com sucesso.");
  }
}