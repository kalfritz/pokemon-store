import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  grid-area: Cart;
  background: #999;
  height: 90vh;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  overflow: hidden;

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  @media (max-width: 900px) {
    position: absolute;
    right: 0;
    top: 5vh;
    height: 70vh;
    width: 300px;
    border: 3px solid #111;

    ${(props) =>
      props.hidden
        ? css`
            transform: translateX(100%);
            display: none;
            opacity: 0;
          `
        : css`
            transform: translateX(0%);
            display: block;
            opacity: 1;
          `}
  }
  @media (max-width: 700px) {
  }
  @media (max-width: 500px) {
    width: 260px;
  }
`;

export const Title = styled.div`
  background: #111;
  color: #fff;
  font-size: 14px;
  position: relative;

  height: 10vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-left: 10px;
    }
  }

  button {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
    &:hover {
    }
    @media (min-width: 950px) {
      display: none;
    }
  }
`;
export const CartItems = styled.div`
  height: 74%;
  overflow: auto;

  @media (max-width: 900px) {
  }
`;
export const Item = styled.div`
  padding: 5px;
  height: 10vh;
  background: #fff;
  margin-bottom: 2px;

  @media (max-width: 900px) {
    height: auto;
  }

  &:last-child {
    margin-bottom: 10px;

    @media (max-width: 900px) {
      margin-bottom: 7vh;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ImageAndName = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 5px;

  @media (max-width: 900px) {
    margin: 0 2px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: unset;
  }

  img {
    border: 3px solid ${(props) => props.theme.colors.primary};
    height: 100%;
    width: 10vh;
    margin-right: 10px;
    align-self: stretch;

    @media (max-width: 900px) {
      margin-right: 5px;
    }
  }
  p {
    color: #111;
    font-size: 16px;
  }
`;

export const PriceAndAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
    margin-left: 5px;

    svg {
      &:hover {
        fill: ${(props) => props.theme.colors.primary};
        transform: scale(1.2);
      }
    }
  }
`;

export const Amount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  span {
    margin: 0 2px;
    font-weight: bold;
    @media (max-width: 900px) {
      margin: 0px;
    }
  }
  & > button {
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
    margin: 0 5px 0px 5px;
    transform: translateY(0px);
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      &:hover {
        fill: #ff0000;
        transform: scale(1.2);
      }
    }
  }
`;

export const Total = styled.div`
  width: 100%;
  height: 5vh;
  padding: 0px 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #333;
  color: #fff;

  p {
    font-size: 16px;
  }
`;
export const FinishButton = styled.button`
  height: 10vh;
  width: 100%;
  background: #111;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  border: 0;
  border-top: 1px solid #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
