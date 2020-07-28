import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  @media (max-width: 550px) {
    font-size: 15px;
    margin-right: 0px;
  }
  a {
    margin-left: 0px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    font-size: 16px;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 900px) {
        width: 80px;
        height: 100px;
      }
      @media (max-width: 750px) {
        width: 70px;
        height: 90px;
      }
      @media (max-width: 650px) {
        width: 60px;
        height: 80px;
      }
      @media (max-width: 550px) {
        width: 55px;
        height: 75px;
      }
      @media (max-width: 500px) {
        width: 50px;
        height: 70px;
      }
      @media (max-width: 450px) {
        width: 45px;
        height: 65px;
      }
      @media (max-width: 375px) {
        width: 40px;
        height: 60px;
      }
      @media (max-width: 350px) {
        width: 38px;
        height: 58px;
      }
    }
  }
`;
export const ModalContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    margin-left: 15px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
    font-size: 16px;

    &:hover {
      color: ${(props) => props.theme.colors.textHover};
    }
  }
`;
