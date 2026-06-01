export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: { name: string };
  }[];
}
export interface PokemonResumo {
  id: number;
  name: string;
  tipos: string[];
  altura: number;
  peso: number;
}
