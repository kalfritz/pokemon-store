import React, { useState } from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Context from './context/Context';

import GlobalStyle from './styles/global';

import eletro from './styles/themes/eletro';

import Header from './components/Header';
import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<DefaultTheme>(eletro);

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ setTheme }}>
        <div className="App">
          <GlobalStyle />
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </div>
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
