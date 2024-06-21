import React from 'react';
import '../styles/index.css'; // Import index.css from the styles folder

function AnimeItem({ anime }) {
  //const handleAddToUser = () => {
    // Implement the logic to add anime to user list
  //};

  return (
    <li className="anime-item" style={{ listStyleType: 'none' }}> {/* Apply anime-item class and remove bullet points */}
      <h2>{anime.title}</h2>
      <p>{anime.rating}</p>
      
    </li>
  );
}

export default AnimeItem;
