import React from 'react';

import { Container } from './styles';

const EmptyHistoric: React.FC = () => {
  return (
    <Container>
      <h2>Você ainda não fez nenhuma compra.</h2>
      <p>Suas compras aparecerão aqui</p>
    </Container>
  );
};

export default EmptyHistoric;
