import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  background: #fff;
  border-radius: 10px;

  input {
    padding: 10px 15px;
    font-size: 18px;
    width: 30vw;
    border: 0;
    outline: 0;
    border-radius: 15px;

    @media (max-width: 950px) {
      width: 28vw;
      padding: 10px 10px;
    }

    @media (max-width: 550px) {
      font-size: 16px;
    }
    @media (max-width: 400px) {
      font-size: 15px;
      width: 27vw;
    }

    &:focus {
      border: 0;
    }
  }
  button {
    padding: 5px 8px;
    display: flex;
    align-items: center;
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;

    @media (max-width: 550px) {
      padding: 5px;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;
