import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  background: #fff;

  @media (max-width: 900px) {
  }

  h2,
  p {
    color: #111;
    transform: translateY(-12vh);
  }

  p {
    font-size: 15px;
    margin-top: 5px;
  }
`;
