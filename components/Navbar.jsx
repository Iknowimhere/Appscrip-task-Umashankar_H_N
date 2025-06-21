'use client';
import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faHeart, faShoppingBag, faUser, faBars, faTimes);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand (logo + text) */}
        <div className="navbar-left">
          <img src="metta-muse-logo.svg" alt="Metta Muse Logo" className="navbar-logo" />
        </div>
        
        <div className="navbar-center-logo">
          <span className="navbar-text-logo"><strong>LOGO</strong></span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Right Icons */}
        <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </div>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHeart} className="icon" />
          </div>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          </div>
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <select className="lang-select">
            <option>ENG</option>
            <option>FR</option>
            <option>ES</option>
          </select>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  );
}
