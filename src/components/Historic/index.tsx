import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';
import { Purchase as IPurchase } from 'store/modules/historic/reducer';
import Purchase from './Purchase';
import EmptyHistoric from 'components/EmptyHistoric';

const Historic: React.FC = () => {
  const { store } = useContext(ThemeContext);
  const historic = useSelector<any, IPurchase[]>(
    (state) => state.historic[store]
  );

  return (
    <Container>
      {historic?.length > 0 ? (
        historic.map((purchase) => <Purchase purchase={purchase} />)
      ) : (
        <EmptyHistoric />
      )}
    </Container>
  );
};

export default Historic;
