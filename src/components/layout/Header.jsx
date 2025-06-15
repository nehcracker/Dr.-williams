import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside or on overlay
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Check if current route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Mobile Menu Toggle */}
            <button 
              className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            {/* Logo - Centered */}
            <Link to="/" className="logo" onClick={closeMenu}>
              <h1>Dr. Williams</h1>
            </Link>
            
            {/* Navigation Menu */}
            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`} role="navigation">
              <ul>
                <li>
                  <Link 
                    to="/" 
                    onClick={closeMenu}
                    className={isActiveRoute('/') ? 'active' : ''}
                    aria-current={isActiveRoute('/') ? 'page' : undefined}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    onClick={closeMenu}
                    className={isActiveRoute('/about') ? 'active' : ''}
                    aria-current={isActiveRoute('/about') ? 'page' : undefined}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/submit-project" 
                    onClick={closeMenu}
                    className={isActiveRoute('/submit-project') ? 'active' : ''}
                    aria-current={isActiveRoute('/submit-project') ? 'page' : undefined}
                  >
                    Submit Project
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="menu-overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;