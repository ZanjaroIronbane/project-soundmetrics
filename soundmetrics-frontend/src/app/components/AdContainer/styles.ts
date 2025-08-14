import { css } from '@emotion/react';
import { colors, typography, borderRadius, zIndex } from '../../styles/tokens';

export const ad_container_left = css`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${zIndex.tooltip};

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ad_container_right = css`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: ${zIndex.tooltip};

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const ad_placeholder = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 20%, #1a1a1a 100%);
  border: 2px dashed ${colors.spotify.green};
  border-radius: ${borderRadius.base};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

export const ad_label = css`
  font-family: ${typography.fontFamily.spotify};
  color: ${colors.spotify.green};
  font-size: 14px;
  font-weight: ${typography.fontWeight.bold};
  letter-spacing: 0.1em;
`;
