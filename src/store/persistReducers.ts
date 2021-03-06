import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'pokeStore',
      storage,
      whitelist: ['cart', 'catalog', 'historic'],
    },
    reducers
  );
  return persistedReducer;
};
