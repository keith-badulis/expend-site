import React from 'react';
import { StarFilledIcon } from './icons';

interface Review {
  name: string;
  role: string;
  rating: number;
  highlight: string;
  comment: string;
  store: string;
}

const reviews: Review[] = [
  {
    name: 'Marcus K.',
    role: 'Everyday Budgeter',
    rating: 5,
    highlight: 'Clean, fast, and completely offline.',
    comment:
      'I love that my financial records stay on my phone. No logins, no ads, and no weird syncing errors. It just works.',
    store: 'Google Play',
  },
  {
    name: 'Elena R.',
    role: 'Freelancer',
    rating: 5,
    highlight: 'Replaced my expensive paid app.',
    comment:
      'I was tired of paying monthly subscriptions just to track my own money. eXpend has all the features I need in a great dark interface.',
    store: 'App Store',
  },
  {
    name: 'David L.',
    role: 'Student',
    rating: 5,
    highlight: 'The 1-tap templates are a lifesaver.',
    comment:
      'Logging coffee or lunch takes two seconds with the templates. Debts and budget tracking keep my spending stress-free.',
    store: 'Google Play',
  },
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section" style={{ position: 'relative' }}>
      {/* Single shape anchored to top-left edge */}
      <div
        className="edge-shape square"
        style={{
          width: '220px',
          height: '220px',
          top: '-70px',
          left: '-70px',
        }}
      />

      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Reviews</div>
          <h2 className="section-title">
            Loved by People Who Value <br />
            <span style={{ color: 'var(--accent-light)' }}>Simplicity & Privacy</span>
          </h2>
          <p className="section-description">
            Here is what people are saying about managing their money with eXpend.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bold-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                    {Array.from({ length: rev.rating }).map((_, sIdx) => (
                      <StarFilledIcon key={sIdx} size={18} color="#FFB800" strokeWidth="3px" />
                    ))}
                  </div>
                  <span className="store-tag">{rev.store}</span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  color: '#FFFFFF',
                }}>
                  "{rev.highlight}"
                </h3>

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                }}>
                  "{rev.comment}"
                </p>
              </div>

              <div className="review-author">
                <div className="review-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1.05rem' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
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
