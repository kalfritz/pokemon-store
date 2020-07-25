import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';

import { Container } from './styles';

const Header: React.FC = () => {
  const { title, pokemon } = useContext(ThemeContext);
  return (
    <Container>
      <Logo pokemon={pokemon} />
      <SearchBar />
      <Nav />
    </Container>
  );
};

export default Header;
