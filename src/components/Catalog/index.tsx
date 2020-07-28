import React, { useEffect, useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Container, PokemonItem, PokemonItems } from './styles';
import {
  fetchFirePokemonRequest,
  fetchWaterPokemonRequest,
  fetchEletroPokemonRequest,
  fetchNaturePokemonRequest,
} from 'store/modules/catalog/actions';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateAmount } from 'store/modules/cart/actions';
import { MdAddShoppingCart } from 'react-icons/md';
import EmptyCatalog from 'components/EmptyCatalog';

interface Catalog {
  items: Pokemon[] | null;
  loading: boolean;
}

type Pokemon = {
  id: number;
  name: string;
  sprites: Sprite;
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
interface Cart {
  items: Pokemon[];
  total: number;
}

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const { store } = useContext(ThemeContext);
  const catalog = useSelector<any, Catalog>((state) => state.catalog[store]);
  const cart = useSelector<any, Cart>((state) => state.cart[store]);
  useEffect(() => {
    store === 'fire' &&
      catalog?.items?.length === 0 &&
      dispatch(fetchFirePokemonRequest());
    store === 'water' &&
      catalog?.items?.length === 0 &&
      dispatch(fetchWaterPokemonRequest());
    store === 'nature' &&
      catalog?.items?.length === 0 &&
      dispatch(fetchNaturePokemonRequest());
    store === 'eletro' &&
      catalog?.items?.length === 0 &&
      dispatch(fetchEletroPokemonRequest());
  }, [store, dispatch, catalog]);
  const handleAddToCart = (_item: Pokemon) => {
    if (cart.items?.length > 0) {
      const index = cart.items.findIndex((item: any) => item.id === _item.id);
      if (index >= 0) {
        dispatch(updateAmount({ store, item: _item, increase: true }));
        return;
      }
    }
    const item = {
      ..._item,
      amount: 1,
    };

    dispatch(addToCart({ store, item }));
  };
  const amount = (pokemon: any) => {
    if (cart.items?.length === 0) return 0;
    const index = cart.items.findIndex((item: any) => item.id === pokemon.id);
    if (index >= 0) {
      return cart.items[index].amount;
    } else {
      return 0;
    }
  };
  return (
    <Container>
      {catalog!.items!.length > 0 ? (
        <PokemonItems>
          {catalog?.items!.map((pokemon: Pokemon) => (
            <PokemonItem key={pokemon.id}>
              <div>
                <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
                <p>{pokemon.name}</p>
                <span>R${pokemon.price}</span>
              </div>
              <footer>
                <div>
                  <span>{amount(pokemon)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(pokemon);
                  }}
                >
                  Adicionar
                  <MdAddShoppingCart size={16} />
                </button>
              </footer>
            </PokemonItem>
          ))}
        </PokemonItems>
      ) : (
        <EmptyCatalog />
      )}
    </Container>
  );
};

export default Catalog;
