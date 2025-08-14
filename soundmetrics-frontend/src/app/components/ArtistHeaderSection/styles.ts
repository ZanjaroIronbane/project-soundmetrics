import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  spaceUnits,
} from '../../styles/tokens';

/* Artist Header */
export const artist_header = css`
  display: flex;
  align-items: center;
  gap: ${spaceUnits.xl};
  margin-bottom: ${spaceUnits['3xl']};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${spaceUnits.lg};
  }
`;

export const artist_image = css`
  width: 200px;
  height: 200px;
  border-radius: ${borderRadius.full};
  object-fit: cover;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const artist_info = css`
  flex: 1;
  color: ${colors.spotify.white};
`;

export const artist_name_container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spaceUnits.base};
  flex-wrap: wrap;
  margin-bottom: ${spaceUnits.sm};
`;

export const artist_name = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeight.black};
  color: ${colors.spotify.white};
  margin: 0;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

export const artist_followers = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.base};
  color: ${colors.spotify.lightGrey};
  margin-bottom: ${spaceUnits.base};
  font-weight: ${typography.fontWeight.medium};
`;

export const artist_genres = css`
  display: flex;
  flex-wrap: wrap;
  gap: ${spaceUnits.sm};
  justify-content: center;
`;

export const genre_chip = css`
  background: ${colors.spotify.cardBg};
  color: ${colors.spotify.white};
  padding: ${paddingTokens.xs} ${paddingTokens.sm};
  border-radius: ${borderRadius.base};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  border: 1px solid ${colors.spotify.border};
  text-transform: capitalize;
`;

export const compare_button = css`
  background: ${colors.spotify.green};
  color: ${colors.spotify.black};
  border: none;
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.sm} ${paddingTokens.base};
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.bold};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${spaceUnits.xs};

  &:hover {
    background: #1ed760;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
