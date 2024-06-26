import React from 'react';
import './TopBar.css';

const TopBar = ({ userName }) => {
  return (
    <div className="top-bar">
      <div className="logo">My Personal Receipe Blog</div>
      <div className="user-name">{userName}</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#recipes">Recipes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#blog">Blog</a>
      </nav>
    </div>
  );
};

export default TopBar;
