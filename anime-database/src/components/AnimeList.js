import React, { useState, useEffect } from 'react';
import AnimeItem from './AnimeItem'; // Import the AnimeItem component
import '../styles/index.css'; // Import index.css from the styles folder

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/anime'); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAnimes(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div className="anime-list-container">
      {animes.map((anime) => (
        <AnimeItem key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
