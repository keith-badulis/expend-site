import React, { useState } from 'react';
import {
  LockIcon,
  SparklesIcon,
  WrenchIcon,
  PaletteIcon,
  DiamondIcon,
  CheckIcon,
} from './icons';

// Exact app color tokens & gradient shifts
export const AppColorThemes = [
  { key: 'blue', name: 'Electric Blue', c50: '#4C74DB', shift: '#5C3CCe' },
  { key: 'sky', name: 'Sky Blue', c50: '#37a5d6', shift: '#2c80d3' },
  { key: 'teal', name: 'Aqua Teal', c50: '#4fb2b5', shift: '#3a7c88' },
  { key: 'green', name: 'Emerald Green', c50: '#0BB190', shift: '#0f8a78' },
  { key: 'lime', name: 'Fresh Lime', c50: '#88ba4a', shift: '#4d9148' },
  { key: 'olive', name: 'Olive Leaf', c50: '#8EA449', shift: '#6f7132' },
  { key: 'yellow', name: 'Warm Amber', c50: '#EAAF3B', shift: '#ea8034' },
  { key: 'orange', name: 'Sunset Orange', c50: '#EF8354', shift: '#e54f41' },
  { key: 'peach', name: 'Soft Peach', c50: '#dca366', shift: '#ca7733' },
  { key: 'red', name: 'Ruby Red', c50: '#F56960', shift: '#d93f81' },
  { key: 'pink', name: 'Berry Pink', c50: '#dd56b2', shift: '#a54298' },
  { key: 'purple', name: 'Royal Purple', c50: '#9957BD', shift: '#543EAC' },
  { key: 'brown', name: 'Earth Brown', c50: '#a66e53', shift: '#834d46' },
  { key: 'sand', name: 'Warm Sand', c50: '#a6927b', shift: '#8c6a58' },
  { key: 'bluegray', name: 'Steel Blue', c50: '#5E6882', shift: '#3a4057' },
  { key: 'gray', name: 'Slate Gray', c50: '#838487', shift: '#535557' },
  { key: 'charcoal', name: 'Charcoal Dark', c50: '#484850', shift: '#363743' },
];

