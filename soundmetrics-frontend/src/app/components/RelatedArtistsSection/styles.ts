import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  spaceUnits,
} from '../../styles/tokens';

export const related_section = css`
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

/* Related Artists Grid */
export const related_artists_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${spaceUnits.base};
  max-width: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
`;

export const related_artist_item = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spaceUnits.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const related_artist_image = css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${borderRadius.full};
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const related_artist_name = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
