import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    pokemon: string;
    colors: {
      primary: string;
      secundary: string;
      text: string;
      background: string;
    };
  }
}
