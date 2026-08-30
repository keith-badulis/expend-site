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
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(31, 42, 71, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '2.5px solid rgba(76, 116, 219, 0.35)',
      padding: '0.9rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Brand */}
        <Link to="/" onClick={closeMenu} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          textDecoration: 'none',
        }}>
          <img
            src={appIcon}
            alt="eXpend Icon"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: '2px solid var(--accent-color)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
          />
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}>
              e<span style={{ color: 'var(--accent-light)' }}>X</span>pend
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.04em',
            }}>
              Make Budgeting a Habit
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          {isHome ? (
            <>
              <a href="#features" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>Features</a>
              <a href="#reviews" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>Reviews</a>
              <a href="#download" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>Download</a>
            </>
          ) : (
            <Link to="/" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>← Back to Home</Link>
          )}
          <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>Privacy Policy</Link>
          <a href="mailto:subdial.expend@outlook.com" style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>Contact</a>

          {isHome && (
            <a href="#download" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}>
              Get App
            </a>
          )}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '2.5px solid var(--accent-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {isHome ? (
            <>
              <a href="#features" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Features</a>
              <a href="#reviews" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Reviews</a>
              <a href="#download" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Download</a>
            </>
          ) : (
            <Link to="/" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>← Back to Home</Link>
          )}
          <Link to="/privacy-policy" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Privacy Policy</Link>
          <a href="mailto:subdial.expend@outlook.com" onClick={closeMenu} style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Contact</a>
          {isHome && (
            <a href="#download" onClick={closeMenu} className="btn-primary" style={{ textAlign: 'center' }}>
              Get App
            </a>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
