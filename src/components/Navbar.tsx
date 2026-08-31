import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../assets/app-icon.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo & Name */}
        <Link to="/" onClick={closeMenu} className="header-brand-link">
          <img
            src={appIcon}
            alt="eXpend Icon"
            className="header-brand-icon"
          />
          <div className="header-brand-text-wrap">
            <div className="header-brand-name">
              e<span style={{ color: 'var(--accent-light)' }}>X</span>pend
            </div>
            <div className="header-brand-tagline">
              Make Budgeting a Habit
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {isHome ? (
            <>
              <a href="#features" className="nav-link">Features</a>
              <a href="#why-choose" className="nav-link">Why eXpend</a>
              <a href="#reviews" className="nav-link">Reviews</a>
              <a href="#download" className="nav-link">Download</a>
            </>
          ) : (
            <Link to="/" className="nav-link">← Back to Home</Link>
          )}
          <Link to="/privacy-policy" className="nav-link">Privacy Policy</Link>
          <a href="mailto:hello@subdial.dev" className="nav-link">Contact</a>

          {isHome && (
            <a href="#download" className="btn-primary nav-cta-btn">
              Get App
            </a>
          )}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="mobile-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          {isHome ? (
            <>
              <a href="#features" onClick={closeMenu} className="mobile-nav-link">Features</a>
              <a href="#why-choose" onClick={closeMenu} className="mobile-nav-link">Why eXpend</a>
              <a href="#reviews" onClick={closeMenu} className="mobile-nav-link">Reviews</a>
              <a href="#download" onClick={closeMenu} className="mobile-nav-link">Download</a>
            </>
          ) : (
            <Link to="/" onClick={closeMenu} className="mobile-nav-link">← Back to Home</Link>
          )}
          <Link to="/privacy-policy" onClick={closeMenu} className="mobile-nav-link">Privacy Policy</Link>
          <a href="mailto:hello@subdial.dev" onClick={closeMenu} className="mobile-nav-link">Contact</a>
          {isHome && (
            <a href="#download" onClick={closeMenu} className="btn-primary mobile-cta-btn">
              Get App
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
