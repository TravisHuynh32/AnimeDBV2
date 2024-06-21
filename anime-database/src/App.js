import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import UserAnimeList from './components/UserAnimeList';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'; // Import your Header component
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/*<SearchBar />*/}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-animes" element={<UserAnimeList />} />
          <Route path="/" element={<AnimeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
