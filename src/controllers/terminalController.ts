import type { PokemonResumo } from "../models/pokemon.js";
import { capitalizarTexto } from "../utils/textFormatters.js";

export class TerminalController {
  static exibirPokemonEncontrado(pokemon: PokemonResumo): void {
    const nomeFormatado = capitalizarTexto(pokemon.name);
    console.log(`\n[OK] Pokémon encontrado: ${nomeFormatado}`);
    console.log(
      `#${pokemon.id} ${nomeFormatado} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
    );
  }

  static exibirSucesso(mensagem: string): void {
    console.log(`[OK] ${mensagem}`);
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

    console.log("\n─────────────────────────────────────────────────────");
    console.log(
      "ID".padEnd(7) +
      "Nome".padEnd(13) +
      "Tipos".padEnd(17) +
      "Altura".padStart(8) +
      "Peso".padStart(7)
    );
    console.log("─────────────────────────────────────────────────────");

    pokemons.forEach((pokemon) => {
      const idStr = `#${pokemon.id}`;
      const nomeStr = capitalizarTexto(pokemon.name);
      const tiposStr = pokemon.tipos.join(", ");
      const alturaStr = String(pokemon.altura);
      const pesoStr = String(pokemon.peso);

      console.log(
        idStr.padEnd(7) +
        nomeStr.padEnd(13) +
        tiposStr.padEnd(17) +
        alturaStr.padStart(8) +
        pesoStr.padStart(7)
      );
    });
    console.log("─────────────────────────────────────────────────────\n");
  }
}
