import React, { useEffect, useState, useContext } from 'react';

import { Container } from './styles';
import api from 'services/api';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

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
  const { store } = useContext(ThemeContext);
  const [
    mainPokemonSprites,
    setMainPokemonSprites,
  ] = useState<MainPokemonSprites | null>(null);
  useEffect(() => {
    async function loadPokemonPic() {
      const { data } = await api.get(`pokemon-form/${pokemon.id}`);
      setMainPokemonSprites(data.sprites);
      console.tron.log(data.sprites.front_shiny);
    }
    loadPokemonPic();
  }, [pokemon]);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);
  return (
    <Container>
      <Link to={`/${store}`}>
        <img src={mainPokemonSprites?.front_shiny} alt={pokemon.name} />
      </Link>
    </Container>
  );
};

export default Logo;
