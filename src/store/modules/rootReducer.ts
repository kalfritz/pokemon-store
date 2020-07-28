import { combineReducers } from 'redux';

import modal from './modal/reducer';
import cart from './cart/reducer';
import catalog from './catalog/reducer';
import historic from './historic/reducer';

export default combineReducers({ modal, cart, catalog, historic });
