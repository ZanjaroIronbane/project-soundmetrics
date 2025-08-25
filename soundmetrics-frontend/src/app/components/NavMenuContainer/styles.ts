import { css } from '@emotion/react';
import {
  colors,
  typography,
  spaceUnits,
  shadows,
  paddingTokens,
  breakpoints,
} from '../../styles/tokens';
import {
  BETA_BADGE_CONSTANTS,
  ANIMATION_CONSTANTS,
  BREAKPOINTS,
} from './constants';

/* Industry Standard Sticky Navbar - Following Spotify/GitHub/Modern Web Standards */
export const nav_menu_container = css`
  position: sticky !important;
  top: 0 !important;
  width: 100vw; /* Full viewport width */
  background: rgba(24, 24, 24, 0.95); /* Semi-transparent with blur */
  backdrop-filter: blur(10px); /* Modern glass effect */
  display: flex;
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.xl} 0;
  box-shadow: ${shadows.md};
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily.spotify};
  min-height: 80px;
  margin: 0;
  z-index: 1000 !important; /* Ensure it stays on top */
  left: 0;
  right: 0;

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens.lg} 0;
    min-height: 70px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm} 0;
    min-height: 60px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs} 0;
    min-height: 56px;
  }
`;

/* Desktop nav content wrapper */
export const nav_content_wrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Brand left, nav right */
  width: 100%;
  max-width: 1400px; /* Maximum content width for desktop */
  padding: 0 ${paddingTokens['2xl']}; /* Proper padding on desktop */

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    padding: 0 ${paddingTokens.lg}; /* Add some padding on tablet */
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 ${paddingTokens.base}; /* Responsive padding on mobile */
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 0 ${paddingTokens.sm}; /* Minimal padding on smallest screens */
  }
`;

export const nav_brand = css`
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0; /* Prevent shrinking on small screens */

  h1 {
    font-size: ${typography.fontSize['3xl']}; /* Larger on desktop */
    font-weight: 700;
    margin: 0;
    font-family: ${typography.fontFamily.spotify};
    color: ${colors.spotify.white};
    letter-spacing: -0.04em;
    white-space: nowrap; /* Prevent text wrapping */

    @media (max-width: ${breakpoints.md}) {
      font-size: ${typography.fontSize['2xl']};
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.xl};
    }

    @media (max-width: ${breakpoints.xs}) {
      font-size: ${typography.fontSize.lg};
      letter-spacing: -0.02em;
    }
  }

  a {
    color: ${colors.spotify.white};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover h1 {
      color: ${colors.spotify.green};
    }
  }
`;

export const nav_beta_badge = css`
  background: linear-gradient(
    135deg,
    ${BETA_BADGE_CONSTANTS.gradient.start},
    ${BETA_BADGE_CONSTANTS.gradient.end}
  );
  color: ${colors.spotify.white};
  font-size: ${BETA_BADGE_CONSTANTS.fontSize};
  font-weight: ${typography.fontWeight.bold};
  padding: ${BETA_BADGE_CONSTANTS.padding};
  border-radius: ${BETA_BADGE_CONSTANTS.borderRadius};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: ${spaceUnits.sm};
  box-shadow: ${BETA_BADGE_CONSTANTS.boxShadow};
  font-family: ${typography.fontFamily.spotify};
  animation: pulse-beta ${ANIMATION_CONSTANTS.pulseDuration}
    ${ANIMATION_CONSTANTS.pulseEasing} ${ANIMATION_CONSTANTS.pulseIterations};
  display: inline-block;
  vertical-align: middle;
  line-height: 1;

  @keyframes pulse-beta {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    font-size: ${BETA_BADGE_CONSTANTS.fontSizeMobile};
    padding: ${BETA_BADGE_CONSTANTS.paddingMobile};
    margin-left: ${BETA_BADGE_CONSTANTS.marginLeftMobile};
  }
`;

export const nav_actions = css`
  display: flex;
  gap: ${spaceUnits['2xl']}; /* Larger gap on desktop */
  align-items: center;
  flex-shrink: 0; /* Prevent shrinking */
  margin-left: auto; /* Push to rightmost position */

  @media (max-width: ${breakpoints.md}) {
    gap: ${spaceUnits.lg};
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none; /* Hide desktop nav on mobile */
  }
`;

/* Mobile hamburger menu button */
export const mobile_menu_button = css`
  display: none;
  background: none;
  border: none;
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.xl};
  cursor: pointer;
  padding: ${paddingTokens.sm};
  border-radius: 4px;
  transition: background 0.2s ease;
  margin-left: auto; /* Push to rightmost position on mobile */
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

/* Mobile dropdown menu */
export const mobile_dropdown = css`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${colors.spotify.black};
  border-top: 1px solid ${colors.spotify.border};
  box-shadow: ${shadows.lg};
  display: none;
  flex-direction: column;
  z-index: 1000;

  &.open {
    display: flex;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none !important;
  }
`;

export const mobile_nav_link = css`
  color: ${colors.spotify.lightGrey};
  text-decoration: none;
  padding: ${paddingTokens.lg} ${paddingTokens.xl};
  border-bottom: 1px solid ${colors.spotify.border};
  transition: all 0.2s ease;
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.base};

  &:hover {
    background: ${colors.spotify.hoverBg};
    color: ${colors.spotify.white};
  }

  &:last-child {
    border-bottom: none;
  }

  &[href='/compare'] {
    color: ${colors.spotify.green};
  }

  &[href='/songs/compare'] {
    color: #8b5cf6;
  }
`;

export const nav_link = css`
  color: ${colors.spotify.lightGrey};
  text-decoration: none;
  font-weight: 500;
  font-size: ${typography.fontSize.base}; /* Larger font size on desktop */
  padding: ${spaceUnits.sm} ${spaceUnits.lg}; /* Larger padding on desktop */
  border-radius: 6px;
  transition: all 0.2s ease;
  font-family: ${typography.fontFamily.spotify};
  letter-spacing: -0.04em;
  position: relative;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.sm};
    padding: ${spaceUnits.xs} ${spaceUnits.base};
    border-radius: 4px;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize.xs};
    padding: ${spaceUnits.xs} ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.mobileLg}) {
    font-size: 12px;
    padding: ${spaceUnits.xs} ${spaceUnits.xs};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
    padding: 2px 6px;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: 10px;
    padding: 2px 4px;
  }

  &:hover {
    color: ${colors.spotify.white};
    background: rgba(255, 255, 255, 0.04);
  }

  &[href='/compare'] {
    color: ${colors.spotify.green}; /* Green theme for artists compare */
    font-weight: 600;
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.spotify.white};
      background: ${colors.spotify.green};
    }

    @media (max-width: ${breakpoints.iphoneXr}) {
      flex-direction: column;
      gap: 1px;
      line-height: 1.1;
      font-size: 11px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 1px;
      line-height: 1;
      font-size: 10px;
    }
  }

  &[href='/songs/compare'] {
    color: #8b5cf6; /* Purple theme for songs compare */
    font-weight: 600;
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.spotify.white};
      background: #8b5cf6;
    }

    @media (max-width: ${breakpoints.iphoneXr}) {
      flex-direction: column;
      gap: 1px;
      line-height: 1.1;
      font-size: 11px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 1px;
      line-height: 1;
      font-size: 10px;
    }
  }
`;
