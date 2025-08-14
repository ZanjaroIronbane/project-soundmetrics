import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  spaceUnits,
} from '../../styles/tokens';

/* Artist Analytics Section */
export const analytics_section = css`
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.xl};
  border: 1px solid ${colors.spotify.border};
`;

export const analytics_note = css`
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.lightGrey};
  margin-bottom: ${spaceUnits.base};
  font-style: italic;
  font-family: ${typography.fontFamily.spotify};
`;

export const metrics_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${spaceUnits.lg};
  margin-top: ${spaceUnits.lg};
`;

export const metric_card = css`
  background: ${colors.spotify.hoverBg};
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.base};
  text-align: center;
  border: 1px solid ${colors.spotify.border};
`;

export const metric_value = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.spotify.green};
  margin-bottom: ${spaceUnits.xs};
`;

export const section_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.lg} 0;
  letter-spacing: -0.04em;
`;

export const metric_label = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.lightGrey};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
