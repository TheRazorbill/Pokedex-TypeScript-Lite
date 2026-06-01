import type { PokemonApiResponse, PokemonResumo } from "../models/pokemon.js";
import { TerminalController } from "../controllers/terminalController.js";
import { APIError } from "../models/customErrors.js";

export async function buscarPokemon(
  nomeOuId: string,
): Promise<PokemonResumo | null> {
  const parametroLimpo = nomeOuId.toLowerCase().trim();
  const url = `https://pokeapi.co/api/v2/pokemon/${parametroLimpo}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
    }

    const dados: PokemonApiResponse = await resposta.json();
    const listaTipos = dados.types.map((item) => item.type.name);

    return {
      id: dados.id,
      name: dados.name,
      tipos: listaTipos,
      altura: dados.height,
      peso: dados.weight,
    };
  } catch (erro) {
    if (erro instanceof APIError) {
      TerminalController.exibirErro("Pokémon não encontrado.");
    } else {
      TerminalController.exibirErro("Não foi possível buscar o Pokémon.");
    }
    return null;
  }
}
