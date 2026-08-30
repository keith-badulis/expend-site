import React from 'react';

export interface IconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const baseStyle = {
  fillRule: 'evenodd' as const,
  clipRule: 'evenodd' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeMiterlimit: 1.5,
};

export const LockIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 105"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M68.749 43.093a8.334 8.334 0 0 1 8.334 8.334v25a8.332 8.332 0 0 1-8.334 8.333h-37.5a8.33 8.33 0 0 1-8.333-8.333v-25a8.333 8.333 0 0 1 8.333-8.334h37.5ZM50.007 18.093a18.742 18.742 0 0 1 18.742 18.742v6.258h-37.5v-6.258a18.742 18.742 0 0 1 18.742-18.742h.016Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={49.999}
      cy={59.76}
      r={3.125}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M52.081 71.218h-4.167l1.042-8.333h2.083l1.042 8.333Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 105"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="m39.808 20.017 4.686 14.822a8.067 8.067 0 0 0 5.267 5.267l14.822 4.686-14.822 4.686a8.07 8.07 0 0 0-5.267 5.267l-4.686 14.822-4.685-14.822a8.082 8.082 0 0 0-5.268-5.267l-14.822-4.686 14.822-4.686a8.056 8.056 0 0 0 3.277-1.99 8.069 8.069 0 0 0 1.991-3.277l4.685-14.822ZM66.891 57.292l2.716 8.59a4.679 4.679 0 0 0 3.052 3.052l8.59 2.716-8.59 2.716a4.679 4.679 0 0 0-3.052 3.052l-2.716 8.59-2.715-8.59a4.681 4.681 0 0 0-3.053-3.052l-8.59-2.716 8.59-2.716a4.679 4.679 0 0 0 3.053-3.052l2.715-8.59ZM73.367 22.325l1.139 3.605a1.968 1.968 0 0 0 1.281 1.281l3.605 1.139-3.605 1.139a1.968 1.968 0 0 0-1.281 1.281l-1.139 3.605-1.14-3.605a1.968 1.968 0 0 0-1.281-1.281l-3.604-1.139 3.604-1.139a1.968 1.968 0 0 0 1.281-1.281l1.14-3.605Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const WrenchIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 105"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M18.801 74.214a8.436 8.436 0 0 1 2.285-4.171L44.58 46.548a8.452 8.452 0 0 1 2.351-1.662c-2.369-6.617-.906-14.303 4.39-19.599 5.509-5.509 13.606-6.871 20.394-4.084L59.476 33.442l2.157 8.05 8.049 2.156 12.239-12.239c2.787 6.788 1.426 14.885-4.084 20.395-5.295 5.295-12.982 6.758-19.598 4.389a8.448 8.448 0 0 1-1.663 2.351L33.082 82.039a8.436 8.436 0 0 1-4.171 2.285 8.48 8.48 0 0 1-10.11-10.11Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 105"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, strokeLinejoin: 'round', ...style }}
  >
    <path
      d="M62.044 79.237c0 3.523-4.636 7.292-8.334 7.292-18.397 0-33.333-14.936-33.333-33.333 0-18.398 14.936-33.334 33.333-33.334 13.127 0 25.061 7.607 30.495 19.863.711 1.605 1.26 3.478 1.678 5.457a9.689 9.689 0 0 1-9.39 12.083c-4.377.097-8.2.097-8.2.097-6.324 0-11.458 4.093-11.458 10.417 0 6.821 5.209 5.809 5.209 11.458Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={39.648} cy={41.216} r={3.646} fill={color} />
    <circle cx={35.481} cy={53.716} r={3.646} fill={color} />
    <circle cx={51.106} cy={34.966} r={3.646} fill={color} />
    <circle cx={63.606} cy={38.091} r={3.646} fill={color} />
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M25.063 44.469a5.178 5.178 0 0 1 .086-6.523l11.384-13.66a5.175 5.175 0 0 1 3.978-1.863H66.91c1.537 0 2.994.682 3.978 1.863l11.383 13.66a5.176 5.176 0 0 1 .087 6.523L57.775 75.608a5.178 5.178 0 0 1-8.129 0L25.063 44.469ZM32.878 41.173l8.332 2.083M41.21 43.256h25M66.21 43.256l8.334-2.083"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="m47.46 22.423-6.25 20.833L52.151 76.08a1.642 1.642 0 0 0 3.117 0L66.21 43.256l-6.25-20.833"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="m16.647 51.367 22.227 22.226 44.37-44.426"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ReportIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M44.301 32.545a4.164 4.164 0 0 0-4.858-4.11c-12.941 2.346-22.776 13.656-22.776 27.264 0 15.252 12.383 27.634 27.634 27.634 13.608 0 24.918-9.835 27.211-22.784a4.113 4.113 0 0 0-4.057-4.797c-7.824-.053-23.154-.053-23.154-.053V32.545Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M78.853 44.301a4.165 4.165 0 0 0 4.11-4.859c-2.067-11.366-11.039-20.338-22.414-22.351a4.116 4.116 0 0 0-4.797 4.057c-.053 7.824-.053 23.153-.053 23.153h23.154Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const StonksIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="m20.377 70.834 25-25 12.531 12.531 29.198-29.198"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M70.376 29.167h16.73v16.667"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const PiggyBankIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M58.595 27.085c.024-.1.049-.2.076-.301 1.34-5.001 6.705-7.908 11.984-6.494l-2.42 9.034c5.871 2.814 10.357 8.057 12.156 14.427h5.026V56.25h-5.026a22.957 22.957 0 0 1-10.599 13.605V75a4.167 4.167 0 0 1-4.167 4.167h-2.083A4.167 4.167 0 0 1 59.375 75v-2.106c-.342.015-.686.023-1.031.023H45.825c-.346 0-.691-.008-1.033-.023V75a4.167 4.167 0 0 1-4.167 4.167h-2.083A4.167 4.167 0 0 1 34.375 75v-5.146c-6.85-3.96-11.458-11.365-11.458-19.846v-.016c0-3.748.9-7.285 2.496-10.409M20.833 45.833A8.337 8.337 0 0 1 12.5 37.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={66.667} cy={43.75} r={4.167} fill={color} />
    <circle
      cx={40.626}
      cy={30.208}
      r={9.375}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      style={{ strokeLinejoin: 'miter' }}
    />
  </svg>
);

