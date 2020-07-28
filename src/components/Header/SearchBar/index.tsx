import React, { useState, useContext } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';
import { useDispatch } from 'react-redux';
import { updateQuery } from 'store/modules/catalog/actions';
import { ThemeContext } from 'styled-components';

const SearchBar: React.FC = () => {
  const { store } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleSearchInput = (e: any) => {
    setInputValue(e.target.value);
    dispatch(updateQuery({ store, query: e.target.value }));
  };
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={handleSearchInput}
        value={inputValue}
      />
      <button type="button">
        <MdSearch size={18} color="#333" />
      </button>
    </Container>
  );
};

export default SearchBar;
