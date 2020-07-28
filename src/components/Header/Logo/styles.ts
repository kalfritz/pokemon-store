import styled from 'styled-components';

export const Container = styled.div`
  img {
    @media (max-width: 750px) {
      width: 90px;
      height: 100px;
    }
    @media (max-width: 550px) {
      width: 80px;
      height: 80px;
    }
    @media (max-width: 450px) {
      width: 70px;
      height: 70px;
    }
    @media (max-width: 410px) {
      width: 60px;
      height: 60px;
    }
  }
`;
