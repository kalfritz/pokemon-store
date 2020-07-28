import React from 'react';

import { Container } from './styles';

const EmptyCart: React.FC = () => {
  return (
    <Container>
      <h2>Seu carrinho está vazio.</h2>
      <p>Adicione items ao carrinho</p>
    </Container>
  );
};

export default EmptyCart;
