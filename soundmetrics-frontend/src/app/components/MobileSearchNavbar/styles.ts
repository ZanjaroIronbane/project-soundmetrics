import { css } from '@emotion/react';
import {
  colors,
  paddingTokens,
  zIndex,
  breakpoints,
  typography,
} from '../../styles/tokens';

export const mobile_search_navbar = css`
  position: fixed;
  top: calc(
    ${paddingTokens.base} * 2 + ${typography.fontSize['2xl']} + 2px
  ); /* Main nav height + border */
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.base} ${paddingTokens.lg};
  z-index: ${zIndex.docked}; /* Below main nav but above content */
  box-sizing: border-box;
  display: block;

  /* Desktop styling - more padding and centered content */
  @media (min-width: ${breakpoints.md}) {
    padding: ${paddingTokens.lg} ${paddingTokens['2xl']};
    display: flex;
    justify-content: center;
    align-items: center;

    /* Single search bar aligns with main content areas */
    > div:not([class*='comparison']) {
      max-width: 800px; /* Matches main content area widths */
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    top: calc(${paddingTokens.sm} * 2 + ${typography.fontSize.xl} + 2px);
    padding: ${paddingTokens.sm} ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: calc(${paddingTokens.sm} * 2 + ${typography.fontSize.lg} + 2px);
    padding: ${paddingTokens.sm} ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    top: calc(${paddingTokens.xs} * 2 + ${typography.fontSize.sm} + 2px);
    padding: ${paddingTokens.xs} ${paddingTokens.sm};
  }
`;

/* Grid layout for comparison page with two search bars */
export const comparison_search_grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${paddingTokens.base};
  width: 100%;

  /* Desktop styling - more space and centered, wider for two search bars */
  @media (min-width: ${breakpoints.md}) {
    max-width: 900px; /* Slightly wider than content to accommodate two search bars */
    gap: ${paddingTokens.xl}; /* More space between search bars */
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${paddingTokens.sm};
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;
    gap: ${paddingTokens.sm};
  }
`;
