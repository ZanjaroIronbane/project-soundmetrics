import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
  zIndex,
} from '../../styles/tokens';

export const comparison_container = css`
  padding: ${spaceUnits['2xl']} ${spaceUnits['3xl']};
  min-height: 100vh;
  background: ${colors.spotify.darkGrey};
  font-family: ${typography.fontFamily.spotify};
  max-width: 100%;
  margin: 0 auto;
`;

export const page_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  text-align: center;
  font-size: ${typography.fontSize['3xl']};
  font-weight: 900;
  margin: 0 0 ${spaceUnits['3xl']} 0;
  letter-spacing: -0.04em;
`;

export const artist_selection_section = css`
  margin-bottom: ${spaceUnits.xl};
  background: ${colors.spotify.cardBg};
  padding: ${spaceUnits.xl};
  border-radius: ${borderRadius.lg};
  border: 1px solid ${colors.spotify.border};
`;

export const selection_grid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spaceUnits.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.lg};
  }
`;

export const horizontal_comparison_layout = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${spaceUnits['2xl']};
  align-items: start;
  margin-bottom: ${spaceUnits['2xl']};

  @media (max-width: 1400px) {
    grid-template-columns: 300px 1fr 300px;
    gap: ${spaceUnits.base};
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xl};

    /* Stack order: Chart first, then cards */
    .comparison-chart {
      order: 1;
    }
    .left-artist {
      order: 2;
    }
    .right-artist {
      order: 3;
    }
  }
`;

export const left_artist_card = css`
  height: fit-content;
`;

export const right_artist_card = css`
  height: fit-content;
`;

export const center_comparison_chart = css`
  height: fit-content;
  position: sticky;
  min-width: 500px;
  top: ${spaceUnits.xl};
`;

export const spotify_attribution = css`
  position: fixed;
  bottom: ${spaceUnits.lg};
  right: ${spaceUnits.lg};
  z-index: ${zIndex.tooltip};
  background: rgba(25, 20, 20, 0.95);
  border-radius: ${borderRadius.base};
  padding: ${spaceUnits.sm};
  font-size: ${typography.fontSize.sm};
  color: ${colors.spotify.green};
  font-weight: 700;
  letter-spacing: 0.1em;
  border: 1px solid ${colors.spotify.border};
  font-family: ${typography.fontFamily.spotify};
`;
