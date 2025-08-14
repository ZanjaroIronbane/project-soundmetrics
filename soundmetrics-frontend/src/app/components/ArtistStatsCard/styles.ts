import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
} from '../../styles/tokens';

/* Spotify-style Artist Card - Similar to search results */
export const artist_card_container = css`
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.base}; /* Spotify's squared edges */
  padding: ${spaceUnits.lg};
  margin-bottom: ${spaceUnits.base};
  border: 1px solid ${colors.spotify.border};
  transition: all 0.2s ease;
  font-family: ${typography.fontFamily.spotify};

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-1px);
  }
`;

/* Artist Image Section */
export const artist_image_section = css`
  display: flex;
  justify-content: center;
  margin-bottom: ${spaceUnits.lg};
`;

export const artist_image = css`
  width: 160px;
  height: 160px;
  border-radius: 50%; /* Circular like Spotify */
  object-fit: cover;
  border: 3px solid ${colors.spotify.border};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.spotify.green};
  }
`;

/* Artist Info Section */
export const artist_info_section = css`
  text-align: center;

  .top-track-info {
    margin-top: ${spaceUnits.lg};
    padding-top: ${spaceUnits.base};
    border-top: 1px solid ${colors.spotify.border};

    h4 {
      color: ${colors.spotify.white};
      font-size: ${typography.fontSize.sm};
      font-weight: 700;
      margin: 0 0 ${spaceUnits.xs} 0;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    p {
      color: ${colors.spotify.lightGrey};
      font-size: ${typography.fontSize.base};
      margin: 0 0 ${spaceUnits.xs} 0;
    }

    small {
      color: ${colors.spotify.mediumGrey};
      font-size: ${typography.fontSize.sm};
    }
  }
`;

export const artist_name = css`
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['2xl']};
  font-weight: 700;
  margin: 0 0 ${spaceUnits.base} 0;
  letter-spacing: -0.04em;
  line-height: ${typography.lineHeight.tight};
`;

/* Genres */
export const artist_genres = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spaceUnits.xs};
  margin-bottom: ${spaceUnits.lg};
`;

export const genre_tag = css`
  background: rgba(29, 185, 84, 0.1);
  color: ${colors.spotify.green};
  padding: ${spaceUnits.xs} ${spaceUnits.sm};
  border-radius: ${borderRadius.base};
  font-size: ${typography.fontSize.xs};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid ${colors.spotify.green};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.spotify.green};
    color: ${colors.spotify.white};
  }
`;

/* Stats Grid */
export const artist_stats_grid = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spaceUnits.base};
  margin-bottom: ${spaceUnits.lg};
`;

export const stat_item = css`
  background: rgba(255, 255, 255, 0.02);
  padding: ${spaceUnits.base};
  border-radius: ${borderRadius.base};
  border: 1px solid ${colors.spotify.border};
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: ${colors.spotify.green};
  }
`;

export const stat_value = css`
  display: block;
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.xl};
  font-weight: 900;
  line-height: ${typography.lineHeight.none};
  margin-bottom: ${spaceUnits.xs};
`;

export const stat_label = css`
  display: block;
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.xs};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

/* Popularity Indicator */
export const popularity_indicator = css`
  margin-bottom: ${spaceUnits.lg};

  .popularity-text {
    color: ${colors.spotify.lightGrey};
    font-size: ${typography.fontSize.sm};
    margin-top: ${spaceUnits.xs};
    display: block;
  }
`;

export const popularity_bar = css`
  width: 100%;
  height: 12px; /* Thick bars like Spotify */
  background: ${colors.spotify.border};
  border-radius: ${borderRadius.base};
  overflow: hidden;
  margin-bottom: ${spaceUnits.xs};
`;

export const popularity_fill = css`
  height: 100%;
  background: ${colors.spotify.green};
  border-radius: ${borderRadius.base};
  transition: width 0.6s ease;
`;

/* Spotify Attribution */
export const spotify_attribution = css`
  margin-top: ${spaceUnits.lg};
  padding-top: ${spaceUnits.base};
  border-top: 1px solid ${colors.spotify.border};
  text-align: center;
  font-size: ${typography.fontSize.xs};
  color: ${colors.spotify.green};
  font-weight: 700;
  letter-spacing: 0.1em;
`;

/* Loading State */
export const loading_placeholder = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${spaceUnits['2xl']};
  text-align: center;

  .placeholder-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${colors.spotify.border};
    margin-bottom: ${spaceUnits.lg};
    animation: pulse 2s infinite;
  }

  .placeholder-title {
    color: ${colors.spotify.white};
    font-size: ${typography.fontSize.lg};
    font-weight: 700;
    margin-bottom: ${spaceUnits.sm};
  }

  .placeholder-text {
    color: ${colors.spotify.mediumGrey};
    font-size: ${typography.fontSize.sm};
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
