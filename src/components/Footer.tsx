import React from 'react';
import { Link } from 'react-router-dom';
import appLogoImg from '../assets/app-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="simple-footer">
      <div className="container">
        <div className="simple-footer-content">
          {/* Centered Grayscale Logo */}
          <div className="footer-logo-wrap">
            <img
              src={appLogoImg}
              alt="eXpend Logo"
              className="footer-grayscale-logo"
            />
            <span className="footer-brand-text">eXpend</span>
          </div>

          {/* Only 2 Navigation Options: Privacy Policy and Contact Me */}
          <div className="footer-nav-links">
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
            <span className="footer-link-divider">•</span>
            <a href="mailto:subdial.expend@outlook.com" className="footer-link">
              Contact Me
            </a>
          </div>

          {/* Muted Copyright */}
          <p className="footer-copyright">
            © {new Date().getFullYear()} eXpend. Developed by subdial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
