import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, ModalContainer } from './styles';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/modules/modal/actions';
import fire from 'styles/themes/fire';
import water from 'styles/themes/water';
import nature from 'styles/themes/nature';
import eletro from 'styles/themes/eletro';

interface Props {
  store?: 'fire' | 'water' | 'nature' | 'eletro';
}

const Nav: React.FC<Props> = ({ store }) => {
  const dispatch = useDispatch();
  const handleClickLink = () => {
    dispatch(closeModal());
  };
  if (!store) {
    return (
      <HeaderContainer>
        <Link to="/fire">
          <img src={fire.pokemon.pic} alt="F" />
        </Link>
        <Link to="/water">
          <img src={water.pokemon.pic} alt="W" />
        </Link>
        <Link to="/nature">
          <img src={nature.pokemon.pic} alt="N" />
        </Link>
        <Link to="/eletro">
          <img src={eletro.pokemon.pic} alt="E" />
        </Link>
      </HeaderContainer>
    );
  }
  if (store === 'fire') {
    return (
      <ModalContainer>
        <Link to="/water" onClick={handleClickLink}>
          Water
        </Link>
        <Link to="/nature" onClick={handleClickLink}>
          Nature
        </Link>
        <Link to="/eletro" onClick={handleClickLink}>
          Eletro
        </Link>
      </ModalContainer>
    );
  }
  if (store === 'water') {
    return (
      <ModalContainer>
        <Link to="/fire" onClick={handleClickLink}>
          Fire
        </Link>
        <Link to="/nature" onClick={handleClickLink}>
          Nature
        </Link>
        <Link to="/eletro" onClick={handleClickLink}>
          Eletro
        </Link>
      </ModalContainer>
    );
  }
  if (store === 'nature') {
    return (
      <ModalContainer>
        <Link to="/fire" onClick={handleClickLink}>
          Fire
        </Link>
        <Link to="/water" onClick={handleClickLink}>
          Water
        </Link>
        <Link to="/eletro" onClick={handleClickLink}>
          Eletro
        </Link>
      </ModalContainer>
    );
  }
  if (store === 'eletro') {
    return (
      <ModalContainer>
        <Link to="/fire" onClick={handleClickLink}>
          Fire
        </Link>
        <Link to="/water" onClick={handleClickLink}>
          Water
        </Link>
        <Link to="/nature" onClick={handleClickLink}>
          Nature
        </Link>
      </ModalContainer>
    );
  }
  return null;
};

export default Nav;
