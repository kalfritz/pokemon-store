import React, { useEffect, useContext } from 'react';
import { Route, Link } from 'react-router-dom';

import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import Context from 'context/Context';
import fire from '../styles/themes/fire';

import { Container, RouteBoxSwitch, Main, Footer } from './_styles';

const Fire: React.FC = () => {
  const { setTheme } = useContext(Context);

  useEffect(() => {
    console.log('fire');
    setTheme(fire);
  }, []);

  return (
    <Container>
      <Main>
        <RouteBoxSwitch>
          <Route exact path="/fire/" component={Catalog} />
          <Route path="/fire/historic" component={Historic} />
          <Route path="/fire/pokemon/:id" component={Pokemon} />
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/fire/">See catalog</Link>
            <Link to="/fire/historic">See purchase historic</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Fire;
