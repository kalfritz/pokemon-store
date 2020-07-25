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
  justify-content: center;
  align-items: center;
  background: green;

  nav {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
`;
