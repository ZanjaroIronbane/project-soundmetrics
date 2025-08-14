import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
} from '../../styles/tokens';

export const compliant_card = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${colors.spotify.cardBg};
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.base};
  transition: background-color 0.2s ease;
  font-family: ${typography.fontFamily.spotify};

  &:hover {
    background: ${colors.spotify.hoverBg};
  }
`;

export const artwork_container = css`
  flex-shrink: 0;
  /* Artwork styling handled inline to follow size guidelines */
`;

export const metadata_container = css`
  flex: 1;
  min-width: 0; /* Allow text truncation */
`;

export const track_title = css`
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.spotify.white};
  line-height: 1.2;
  margin-bottom: 4px;

  /* Text must be legible per guidelines */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const artist_name = css`
  font-size: 0.875rem;
  color: ${colors.spotify.lightGrey};
  line-height: 1.2;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const spotify_link = css`
  background: ${colors.spotify.green};
  color: ${colors.spotify.white};
  border: none;
  border-radius: ${borderRadius.base};
  padding: ${paddingTokens.sm} ${paddingTokens.base};
  font-size: 0.75rem;
  font-weight: 700;
  font-family: ${typography.fontFamily.spotify};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1ed760;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
