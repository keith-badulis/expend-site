import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import appIcon from '../assets/app-icon.png';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Brand Logo & Name */}
        <Link to="/" onClick={closeMenu} className={styles.headerBrandLink}>
          <img
            src={appIcon}
            alt="eXpend Icon"
            className={styles.headerBrandIcon}
          />
          <div className={styles.headerBrandTextWrap}>
            <div className={styles.headerBrandName}>
              e<span style={{ color: 'var(--accent-light)' }}>X</span>pend
            </div>
            <div className={styles.headerBrandTagline}>
              Make Budgeting a Habit
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {isHome ? (
            <>
              <a href="#features" className={styles.navLink}>Features</a>
              <a href="#why-choose" className={styles.navLink}>Why eXpend</a>
              <a href="#reviews" className={styles.navLink}>Reviews</a>
              <a href="#download" className={styles.navLink}>Download</a>
            </>
          ) : (
            <Link to="/" className={styles.navLink}>← Back to Home</Link>
          )}
          <Link to="/privacy-policy" className={styles.navLink}>Privacy Policy</Link>
          <a href="mailto:hello@subdial.dev" className={styles.navLink}>Contact</a>

          {isHome && (
            <a href="#download" className={`btn-primary ${styles.navCtaBtn}`}>
              Get App
            </a>
          )}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className={styles.mobileToggle}
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
        <div className={styles.mobileDropdownMenu}>
          {isHome ? (
            <>
              <a href="#features" onClick={closeMenu} className={styles.mobileNavLink}>Features</a>
              <a href="#why-choose" onClick={closeMenu} className={styles.mobileNavLink}>Why eXpend</a>
              <a href="#reviews" onClick={closeMenu} className={styles.mobileNavLink}>Reviews</a>
              <a href="#download" onClick={closeMenu} className={styles.mobileNavLink}>Download</a>
            </>
          ) : (
            <Link to="/" onClick={closeMenu} className={styles.mobileNavLink}>← Back to Home</Link>
          )}
          <Link to="/privacy-policy" onClick={closeMenu} className={styles.mobileNavLink}>Privacy Policy</Link>
          <a href="mailto:hello@subdial.dev" onClick={closeMenu} className={styles.mobileNavLink}>Contact</a>
          {isHome && (
            <a href="#download" onClick={closeMenu} className={`btn-primary ${styles.mobileCtaBtn}`}>
              Get App
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
