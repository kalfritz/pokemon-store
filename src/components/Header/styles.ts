import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid #fff;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  align-self: stretch;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1500px) {
    max-width: 1300px;
  }
  @media (min-width: 2000px) {
    max-width: 1800px;
  }
`;
