import React, { useState } from 'react';
import api from '../services/api';

function SearchBar({ setAnimes }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    api.get(`/animes?query=${query}`).then(response => {
      setAnimes(response.data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
