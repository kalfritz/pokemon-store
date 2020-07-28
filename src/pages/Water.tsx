import React, { useContext, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import { Container, RouteBoxSwitch, Main, Footer, CartButton } from './_styles';
import { useDispatch } from 'react-redux';
import { toggleCartStatus } from 'store/modules/cart/actions';
import Context from 'context/Context';
import water from 'styles/themes/water';
import { MdShoppingCart } from 'react-icons/md';

const Water: React.FC = () => {
  const { setTheme } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    setTheme(water);
  }, [setTheme]);

  const handleClickCartBtn = () => {
    dispatch(toggleCartStatus());
  };

  return (
    <Container>
      <Main>
        <CartButton type="button" onClick={handleClickCartBtn}>
          <MdShoppingCart size={26} color="#fff" />
        </CartButton>
        <RouteBoxSwitch>
          <Route exact path="/water" component={Catalog} />
          <Route path="/water/historic" component={Historic} />
          <Route path="/water/pokemon/:id" component={Pokemon} />
          <Route path="/water/water/historic">
            <Redirect to="/water/historic" />
          </Route>
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/water">Ver catálogo</Link>
            <Link to="/water/historic">Ver histórico</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Water;
