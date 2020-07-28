import produce from 'immer';

const INITIAL_STATE = {
  fire: {
    items: [],
    total: 0,
  },
  water: {
    items: [],
    total: 0,
  },
  nature: {
    items: [],
    total: 0,
  },
  eletro: {
    items: [],
    total: 0,
  },
  status: false,
};

interface Cart {
  fire: {
    items: Item[];
    total: number;
  };
  water: {
    items: Item[];
    total: number;
  };
  nature: {
    items: Item[];
    total: number;
  };
  eletro: {
    items: Item[];
    total: number;
  };
  status: boolean;
}

type Item = {
  id: number;
  name: string;
  sprites: Sprite[];
  price: number;
  amount: number;
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
  type:
    | '@cart/ADD'
    | '@cart/REMOVE'
    | '@cart/UPDATE_AMOUNT'
    | '@cart/TOGGLE_CART_STATUS'
    | '@historic/ADD';
  payload: {
    store: 'fire' | 'water' | 'nature' | 'eletro';
    id?: number;
    item?: Item;
    increase?: boolean;
    price?: number;
  };
};

export default function cart(state: Cart = INITIAL_STATE, action: Action) {
  return produce(state, (draft: Cart) => {
    switch (action.type) {
      case '@cart/ADD': {
        const { item, store } = action.payload;

        if (store === 'fire') {
          draft.fire.items.push(item!);
          draft.fire.total = draft.fire.items.reduce(
            (accumulator, item): any => {
              return (accumulator += item.price * item.amount);
            },
            0
          );
        }
        if (store === 'water') {
          draft.water.items.push(item!);
          draft.water.total = draft.water.items.reduce(
            (accumulator, item): any => {
              return (accumulator += item.price * item.amount);
            },
            0
          );
        }
        if (store === 'nature') {
          draft.nature.items.push(item!);
          draft.nature.total = draft.nature.items.reduce(
            (accumulator, item): any => {
              return (accumulator += item.price * item.amount);
            },
            0
          );
        }
        if (store === 'eletro') {
          draft.eletro.items.push(item!);
          draft.eletro.total = draft.eletro.items.reduce(
            (accumulator, item): any => {
              return (accumulator += item.price * item.amount);
            },
            0
          );
        }
        break;
      }
      case '@cart/REMOVE': {
        const { item, store } = action.payload;
        switch (store) {
          case 'fire': {
            const itemIndex = draft.fire.items.findIndex(
              (_item: Item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              draft.fire.items.splice(itemIndex, 1);
              draft.fire.total = draft.fire.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'water': {
            const itemIndex = draft.water.items.findIndex(
              (_item: Item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              draft.water.items.splice(itemIndex, 1);
              draft.water.total = draft.water.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'nature': {
            const itemIndex = draft.nature.items.findIndex(
              (_item: Item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              draft.nature.items.splice(itemIndex, 1);
              draft.nature.total = draft.nature.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'eletro': {
            const itemIndex = draft.eletro.items.findIndex(
              (_item: Item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              draft.eletro.items.splice(itemIndex, 1);
              draft.eletro.total = draft.eletro.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT': {
        const { item, store, increase } = action.payload;
        switch (store) {
          case 'fire': {
            const itemIndex = draft.fire.items.findIndex(
              (_item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              if (increase) {
                draft.fire.items[itemIndex].amount++;
              } else {
                draft.fire.items[itemIndex].amount--;
                if (draft.fire.items[itemIndex].amount === 0) {
                  draft.fire.items.splice(itemIndex, 1);
                }
              }
              draft.fire.total = draft.fire.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'water': {
            const itemIndex = draft.water.items.findIndex(
              (_item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              if (increase) {
                draft.water.items[itemIndex].amount++;
              } else {
                draft.water.items[itemIndex].amount--;
                if (draft.water.items[itemIndex].amount === 0) {
                  draft.water.items.splice(itemIndex, 1);
                }
              }
              draft.water.total = draft.water.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'nature': {
            const itemIndex = draft.nature.items.findIndex(
              (_item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              if (increase) {
                draft.nature.items[itemIndex].amount++;
              } else {
                draft.nature.items[itemIndex].amount--;
                if (draft.nature.items[itemIndex].amount === 0) {
                  draft.nature.items.splice(itemIndex, 1);
                }
              }

              draft.nature.total = draft.nature.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
          case 'eletro': {
            const itemIndex = draft.eletro.items.findIndex(
              (_item) => _item.id === item!.id!
            );
            if (itemIndex >= 0) {
              if (increase) {
                draft.eletro.items[itemIndex].amount++;
              } else {
                draft.eletro.items[itemIndex].amount--;
                if (draft.eletro.items[itemIndex].amount === 0) {
                  draft.eletro.items.splice(itemIndex, 1);
                }
              }
              draft.eletro.total = draft.eletro.items.reduce(
                (accumulator, item): any => {
                  return (accumulator += item.price * item.amount);
                },
                0
              );
            }
            break;
          }
        }
        break;
      }
      case '@cart/TOGGLE_CART_STATUS': {
        draft.status = !draft.status;
        break;
      }
      case '@historic/ADD':
        const { store } = action.payload;

        switch (store) {
          case 'fire': {
            draft.fire.items = [];
            draft.fire.total = 0;
            break;
          }
          case 'water': {
            draft.water.items = [];
            draft.water.total = 0;
            break;
          }
          case 'nature': {
            draft.nature.items = [];
            draft.nature.total = 0;
            break;
          }
          case 'eletro': {
            draft.eletro.items = [];
            draft.eletro.total = 0;
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
