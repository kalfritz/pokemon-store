import styled from 'styled-components';
import { Switch } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: 8fr 4fr;
  grid-template-areas: 'Main Cart';

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'Main';
  }
`;
export const CartButton = styled.button`
  height: 60px;
  width: 60px;
  background: #000;
  color: #fff;
  position: absolute;
  right: 0;
  top: 40%;
  transform: translate(0, -40%);
  display: none;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover {
    svg {
      transform: scale(1.2);
    }
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;
export const Main = styled.main`
  grid-area: Main;
  position: relative;
  width: 100%;
`;

export const RouteBoxSwitch = styled(Switch)`
  width: 100%;
`;
export const Footer = styled.footer`
  border-top: 1px solid #fff;
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
