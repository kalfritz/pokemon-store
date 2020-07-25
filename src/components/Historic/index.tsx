import React, { useEffect } from 'react';

import { Container } from './styles';

interface Props {
  store: string;
}

const Historic: React.FC<Props> = ({ store }) => {
  useEffect(() => {
    console.log(store);
  }, [store]);
  return <Container>Historic</Container>;
};

export default Historic;
