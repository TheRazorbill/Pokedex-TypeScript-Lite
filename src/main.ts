// criar as interfaces
// organizar a arquitetura do arquivo

import { buscarPokemon } from "./services/pokeApiService.js";
import { CatalogoPokemon } from "./services/boxService.js";
import { TerminalController } from "./controllers/terminalController.js";

async function main() {
  const catalogo = new CatalogoPokemon();

  console.log("--- Iniciando Simulação da Pokédex TypeScript Lite --- \n");

  const pikachu = await buscarPokemon("pikachu");
  if (pikachu !== null) {
    TerminalController.exibirPokemonEncontrado(pikachu);
    catalogo.adicionar(pikachu);
  }

  const charmander = await buscarPokemon("charmander");
  if (charmander !== null) {
    TerminalController.exibirPokemonEncontrado(charmander);
    catalogo.adicionar(charmander);
  }

  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  await buscarPokemon("pokemon-inexistente");

  catalogo.listar();
  catalogo.remover(25);
  catalogo.listar();
}

main();
