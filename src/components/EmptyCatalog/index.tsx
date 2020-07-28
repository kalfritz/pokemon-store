import React, { useContext } from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';

const EmptyCatalog: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <ReactLoading type="spin" color={colors.primary} />
    </Container>
  );
};

export default EmptyCatalog;
