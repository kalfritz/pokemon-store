import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
  border: 1px solid #666;

  h2 {
    font-size: 26px;

    span {
      color: #333;
    }
  }
  footer {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;

    p {
      font-size: 26px;
      font-weight: bold;

      span {
        font-size: 24px;
        margin-left: 5px;
        font-weight: normal;
      }
    }
  }
`;
export const ItemList = styled.div`
  margin: 20px 0px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  border: 1px solid #666;
  margin-bottom: 15px;
  @media (max-width: 650px) {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
  &:last-child {
    margin-bottom: 0px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: unset;
      padding: 15px;
    }
    img {
      width: 75px;
      height: 75px;
      margin-right: 15px;
      border: 2px solid ${(props) => props.theme.colors.primary};
      @media (max-width: 650px) {
        border: 0;
      }
    }
    p {
      color: #111;
      font-size: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }
  }
  span {
    margin-right: 15px;
    font-size: 16px;
  }
`;
