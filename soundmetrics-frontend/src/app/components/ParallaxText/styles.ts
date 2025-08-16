import { css } from '@emotion/react';
import { typography, breakpoints } from '../../styles/tokens';

/* Simplified hollow text with parallax - modern browsers only */
export const parallax_container = css`
  font-weight: ${typography.fontWeight.black};
  font-size: ${typography.fontSize['8xl']};
  line-height: ${typography.lineHeight.tight};
  font-family: ${typography.fontFamily.spotify};
  text-transform: uppercase;
  letter-spacing: -0.04em;

  /* Hollow text effect */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* Background image for parallax */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  /* Performance optimizations */
  will-change: background-position;
  user-select: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 10;
  text-align: center;

  /* Responsive scaling */
  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['6xl']};
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize['5xl']};
    letter-spacing: -0.03em;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize['4xl']};
    letter-spacing: -0.02em;
  }

  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typography.fontSize['3xl']};
    letter-spacing: -0.01em;
  }
`;
