import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
  zIndex,
  breakpoints,
} from '../../styles/tokens';

export const comparison_container = css`
  min-height: 100vh;
  max-height: 100vh; /* Prevent extra height */
  height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow: hidden; /* Prevent scrolling on main container */
  box-sizing: border-box;
`;

export const page_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  text-align: center;
  font-size: ${typography.fontSize['3xl']};
  margin: 0 0 ${spaceUnits['3xl']} 0;
  letter-spacing: -0.04em;
`;

/* Hero Section for Empty State */
export const comparison_hero_section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${spaceUnits.lg} ${spaceUnits['2xl']};
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  position: relative;
  overflow-y: auto; /* Allow scrolling in hero section */
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%; /* Take remaining space */
  max-height: calc(100vh - 140px); /* Prevent overflow */

  @media (max-width: ${breakpoints.md}) {
    padding: ${spaceUnits.xl} ${spaceUnits.base};
    padding-top: calc(${spaceUnits.xl} + 70px); /* Extra space for search bar */
    height: calc(100vh - 60px);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${spaceUnits.lg} ${spaceUnits.sm};
    padding-top: calc(${spaceUnits.lg} + 60px); /* Extra space for search bar */
    height: calc(100vh - 52px);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${spaceUnits.lg} ${spaceUnits.sm};
    padding-top: calc(${spaceUnits.lg} + 55px); /* Extra space for search bar */
    height: calc(100vh - 48px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.base} ${spaceUnits.sm};
    padding-top: calc(
      ${spaceUnits.base} + 50px
    ); /* Extra space for search bar */
    height: calc(100vh - 44px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spaceUnits.sm} ${spaceUnits.xs};
    padding-top: calc(${spaceUnits.sm} + 45px); /* Extra space for search bar */
    height: calc(100vh - 40px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 70%,
        rgba(29, 185, 84, 0.08) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(138, 43, 226, 0.06) 0%,
        transparent 60%
      );
    pointer-events: none;
  }
`;

export const comparison_hero_title = css`
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

  @media (max-width: ${breakpoints.mobileLg}) {
    font-size: ${typography.fontSize['3xl']};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['2xl']};
    text-align: center;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize.xl};
  }
`;

export const comparison_hero_subtitle = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.medium};
  margin: 0 0 ${spaceUnits['3xl']} 0;
  max-width: 700px;
  line-height: 1.4;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
    margin-bottom: ${spaceUnits['2xl']};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.base};
    margin-bottom: ${spaceUnits.xl};
    text-align: center;
    max-width: 100%;
    padding: 0 ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize.sm};
    margin-bottom: ${spaceUnits.base};
  }
`;

/* Persistent Search Section */
export const persistent_comparison_search = css`
  background: rgba(24, 24, 24, 0.95); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Add blur effect for better visibility */
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${spaceUnits.lg} ${spaceUnits['2xl']};
  position: sticky;
  top: 70px; /* Account for navigation bar */
  z-index: 50; /* Higher z-index to ensure it stays on top */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0; /* Remove any default margins */

  @media (max-width: ${breakpoints.md}) {
    padding: ${spaceUnits.base} ${spaceUnits.lg};
    top: 60px; /* 3.75rem nav bar */
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    top: 52px; /* 3.25rem nav bar */
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    top: 48px; /* 3rem nav bar */
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    top: 44px; /* 2.75rem nav bar */
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spaceUnits.xs} ${spaceUnits.sm};
    top: 40px; /* 2.5rem nav bar */
  }
`;

export const content_area_comparison = css`
  flex: 1;
  padding: ${spaceUnits.lg} ${spaceUnits['2xl']};
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto; /* Allow vertical scrolling */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  height: 100%; /* Take remaining space */
  max-height: calc(100vh - 140px); /* Prevent overflow */

  @media (max-width: ${breakpoints.md}) {
    padding: ${spaceUnits.base} ${spaceUnits.lg};
    max-height: calc(100vh - 120px);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    max-height: calc(100vh - 102px);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    max-height: calc(100vh - 98px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.sm} ${spaceUnits.base};
    max-height: calc(100vh - 94px);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${spaceUnits.xs} ${spaceUnits.sm};
    max-height: calc(100vh - 85px);
  }
`;

/* VS Symbol Animation */
export const vs_animation = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  color: rgba(29, 185, 84, 0.1);
  font-weight: ${typography.fontWeight.black};
  z-index: 0;
  animation: pulse 3s ease-in-out infinite;
  pointer-events: none;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.1;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 6rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 4rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 3rem;
  }
`;

export const comparison_suggestions = css`
  margin-top: ${spaceUnits['4xl']};
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const suggestions_title_comparison = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.lg} 0;
  letter-spacing: -0.02em;
`;

export const comparison_suggestions_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spaceUnits.base};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.sm};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.xs}) {
    gap: ${spaceUnits.xs};
  }
`;

export const suggestion_pair_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.lg};
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

export const suggestion_pair_artists = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  margin: 0 0 ${spaceUnits.xs} 0;
`;

export const suggestion_pair_description = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.sm};
  margin: 0;
`;

export const artist_selection_section = css`
  margin-bottom: ${spaceUnits['3xl']};
`;

export const selection_grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spaceUnits.xl};
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    gap: ${spaceUnits.lg};
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    gap: ${spaceUnits.sm};
  }
`;

export const horizontal_comparison_layout = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${spaceUnits['2xl']};
  align-items: start;
  margin-bottom: ${spaceUnits['2xl']};

  @media (max-width: 1400px) {
    grid-template-columns: 300px 1fr 300px;
    gap: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xl};

    /* Stack order: Chart first, then cards */
    .comparison-chart {
      order: 1;
    }
    .left-artist {
      order: 2;
    }
    .right-artist {
      order: 3;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spaceUnits.base};
    margin-bottom: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    gap: ${spaceUnits.sm};
    margin-bottom: ${spaceUnits.sm};
  }
`;

export const left_artist_card = css`
  height: fit-content;
`;

export const right_artist_card = css`
  height: fit-content;
`;

export const center_comparison_chart = css`
  height: fit-content;
  position: sticky;
  min-width: 500px;
  top: ${spaceUnits.xl};

  @media (max-width: ${breakpoints.lg}) {
    position: relative;
    min-width: auto;
    top: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 300px;
  }

  @media (max-width: ${breakpoints.xs}) {
    min-width: 250px;
  }
`;

export const single_artist_prompt = css`
  text-align: center;
  margin-top: ${spaceUnits['4xl']};
  padding: ${spaceUnits['3xl']};
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.lg};
  border: 2px dashed ${colors.spotify.border};

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: ${spaceUnits['2xl']};
    padding: ${spaceUnits.xl};
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: ${spaceUnits.xl};
    padding: ${spaceUnits.base};
  }
`;

export const single_artist_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.base} 0;
`;

export const single_artist_subtitle = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
  line-height: 1.5;
`;

export const spotify_attribution = css`
  position: fixed;
  bottom: ${spaceUnits.lg};
  right: ${spaceUnits.lg};
  z-index: ${zIndex.tooltip};
  background: rgba(25, 20, 20, 0.95);
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.sm};
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.green};
  font-weight: 700;
  letter-spacing: 0.1em;
  border: 1px solid ${colors.spotify.border};
  font-family: ${typography.fontFamily.spotify};
`;
