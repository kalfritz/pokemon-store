import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import api from 'services/api';

interface Props {
  pokemon: {
    id: number;
    name: string;
  };
}

interface MainPokemonSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

const Logo: React.FC<Props> = ({ pokemon }) => {
  const [
    mainPokemonSprites,
    setMainPokemonSprites,
  ] = useState<MainPokemonSprites | null>(null);
  useEffect(() => {
    async function loadPokemonPic() {
      const { data } = await api.get(`pokemon-form/${pokemon.id}`);
      setMainPokemonSprites(data.sprites);
    }
    loadPokemonPic();
  }, [pokemon]);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  return (
    <Container>
      <img src={mainPokemonSprites?.front_shiny} alt={pokemon.name} />
    </Container>
  );
};

export default Logo;
