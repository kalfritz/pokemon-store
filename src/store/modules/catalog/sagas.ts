import { takeLatest, call, put, all } from 'redux-saga/effects';
import faker from 'faker';
import api from '../../../services/api';
import {
  fetchEletroPokemonSuccess,
  fetchFirePokemonSuccess,
  fetchNaturePokemonSuccess,
  fetchWaterPokemonSuccess,
} from './actions';

type Types = {
  fire: Pokemon[] | null;
  water: Pokemon[] | null;
  nature: Pokemon[] | null;
  eletro: Pokemon[] | null;
};
type Item = {
  pokemon: Pokemon;
};
type Pokemon = {
  id: number;
  name: string;
  price?: number;
  url?: string;
  sprites?: Sprite[];
  amount?: number;
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

export function* fetchFirePokemon() {
  const response = yield call(api.get, `type/10`);
  const { pokemon } = response.data;

  const pokemonListResponse = yield all(
    pokemon.map((item: Item) => call(api.get, `${item.pokemon.url}`))
  );

  const pokemonList = pokemonListResponse.map(({ data }: any): any => {
    return {
      id: data.id,
      name: data.name.split('-')[0],
      sprites: data.sprites,
      price: faker.commerce.price(),
    };
  });

  yield put(fetchFirePokemonSuccess({ pokemonList }));
}

export function* fetchWaterPokemon() {
  const response = yield call(api.get, `type/11`);
  const { pokemon } = response.data;

  const pokemonListResponse = yield all(
    pokemon.map((item: Item) => call(api.get, `${item.pokemon.url}`))
  );

  const pokemonList = pokemonListResponse.map(({ data }: any): any => {
    return {
      id: data.id,
      name: data.name.split('-')[0],
      sprites: data.sprites,
      price: faker.commerce.price(),
    };
  });

  yield put(fetchWaterPokemonSuccess({ pokemonList }));
}
export function* fetchNaturePokemon() {
  const response = yield call(api.get, `type/12`);
  const { pokemon } = response.data;

  const pokemonListResponse = yield all(
    pokemon.map((item: Item) => call(api.get, `${item.pokemon.url}`))
  );

  const pokemonList = pokemonListResponse.map(({ data }: any): any => {
    return {
      id: data.id,
      name: data.name.split('-')[0],
      sprites: data.sprites,
      price: faker.commerce.price(),
    };
  });
  yield put(fetchNaturePokemonSuccess({ pokemonList }));
}
export function* fetchEletroPokemon() {
  const response = yield call(api.get, `type/13`);
  const { pokemon } = response.data;

  const pokemonListResponse = yield all(
    pokemon.map((item: Item) => call(api.get, `${item.pokemon.url}`))
  );

  const pokemonList = pokemonListResponse.map(({ data }: any): any => {
    return {
      id: data.id,
      name: data.name.split('-')[0],
      sprites: data.sprites,
      price: faker.commerce.price(),
    };
  });

  yield put(fetchEletroPokemonSuccess({ pokemonList }));
}

export default all([
  takeLatest('@catalog/FETCH_FIRE_POKEMON_REQUEST', fetchFirePokemon),
  takeLatest('@catalog/FETCH_WATER_POKEMON_REQUEST', fetchWaterPokemon),
  takeLatest('@catalog/FETCH_NATURE_POKEMON_REQUEST', fetchNaturePokemon),
  takeLatest('@catalog/FETCH_ELETRO_POKEMON_REQUEST', fetchEletroPokemon),
]);
