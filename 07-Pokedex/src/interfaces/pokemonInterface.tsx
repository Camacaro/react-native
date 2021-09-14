export interface PokemonPaginetedResponse {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
