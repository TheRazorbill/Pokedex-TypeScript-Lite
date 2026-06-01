import type { PokemonApiResponse, PokemonResumo } from '../models/pokemon.js';
import { TerminalController } from '../controllers/terminalController.js';

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const parametroLimpo = nomeOuId.toLowerCase().trim();
  const url = `https://pokeapi.co/api/v2/pokemon/${parametroLimpo}`;

  try {
    const resposta = await fetch(url); 

    if (!resposta.ok) {
      TerminalController.exibirErro(`Pokémon não encontrado.`);
      return null;
    }

    const dados: PokemonApiResponse = await resposta.json();

    const listaTipos = dados.types.map((item) => item.type.name);

    return {
      id: dados.id,
      name: dados.name,
      tipos: listaTipos,
      altura: dados.height,
      peso: dados.weight
    };

  } catch (erro) {
    TerminalController.exibirErro("Não foi possível buscar o Pokémon.");
    return null;
  }
}
