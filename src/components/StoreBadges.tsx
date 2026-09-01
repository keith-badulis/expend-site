import React from 'react';
import appStoreBadgeSvg from '../assets/download-app-store-badge.svg';
import googlePlayBadgeSvg from '../assets/download-google-play-badge.svg';
import styles from './StoreBadges.module.css';

interface StoreBadgesProps {
  className?: string;
}

export const GooglePlayBadge: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.subdial.expend&referrer=utm_source%3Dwebsite"
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.badge} ${className || ''}`}
    aria-label="Get it on Google Play"
  >
    <img
      src={googlePlayBadgeSvg}
      alt="Get it on Google Play"
      className={styles.badgeImg}
    />
  </a>
);

export const AppStoreBadge: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="https://apps.apple.com/app/apple-store/id6747117634?pt=127899556&ct=website&mt=8"
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.badge} ${className || ''}`}
    aria-label="Download on the App Store"
  >
    <img
      src={appStoreBadgeSvg}
      alt="Download on the App Store"
      className={styles.badgeImg}
    />
  </a>
);

export const StoreBadges: React.FC<StoreBadgesProps> = ({ className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <GooglePlayBadge />
      <AppStoreBadge />
    </div>
  );
};

export default StoreBadges;
