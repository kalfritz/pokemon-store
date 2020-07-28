import React, { useMemo } from 'react';

import { Container, ItemList, Item } from './styles';
import { Purchase as IPurchase } from 'store/modules/historic/reducer';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

interface Props {
  purchase: IPurchase;
}

const Purchase: React.FC<Props> = ({ purchase }) => {
  const date = useMemo(() => {
    return format(new Date(purchase.purchaseDate), "dd' de 'MMMM", {
      locale: pt,
    });
  }, [purchase.purchaseDate]);
  const hour = useMemo(() => {
    return format(new Date(purchase.purchaseDate), "HH':'mm", {
      locale: pt,
    });
  }, [purchase.purchaseDate]);
  return (
    <Container>
      <h2>
        {date} -<span> {hour}</span>
      </h2>
      <ItemList>
        {purchase?.purchasePokemonList?.map((item) => (
          <Item>
            <div>
              <img src={item.sprites.front_default} alt={item.name} />
              <p>
                {item.name}
                <span>(x{item.amount})</span>
              </p>
            </div>
            <span>R${item.price}</span>
          </Item>
        ))}
      </ItemList>
      <footer>
        <p>
          Total <span>R${purchase.purchaseTotalPrice}</span>
        </p>
      </footer>
    </Container>
  );
};

export default Purchase;
