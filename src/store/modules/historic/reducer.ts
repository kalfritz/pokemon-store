import produce from 'immer';

export type Purchase = {
  purchaseDate: Date;
  purchaseTotalPrice: number;
  purchasePokemonList: Pokemon[];
};

export type IHistoric = {
  fire: Purchase[];
  water: Purchase[];
  nature: Purchase[];
  eletro: Purchase[];
};
const INITIAL_STATE = {
  fire: [],
  water: [],
  nature: [],
  eletro: [],
};

type Pokemon = {
  id: number;
  name: string;
  price: number;
  amount: number;
  sprites: Sprite;
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
  type: '@historic/ADD';
  payload: {
    purchaseDate: Date;
    purchaseTotalPrice: number;
    purchasePokemonList: Pokemon[];
    store: string;
  };
};

export default function historic(
  state: IHistoric = INITIAL_STATE,
  action: Action
) {
  return produce(state, (draft: IHistoric) => {
    switch (action.type) {
      case '@historic/ADD':
        const {
          store,
          purchasePokemonList,
          purchaseDate,
          purchaseTotalPrice,
        } = action.payload;

        switch (store) {
          case 'fire': {
            draft.fire.unshift({
              purchasePokemonList,
              purchaseDate,
              purchaseTotalPrice,
            });

            break;
          }
          case 'water': {
            draft.water.unshift({
              purchasePokemonList,
              purchaseDate,
              purchaseTotalPrice,
            });
            break;
          }
          case 'nature': {
            draft.nature.unshift({
              purchasePokemonList,
              purchaseDate,
              purchaseTotalPrice,
            });
            break;
          }
          case 'eletro': {
            draft.eletro.unshift({
              purchasePokemonList,
              purchaseDate,
              purchaseTotalPrice,
            });
            break;
          }
        }
        break;
      default: {
        return state;
      }
    }
  });
}
