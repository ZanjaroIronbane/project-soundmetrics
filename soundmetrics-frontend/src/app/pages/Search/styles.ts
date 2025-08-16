import { css } from '@emotion/react';
import {
  colors,
  typography,
  paddingTokens,
  spaceUnits,
  zIndex,
  borderRadius,
  breakpoints,
} from '../../styles/tokens';

/* Search Page - Spotify Style Artist Details */
export const search_container = css`
  min-height: 100vh;
  max-height: 100vh; /* Prevent extra height */
  height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent scrolling on main container */
  box-sizing: border-box;
`;

/* Hero Section for Empty State */
export const hero_section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${paddingTokens['2xl']} ${paddingTokens['2xl']};
  padding-top: calc(
    ${paddingTokens['2xl']} + 80px
  ); /* Extra space for sticky search bar */
  background: linear-gradient(135deg, #1a1a1a 0%, #0d1421 100%);
  position: relative;
  overflow-y: auto; /* Allow scrolling in hero section */
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%; /* Take remaining space */
  max-height: calc(100vh - 140px); /* Prevent overflow */

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens.xl} ${paddingTokens.base};
    padding-top: calc(
      ${paddingTokens.xl} + 70px
    ); /* Extra space for search bar */
    max-height: calc(100vh - 120px);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${paddingTokens.lg} ${paddingTokens.sm};
    padding-top: calc(
      ${paddingTokens.lg} + 60px
    ); /* Extra space for search bar */
    max-height: calc(100vh - 102px);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${paddingTokens.lg} ${paddingTokens.sm};
    padding-top: calc(
      ${paddingTokens.lg} + 55px
    ); /* Extra space for search bar */
    max-height: calc(100vh - 98px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.base} ${paddingTokens.sm};
    padding-top: calc(
      ${paddingTokens.base} + 50px
    ); /* Extra space for search bar */
    max-height: calc(100vh - 94px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.sm} ${paddingTokens.xs};
    padding-top: calc(
      ${paddingTokens.sm} + 45px
    ); /* Extra space for search bar */
    max-height: calc(100vh - 85px);
  }

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

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['4xl']};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['3xl']};
    margin-bottom: ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize['2xl']};
    margin-bottom: ${spaceUnits.sm};
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

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
    margin-bottom: ${spaceUnits['2xl']};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.base};
    margin-bottom: ${spaceUnits.lg};
    line-height: 1.5;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize.sm};
    margin-bottom: ${spaceUnits.base};
    line-height: 1.6;
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
  background: rgba(24, 24, 24, 0.95); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Add blur effect for better visibility */
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.lg} ${paddingTokens['2xl']};
  position: sticky;
  top: 70px; /* Account for navigation bar */
  z-index: 50; /* Higher z-index to ensure it stays on top */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0; /* Remove any default margins */

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens.base} ${paddingTokens.lg};
    top: 60px; /* 3.75rem nav bar */
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    top: 52px; /* 3.25rem nav bar */
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    top: 48px; /* 3rem nav bar */
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    top: 44px; /* 2.75rem nav bar */
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs} ${paddingTokens.sm};
    top: 40px; /* 2.5rem nav bar */
  }
`;

/* Content Area for Results */
export const content_area = css`
  flex: 1;
  padding: ${paddingTokens.lg} ${paddingTokens['2xl']};
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  height: 100%; /* Take remaining space */
  max-height: calc(100vh - 140px); /* Prevent overflow */

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens.base} ${paddingTokens.lg};
    max-height: calc(100vh - 120px);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    max-height: calc(100vh - 102px);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    max-height: calc(100vh - 98px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
    max-height: calc(100vh - 94px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs} ${paddingTokens.sm};
    max-height: calc(100vh - 85px);
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
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: ${spaceUnits['2xl']};
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: ${spaceUnits.xl};
  }
`;

export const suggestions_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.lg} 0;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xl};
    margin-bottom: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize.lg};
    margin-bottom: ${spaceUnits.sm};
  }
`;

export const suggestions_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spaceUnits.base};
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${spaceUnits.sm};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.sm};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.xs};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xs};
    max-width: 100%;
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
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.sm};
  }

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
  width: min(80px, 30vw);
  height: min(80px, 30vw);
  max-width: 80px;
  max-height: 80px;
  border-radius: ${borderRadius.base};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin: 0 auto ${spaceUnits.sm} auto;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    width: min(60px, 25vw);
    height: min(60px, 25vw);
    max-width: 60px;
    max-height: 60px;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: min(50px, 20vw);
    height: min(50px, 20vw);
    max-width: 50px;
    max-height: 50px;
  }
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
