import { css } from '@emotion/react';
import {
  colors,
  typography,
  paddingTokens,
  spaceUnits,
  zIndex,
  borderRadius,
} from '../../styles/tokens';

/* Search Page - Spotify Style Artist Details */
export const search_container = css`
  min-height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/* Hero Section for Empty State */
export const hero_section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: ${paddingTokens['4xl']} ${paddingTokens['2xl']};
  background: linear-gradient(135deg, #1a1a1a 0%, #0d1421 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(29, 185, 84, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const hero_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['6xl']};
  font-weight: ${typography.fontWeight.black};
  margin: 0 0 ${spaceUnits.base} 0;
  letter-spacing: -0.04em;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize['4xl']};
  }
`;

export const hero_subtitle = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.medium};
  margin: 0 0 ${spaceUnits['3xl']} 0;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize.lg};
    margin-bottom: ${spaceUnits['2xl']};
  }
`;

export const hero_search_container = css`
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

/* Persistent Search Bar at Top */
export const persistent_search_section = css`
  background: ${colors.spotify.darkGrey};
  padding: ${paddingTokens.xl} ${paddingTokens['3xl']};
  border-bottom: 1px solid ${colors.spotify.border};
  position: sticky;
  top: 70px; /* Account for navigation */
  z-index: 10;

  @media (max-width: 768px) {
    padding: ${paddingTokens.base} ${paddingTokens.lg};
  }
`;

/* Content Area for Results */
export const content_area = css`
  flex: 1;
  padding: ${paddingTokens['2xl']} ${paddingTokens['3xl']};
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: ${paddingTokens.base} ${paddingTokens.lg};
  }
`;

export const page_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits['2xl']} 0;
  letter-spacing: -0.04em;
`;

export const search_section = css`
  margin-bottom: ${spaceUnits['3xl']};
  width: 100%;
`;

/* Suggestions Section */
export const suggestions_section = css`
  margin-top: ${spaceUnits['4xl']};
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const suggestions_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.lg} 0;
  letter-spacing: -0.02em;
`;

export const suggestions_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spaceUnits.base};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const suggestion_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(29, 185, 84, 0.2);
    border-color: ${colors.spotify.green};
  }
`;

export const suggestion_icon = css`
  font-size: ${typography.fontSize['3xl']};
  margin-bottom: ${spaceUnits.sm};
  display: block;
`;

export const suggestion_text = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
`;

export const suggestion_description = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.sm};
  margin: ${spaceUnits.xs} 0 0 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const suggestion_image = css`
  width: 80px;
  height: 80px;
  border-radius: ${borderRadius.base};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

export const suggestion_meta = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xs};
  font-weight: ${typography.fontWeight.medium};
`;

/* Loading State */
export const loading_container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: calc(100vh - 210px);
  text-align: center;
  padding: ${spaceUnits['4xl']};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const loading_spinner = css`
  width: 60px;
  height: 60px;
  border: 4px solid ${colors.spotify.border};
  border-top: 4px solid ${colors.spotify.green};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: ${spaceUnits.xl};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const loading_text = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
`;

export const artist_details_section = css`
  margin-top: ${spaceUnits['2xl']};
`;

/* Music Note Animation Background */
export const floating_notes = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '♪';
    position: absolute;
    color: rgba(29, 185, 84, 0.1);
    font-size: 4rem;
    animation: float 8s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &::after {
    content: '♫';
    top: 60%;
    right: 15%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0.1;
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
      opacity: 0.3;
    }
  }
`;

/* Content Grid - Wider Layout */
export const content_grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spaceUnits['2xl']};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

/* Search Enhancement for Empty State */
export const enhanced_search_section = css`
  position: relative;

  /* Enhanced search styling for prominence */
  .artist-selector-enhanced {
    transform: scale(1.05);
    box-shadow: 0 8px 32px rgba(29, 185, 84, 0.15);

    .MuiInputBase-root {
      background: linear-gradient(
        135deg,
        ${colors.spotify.hoverBg} 0%,
        rgba(29, 185, 84, 0.05) 100%
      );
      border: 2px solid rgba(29, 185, 84, 0.3);

      &:hover {
        border-color: ${colors.spotify.green};
        box-shadow: 0 0 20px rgba(29, 185, 84, 0.2);
      }
    }
  }
`;

export const full_width_section = css`
  grid-column: 1 / -1;
  margin-bottom: ${spaceUnits['2xl']};
`;

/* Decorative Elements */
export const search_decoration = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle,
    rgba(29, 185, 84, 0.03) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
`;

/* Spotify Attribution */
export const spotify_attribution = css`
  position: fixed;
  bottom: ${spaceUnits.lg};
  right: ${spaceUnits.lg};
  z-index: ${zIndex.tooltip};
  background: rgba(25, 20, 20, 0.95);
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.sm};
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.green};
  font-weight: ${typography.fontWeight.bold};
  letter-spacing: 0.1em;
  border: 1px solid ${colors.spotify.border};
  font-family: ${typography.fontFamily.spotify};

  &:hover {
    background: rgba(25, 20, 20, 1);
    transform: translateY(-1px);
  }
`;
