// NavMenuContainer component constants

// Beta badge styling constants
export const BETA_BADGE_CONSTANTS = {
  fontSize: '10px',
  fontSizeMobile: '9px',
  padding: '2px 6px',
  paddingMobile: '1px 4px',
  borderRadius: '8px',
  marginLeft: '8px', // spaceUnits.sm value
  marginLeftMobile: '4px',
  boxShadow: '0 2px 8px rgba(255, 68, 68, 0.3)',
  gradient: {
    start: '#ff4444',
    end: '#cc1111',
  },
} as const;

// Animation constants
export const ANIMATION_CONSTANTS = {
  pulseDuration: '2s',
  pulseEasing: 'ease-in-out',
  pulseIterations: 'infinite',
} as const;

// Responsive breakpoints for this component
export const BREAKPOINTS = {
  mobile: '768px',
} as const;
