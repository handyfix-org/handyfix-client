import React, { useState } from 'react';
import "./Header.scss";
import Logo from "../../assets/icons/handfix.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log('isMobileMenuOpen:', isMobileMenuOpen);
  };
  

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Product</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Sign in</a>
            </li>
          </ul>
        </div>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
