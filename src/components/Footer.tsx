import React from 'react';
import { Link } from 'react-router-dom';
import appLogoImg from '../assets/app-logo.png';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.simpleFooter}>
      <div className="container">
        <div className={styles.simpleFooterContent}>
          {/* Centered Grayscale Logo */}
          <div className={styles.footerLogoWrap}>
            <img
              src={appLogoImg}
              alt="eXpend Logo"
              className={styles.footerGrayscaleLogo}
            />
            <span className={styles.footerBrandText}>eXpend</span>
          </div>

          {/* Only 2 Navigation Options: Privacy Policy and Contact Me */}
          <div className={styles.footerNavLinks}>
            <Link to="/privacy-policy" className={styles.footerLink}>
              Privacy Policy
            </Link>
            <span className={styles.footerLinkDivider}>•</span>
            <a href="mailto:hello@subdial.dev" className={styles.footerLink}>
              Contact Me
            </a>
          </div>

          {/* Muted Copyright */}
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} eXpend. Developed by subdial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
