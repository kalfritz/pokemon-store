import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  height: 10vh;
`;
