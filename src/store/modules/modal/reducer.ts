import produce from 'immer';

const INITIAL_STATE = {
  status: false,
  loading: false,
  store: 'eletro',
  moneyBack: 0,
  pokemonList: [],
};

export type Modal = {
  status: boolean;
  loading: boolean;
  store: string;
  moneyBack: number;
  pokemonList: Pokemon[];
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

type Pokemon = {
  id: number;
  name: string;
  price: number;
  sprites: Sprite;
};

type Action = {
  type: '@modal/OPEN_MODAL' | '@modal/CLOSE_MODAL' | '@historic/ADD';
  payload: {
    store?: string;
    purchaseTotalPrice?: number;
    purchasePokemonList: Pokemon[];
    moneyBack?: number;
  };
};

export default function modal(state: Modal = INITIAL_STATE, action: Action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@historic/ADD': {
        const {
          store,
          purchaseTotalPrice,
          purchasePokemonList,
        } = action.payload;
        draft.loading = true;
        draft.status = true;
        draft.store = store!;
        draft.moneyBack = purchaseTotalPrice! / 10!;
        draft.pokemonList = purchasePokemonList;
        break;
      }
      case '@modal/CLOSE_MODAL': {
        draft.status = false;
        draft.loading = false;
        draft.moneyBack = 0;
        break;
      }
      default:
    }
  });
}
