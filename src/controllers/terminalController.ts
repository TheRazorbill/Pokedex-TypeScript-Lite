import type { PokemonResumo } from "../models/pokemon.js";
import { capitalizarTexto } from "../utils/textFormatters.js";

export class TerminalController {
  static exibirPokemonEncontrado(pokemon: PokemonResumo): void {
    const nomeFormatado = capitalizarTexto(pokemon.name);
    console.log(`[OK] Pokémon encontrado: ${nomeFormatado}`);
    console.log(
      `#${pokemon.id} ${nomeFormatado} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`,
    );
  }

  static exibirAviso(mensagem: string): void {
    console.log(`[AVISO] ${mensagem}`);
  }

  static exibirErro(mensagem: string): void {
    console.log(`[ERRO] ${mensagem}`);
  }

  static renderizarCatalogo(pokemons: PokemonResumo[]): void {
    if (pokemons.length === 0) {
      this.exibirAviso("Catálogo vazio.");
      return;
    }

    console.log("\nCatálogo atual:");
    pokemons.forEach((pokemon) => {
      console.log(
        `#${pokemon.id} ${pokemon.name} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`,
      );
    });
  }
}
