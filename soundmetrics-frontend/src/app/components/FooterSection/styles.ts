import { css } from '@emotion/react';
import { colors, typography, spaceUnits } from '../../styles/tokens';

// Footer Section
export const footerSection = css`
  background: rgba(0, 0, 0, 0.8);
  padding: ${spaceUnits['3xl']} ${spaceUnits.base} ${spaceUnits.xl}
    ${spaceUnits.base};
  text-align: center;
  margin-top: auto;

  @media (min-width: 768px) {
    padding: ${spaceUnits['4xl']} ${spaceUnits['4xl']} ${spaceUnits['2xl']}
      ${spaceUnits['4xl']};
  }
`;

export const footerContent = css`
  max-width: 800px;
  margin: 0 auto;
`;

export const footerTitle = css`
  font-family: ${typography.fontFamily.primary};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.primary.main};
  margin: 0 0 ${spaceUnits.base} 0;
`;

export const footerDescription = css`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.secondary.dark};
  margin: 0 0 ${spaceUnits['2xl']} 0;
  line-height: ${typography.lineHeight.relaxed};
`;

export const footerLinks = css`
  display: flex;
  justify-content: center;
  gap: ${spaceUnits['2xl']};
  margin-bottom: ${spaceUnits['2xl']};
  flex-wrap: wrap;
`;

export const footerLink = css`
  color: ${colors.primary.light};
  text-decoration: none;
  font-size: ${typography.fontSize.base};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary.main};
  }
`;

export const footerCopyright = css`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.secondary.dark};
  margin: 0;
  padding-top: ${spaceUnits.base};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
