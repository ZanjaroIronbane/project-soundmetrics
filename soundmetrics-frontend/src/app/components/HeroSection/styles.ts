import { css } from '@emotion/react';
import {
  colors,
  typography,
  spaceUnits,
  zIndex,
  breakpoints,
} from '../../styles/tokens';

/* Simplified hero section - modern browsers */
export const hero_section = css`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: transparent;
  position: relative;
  z-index: 1;
  padding: ${spaceUnits.base};

  @media (max-width: ${breakpoints.iphoneXr}) {
    min-height: 60vh;
    padding: ${spaceUnits.sm} ${spaceUnits.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 50vh;
    padding: ${spaceUnits.sm};
  }
`;

export const hero_subtitle = css`
  color: ${colors.spotify.green};
  font-family: ${typography.fontFamily.spotify};
  font-weight: ${typography.fontWeight.light};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.normal};
  max-width: 600px;
  margin: 0 auto ${spaceUnits['2xl']} auto;
  z-index: ${zIndex.base};
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.lg};
    margin: 0 auto ${spaceUnits['2xl']} auto;
  }

  @media (min-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize.xl};
    margin: 0 auto ${spaceUnits['3xl']} auto;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['2xl']};
    margin: 0 auto ${spaceUnits['3xl']} auto;
  }
`;

export const popular_comparisons = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spaceUnits.base};
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${spaceUnits.sm};
  z-index: ${zIndex.base};

  @media (min-width: ${breakpoints.mobile}) {
    gap: ${spaceUnits.lg};
    padding: 0 ${spaceUnits.base};
  }

  @media (min-width: ${breakpoints.iphoneXr}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.xl};
  }

  @media (min-width: ${breakpoints.md}) {
    gap: ${spaceUnits['2xl']};
    padding: 0;
  }
`;

export const comparison_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: 4px;
  padding: ${spaceUnits.base} ${spaceUnits.lg};
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: ${spaceUnits.lg} ${spaceUnits.xl};
    min-height: 70px;
  }

  @media (min-width: ${breakpoints.iphoneXr}) {
    padding: ${spaceUnits.lg} ${spaceUnits.xl};
    min-height: 80px;
  }

  &:hover {
    background: ${colors.spotify.hoverBg};
    border-color: ${colors.spotify.green};
    transform: translateY(-1px);
  }
`;

export const comparison_text = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.spotify.white};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  display: block;
  text-align: center;
  line-height: 1.3;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.base};
    letter-spacing: 0.05em;
  }

  @media (min-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize.base};
    letter-spacing: 0.06em;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize.lg};
    letter-spacing: 0.08em;
  }
`;
