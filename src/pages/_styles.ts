import styled from 'styled-components';
import { Switch } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-areas: 'Main Cart';
`;
export const Main = styled.main`
  grid-area: Main;
`;

export const RouteBoxSwitch = styled(Switch)`
  background: lightblue;
`;
export const Footer = styled.footer`
  height: 10vh;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};

  nav {
    display: flex;
    justify-content: space-between;
    width: 50%;
    min-width: 300px;
    margin: auto;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 600;

      &:hover {
        color: ${(props) => props.theme.colors.textHover};
      }
    }
  }
`;
