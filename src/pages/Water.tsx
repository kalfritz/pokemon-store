import React, { useEffect, useContext } from 'react';
import { Route, Link } from 'react-router-dom';

import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import Context from 'context/Context';
import water from '../styles/themes/water';

import { Container, RouteBoxSwitch, Main, Footer } from './_styles';

const Water: React.FC = () => {
  const { setTheme } = useContext(Context);

  useEffect(() => {
    console.log('water');
    setTheme(water);
  }, []);

  return (
    <Container>
      <Main>
        <RouteBoxSwitch>
          <Route exact path="/water/" component={Catalog} />
          <Route path="/water/historic" component={Historic} />
          <Route path="/water/pokemon/:id" component={Pokemon} />
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/water">See catalog</Link>
            <Link to="/water/historic">See purchase historic</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Water;
