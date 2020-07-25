import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Eletro from '../pages/Eletro';
import Fire from '../pages/Fire';
import Nature from '../pages/Nature';
import Water from '../pages/Water';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Eletro} />

    <Route path="/eletro" component={Eletro} />
    <Route path="/fire" component={Fire} />
    <Route path="/nature" component={Nature} />
    <Route path="/water" component={Water} />
  </Switch>
);

export default Routes;
