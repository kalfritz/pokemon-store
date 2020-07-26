import styled from 'styled-components';

export const Container = styled.nav`
  margin-right: 30px;
  a {
    margin-left: 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    font-size: 16px;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }

    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
`;
