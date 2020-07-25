import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Nav: React.FC = () => (
  <Container>
    <Link to="/fire">Fire</Link>
    <Link to="/water">Water</Link>
    <Link to="/nature">Nature</Link>
    <Link to="/eletro">Eletro</Link>
  </Container>
);

export default Nav;
