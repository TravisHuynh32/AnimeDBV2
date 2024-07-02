import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { UserContext } from './UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <div className="logo">AnimeDBV2</div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        {user ? (
          <span className="nav-link">Welcome, {user.username}</span>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
