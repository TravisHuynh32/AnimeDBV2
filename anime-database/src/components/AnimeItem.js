import React from 'react';
import api from '../services/api';

function AnimeItem({ anime }) {
  const handleAddToUser = () => {
    // Implement the logic to add anime to user list
  };

  return (
    <li>
      <h2>{anime.title}</h2>
      <p>{anime.genres}</p>
      <p>{anime.rating}</p>
      <p>{anime.synopsis}</p>
      <button onClick={handleAddToUser}>Add to My List</button>
    </li>
  );
}

export default AnimeItem;
