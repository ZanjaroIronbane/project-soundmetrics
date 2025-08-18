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

/* Song Lookup Page - Purple Theme */
export const song_lookup_container = css`
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  /* Add top margin for persistent search navbar on all screen sizes */
  margin-top: calc(
    ${paddingTokens.lg} * 3 + ${typography.fontSize['2xl']} + 2px
  );

  @media (max-width: ${breakpoints.md}) {
    margin-top: calc(
      ${paddingTokens.base} * 3 + ${typography.fontSize.xl} + 2px
    );
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    margin-top: calc(${paddingTokens.sm} * 3 + ${typography.fontSize.lg} + 2px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: calc(
      ${paddingTokens.sm} * 3 + ${typography.fontSize.base} + 2px
    );
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-top: calc(${paddingTokens.xs} * 3 + ${typography.fontSize.sm} + 2px);
  }
`;

/* Hero Section for Empty State */
export const hero_section = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: 5vw 5vw;
  padding-top: calc(10vw + 5vh);
  background: linear-gradient(
    135deg,
    #1a1a1a 0%,
    #2d1b42 100%
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
    padding-top: calc(8vw + 4vh);
    min-height: calc(100vh - 12vh);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: 3.5vw 3.5vw;
    padding-top: calc(7vw + 3vh);
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: 3.5vw 3.5vw;
    padding-top: calc(7vw + 3vh);
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 3vw 3vw;
    padding-top: calc(6vw + 2vh);
    min-height: calc(100vh - 8vh);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 2.5vw 2.5vw;
    padding-top: calc(5vw + 2vh);
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
      circle at 50% 50%,
      rgba(139, 92, 246, 0.1) 0%,
      /* Purple theme */ transparent 70%
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

/* Content Area for Results */
export const content_area = css`
  flex: 1;
  padding: 3.5vw 5vw;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  min-height: calc(100vh - 15vh);

  @media (max-width: ${breakpoints.md}) {
    padding: 3vw 4vw;
    min-height: calc(100vh - 12vh);
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: 2.5vw 3.5vw;
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    padding: 2.5vw 3.5vw;
    min-height: calc(100vh - 10vh);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 2vw 3vw;
    min-height: calc(100vh - 8vh);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 1.5vw 2.5vw;
    min-height: calc(100vh - 8vh);
  }
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
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 30vw), 1fr));
  gap: 2vw;
  max-width: min(800px, 90vw);
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5vw;
    max-width: 95vw;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2vw;
    max-width: 90vw;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5vw;
    max-width: 90vw;
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;
    gap: 3vw;
    max-width: 85vw;
  }
`;

export const suggestion_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  padding: max(${paddingTokens.base}, 2.5vw);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: max(${paddingTokens.sm}, 2vw);
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: max(${paddingTokens.xs}, 1.5vw);
  }

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2); /* Purple theme */
    border-color: #8b5cf6; /* Purple theme */
  }
`;

export const suggestion_image = css`
  width: 80px;
  height: 80px;
  margin: 0 auto max(${spaceUnits.sm}, 1vw);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(139, 92, 246, 0.1); /* Purple theme background */
  color: #8b5cf6; /* Purple theme */
  font-size: ${typography.fontSize['3xl']};
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    font-size: ${typography.fontSize['2xl']};
    margin-bottom: max(${spaceUnits.xs}, 0.8vw);
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 50px;
    height: 50px;
    font-size: ${typography.fontSize.xl};
    margin-bottom: max(${spaceUnits.xs}, 0.5vw);
  }
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
  border-top: 4px solid #8b5cf6; /* Purple theme */
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

export const song_details_section = css`
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
    content: '🎵';
    position: absolute;
    color: rgba(139, 92, 246, 0.1); /* Purple theme */
    font-size: 4rem;
    animation: float 8s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &::after {
    content: '🎶';
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

/* Content Grid */
export const content_grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spaceUnits['2xl']};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const full_width_section = css`
  grid-column: 1 / -1;
  margin-bottom: ${spaceUnits['2xl']};
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
