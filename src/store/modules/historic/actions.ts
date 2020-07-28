type Payload = {
  purchasePokemonList: Pokemon[];
  purchaseDate: Date;
  purchaseTotalPrice: number;
  store: string;
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

export function addtoHistoric(payload: Payload) {
  return {
    type: '@historic/ADD',
    payload,
  };
}
