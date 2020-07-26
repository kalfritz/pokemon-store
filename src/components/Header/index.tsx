import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';

import { Container, Wrapper } from './styles';

const Header: React.FC = () => {
  const { title, pokemon } = useContext(ThemeContext);
  return (
    <Container>
      <Wrapper>
        <div>
          <Logo pokemon={pokemon} />
          <SearchBar />
        </div>
        <Nav />
      </Wrapper>
    </Container>
  );
};

export default Header;
