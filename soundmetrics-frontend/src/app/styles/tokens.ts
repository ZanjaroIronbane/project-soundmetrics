// Design Tokens - Centralized design system values

// Color Palette
export const colors = {
  // Primary Colors - Sophisticated Dusty Rose (elegant, refined)
  primary: {
    main: '#d4a574', // Warm champagne gold
    hover: '#c49660', // Deeper champagne
    light: '#e6c4a0', // Light champagne
    dark: '#b8834a', // Dark champagne
  },

  // Secondary Colors - Muted Sage (calm, sophisticated)
  secondary: {
    main: '#9ca3af', // Sophisticated grey
    hover: '#6b7280', // Darker grey
    light: '#d1d5db', // Light grey
    dark: '#4b5563', // Dark grey
  },

  // Accent Colors - Soft Rose (subtle, feminine)
  accent: {
    main: '#e5b4b8', // Dusty rose
    hover: '#d49ca1', // Deeper dusty rose
    light: '#f0c9cd', // Light dusty rose
    dark: '#c8888e', // Dark dusty rose
  },

  // Background Colors
  background: {
    dark: '#242424',
    light: '#ffffff',
    paper: {
      dark: '#1a1a1a',
      light: '#f9f9f9',
    },
    overlay: {
      dark: 'rgba(36, 36, 36, 0.95)',
      light: 'rgba(255, 255, 255, 0.95)',
    },
  },

  // Text Colors
  text: {
    primary: {
      dark: 'rgba(255, 255, 255, 0.87)',
      light: '#213547',
    },
    secondary: {
      dark: 'rgba(255, 255, 255, 0.6)',
      light: 'rgba(33, 53, 71, 0.6)',
    },
    disabled: {
      dark: 'rgba(255, 255, 255, 0.38)',
      light: 'rgba(33, 53, 71, 0.38)',
    },
  },

  // Border Colors
  border: {
    light: {
      dark: 'rgba(255, 255, 255, 0.1)',
      light: 'rgba(0, 0, 0, 0.1)',
    },
    medium: {
      dark: 'rgba(255, 255, 255, 0.23)',
      light: 'rgba(0, 0, 0, 0.23)',
    },
  },

  // Status Colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',

  // Utility Colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  // Official Spotify Brand Colors (Following Spotify Design Guidelines)
  spotify: {
    // Primary Spotify Green - "our resting color"
    green: '#1DB954',
    // Official background color mentioned in guidelines
    black: '#191414',
    // Supporting grays for dark theme
    darkGrey: '#121212',
    mediumGrey: '#535353',
    lightGrey: '#b3b3b3',
    white: '#ffffff',
    // Additional UI colors following Spotify patterns
    cardBg: '#181818',
    hoverBg: '#282828',
    border: '#2a2a2a',
  },

  // Pastel Accent Colors (Solid Colors Only)
  pastel: {
    lavender: '#E6E6FA',
    mint: '#F0FFF0',
    peach: '#FFE5CC',
    rose: '#FFE4E1',
    sky: '#E0F6FF',
    sage: '#F0F8E8',
  },
} as const;

// Base Spacing Units (4px increments)
export const spaceUnits = {
  none: '0',
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '0.75rem', // 12px
  base: '1rem', // 16px
  lg: '1.25rem', // 20px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  '3xl': '2.5rem', // 40px
  '4xl': '3rem', // 48px
  '5xl': '4rem', // 64px
  '6xl': '5rem', // 80px
  '7xl': '6rem', // 96px
  '8xl': '8rem', // 128px
  '9xl': '10rem', // 160px
  '10xl': '12rem', // 192px
} as const;

// Legacy spacing for backward compatibility
export const spacing = {
  0: spaceUnits.none,
  1: spaceUnits.xs,
  2: spaceUnits.sm,
  3: spaceUnits.md,
  4: spaceUnits.base,
  5: spaceUnits.lg,
  6: spaceUnits.xl,
  8: spaceUnits['2xl'],
  10: spaceUnits['3xl'],
  12: spaceUnits['4xl'],
  16: spaceUnits['5xl'],
  20: spaceUnits['6xl'],
  24: spaceUnits['7xl'],
  32: spaceUnits['8xl'],
  40: spaceUnits['9xl'],
  48: spaceUnits['10xl'],
} as const;

// Typography
export const typography = {
  fontFamily: {
    // Following Spotify Design Guidelines: system defaults first
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
    spotify:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fallback: 'sans-serif',
  },
  fontSize: {
    xs: '0.75rem', // 12px - small text, captions
    sm: '0.875rem', // 14px - secondary text, labels
    base: '1rem', // 16px - body text
    lg: '1.125rem', // 18px - large body text
    xl: '1.25rem', // 20px - small headings, card titles
    '2xl': '1.5rem', // 24px - h5, subtitles
    '3xl': '1.875rem', // 30px - h4
    '4xl': '2.25rem', // 36px - h3, section titles
    '5xl': '3rem', // 48px - h2, page titles
    '6xl': '3.75rem', // 60px - h1
    '7xl': '4.5rem', // 72px - large hero text
    '8xl': '6rem', // 96px - extra large hero
    '9xl': '8rem', // 128px - massive display text
    '10xl': '12rem', // 192px - parallax text max size
  },
  fontWeight: {
    light: 300,
    normal: 400,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// Border Radius - Spotify Squared Style
export const borderRadius = {
  none: '0px',
  sm: '2px', // Very subtle rounding
  base: '4px', // Spotify standard
  md: '6px', // Slightly more rounded
  lg: '8px', // Maximum for cards
  xl: '12px', // Only for special elements
  '2xl': '16px', // Rarely used
  '3xl': '24px', // Almost never used
  full: '50%', // Only for circular elements
} as const;

// Shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

  // Dark theme shadows
  dark: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    base: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 2px 8px rgba(0, 0, 0, 0.3)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
} as const;

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Breakpoints
export const breakpoints = {
  xs: '320px', // Minimum mobile
  mobile: '375px', // iPhone SE, iPhone 12 mini
  mobileLg: '390px', // iPhone 12/13/14
  mobileXl: '428px', // iPhone Pro Max
  sm: '640px', // Small tablets
  md: '768px', // Tablets
  lg: '1024px', // Small laptops
  xl: '1280px', // Desktop
  '2xl': '1536px', // Large desktop
} as const;

// iPhone-specific breakpoints for common device targeting
export const iphoneBreakpoints = {
  se: '375px', // iPhone SE (2nd/3rd gen)
  mini: '375px', // iPhone 12/13 mini
  standard: '390px', // iPhone 12/13/14
  plus: '414px', // iPhone 6/7/8 Plus
  proMax: '428px', // iPhone 12/13/14 Pro Max
} as const;

// Padding Tokens - 4px-based padding values for use in CSS
export const paddingTokens = {
  // All sides
  none: spaceUnits.none,
  xs: spaceUnits.xs, // 4px
  sm: spaceUnits.sm, // 8px
  md: spaceUnits.md, // 12px
  base: spaceUnits.base, // 16px
  lg: spaceUnits.lg, // 20px
  xl: spaceUnits.xl, // 24px
  '2xl': spaceUnits['2xl'], // 32px
  '3xl': spaceUnits['3xl'], // 40px
  '4xl': spaceUnits['4xl'], // 48px
  '5xl': spaceUnits['5xl'], // 64px
} as const;

// Animation/Transition
export const transitions = {
  duration: {
    fast: '150ms',
    base: '250ms',
    slow: '350ms',
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;
