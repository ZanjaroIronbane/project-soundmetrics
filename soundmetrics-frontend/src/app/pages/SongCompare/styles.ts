import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
  zIndex,
  breakpoints,
  paddingTokens,
} from '../../styles/tokens';

export const comparison_container = css`
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  /* Add top margin for persistent search navbar on all screen sizes */
  margin-top: calc(${spaceUnits.lg} * 3 + ${typography.fontSize['2xl']} + 20px);

  @media (max-width: ${breakpoints.md}) {
    margin-top: calc(${typography.fontSize.xl} * 3 + 20px);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    margin-top: calc(${typography.fontSize.lg} * 3 + 18px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: calc(${typography.fontSize.base} * 3 + 16px);
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: calc(${typography.fontSize.sm} * 3 + 14px);
  }
`;

/* Hero Section for Empty State */
export const comparison_hero_section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: 5vw 5vw;
  background: linear-gradient(
    135deg,
    #1a1a1a 0%,
    #3d2b5f 100%
  ); /* Purple gradient */
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  height: 100%;
  min-height: calc(100vh - 15vh);

  @media (max-width: ${breakpoints.md}) {
    padding: 4vw 4vw;
    min-height: calc(100vh - 12vh);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: 3.5vw 3.5vw;
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: 3.5vw 3.5vw;
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 3vw 3vw;
    min-height: calc(100vh - 8vh);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 2.5vw 2.5vw;
    min-height: calc(100vh - 8vh);
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
        rgba(139, 92, 246, 0.08) 0%,
        /* Purple theme */ transparent 60%
      ),
      radial-gradient(
        circle at 70% 30%,
        rgba(168, 85, 247, 0.06) 0%,
        /* Lighter purple */ transparent 60%
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

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['3xl']};
    margin-bottom: ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize['2xl']};
    margin-bottom: ${spaceUnits.sm};
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

/* VS Animation */
export const vs_animation = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize['8xl']};
  font-weight: ${typography.fontWeight.black};
  color: #8b5cf6; /* Purple theme */
  margin-bottom: ${spaceUnits['2xl']};
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
  letter-spacing: 0.1em;

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['6xl']};
    margin-bottom: ${spaceUnits.xl};
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize['4xl']};
    margin-bottom: ${spaceUnits.lg};
  }
`;

export const content_area_comparison = css`
  flex: 1;
  padding: ${spaceUnits.lg} ${spaceUnits['2xl']};
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  max-height: calc(100vh - 140px);

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

/* Suggestions Section */
export const comparison_suggestions = css`
  margin-top: ${spaceUnits['4xl']};
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: ${spaceUnits['2xl']};
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: ${spaceUnits.xl};
  }
`;

export const suggestions_title_comparison = css`
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

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.base};
  }

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2); /* Purple theme */
    border-color: #8b5cf6; /* Purple theme */
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
  line-height: 1.4;
`;

/* Horizontal Comparison Layout */
export const horizontal_comparison_layout = css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: ${spaceUnits['2xl']};
  align-items: start;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.lg}) {
    gap: ${spaceUnits.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xl};
    text-align: center;

    .comparison-chart {
      order: 3;
    }
  }
`;

export const left_song_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.lg};
  max-width: 300px;
  justify-self: end;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    justify-self: center;
  }
`;

export const right_song_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.lg};
  max-width: 300px;
  justify-self: start;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    justify-self: center;
  }
`;

export const center_comparison_chart = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.lg};
  min-width: 300px;
  max-width: 400px;

  @media (max-width: ${breakpoints.lg}) {
    min-width: 250px;
    max-width: 350px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    min-width: auto;
  }
`;

export const single_song_prompt = css`
  text-align: center;
  margin-top: ${spaceUnits['4xl']};
  padding: ${spaceUnits['2xl']};
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.base};
  border: 1px solid ${colors.spotify.border};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const single_song_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: #8b5cf6; /* Purple theme */
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.base} 0;
  letter-spacing: -0.02em;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xl};
  }
`;

export const single_song_subtitle = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
  line-height: 1.5;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.sm};
  }
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
  color: #8b5cf6; /* Purple theme */
  font-weight: ${typography.fontWeight.bold};
  letter-spacing: 0.1em;
  border: 1px solid ${colors.spotify.border};
  font-family: ${typography.fontFamily.spotify};

  &:hover {
    background: rgba(25, 20, 20, 1);
    transform: translateY(-1px);
  }
`;
