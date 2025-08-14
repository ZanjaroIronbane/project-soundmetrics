import { css } from '@emotion/react';
import { colors, typography, spaceUnits, zIndex } from '../../styles/tokens';

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
`;

export const hero_subtitle = css`
  color: ${colors.spotify.green};
  font-family: ${typography.fontFamily.spotify};
  font-weight: ${typography.fontWeight.light};
  font-size: ${typography.fontSize.xl};
  line-height: ${typography.lineHeight.normal};
  max-width: 600px;
  margin: 0 auto ${spaceUnits['3xl']} auto;
  z-index: ${zIndex.base};

  @media (min-width: 768px) {
    font-size: ${typography.fontSize['2xl']};
  }
`;

export const popular_comparisons = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spaceUnits.xl};
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${spaceUnits.base};
  z-index: ${zIndex.base};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits['2xl']};
    padding: 0;
  }
`;

export const comparison_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: 4px;
  padding: ${spaceUnits.lg} ${spaceUnits.xl};
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.spotify.hoverBg};
    border-color: ${colors.spotify.green};
    transform: translateY(-1px);
  }
`;

export const comparison_text = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.spotify.white};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${typography.fontSize.lg};
    letter-spacing: 0.08em;
  }
`;
