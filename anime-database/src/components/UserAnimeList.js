import React, { useEffect, useState } from 'react';
import api from '../services/api';

function UserAnimeList() {
  const [userAnimes, setUserAnimes] = useState([]);

  useEffect(() => {
    // Fetch user-specific animes
    api.get('/user_animes/user/1').then(response => {
      setUserAnimes(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    // Implement the logic to delete anime from user list
  };

  return (
    <div>
      <h1>My Anime List</h1>
      <ul>
        {userAnimes.map(anime => (
          <li key={anime.id}>
            <h2>{anime.title}</h2>
            <button onClick={() => handleDelete(anime.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAnimeList;
