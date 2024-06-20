import React from 'react';
import '../styles/index.css';

const Header = () => (
  <header className="header">
    <div className="logo">AnimeDB</div>
    <nav className="nav-links">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  </header>
);

export default Header;
