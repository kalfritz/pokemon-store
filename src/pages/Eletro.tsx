import React, { useEffect, useContext } from 'react';
import { Route, Link } from 'react-router-dom';

import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import Context from 'context/Context';
import eletro from '../styles/themes/eletro';

import { Container, RouteBoxSwitch, Main, Footer } from './_styles';

const Eletro: React.FC = () => {
  const { setTheme } = useContext(Context);

  useEffect(() => {
    setTheme(eletro);
  }, []);

  return (
    <Container>
      <Main>
        <RouteBoxSwitch>
          <Route exact path={['/', '/eletro/']} component={Catalog} />
          <Route
            path={['/historic', '/eletro/historic']}
            component={Historic}
          />
          <Route
            path={['/pokemon/:id', '/eletro/pokemon/:id']}
            component={Pokemon}
          />
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/eletro/">See catalog</Link>
            <Link to="/eletro/historic">See historic</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Eletro;
