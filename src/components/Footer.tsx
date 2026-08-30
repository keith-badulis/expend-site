import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../assets/app-icon.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '2.5px solid rgba(76, 116, 219, 0.35)',
      padding: '4rem 0 2.5rem 0',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <img
                src={appIcon}
                alt="eXpend Icon"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  border: '2px solid var(--accent-color)',
                }}
              />
              <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FFFFFF' }}>
                e<span style={{ color: 'var(--accent-light)' }}>X</span>pend
              </span>
            </div>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.25rem',
              maxWidth: '300px',
            }}>
              Make budgeting a habit with a simple, private personal finance app that lives on your phone.
            </p>
            <div className="bold-pill" style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem' }}>
              <span>🔒 100% Offline • Zero Tracking</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-light)',
              marginBottom: '1.25rem',
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <a href="#features" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#reviews" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#download" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>
                  Download
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-light)',
              marginBottom: '1.25rem',
            }}>
              Get in Touch
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Have questions, ideas, or feedback? Send us an email anytime.
            </p>
            <a
              href="mailto:subdial.expend@outlook.com"
              className="btn-outline"
              style={{
                display: 'inline-flex',
                fontSize: '0.95rem',
                padding: '0.65rem 1.35rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Email Us</span>
            </a>
            <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              subdial.expend@outlook.com
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1.5px solid rgba(76, 116, 219, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
        }}>
          <div>
            © {new Date().getFullYear()} eXpend. Developed by Subdial.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <a href="mailto:subdial.expend@outlook.com" style={{ color: 'var(--text-muted)' }}>subdial.expend@outlook.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
