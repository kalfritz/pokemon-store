import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  const handleClickSearch = () => {};
  const handleSearchInput = () => {};
  return (
    <Container>
      <input type="text" placeholder="Search" onChange={handleSearchInput} />
      <button type="button" onClick={handleClickSearch}>
        <MdSearch size={18} color="#333" />
      </button>
    </Container>
  );
};

export default SearchBar;
