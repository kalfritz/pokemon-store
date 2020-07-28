import { all } from 'redux-saga/effects';

import catalog from './catalog/sagas';

export default function* rootSaga() {
  return yield all([catalog]);
}
