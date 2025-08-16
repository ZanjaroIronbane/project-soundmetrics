import { css } from '@emotion/react';
import {
  colors,
  typography,
  spaceUnits,
  shadows,
  zIndex,
  paddingTokens,
  breakpoints,
} from '../../styles/tokens';
import {
  BETA_BADGE_CONSTANTS,
  ANIMATION_CONSTANTS,
  BREAKPOINTS,
} from './constants';

/* Following Spotify Design Guidelines */
export const nav_menu_container = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${colors.spotify.black};
  display: flex;
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.base} ${paddingTokens.base};
  z-index: ${zIndex.sticky};
  box-shadow: ${shadows.md};
  align-items: center;
  justify-content: space-between;
  font-family: ${typography.fontFamily.spotify};

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm} ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs} ${paddingTokens.sm};
  }
`;

export const nav_brand = css`
  display: flex;
  align-items: center;
  position: relative;

  h1 {
    font-size: ${typography.fontSize['2xl']};
    font-weight: 700;
    margin: 0;
    font-family: ${typography.fontFamily.spotify};
    color: ${colors.spotify.white};
    letter-spacing: -0.04em;

    @media (max-width: ${breakpoints.mobileLg}) {
      font-size: ${typography.fontSize.xl};
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: ${typography.fontSize.lg};
    }

    @media (max-width: ${breakpoints.xs}) {
      font-size: ${typography.fontSize.base};
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
  gap: ${spaceUnits.lg};
  align-items: center;

  @media (max-width: ${breakpoints.mobileLg}) {
    gap: ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.xs}) {
    gap: ${spaceUnits.xs};
  }
`;

export const nav_link = css`
  color: ${colors.spotify.lightGrey};
  text-decoration: none;
  font-weight: 500;
  font-size: ${typography.fontSize.sm};
  padding: ${spaceUnits.xs} ${spaceUnits.base};
  border-radius: 4px;
  transition: all 0.2s ease;
  font-family: ${typography.fontFamily.spotify};
  letter-spacing: -0.04em;
  position: relative;
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobileLg}) {
    font-size: ${typography.fontSize.xs};
    padding: ${spaceUnits.xs} ${spaceUnits.sm};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.xs} ${spaceUnits.xs};
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
    color: ${colors.spotify.green};
    font-weight: 600;
    display: flex;
    align-items: center;

    &:hover {
      color: ${colors.spotify.white};
      background: ${colors.spotify.green};
    }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 2px;
      line-height: 1.2;
    }
  }
`;
