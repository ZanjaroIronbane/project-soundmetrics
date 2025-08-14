import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  spaceUnits,
} from '../../styles/tokens';

export const tracks_section = css`
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

/* Track List */
export const track_list = css`
  display: flex;
  flex-direction: column;
  gap: ${spaceUnits.sm};
`;

export const track_item = css`
  display: flex;
  align-items: center;
  gap: ${spaceUnits.base};
  padding: ${paddingTokens.sm};
  border-radius: ${borderRadius.base};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${colors.spotify.hoverBg};
  }
`;

export const track_number = css`
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.sm};
  min-width: 20px;
  font-family: ${typography.fontFamily.spotify};
`;

export const track_info = css`
  flex: 1;
  min-width: 0;
`;

export const track_name = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spaceUnits.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const track_artists = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.sm};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const track_stats = css`
  display: flex;
  align-items: center;
  gap: ${spaceUnits.base};
  margin-left: auto;
`;

export const track_stat = css`
  font-family: ${typography.fontFamily.spotify};
  font-size: ${typography.fontSize.xs};
  color: ${colors.spotify.lightGrey};
  display: flex;
  align-items: center;
  gap: ${spaceUnits.xs};
  min-width: 50px;
  justify-content: center;
`;

export const popularity_bar = css`
  width: 40px;
  height: 4px;
  background: ${colors.spotify.border};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

export const popularity_score = css`
  height: 100%;
  background: ${colors.spotify.green};
  border-radius: 2px;
  transition: width 0.3s ease;
`;

export const popularity_label = css`
  font-size: ${typography.fontSize.xs};
  color: ${colors.spotify.lightGrey};
  font-family: ${typography.fontFamily.spotify};
`;
