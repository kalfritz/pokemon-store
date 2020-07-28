import styled from 'styled-components';
import { lighten } from 'polished';

export const PokemonItems = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow: auto;
  border-top: 1px solid #fff;

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
    grid-gap: 15px;
    padding: 15px;
  }
  @media (max-width: 400px) {
    grid-gap: 10px;
    padding: 10px;
  }
`;

export const Container = styled.div`
  height: 80vh;
  overflow: auto;
  background: #eee;
`;

export const PokemonItem = styled.div`
  background: #eee;
  border-bottom: 0;
  border-radius: 5px;
  &:last-child {
    margin-bottom: 20px;
  }

  & > div {
    background: #fff;
    padding: 20px;
    border: 1px solid #999;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 15vh;
      margin-bottom: 15px;
      background: #fcfcfc;
      background: #ffffff;

      @media (max-width: 550px) {
        height: 12vh;
      }
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
    border-top: 0px solid #ccc;

    & > div {
      background: #333;
      width: 25%;
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
      width: 75%;
      cursor: pointer;
      font-size: 16px;
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.textHover};
      font-weight: bold;
      border: 0;
      outline: 0;
      padding: 10px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      svg {
        fill: ${(props) => props.theme.colors.text};
        margin-left: 5px;
      }

      &:hover {
        background: ${(props) => lighten(0.02, props.theme.colors.primary)};
      }
    }
  }
`;
export const ZeroPokemonFound = styled.div``;