export const WhyChoose: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<number>(0);

  const pillars = [
    {
      id: 'privacy',
      themeKey: 'green',
      color50: '#0BB190',
      colorShift: '#0f8a78',
      glow: 'rgba(11, 177, 144, 0.35)',
      badge: '100% Offline & Private',
      icon: <LockIcon size={26} color="#0BB190" />,
      title: 'Private & Secure',
      desc: 'Your financial data never leaves your device. No cloud sync, no surveillance, and zero third-party data tracking—ever.',
      featureTag: 'Local SQLite/Realm',
    },
    {
      id: 'speed',
      themeKey: 'orange',
      color50: '#EF8354',
      colorShift: '#e54f41',
      glow: 'rgba(239, 131, 84, 0.35)',
      badge: 'Friction-Free Flow',
      icon: <SparklesIcon size={26} color="#EF8354" />,
      title: 'Intuitive & Fast',
      desc: 'A thoughtfully designed interface with instant built-in calculator shortcuts, making logging daily expenses an effortless 5-second habit.',
      featureTag: 'Built-in Calculator',
    },
    {
      id: 'tools',
      themeKey: 'purple',
      color50: '#9957BD',
      colorShift: '#543EAC',
      glow: 'rgba(153, 87, 189, 0.35)',
      badge: 'All-in-One Power',
      icon: <WrenchIcon size={26} color="#9957BD" />,
      title: 'Comprehensive Tools',
      desc: 'From nested subcategories, recurring bills, and budget limits to multi-wallet cash cycles and debt management—all in one place.',
      featureTag: 'Debts & Recurring',
    },
    {
      id: 'custom',
      themeKey: 'pink',
      color50: '#dd56b2',
      colorShift: '#a54298',
      glow: 'rgba(221, 86, 178, 0.35)',
      badge: '17 Expressive Themes',
      icon: <PaletteIcon size={26} color="#dd56b2" />,
      title: 'Beautifully Customizable',
      desc: 'Personalize your budgeting workspace with 17 vibrant color palettes, custom tags, and full Dark Mode support to match your style.',
      featureTag: 'Dynamic Palettes',
    },
  ];

  const premiumHighlights = [
    { title: 'Unlimited Wallets, Budgets, Goals, Debts & Templates', color: '#0BB190' },
    { title: 'Advanced Tagging & Nested Categories for deep organization', color: '#37a5d6' },
    { title: 'CSV Data Export to Excel, Google Sheets, or Numbers', color: '#9957BD' },
    { title: 'Flexible Filtered & Detailed Spending Reports with totals', color: '#EF8354' },
    { title: 'Complete Local JSON Backup & One-Tap Restore freedom', color: '#dd56b2' },
  ];

  return (
    <section id="why-choose" className="section why-choose-colorful-section">
      {/* Playful Ambient Colorful Backdrop Blobs */}
      <div className="colorful-bg-blob blob-green" />
      <div className="colorful-bg-blob blob-purple" />
      <div className="colorful-bg-blob blob-pink" />

      <div className="container">
        {/* Section Header with Gradient Shimmer Title */}
        <div className="section-header">
          <div className="colorful-section-pill">
            <SparklesIcon size={14} color="#7094F0" />
            <span>Why Choose eXpend</span>
          </div>

          <h2 className="section-title">
            Built for Mindful Habits.{' '}
            <span className="colorful-title-gradient">Zero Subscriptions.</span>
          </h2>

          <p className="section-description" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Ditch rigid spreadsheets and tedious notebooks. Embrace a colorful, lightweight personal finance journaling experience crafted for real habits.
          </p>
        </div>

        {/* 4 Playful Color Pillar Cards */}
        <div className="why-pillars-grid">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`why-color-card card-theme-${pillar.themeKey}`}
              style={{
                '--card-c50': pillar.color50,
                '--card-shift': pillar.colorShift,
                '--card-glow': pillar.glow,
              } as React.CSSProperties}
            >
              {/* Colorful Gradient Top Bar Accent */}
              <div
                className="card-gradient-topbar"
                style={{
                  background: `linear-gradient(90deg, ${pillar.color50} 0%, ${pillar.colorShift} 100%)`,
                }}
              />

              {/* Badge & Icon Row */}
              <div className="card-top-row">
                <div
                  className="card-icon-squircle"
                  style={{
                    background: `linear-gradient(145deg, rgba(23, 32, 54, 0.95), rgba(30, 42, 70, 0.8))`,
                    borderColor: `${pillar.color50}80`,
                    boxShadow: `0 8px 20px ${pillar.glow}`,
                  }}
                >
                  {pillar.icon}
                </div>

                <span
                  className="card-badge-pill"
                  style={{
                    color: pillar.color50,
                    borderColor: `${pillar.color50}60`,
                    backgroundColor: `${pillar.color50}18`,
                  }}
                >
                  {pillar.badge}
                </span>
              </div>

              {/* Pillar Title & Copy */}
              <h3 className="pillar-title">
                {pillar.title}
              </h3>

              <p className="pillar-desc">
                {pillar.desc}
              </p>

              {/* Feature Footer Tag */}
              <div className="pillar-footer">
                <span
                  className="pillar-tag-accent"
                  style={{
                    color: '#CBD5E1',
                    borderLeft: `3px solid ${pillar.color50}`,
                  }}
                >
                  {pillar.featureTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive App Theme Swatch Showcase */}
        <div className="palette-showcase-box">
          <div className="palette-showcase-header">
            <div className="palette-title-wrap">
              <PaletteIcon size={22} color="#dd56b2" />
              <div>
                <h4 className="palette-heading">Pick Your Vibe: 17 App Themes</h4>
                <p className="palette-subheading">Every color paired with an active gradient shift</p>
              </div>
            </div>

            <div className="palette-active-preview">
              <div
                className="active-swatch-chip"
                style={{
                  background: `linear-gradient(135deg, ${AppColorThemes[activeTheme].c50} 0%, ${AppColorThemes[activeTheme].shift} 100%)`,
                }}
              />
              <span className="active-swatch-name">
                {AppColorThemes[activeTheme].name}
              </span>
            </div>
          </div>

          <div className="palette-swatches-strip">
            {AppColorThemes.map((theme, idx) => {
              const isSelected = activeTheme === idx;
              return (
                <button
                  key={theme.key}
                  type="button"
                  className={`swatch-bubble ${isSelected ? 'selected' : ''}`}
                  onClick={() => setActiveTheme(idx)}
                  onMouseEnter={() => setActiveTheme(idx)}
                  title={`${theme.name} (${theme.c50})`}
                  style={{
                    background: `linear-gradient(135deg, ${theme.c50} 0%, ${theme.shift} 100%)`,
                    boxShadow: isSelected
                      ? `0 0 16px ${theme.c50}, 0 0 0 2.5px #FFFFFF`
                      : `0 4px 10px rgba(0, 0, 0, 0.4)`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Lifetime Premium & Data Freedom Banner */}
        <div className="lifetime-premium-banner">
          <div className="banner-left-content">
            <div className="premium-badge-sparkle">
              <DiamondIcon size={16} color="#7094F0" />
              <span>One-Time Payment • Lifetime Premium</span>
            </div>

            <h3 className="banner-title">
              No Subscriptions. <br />
              <span className="banner-title-highlight">Complete Data Freedom.</span>
            </h3>

            <p className="banner-desc">
              Unlock unlimited features with a single, transparent purchase. Back up and restore your transactions locally via JSON or export records to CSV for Excel and Google Sheets anytime.
            </p>
          </div>

          <div className="banner-highlights-box">
            <h4 className="highlights-header">
              <SparklesIcon size={18} color="#7094F0" />
              <span>What's Included:</span>
            </h4>

            <ul className="highlights-list">
              {premiumHighlights.map((item, idx) => (
                <li key={idx} className="highlight-item">
                  <div
                    className="highlight-check-circle"
                    style={{
                      backgroundColor: `${item.color}22`,
                      borderColor: item.color,
                    }}
                  >
                    <CheckIcon size={13} color={item.color} />
                  </div>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
