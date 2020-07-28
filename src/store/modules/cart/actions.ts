export type Item = {
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

interface Payload {
  store: string;
  item?: Item;
  id?: number;
  increase?: boolean;
}

export function addToCart(payload: Payload) {
  return {
    type: '@cart/ADD',
    payload: { store: payload.store, item: payload.item },
  };
}

export function removeFromCart(payload: Payload) {
  return {
    type: '@cart/REMOVE',
    payload: { store: payload.store, item: payload.item },
  };
}

export function toggleCartStatus() {
  return {
    type: '@cart/TOGGLE_CART_STATUS',
  };
}

export function updateAmount(payload: Payload) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: {
      store: payload.store,
      item: payload.item,
      increase: payload.increase,
    },
  };
}
