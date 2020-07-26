import styled from 'styled-components';

export const Container = styled.nav`
  margin-right: 30px;
  a {
    margin-left: 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;
