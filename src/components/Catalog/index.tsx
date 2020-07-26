import React, { useEffect } from 'react';

import { Container, PokemonItem } from './styles';

const Catalog: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((pokemon, index) => (
        <PokemonItem key={index}>
          <div>
            <div />
            <p>Bulbasaur</p>
            <span>R$2,99</span>
          </div>
          <footer>
            <div>
              <span>0</span>
            </div>
            <button>Add to Cart</button>
          </footer>
        </PokemonItem>
      ))}
    </Container>
  );
};

export default Catalog;
