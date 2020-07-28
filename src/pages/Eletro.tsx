import React, { useEffect, useContext } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import { Container, CartButton, RouteBoxSwitch, Main, Footer } from './_styles';
import { useDispatch } from 'react-redux';
import { toggleCartStatus } from 'store/modules/cart/actions';
import Context from 'context/Context';

import eletro from 'styles/themes/eletro';

const Eletro: React.FC = () => {
  const { setTheme } = useContext(Context);
  const dispatch = useDispatch();

  const handleClickCartBtn = () => {
    dispatch(toggleCartStatus());
  };

  useEffect(() => {
    setTheme(eletro);
  }, [setTheme]);

  return (
    <Container>
      <Main>
        <CartButton type="button" onClick={handleClickCartBtn}>
          <MdShoppingCart size={26} color="#fff" />
        </CartButton>
        <RouteBoxSwitch>
          <Route exact path="/eletro" component={Catalog} />
          <Route path="/eletro/historic" component={Historic} />
          <Route path="/eletro/pokemon/:id" component={Pokemon} />

          <Route path="/eletro/eletro/historic">
            <Redirect to="/eletro/historic" />
          </Route>
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/eletro/">Ver catálogo</Link>
            <Link to="/eletro/historic">Ver histórico</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Eletro;
