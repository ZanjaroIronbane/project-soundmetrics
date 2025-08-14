import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
} from '../../styles/tokens';

/* Simplified Spotify Comparison Chart */
export const comparison_chart_container = css`
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.spotify.border};
`;

export const chart_title = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize['2xl']};
  font-weight: 900;
  color: ${colors.spotify.white};
  text-align: center;
  margin: 0;
  padding: ${spaceUnits.xl};
  letter-spacing: -0.04em;
  border-bottom: 1px solid ${colors.spotify.border};
`;

export const artist_comparison_card = css`
  padding: ${spaceUnits.xl};
`;

export const comparison_metric = css`
  padding: ${spaceUnits.lg} 0;
  border-bottom: 1px solid ${colors.spotify.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const metric_name = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${spaceUnits.sm};
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.base};
  color: ${colors.spotify.lightGrey};
`;

export const metric_name_text = css`
  text-align: left;
`;

export const winner_indicator = css`
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.green};
  font-weight: 700;
  text-align: right;
`;

export const metric_bars = css`
  display: flex;
  flex-direction: column;
  gap: ${spaceUnits.sm};
`;

export const artist_bar = css`
  display: flex;
  align-items: center;
  gap: ${spaceUnits.sm};
  min-height: 40px;
`;

export const artist_name_label = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.sm};
  font-weight: 600;
  color: ${colors.spotify.white};
  min-width: 120px;
  text-align: left;
`;

export const vs_divider = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.xs};
  font-weight: 800;
  color: ${colors.spotify.mediumGrey};
  text-align: center;
  letter-spacing: 0.2em;
  margin: ${spaceUnits.xs} 0;
  opacity: 0.5;
`;

export const bar_wrapper = css`
  height: 16px;
  background: ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  overflow: hidden;
  position: relative;
  flex: 1;
  margin: 0 ${spaceUnits.sm};
`;

export const bar_fill = css`
  height: 100%;
  border-radius: ${borderRadius.base};
  transition: width 0.6s ease;

  &.winner {
    background: ${colors.spotify.green};
  }

  &.non-winner {
    background: ${colors.spotify.white};
  }
`;

export const bar_value_label = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.sm};
  font-weight: 700;
  color: ${colors.spotify.white};
  min-width: 80px;
  text-align: right;
`;
