import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Eletro from '../pages/Eletro';
import Fire from '../pages/Fire';
import Nature from '../pages/Nature';
import Water from '../pages/Water';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/eletro" />
    </Route>
    <Route exact path="/historic">
      <Redirect to="/eletro/historic" />
    </Route>
    <Route path="/pokemon/:id">
      <Redirect to="/eletro/pokemon/:id" />
    </Route>

    <Route path="/eletro" component={Eletro} />
    <Route path="/fire" component={Fire} />
    <Route path="/nature" component={Nature} />
    <Route path="/water" component={Water} />
  </Switch>
);

export default Routes;
