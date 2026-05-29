//  # Interfaces/Types e Classes de Entidade. Molde rigoroso dos atributos consumidos da API.

export interface Pokemon {
  id: number;
  name: string;
  tipos: string[];
  altura: number;
  peso: number;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: { name: string };
  }[];
}
