import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  spaceUnits,
} from '../../styles/tokens';

export const albums_section = css`
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.xl};
  border: 1px solid ${colors.spotify.border};
`;

export const section_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin: 0 0 ${spaceUnits.lg} 0;
  letter-spacing: -0.04em;
`;

/* Album Grid */
export const album_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${spaceUnits.base};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const album_item = css`
  display: flex;
  flex-direction: column;
  gap: ${spaceUnits.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const album_cover = css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${borderRadius.base};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const album_info = css`
  text-align: left;
`;

export const album_name = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spaceUnits.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const album_year = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xs};
`;

export const album_stats = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spaceUnits.xs};
`;

export const album_type = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const album_track_count = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xs};
`;
