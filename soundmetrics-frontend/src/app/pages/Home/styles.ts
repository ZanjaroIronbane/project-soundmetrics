import { css } from '@emotion/react';
import { colors, typography, zIndex, paddingTokens } from '../../styles/tokens';

// Following Spotify Design Guidelines
export const pageContainer = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${colors.spotify.black}; /* Official Spotify background */
  font-family: ${typography.fontFamily
    .spotify}; /* System fonts per guidelines */

  * {
    box-sizing: border-box;
  }
`;

export const contentContainer = css`
  /* Remove background image from here since ParallaxText handles it */
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${colors.spotify.black}; /* Clean background */

  > * {
    position: relative;
    z-index: ${zIndex.base};
  }
`;

/* Spotify Attribution following design guidelines */
export const spotify_attribution = css`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;
  background: rgba(25, 20, 20, 0.95);
  border-radius: 4px; /* Following Spotify's squared edges */
  padding: ${paddingTokens.md};
  backdrop-filter: blur(10px);
  font-size: 0.875rem;
  color: ${colors.spotify.green};
  font-weight: 700;
  letter-spacing: 0.1em;
  font-family: ${typography.fontFamily.spotify};
  border: 1px solid ${colors.spotify.border};
  transition: all 0.2s ease;

  &:hover {
    background: rgba(25, 20, 20, 1);
    transform: translateY(-1px);
  }
`;
