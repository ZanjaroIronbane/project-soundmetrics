import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
  paddingTokens,
  zIndex,
} from '../../styles/tokens';
import heroImage from '../../../assets/hero_image.png';

export const new_releases_section = css`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
`;

export const parallax_background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  z-index: 0;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export const section_overlay = css`
  position: relative;
  z-index: ${zIndex.base};
  background: rgba(25, 20, 20, 0.8);
  min-height: 100vh;
  padding: ${paddingTokens['4xl']} ${paddingTokens['2xl']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const section_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.black};
  text-align: center;
  margin: 0 0 ${spaceUnits['3xl']} 0;
  letter-spacing: -0.04em;

  @media (max-width: 768px) {
    font-size: ${typography.fontSize['3xl']};
  }
`;

export const releases_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spaceUnits['2xl']};
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xl};
  }
`;

export const release_card = css`
  background: ${colors.spotify.cardBg};
  border: 1px solid ${colors.spotify.border};
  border-radius: ${borderRadius.lg};
  padding: ${paddingTokens.xl};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(29, 185, 84, 0.3);
    border-color: ${colors.spotify.green};
  }
`;

export const release_image = css`
  width: 120px;
  height: 120px;
  border-radius: ${borderRadius.base};
  object-fit: cover;
  margin: 0 auto ${spaceUnits.lg} auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

export const release_info = css`
  display: flex;
  flex-direction: column;
  gap: ${spaceUnits.sm};
`;

export const release_artist = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  margin: 0;
`;

export const release_album = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.lightGrey};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const release_year = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.green};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
`;
