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
    background: transparent;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
