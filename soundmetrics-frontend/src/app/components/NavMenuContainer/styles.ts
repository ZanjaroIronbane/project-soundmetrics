import { css } from '@emotion/react';
import {
  colors,
  typography,
  spaceUnits,
  shadows,
  zIndex,
  paddingTokens,
} from '../../styles/tokens';

/* Following Spotify Design Guidelines */
export const nav_menu_container = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${colors.spotify.black};
  display: flex;
  border-bottom: 1px solid ${colors.spotify.border};
  padding: ${paddingTokens.base} 0;
  z-index: ${zIndex.sticky};
  box-shadow: ${shadows.md};
  align-items: center;
  justify-content: space-between;
  font-family: ${typography.fontFamily.spotify};
`;

export const nav_brand = css`
  display: flex;
  align-items: center;

  h1 {
    font-size: ${typography.fontSize['2xl']};
    font-weight: 700;
    margin: 0;
    font-family: ${typography.fontFamily.spotify};
    color: ${colors.spotify.white};
    letter-spacing: -0.04em;
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

export const nav_actions = css`
  display: flex;
  gap: ${spaceUnits.lg};
  align-items: center;
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

  &:hover {
    color: ${colors.spotify.white};
    background: rgba(255, 255, 255, 0.04);
  }

  &[href='/compare'] {
    color: ${colors.spotify.green};
    font-weight: 600;

    &:hover {
      color: ${colors.spotify.white};
      background: ${colors.spotify.green};
    }
  }
`;