export const LightningBoltIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 105"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M47.916 60.416h-17.31a2.084 2.084 0 0 1-1.825-3.087L49.998 18.75l2.085 27.084h17.31a2.084 2.084 0 0 1 1.825 3.087l-21.217 38.58-2.085-27.085Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const TagIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M82.877 42.359a6.083 6.083 0 0 1-1.782 4.302L51.215 76.54a8.257 8.257 0 0 1-11.678 0L27.169 64.172a8.259 8.259 0 0 1 0-11.678l29.879-29.879a6.085 6.085 0 0 1 4.303-1.782h15.441a6.085 6.085 0 0 1 6.085 6.085v15.441Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={68.293} cy={35.417} r={2.083} fill="none" stroke={color} strokeWidth={strokeWidth} />
  </svg>
);

export const BorrowIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M32.538 75.356h3.957c1.516 0 3.02.273 4.439.805l9.819 3.682a11.514 11.514 0 0 0 9.192-.482l28.84-14.42c.002-.001.003-.002.003-.004v-2.436a4.13 4.13 0 0 0-5.54-3.88L65.871 64.94M17.954 52.757h14.583v24.682H17.954z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M32.538 56.606h9.546c1.942 0 3.858.452 5.596 1.321l5.691 2.846h8.501a3.998 3.998 0 0 1 3.999 3.999v.335a3.998 3.998 0 0 1-3.999 3.999H51.288M61.319 33.281h7.51l-15.021 12.65-15.02-12.65h7.51V18.848h15.021v14.433Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <circle
      cx={49.999}
      cy={30.729}
      r={14.063}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M77.083 64.746a12.663 12.663 0 0 0-12.662-12.663h-28.84a12.663 12.663 0 0 0-12.662 12.663v14.421a4.166 4.166 0 0 0 4.166 4.166h45.832a4.166 4.166 0 0 0 4.166-4.166V64.746Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const TransactionsIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, strokeLinejoin: 'round', ...style }}
  >
    <path
      d="M79.167 23.019a6.353 6.353 0 0 0-6.353-6.352H27.186a6.353 6.353 0 0 0-6.353 6.352V83.75c0 1.136 5.182-4.088 14.584-4.583 3.919-.207 10.292 4.166 14.582 4.166 5.065 0 10.13-4.418 14.584-4.166 8.371.473 14.584 5.634 14.584 4.583V23.019Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M35.417 33.333h29.166M35.417 47.917H56.25"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const FilterIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M49.98 18.75V25M22.897 18.75v14.584M77.064 18.75v27.084M49.98 52.084V81.25M22.897 60.417V81.25M77.064 72.917v8.333"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={49.981}
      cy={33.334}
      r={8.333}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={22.898}
      cy={52.084}
      r={8.333}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={77.064}
      cy={64.584}
      r={8.333}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const StarFilledIcon: React.FC<IconProps> = ({
  size = 20,
  color = '#FFB800',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 105 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, strokeLinejoin: 'round', ...style }}
  >
    <path
      d="M50.936 18.559a1.283 1.283 0 0 1 2.256 0L63.241 37.15l20.786 3.812a1.282 1.282 0 0 1 .697 2.146L70.149 58.41l2.797 20.946a1.282 1.282 0 0 1-1.825 1.327l-19.057-9.134-19.057 9.134a1.283 1.283 0 0 1-1.826-1.327l2.798-20.946-14.575-15.302a1.284 1.284 0 0 1-.292-1.281c.146-.448.526-.78.989-.865l20.786-3.812 10.049-18.591Z"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const DescriptionIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M20.833 22.917h58.332M20.833 77.084h26.345M20.833 50h58.332"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
