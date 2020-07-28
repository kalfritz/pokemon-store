import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    store: string;
    pokemon: {
      id: number;
      name: string;
      pic: string;
    };
    colors: {
      primary: string;
      secundary: string;
      text: string;
      textHover: string;
      background: string;
    };
  }
}
