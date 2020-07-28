import produce from 'immer';

const INITIAL_STATE = {
  fire: {
    items: [],
    loading: false,
  },
  water: {
    items: [],
    loading: false,
  },
  nature: {
    items: [],
    loading: false,
  },
  eletro: {
    items: [],
    loading: false,
  },
};

interface Catalog {
  fire: {
    items: Pokemon[] | null;
    loading: boolean;
  };
  water: {
    items: Pokemon[] | null;
    loading: boolean;
  };
  nature: {
    items: Pokemon[] | null;
    loading: boolean;
  };
  eletro: {
    items: Pokemon[] | null;
    loading: boolean;
  };
}
type Pokemon = {
  id: number;
  name: string;
  price: number;
  sprites: Sprite[];
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
type Action = {
  type: string;
  payload: {
    pokemonList: Pokemon[];
  };
};
export default function catalog(
  state: Catalog = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft: Catalog) => {
    switch (action.type) {
      case '@catalog/FETCH_FIRE_POKEMON_REQUEST':
        draft.fire.loading = true;
        break;
      case '@catalog/FETCH_WATER_POKEMON_REQUEST':
        draft.water.loading = true;
        break;
      case '@catalog/FETCH_NATURE_POKEMON_REQUEST':
        draft.nature.loading = true;
        break;
      case '@catalog/FETCH_ELETRO_POKEMON_REQUEST':
        draft.eletro.loading = true;
        break;

      case '@catalog/FETCH_FIRE_POKEMON_SUCCESS': {
        const { pokemonList } = action.payload;
        draft.fire.loading = false;
        draft.fire.items = pokemonList;
        break;
      }
      case '@catalog/FETCH_WATER_POKEMON_SUCCESS': {
        const { pokemonList } = action.payload;
        draft.water.loading = false;
        draft.water.items = pokemonList;
        break;
      }
      case '@catalog/FETCH_NATURE_POKEMON_SUCCESS': {
        const { pokemonList } = action.payload;
        draft.nature.loading = false;
        draft.nature.items = pokemonList;
        break;
      }
      case '@catalog/FETCH_ELETRO_POKEMON_SUCCESS': {
        const { pokemonList } = action.payload;
        draft.eletro.loading = false;
        draft.eletro.items = pokemonList;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
