import React from 'react';
import appStoreBadgeSvg from '../assets/download-app-store-badge.svg';
import googlePlayBadgeSvg from '../assets/download-google-play-badge.svg';

interface StoreBadgesProps {
  className?: string;
}

export const GooglePlayBadge: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="https://play.google.com/store/apps/details?id=com.subdial.expend"
    target="_blank"
    rel="noopener noreferrer"
    className={`official-store-badge ${className || ''}`}
    aria-label="Get it on Google Play"
  >
    <img
      src={googlePlayBadgeSvg}
      alt="Get it on Google Play"
      className="official-badge-img"
    />
  </a>
);

export const AppStoreBadge: React.FC<{ className?: string }> = ({ className }) => (
  <a
    href="https://apps.apple.com/app/expend/id6739958047"
    target="_blank"
    rel="noopener noreferrer"
    className={`official-store-badge ${className || ''}`}
    aria-label="Download on the App Store"
  >
    <img
      src={appStoreBadgeSvg}
      alt="Download on the App Store"
      className="official-badge-img"
    />
  </a>
);

export const StoreBadges: React.FC<StoreBadgesProps> = ({ className }) => {
  return (
    <div className={`store-badges-container ${className || ''}`}>
      <GooglePlayBadge />
      <AppStoreBadge />
    </div>
  );
};
