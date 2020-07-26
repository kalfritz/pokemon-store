import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    pokemon: {
      id: number;
      name: string;
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
