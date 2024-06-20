import React, { useEffect, useState } from 'react';
import AnimeItem from './AnimeItem';
import SearchBar from './SearchBar';
import api from '../services/api';
import '../styles/index.css';

function AnimeList() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api.get('/animes').then(response => {
      setAnimes(response.data);
    });
  }, []);

  return (
    <div className="anime-list"> {/* Apply anime-list class */}
      <SearchBar setAnimes={setAnimes} />
      <ul>
        {animes.map(anime => (
          <AnimeItem key={anime.id} anime={anime} />
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
