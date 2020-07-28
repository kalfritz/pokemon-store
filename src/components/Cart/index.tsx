import React, { useContext } from 'react';
import {
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdShoppingCart,
} from 'react-icons/md';

import {
  Container,
  Title,
  Item,
  Total,
  FinishButton,
  CartItems,
  ImageAndName,
  PriceAndAmount,
  Price,
  Amount,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import EmptyCart from 'components/EmptyCart';
import { addtoHistoric } from 'store/modules/historic/actions';
import {
  removeFromCart,
  updateAmount,
  toggleCartStatus,
} from 'store/modules/cart/actions';

type Cart = {
  items: Item[];
  total: number;
};
type Item = {
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

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { store } = useContext(ThemeContext);
  const cart = useSelector<any, Cart>((state) => state.cart[store]);
  const status = useSelector<any, boolean>((state) => state.cart.status);
  const handleRemoveFromCart = (item: Item) => {
    dispatch(removeFromCart({ store, item }));
  };
  const handleFinish = () => {
    if (cart?.items?.length > 0) {
      dispatch(
        addtoHistoric({
          store,
          purchasePokemonList: cart.items,
          purchaseTotalPrice: cart.total,
          purchaseDate: new Date(),
        })
      );
    }
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
  type Decrement = {
    item: Item;
    increase: false;
  };
  type Increment = {
    item: Item;
    increase: true;
  };
  const handleDecrement = ({ item, increase }: Decrement) => {
    dispatch(updateAmount({ store, item, increase }));
  };

  const handleIncrement = ({ item, increase }: Increment) => {
    dispatch(updateAmount({ store, item, increase }));
  };
  const handleCloseCart = () => {
    dispatch(toggleCartStatus());
  };
  return (
    <Container hidden={!status}>
      <Title>
        <h2>
          Carrinho <MdShoppingCart size={22} color="#fff" />
        </h2>
        <button onClick={handleCloseCart}>
          <MdClose size={24} color="#fff" />
        </button>
      </Title>
      {cart?.items.length > 0 ? (
        <CartItems>
          {cart.items.map((item): any => (
            <Item>
              <ImageAndName>
                <img src={item.sprites.front_default} alt={item.name} />
                <p>{item.name}</p>
              </ImageAndName>
              <PriceAndAmount>
                <Amount>
                  <button>
                    <MdKeyboardArrowDown
                      size={24}
                      color="#333"
                      onClick={() => {
                        handleDecrement({ item, increase: false });
                      }}
                    />
                  </button>
                  <span>{item.amount}</span>
                  <button>
                    <MdKeyboardArrowUp
                      size={24}
                      color="#333"
                      onClick={() => {
                        handleIncrement({ item, increase: true });
                      }}
                    />
                  </button>
                </Amount>
                <Price>
                  <span>R${item.price * amount(item)}</span>
                  <button
                    onClick={() => {
                      handleRemoveFromCart(item);
                    }}
                  >
                    <MdClose size={16} color="#222" />
                  </button>
                </Price>
              </PriceAndAmount>
            </Item>
          ))}
        </CartItems>
      ) : (
        <EmptyCart />
      )}
      <footer>
        <Total>
          <p>Total</p>
          <span>R${cart?.total || 0}</span>
        </Total>
        <FinishButton onClick={handleFinish}>Finalizar</FinishButton>
      </footer>
    </Container>
  );
};

export default Cart;
