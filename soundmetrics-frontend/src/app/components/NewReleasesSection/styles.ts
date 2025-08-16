import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  spaceUnits,
  paddingTokens,
  zIndex,
  breakpoints,
} from '../../styles/tokens';
import heroImage from '../../../assets/hero_image.png';

export const new_releases_section = css`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
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

  @media (max-width: ${breakpoints.md}) {
    background-attachment: scroll;
  }

  @media (max-width: ${breakpoints.mobile}) {
    background-size: cover;
    background-position: center center;
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
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;

  @media (max-width: ${breakpoints.md}) {
    padding: ${paddingTokens['2xl']} ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${paddingTokens.xl} ${paddingTokens.sm};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.base} ${paddingTokens.xs};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.sm} ${paddingTokens.xs};
  }
`;

export const section_title = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.black};
  text-align: center;
  margin: 0 0 ${spaceUnits['3xl']} 0;
  letter-spacing: -0.04em;

  @media (max-width: ${breakpoints.md}) {
    font-size: ${typography.fontSize['3xl']};
    margin: 0 0 ${spaceUnits['2xl']} 0;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize['2xl']};
    margin: 0 0 ${spaceUnits.xl} 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xl};
    margin: 0 0 ${spaceUnits.base} 0;
  }
`;

export const releases_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spaceUnits['2xl']};
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: ${spaceUnits.xl};
  }

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.lg};
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${spaceUnits.sm};
    max-width: 100%;
    margin: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.sm};
    max-width: 100%;
    margin: 0;
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: 1fr;
    gap: ${spaceUnits.xs};
    max-width: 100%;
    margin: 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  @media (max-width: ${breakpoints.iphoneXr}) {
    padding: ${paddingTokens.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${paddingTokens.sm};
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: ${paddingTokens.xs};
  }

  &:hover {
    background: ${colors.spotify.hoverBg};
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(29, 185, 84, 0.3);
    border-color: ${colors.spotify.green};
  }
`;

export const release_image = css`
  width: min(120px, 40vw);
  height: min(120px, 40vw);
  max-width: 120px;
  max-height: 120px;
  border-radius: ${borderRadius.base};
  object-fit: cover;
  margin: 0 auto ${spaceUnits.lg} auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  flex-shrink: 0;

  @media (max-width: ${breakpoints.iphoneXr}) {
    width: min(100px, 35vw);
    height: min(100px, 35vw);
    max-width: 100px;
    max-height: 100px;
    margin: 0 auto ${spaceUnits.base} auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: min(80px, 30vw);
    height: min(80px, 30vw);
    max-width: 80px;
    max-height: 80px;
    margin: 0 auto ${spaceUnits.sm} auto;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: min(70px, 25vw);
    height: min(70px, 25vw);
    max-width: 70px;
    max-height: 70px;
    margin: 0 auto ${spaceUnits.xs} auto;
  }
`;

export const release_info = css`
  display: flex;
  flex-direction: column;
  gap: ${spaceUnits.sm};
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    gap: ${spaceUnits.xs};
  }
`;

export const release_artist = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.white};
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  margin: 0;
  text-align: center;

  @media (max-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize.base};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.sm};
  }
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
  text-align: center;

  @media (max-width: ${breakpoints.iphoneXr}) {
    font-size: ${typography.fontSize.sm};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xs};
  }
`;

export const release_year = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.green};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  margin: 0;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${typography.fontSize.xs};
  }
`;
