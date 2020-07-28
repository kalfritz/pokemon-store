import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig.js';

import { store, persistor } from './store';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Context from './context/Context';

import GlobalStyle from './styles/global';

import eletro from './styles/themes/eletro';

import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(eletro);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Context.Provider value={{ setTheme }}>
            <div className="App">
              <GlobalStyle />
              <BrowserRouter>
                <Header />
                <Routes />
                <Modal />
              </BrowserRouter>
            </div>
          </Context.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
