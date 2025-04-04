import React from 'react';
import './Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>RF</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;