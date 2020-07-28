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
import fire from 'styles/themes/fire';
import { MdShoppingCart } from 'react-icons/md';

const Fire: React.FC = () => {
  const { setTheme } = useContext(Context);
  const dispatch = useDispatch();

  const handleClickCartBtn = () => {
    dispatch(toggleCartStatus());
  };
  useEffect(() => {
    setTheme(fire);
  }, [setTheme]);
  return (
    <Container>
      <Main>
        <CartButton type="button" onClick={handleClickCartBtn}>
          <MdShoppingCart size={26} color="#fff" />
        </CartButton>
        <RouteBoxSwitch>
          <Route exact path="/fire" component={Catalog} />
          <Route path="/fire/historic" component={Historic} />
          <Route path="/fire/pokemon/:id" component={Pokemon} />
          {/*sometimes the historic link on the modal component 
          is redirectioning to the route below. reminder to fix it later*/}
          <Route path="/fire/fire/historic">
            <Redirect to="/fire/historic" />
          </Route>
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/fire/">Ver catálogo</Link>
            <Link to="/fire/historic">Ver histórico</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Fire;
