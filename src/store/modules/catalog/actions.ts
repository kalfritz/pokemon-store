type PayloadSuccess = {
  pokemonList: Pokemon[];
};
type Pokemon = {
  id: number;
  name: string;
  sprites: Sprite[];
  price: number;
};
type Sprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export function fetchEletroPokemonRequest() {
  return {
    type: '@catalog/FETCH_ELETRO_POKEMON_REQUEST',
  };
}
export function fetchFirePokemonRequest() {
  return {
    type: '@catalog/FETCH_FIRE_POKEMON_REQUEST',
  };
}
export function fetchNaturePokemonRequest() {
  return {
    type: '@catalog/FETCH_NATURE_POKEMON_REQUEST',
  };
}
export function fetchWaterPokemonRequest() {
  return {
    type: '@catalog/FETCH_WATER_POKEMON_REQUEST',
  };
}
export function fetchEletroPokemonSuccess(payload: PayloadSuccess) {
  return {
    type: '@catalog/FETCH_ELETRO_POKEMON_SUCCESS',
    payload: { pokemonList: payload.pokemonList },
  };
}
export function fetchFirePokemonSuccess(payload: PayloadSuccess) {
  return {
    type: '@catalog/FETCH_FIRE_POKEMON_SUCCESS',
    payload: { pokemonList: payload.pokemonList },
  };
}
export function fetchNaturePokemonSuccess(payload: PayloadSuccess) {
  return {
    type: '@catalog/FETCH_NATURE_POKEMON_SUCCESS',
    payload: { pokemonList: payload.pokemonList },
  };
}
export function fetchWaterPokemonSuccess(payload: PayloadSuccess) {
  return {
    type: '@catalog/FETCH_WATER_POKEMON_SUCCESS',
    payload: { pokemonList: payload.pokemonList },
  };
}
