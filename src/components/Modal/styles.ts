import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  display: ${(props): any => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  position: relative;
  width: 82vw;
  height: 82vh;
  background: #fff;
  border: 15px solid ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 45px;

  & > div {
    text-align: center;
    h3 {
      margin-bottom: 15px;
      font-size: 30px;
    }
    p {
      margin-bottom: 5px;
      font-size: 26px;
    }

    span {
      font-size: 26px;
      color: ${darken(0.1, '#00ff00')};
    }
  }

  nav {
    text-align: center;
    div {
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      color: #222;
      &:hover {
        color: ${(props) => darken(0.1, props.theme.colors.primary)};
      }
      font-weight: bold;
      font-size: 20px;
    }
    h2 {
      margin: 30px 0px 15px 0px;
      color: ${(props) => darken(0.3, props.theme.colors.primary)};
    }
  }
  button {
    border: 0;
    outline: 0;
    position: absolute;
    top: 10px;
    right: 20px;
    background: transparent;
    font-size: 30px;
    cursor: pointer;
  }
`;
