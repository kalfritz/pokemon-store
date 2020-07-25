import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

interface ContextI {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

const Context = createContext<ContextI>({
  setTheme: () => {},
});

export default Context;
