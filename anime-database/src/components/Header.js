import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">AnimeDBV2</div>
    <nav className="nav-links">
      <a href="/" className="nav-link">Home</a>
      <a href="/login" className="nav-link">Login</a>
      <a href="/register" className="nav-link">Register</a>
    </nav>
  </header>
);

export default Header;
