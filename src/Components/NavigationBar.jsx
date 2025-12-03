import React, { useState } from 'react';
import '../Components/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/img/origiLogo.png" alt="Project Endeous" className="logo-image" />
        </Link>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/projects" className={`nav-link${location.pathname === '/projects' ? ' active-link' : ''}`} onClick={closeMobileMenu}>Purpose</Link>
          <Link to="/gallery" className={`nav-link${location.pathname === '/gallery' ? ' active-link' : ''}`} onClick={closeMobileMenu}>Creations</Link>
          <Link to="/contacts" className={`nav-link${location.pathname === '/contacts' ? ' active-link' : ''}`} onClick={closeMobileMenu}>Contacts</Link>
          <Link to="/mystory" className={`nav-link${location.pathname === '/mystory' ? ' active-link' : ''}`} onClick={closeMobileMenu}>MyStory</Link>
          <Link to="/store" className={`nav-link${location.pathname === '/store' ? ' active-link' : ''}`} onClick={closeMobileMenu}>Store</Link>
        </div>
        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
