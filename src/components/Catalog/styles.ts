import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 80vh;
  background: #eee;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow: auto;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PokemonItem = styled.div`
  background: #fff;
  border: 1px solid #999;
  border-bottom: 0;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 20px;
  }

  & > div {
    padding: 20px;

    div {
      height: 15vh;
      background: #333;
      margin-bottom: 15px;
    }
    p {
      margin: 5px 0px;
      font-size: 18px;
    }
    span {
      font-size: 16px;
    }
  }

  footer {
    background: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: row;
    border-top: 1px solid #ccc;

    & > div {
      background: #333;
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0px;

      span {
        color: #fff;
        font-weight: bold;
      }
    }

    & > button {
      width: 80%;
      cursor: pointer;
      font-size: 16px;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.textHover};
      font-weight: bold;
      border: 0;
      outline: 0;
      padding: 10px 0px;

      &:hover {
        background: ${(props) => lighten(0.02, props.theme.colors.primary)};
      }
    }
  }
`;
