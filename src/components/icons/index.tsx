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

export const TaxIcon: React.FC<IconProps> = ({
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
      d="M33.334 87.393 75 87.394h.002c4.599 0 8.334-3.734 8.334-8.334V68.643H41.668l-.002 10.416h.002c0 4.599-3.734 8.334-8.334 8.334-4.599 0-8.334-3.734-8.334-8.334v-18.75"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="m75.002 68.643-.001-43.919a3.997 3.997 0 0 0-3.997-3.997H28.998a3.994 3.994 0 0 0-3.997 3.997v6.419"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={33.333}
      cy={45.726}
      r={16.667}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={28.125} cy={40.519} r={3.126} fill={color} />
    <circle cx={38.541} cy={50.935} r={3.125} fill={color} />
    <path
      d="m29.166 49.893 8.333-8.333M56.25 31.143h8.333M60.417 41.56h4.167M60.417 51.976h4.167"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const BankIcon: React.FC<IconProps> = ({
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
      d="M47.365 19.935a6.417 6.417 0 0 1 5.268 0L82.03 33.16a2.269 2.269 0 0 1-.931 4.34h-62.2a2.269 2.269 0 0 1-.931-4.34l29.397-13.225Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M24.999 37.5h14.583V75H24.999zM60.416 37.5h14.583V75H60.416zM20.832 75h58.334M16.654 85.417h66.69"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const WalletIcon: React.FC<IconProps> = ({
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
      d="M16.667 28.125v44.768a6.276 6.276 0 0 0 6.274 6.274H75a8.334 8.334 0 0 0 8.333-8.334V43.75c0-2.21-.878-4.33-2.44-5.893A8.338 8.338 0 0 0 75 35.417h-6.25"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M81.25 20.833h-57.3a7.284 7.284 0 0 0-7.283 7.284v.016a7.283 7.283 0 0 0 7.283 7.284h46.883"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={70.833} cy={57.292} r={4.167} fill={color} />
  </svg>
);

export const CardIcon: React.FC<IconProps> = ({
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
      d="M85.417 31.583c0-4.783-3.555-8.666-7.934-8.666H22.516c-4.379 0-7.934 3.883-7.934 8.666v36.834c0 4.783 3.555 8.666 7.934 8.666h54.967c4.379 0 7.934-3.883 7.934-8.666V31.583Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M14.582 37.5h70.82M14.583 47.917h70.834"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M25 62.5h12.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CoinIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, strokeLinecap: 'square', ...style }}
  >
    <ellipse
      cx={50}
      cy={43.75}
      rx={33.333}
      ry={25}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M83.333 43.795V56.25c0 13.798-14.936 25-33.333 25s-33.334-11.202-33.334-25v-12.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
    />
    <path
      d="M58.333 68.75v9.534M41.667 68.75v9.534M27.083 64.583v5.367M72.917 64.583v5.367"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ReceiptIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, strokeLinejoin: 'round', ...style }}
  >
    <path
      d="M79.165 68.541v.204l.002 16.565c0 1.051-6.213-1.61-14.583-2.083-4.454-.252-9.519 4.167-14.584 4.167-4.29 0-10.664-4.373-14.583-4.167-9.402.496-14.583 3.219-14.583 2.083l.002-16.565a6.936 6.936 0 0 1 0-.204l-.002-45.731c0-1.051 6.213 2.189 14.583 2.662 4.454.252 9.519-4.167 14.584-4.167 4.29 0 10.664 4.373 14.583 4.167 9.402-.496 14.583-3.798 14.583-2.662l-.002 45.731Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M33.333 37.393h33.333M33.333 49.893h33.333M33.333 62.393h23.81"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
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

export const StarOutlineIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, strokeLinejoin: 'round', ...style }}
  >
    <path
      d="M50.936 18.559a1.283 1.283 0 0 1 2.256 0L63.241 37.15l20.786 3.812a1.282 1.282 0 0 1 .697 2.146L70.149 58.41l2.797 20.946a1.282 1.282 0 0 1-1.825 1.327l-19.057-9.134-19.057 9.134a1.283 1.283 0 0 1-1.826-1.327l2.798-20.946-14.575-15.302a1.284 1.284 0 0 1-.292-1.281c.146-.448.526-.78.989-.865l20.786-3.812 10.049-18.591Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const BackupIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M74.544 52.083s2.086 0 4.17 0c2.299 0 4.162 1.864 4.162 4.163v20.841c0 2.299-1.864 4.162-4.163 4.162H28.707c-2.299 0-4.163-1.864-4.163-4.162V56.246c0-2.299 1.864-4.162 4.163-4.162h4.169"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M62.101 62.5H45.324V37.937h-6.632L53.713 22.916l15.021 15.021h-6.632V62.5Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CloudBackupIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M40.001 73.958H25.417v-.04c-6.988-.533-12.5-6.379-12.5-13.502 0-7.318 5.818-13.289 13.077-13.534a19.277 19.277 0 0 1-.577-4.695c0-10.636 8.635-19.271 19.271-19.271 8.976 0 16.526 6.149 18.665 14.461a18.723 18.723 0 0 1 5.814-.92c10.348 0 18.75 8.402 18.75 18.75s-8.402 18.75-18.75 18.75h-8.333M50.41 80.745l.01-32.755"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M60.531 57.521 51.3 48.29a1.244 1.244 0 0 0-1.758 0l-9.231 9.231"
      fill="none"
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

export const AirplaneIcon: React.FC<IconProps> = ({
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
      d="M30.113 43.75h15.532l-4.157-17.146a7.042 7.042 0 0 1 1.181-5.428 6.945 6.945 0 0 1 4.997-2.427l.209-.001a6.386 6.386 0 0 1 5.852 3.874l8.962 21.126h12.319c4.598 0 8.325 3.727 8.325 8.325v.016c0 4.598-3.727 8.325-8.325 8.325H62.689l-8.962 21.126a6.386 6.386 0 0 1-5.852 3.874l-.209-.001a6.945 6.945 0 0 1-4.997-2.427 7.042 7.042 0 0 1-1.181-5.428l4.157-17.146H30.113l-2.909 5.868a5.526 5.526 0 0 1-4.815 2.987l-.347.001a5.418 5.418 0 0 1-4.154-1.964 5.417 5.417 0 0 1-1.118-4.456l2.135-10.768-2.135-10.768a5.417 5.417 0 0 1 1.118-4.456 5.418 5.418 0 0 1 4.154-1.964l.347-.001a5.526 5.526 0 0 1 4.815 2.987l2.909 5.868Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({
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
      d="m81.23 18.75-62.5 62.499M18.731 18.751l62.5 62.499"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
export const CrossIcon = CloseIcon;

export const ChevronLeftIcon: React.FC<IconProps> = ({
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
      d="M58.423 87.903 26.142 55.622a4.35 4.35 0 0 1 0-6.149l32.281-32.281"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({
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
      d="m41.537 18.094 32.281 32.281a4.35 4.35 0 0 1 0 6.148L41.537 88.804"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <circle
      cx={45.383}
      cy={43.093}
      r={25}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M70.382 68.093 82.919 80.63"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
export const ZoomInIcon = SearchIcon;

export const DrinkIcon: React.FC<IconProps> = ({
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
      d="M73.729 41.973a4.36 4.36 0 0 0-1.051-3.44 4.36 4.36 0 0 0-3.277-1.483H29.909a4.364 4.364 0 0 0-4.328 4.923l2.918 22.587a12.321 12.321 0 0 0 12.219 10.742h17.873A12.321 12.321 0 0 0 70.81 64.56l2.919-22.587ZM72.916 60.775l4.863-.027a5.584 5.584 0 0 0 5.554-5.584v-3.445c0-3.084-2.5-5.584-5.585-5.584h-3.702M37.177 21.714v4.919M49.999 21.714v4.919M62.822 21.714v4.919M31.249 85.718h37.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const SpoonForkIcon: React.FC<IconProps> = ({
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
      d="M62.481 49.05c-4.853-2.29-8.333-8.465-8.333-15.716 0-9.199 5.601-16.667 12.5-16.667 6.898 0 12.5 7.468 12.5 16.667 0 7.251-3.481 13.426-8.334 15.716M29.148 29.168v-12.5M37.481 29.168v-12.5M45.814 16.668v16.666c0 7.251-3.48 13.426-8.333 15.716v30.117a4.167 4.167 0 0 1-8.333 0V49.05c-4.853-2.29-8.334-8.465-8.334-15.716V16.668M70.814 50v29.167a4.166 4.166 0 1 1-8.333 0V50"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const GameIcon: React.FC<IconProps> = ({
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
      d="M29.165 66.216s.264-10.92 8.523-11.458c7.13-.464 8.524-11.458 8.524-11.458H29.165s.264-10.921 8.523-11.458c6.365-.414 8.159-9.22 8.471-11.106a21.002 21.002 0 0 1 3.84-.353c11.506 0 20.834 9.327 20.834 20.833l.002 27.084H29.167l-.002-2.084ZM72.917 80.8a4.167 4.167 0 0 0-4.167-4.167h-37.5a4.167 4.167 0 0 0-4.167 4.167v6.25h45.834V80.8Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HeadphonesIcon: React.FC<IconProps> = ({
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
      d="M28.221 48.407c0-14.069 11.422-25.49 25.49-25.49 14.068 0 25.49 11.421 25.49 25.49M81.095 53.712a5.217 5.217 0 0 1 3.688 6.387l-4.074 15.202a5.217 5.217 0 0 1-6.387 3.688l-3.011-.807 6.773-25.277 3.011.807ZM70.034 50.748l-6.773 25.277M26.301 53.712a5.217 5.217 0 0 0-3.688 6.387l4.074 15.202a5.217 5.217 0 0 0 6.387 3.688l3.011-.807-6.773-25.277-3.011.807ZM37.362 50.748l6.773 25.277"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HouseIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M84.681 51.487a1.667 1.667 0 0 1-1.107 2.912H73.375v22.726a4.357 4.357 0 0 1-4.357 4.357H56.706V66.903a2.09 2.09 0 0 0-2.087-2.087h-8.325a2.09 2.09 0 0 0-2.087 2.087v14.579h-12.31a4.357 4.357 0 0 1-4.357-4.357V54.399H17.187a1.661 1.661 0 0 1-.96-2.899c7.823-6.96 27.406-24.367 32.823-29.182a2.119 2.119 0 0 1 2.816 0l32.817 29.169Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const BillsIcon: React.FC<IconProps> = ({
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
      d="M12.5 39.25v30.875A4.877 4.877 0 0 0 17.375 75h56.916"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M87.499 29.75a4.752 4.752 0 0 0-4.75-4.75H27.666a4.752 4.752 0 0 0-4.75 4.75v30.083a4.752 4.752 0 0 0 4.75 4.75h55.083a4.752 4.752 0 0 0 4.75-4.75V29.75Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <ellipse
      cx={55.207}
      cy={44.792}
      rx={13.543}
      ry={9.375}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M33.333 27.083c0 4.6-3.734 8.334-8.333 8.334M77.083 62.5c0-4.599 3.734-8.333 8.334-8.333M85.417 35.417a8.338 8.338 0 0 1-8.334-8.334M25 54.167a8.337 8.337 0 0 1 8.333 8.333"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({
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
      d="M27.084 23.96a10.42 10.42 0 0 0-10.417 10.417v35.415a10.42 10.42 0 0 0 10.417 10.417h45.832a10.417 10.417 0 0 0 10.416-10.417V34.377A10.416 10.416 0 0 0 72.916 23.96M43.75 23.959h12.5"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M35.417 19.792v7.291M64.583 19.792v7.291M16.667 38.542h66.666M40.625 52.093A2.096 2.096 0 0 0 38.531 50h-8.313a2.096 2.096 0 0 0-2.093 2.093v8.314a2.092 2.092 0 0 0 2.093 2.093h8.313a2.097 2.097 0 0 0 2.094-2.093v-8.314Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ShoppingCartIcon: React.FC<IconProps> = ({
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
      d="m25.134 37.5 3.398 29.47a6.209 6.209 0 0 0 6.167 5.496h35.63c2.891 0 5.4-1.995 6.049-4.812 1.346-5.836 3.63-14.105 5.211-20.962a6.171 6.171 0 0 0-6.014-7.559H35.416"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle cx={38.541} cy={83.925} r={5.208} fill={color} />
    <circle cx={67.708} cy={83.925} r={5.208} fill={color} />
    <path
      d="m25.134 37.5-1.532-11.42a4.166 4.166 0 0 0-4.129-3.613l-2.807-.001"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const TemplateIcon: React.FC<IconProps> = ({
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
      d="M79.167 41.309a4.164 4.164 0 0 0-1.221-2.946L57.471 17.887a4.17 4.17 0 0 0-2.947-1.22H29.167A8.336 8.336 0 0 0 20.833 25v50a8.333 8.333 0 0 0 8.333 8.333h41.667A8.334 8.334 0 0 0 79.167 75V41.309Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M56.25 18.751V31.25a8.334 8.334 0 0 0 8.334 8.333h12.499"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M45.833 39.583h-12.5M66.667 58.333a6.25 6.25 0 0 0-6.251-6.25H39.583a6.25 6.25 0 0 0-6.25 6.25v6.251a6.25 6.25 0 0 0 6.25 6.25h20.833a6.251 6.251 0 0 0 6.251-6.25v-6.251Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const CategoriesIcon: React.FC<IconProps> = ({
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
      d="M64.682 16.668a6.127 6.127 0 0 1 6.131 6.131v14.82a6.127 6.127 0 0 1-6.131 6.131h-14.82a6.132 6.132 0 0 1-6.131-6.131v-14.82a6.132 6.132 0 0 1 6.131-6.131h14.82Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <circle
      cx={67.689}
      cy={67.709}
      r={15.625}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M26.662 41.651a4.166 4.166 0 0 1 7.198 0L43.163 57.6a4.165 4.165 0 0 1-3.599 6.266H20.957a4.166 4.166 0 0 1-3.599-6.266l9.304-15.949Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const ArchiveIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M79.743 23.851c2.07 0 3.75 1.68 3.75 3.75v11.25c0 2.07-1.68 3.75-3.75 3.75H20.575c-2.07 0-3.75-1.68-3.75-3.75v-11.25c0-2.07 1.68-3.75 3.75-3.75h59.168Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M77.243 53.018v24.502c0 1.237-.491 2.424-1.366 3.299-.875.875-2.061 1.366-3.299 1.366H27.741c-1.237 0-2.424-.491-3.299-1.366-.875-.875-1.366-2.061-1.366-3.299v-34.918"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M39.742 55.101h20.834"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const JsonIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M35.834 18.751h-1.411c-3.155 0-5.249.518-6.28 1.555-1.032 1.036-1.547 3.351-1.547 6.944 0 7.242-.167 11.816-.501 13.723-.546 2.957-1.479 5.238-2.799 6.841-1.32 1.603-3.39 3.027-6.212 4.27 3.337 1.271 5.757 3.213 7.259 5.825 1.502 2.612 2.253 6.889 2.253 12.832 0 5.39.061 8.596.182 9.619.243 1.879.857 3.192 1.843 3.939.986.746 2.92 1.119 5.802 1.119h1.411"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M65.001 85.417h1.411c3.155 0 5.249-.518 6.28-1.555 1.032-1.036 1.547-3.351 1.547-6.944 0-7.242.167-11.816.501-13.723.546-2.957 1.479-5.238 2.799-6.841 1.32-1.603 3.39-3.027 6.212-4.27-3.337-1.271-5.757-3.213-7.259-5.825-1.502-2.612-2.253-6.889-2.253-12.832 0-5.39-.061-8.596-.182-9.619-.243-1.879-.857-3.192-1.843-3.939-.986-.746-2.92-1.119-5.802-1.119h-1.411"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const DeltaIcon: React.FC<IconProps> = ({
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
      d="m49.981 20.194 33.333 58.973H16.649l33.332-58.973Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const InfinityIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = '6.25px',
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 60"
    width={size}
    height={size}
    className={className}
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M60 30 C45 14, 28 14, 18 22 C8 30, 8 40, 18 48 C28 56, 45 46, 60 30 C75 14, 92 14, 102 22 C112 30, 112 40, 102 48 C92 56, 75 46, 60 30 Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({
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
      d="M49.999 31.606c7.017-12.856 21.052-12.856 28.07-6.189 7.018 6.667 9.518 17.5 2.5 30.833-4.912 10-20.043 22.5-30.57 29.167-10.526-6.667-25.657-19.167-30.57-29.167-7.017-13.333-4.517-24.167 2.5-30.833 7.017-6.667 21.052-6.667 28.07 6.189Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ExpenseIcon: React.FC<IconProps> = ({
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
      d="M37.5 39.575l39.507 39.532"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M39.583 80.684l35.624 0c1.873 0 3.393-1.52 3.393-3.393l0-35.624"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M20.24 22.321l8.926 8.926"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
export const ArrowBottomRightIcon = ExpenseIcon;

export const IncomeIcon: React.FC<IconProps> = ({
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
      d="M37.472 64.584l39.551-39.527"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M78.6 62.5l0-35.624c0-1.873-1.52-3.393-3.393-3.393l-35.624 0"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M20.237 81.807l8.929-8.924"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);
export const ArrowTopRightIcon = IncomeIcon;

export const HangerIcon: React.FC<IconProps> = ({
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
      d="m56.981 53.717 27.695 17.649a5.12 5.12 0 0 1-2.75 9.434H18.401a5.117 5.117 0 0 1-2.923-9.319l34.521-24.015v.001l4.96-3.857a8.74 8.74 0 0 0 3.374-6.899l-.001-1.753a8.325 8.325 0 0 0-8.325-8.325h-.016a8.326 8.326 0 0 0-8.325 8.324v.009"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const DropletsIcon: React.FC<IconProps> = ({
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
      d="M64.583 71.711c-3.234 8.612-11.548 14.747-21.284 14.747-12.543 0-22.726-10.184-22.726-22.727 0-11.931 22.726-39.773 22.726-39.773l3.104 4.167"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M75.2 57.514a15.441 15.441 0 0 1-11.257 4.857c-8.545 0-15.483-6.938-15.483-15.483 0-4.588 4.933-12.629 9.229-18.763 3.316-4.734 6.254-8.333 6.254-8.333s15.483 18.967 15.483 27.096c0 4.112-1.607 7.852-4.226 10.626"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const LaptopIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M80.794 57.883V32.779a4.063 4.063 0 0 0-4.063-4.063h-46.04a4.063 4.063 0 0 0-4.062 4.063v25.104M62.044 66.216h25v4.601a8.421 8.421 0 0 1-8.421 8.42H28.799a8.418 8.418 0 0 1-8.421-8.422l.001-4.599h24.996v4.167h16.669v-4.167Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const NoteIcon: React.FC<IconProps> = ({
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
      d="M83.332 25.166a8.5 8.5 0 0 0-8.498-8.499H25.166a8.503 8.503 0 0 0-6.01 2.489 8.503 8.503 0 0 0-2.489 6.01v49.668a8.501 8.501 0 0 0 8.499 8.498h29.888c2.1 0 4.114-.834 5.599-2.319l20.361-20.361a7.919 7.919 0 0 0 2.318-5.598V25.166Z"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M83.332 58.334H66.833a8.499 8.499 0 0 0-8.499 8.499v16.499"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="butt"
    />
    <path
      d="M31.25 31.25h22.917M31.25 43.75h8.333"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({
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
      d="M87.481 52.096l-70.833-0.022"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M42.218 24.503l-25.19 25.19c-1.324 1.324-1.324 3.474 0 4.798l25.19 25.19"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const DumbbellIcon: React.FC<IconProps> = ({
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
      d="M25.896 54.245a4.99 4.99 0 0 1 7.059 0l16.511 16.511a4.99 4.99 0 0 1-.004 7.063 8.575 8.575 0 0 1-12.127 0L25.892 66.376a8.575 8.575 0 0 1 0-12.127l.004-.004ZM57.9 22.24a8.66 8.66 0 0 1 12.245.001L81.47 33.566a8.656 8.656 0 0 1 0 12.244l-.004.005a4.908 4.908 0 0 1-6.941-.001L57.896 29.186a4.907 4.907 0 0 1 0-6.941l.004-.005ZM41.239 62.527 66.21 37.502M24.557 79.167l2.079-2.084M80.807 22.917l2.079-2.084"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({
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
    style={{ ...baseStyle, ...style }}
  >
    <path
      d="M51.502 15.438l-0.022 70.833"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M23.913 60.723l25.19 25.19c1.324 1.324 3.474 1.324 4.798 0l25.19-25.19"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  className,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
