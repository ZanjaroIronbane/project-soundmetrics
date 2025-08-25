import { css } from '@emotion/react';
import { colors, paddingTokens, breakpoints } from '../../styles/tokens';

export const mobile_search_navbar = css`
  position: relative;
  width: 100vw; /* Full viewport width */
  background: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.lg} 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Above content but below sticky navbar */

  /* Desktop styling - full width with centered content */
  @media (min-width: ${breakpoints.md}) {
    > div {
      width: 100%;
      max-width: 1400px; /* Match main nav max-width */
      padding: 0 ${paddingTokens['2xl']};
    }

    /* Single search bar styling */
    > div:not([class*='comparison']) {
      max-width: 1000px; /* Wider for desktop */
    }
  }

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens.base} 0;
    > div {
      padding: 0 ${paddingTokens.lg};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm} 0;
    > div {
      padding: 0 ${paddingTokens.base};
    }
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs} 0;
    > div {
      padding: 0 ${paddingTokens.sm};
    }
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
