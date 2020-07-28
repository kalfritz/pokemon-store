import React from 'react';
import { Container, Box } from './styles';
import { Link } from 'react-router-dom';
import Nav from 'components/Header/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from 'store/modules/modal/actions';

type Pokemon = {
  id: number;
  name: string;
  sprites: Sprite;
  price: number;
  amount: number;
};

type Sprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const state: any = useSelector((state): any => state);
  const { status, store, moneyBack, pokemonList } = state.modal;
  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    <Container hidden={!status}>
      <Box>
        <div>
          <h3>Obrigado!!!</h3>
          <p>Você ganhou de volta</p>
          <span>R${moneyBack}0</span>
        </div>
        <nav>
          <div>
            {pokemonList?.length > 0 &&
              pokemonList.map((poke: Pokemon) => (
                <img
                  key={poke.id}
                  src={poke.sprites.front_default}
                  alt={poke.name}
                />
              ))}
          </div>
          <Link to={`${store}/historic`} onClick={handleClick}>
            Ver histórico
          </Link>
          <h2>Conheça também nossas empresas parceiras:</h2>
          <Nav store={store} />
        </nav>
        <button onClick={handleClick}>x</button>
      </Box>
    </Container>
  );
};

export default Modal;
