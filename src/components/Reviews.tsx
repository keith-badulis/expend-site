import React from 'react';
import { StarFilledIcon, StarOutlineIcon } from './icons';
import styles from './Reviews.module.css';

interface Review {
  name: string;
  fullName: string;
  role: string;
  rating: number;
  highlight: string;
  comment: string;
  store: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    name: 'Ibrahim H.',
    fullName: 'Ibrahim Hassan',
    role: 'Verified Google Play User',
    rating: 5,
    highlight: "Best expense tracking and budgeting app I've found.",
    comment:
      "I've been using this app for almost a year, and it exceeded my expectations. The interface is modern, clean, and easy to use with plenty of features without feeling complicated. The lifetime premium option is affordable and worth every riyal. Great work by the developer!",
    store: 'Google Play',
    avatarColor: '#4C74DB', // blue
  },
  {
    name: 'Susie C.',
    fullName: 'Susie Cox',
    role: 'Verified Google Play User',
    rating: 5,
    highlight: 'The choice of icons and colors is great!',
    comment:
      'I LOVE this app! The choice of icons and colors is great. The app is beautifully designed and easy to use. Thank you to the developer for making such a beautiful money tracking tool.',
    store: 'Google Play',
    avatarColor: '#0BB190', // green
  },
  {
    name: 'Jurij M.',
    fullName: 'Jurij Malovrh',
    role: 'Verified Google Play User',
    rating: 5,
    highlight: 'Design is just soo clean — bought lifetime premium!',
    comment:
      'This is honestly the best app for tracking expenses. I tried a bunch of others and always stopped tracking, but here the design is just soo clean, I actually love it! After two months I decided this is it and bought premium. Huge thank you for making it a ONE-TIME purchase!',
    store: 'Google Play',
    avatarColor: '#9957BD', // purple
  },
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className={`section ${styles.reviewsSection}`} style={{ position: 'relative' }}>
      {/* Single subtle geometric shape anchored to top-left edge */}
      <div
        className="edge-shape square"
        style={{
          width: '200px',
          height: '200px',
          top: '-60px',
          left: '-60px',
          opacity: 0.2,
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-subtitle">
            <StarOutlineIcon size={16} color="var(--accent-light)" />
            <span>User Reviews</span>
          </div>

          <h2 className="section-title" style={{ fontWeight: 700 }}>
            Loved by People Who Value <br />
            <span style={{ color: 'var(--accent-light)' }}>Simplicity & Design</span>
          </h2>

          <p className="section-description" style={{ maxWidth: '580px', margin: '0 auto' }}>
            Real feedback from verified budgeters managing their daily expenses with eXpend.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className={styles.reviewsCardsGrid}>
          {reviews.map((rev, idx) => (
            <div key={idx} className={styles.cleanReviewCard}>
              <div>
                {/* Top Row: 5 Stars + Google Play Pill */}
                <div className={styles.reviewTopRow}>
                  <div className={styles.reviewStarsWrap}>
                    {Array.from({ length: rev.rating }).map((_, sIdx) => (
                      <StarFilledIcon
                        key={sIdx}
                        size={17}
                        color="#EAAF3B"
                        strokeWidth="2px"
                      />
                    ))}
                  </div>

                  <span className={styles.reviewStorePill}>
                    {rev.store}
                  </span>
                </div>

                {/* Highlight Headline */}
                <h3 className={styles.reviewHighlightText}>
                  "{rev.highlight}"
                </h3>

                {/* Comment Body */}
                <p className={styles.reviewCommentText}>
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className={styles.reviewAuthorFooter}>
                <div
                  className={styles.reviewAuthorAvatar}
                  style={{ backgroundColor: `${rev.avatarColor}20`, color: rev.avatarColor, borderColor: `${rev.avatarColor}60` }}
                >
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.reviewAuthorName}>
                    {rev.name}
                  </div>
                  <div className={styles.reviewAuthorRole}>
                    {rev.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
