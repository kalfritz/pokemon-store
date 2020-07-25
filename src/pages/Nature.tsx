import React, { useEffect, useContext } from 'react';
import { Route, Link } from 'react-router-dom';

import Cart from '../components/Cart';

import Catalog from '../components/Catalog';
import Historic from '../components/Historic';
import Pokemon from '../components/Pokemon';

import Context from 'context/Context';
import nature from '../styles/themes/nature';

import { Container, RouteBoxSwitch, Main, Footer } from './_styles';

const Nature: React.FC = () => {
  const { setTheme } = useContext(Context);

  useEffect(() => {
    setTheme(nature);
  }, []);

  return (
    <Container>
      <Main>
        <RouteBoxSwitch>
          <Route exact path="/nature/" component={Catalog} />
          <Route path="/nature/historic" component={Historic} />
          <Route path="/nature/pokemon/:id" component={Pokemon} />
        </RouteBoxSwitch>
        <Footer>
          <nav>
            <Link to="/nature/">See catalog</Link>
            <Link to="/nature/historic">See purchase historic</Link>
          </nav>
        </Footer>
      </Main>
      <Cart />
    </Container>
  );
};

export default Nature;
