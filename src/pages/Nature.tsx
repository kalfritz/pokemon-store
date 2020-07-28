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
import nature from 'styles/themes/nature';
import { MdShoppingCart } from 'react-icons/md';

const Nature: React.FC = () => {
  const { setTheme } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    setTheme(nature);
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
          <Route exact path="/nature" component={Catalog} />
          <Route path="/nature/historic" component={Historic} />
          <Route path="/nature/pokemon/:id" component={Pokemon} />
          {/*sometimes the historic link on the modal component 
          is redirectioning to the route below. reminder to fix it later*/}
          <Route path="/nature/nature/historic">
            <Redirect to="/nature/historic" />
          </Route>
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/nature/">Ver catálogo</Link>
            <Link to="/nature/historic">Ver histórico</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Nature;
