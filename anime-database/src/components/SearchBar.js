import React, { useState } from 'react';
import api from '../services/api';
import '../styles/index.css';

function SearchBar({ setAnimes }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    api.get(`/animes/search?query=${query}`).then(response => {
      setAnimes(response.data);
    }).catch(error => {
      console.error('Error searching anime:', error);
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input" 
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button> {/* Apply search-button class */}
    </div>
  );
}

export default SearchBar;
