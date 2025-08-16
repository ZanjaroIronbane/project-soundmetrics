import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  breakpoints,
} from '../../styles/tokens';

/* Artist Selector with responsive minimum width */
export const artist_selector = css`
  min-width: 280px; /* Prevent squishing on larger screens */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    min-width: 250px;
  }

  @media (max-width: ${breakpoints.iphoneXr}) {
    min-width: 0;
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 0;
    width: 100%;
  }

  @media (max-width: ${breakpoints.xs}) {
    min-width: 0;
    width: 100%;
  }

  .MuiInputBase-root {
    background: ${colors.spotify.hoverBg};
    border-radius: ${borderRadius.base};
    border: 1px solid ${colors.spotify.border};
    padding: ${paddingTokens.sm};
    font-family: ${typography.fontFamily.spotify};
    transition: all 0.2s ease;
    width: 100%;
    box-sizing: border-box;

    &:hover {
      border-color: ${colors.spotify.green};
      background: rgba(255, 255, 255, 0.08);
    }

    &.Mui-focused {
      border-color: ${colors.spotify.green};
      background: rgba(255, 255, 255, 0.1);
    }

    .MuiInputBase-input {
      font-family: ${typography.fontFamily.spotify};
      color: ${colors.spotify.white};
      font-size: ${typography.fontSize.sm};
      width: 100%;
      box-sizing: border-box;
    }
  }

  .MuiInputLabel-root {
    font-family: ${typography.fontFamily.spotify};
    color: ${colors.spotify.lightGrey};
    font-size: ${typography.fontSize.sm};

    &.Mui-focused {
      color: ${colors.spotify.green};
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const autocomplete_popup = css`
  .MuiAutocomplete-paper {
    background: ${colors.spotify.cardBg};
    border: 1px solid ${colors.spotify.border};
    border-radius: ${borderRadius.base};
    margin-top: ${paddingTokens.xs};

    .MuiAutocomplete-listbox {
      padding: ${paddingTokens.sm} 0;

      .MuiAutocomplete-option {
        font-family: ${typography.fontFamily.spotify};
        border-bottom: 1px solid ${colors.spotify.border};
        padding: ${paddingTokens.sm} ${paddingTokens.lg};
        transition: all 0.2s ease;

        &:last-child {
          border-bottom: none;
        }

        &:hover {
          background: ${colors.spotify.hoverBg};
        }

        &[aria-selected='true'] {
          background: ${colors.spotify.green};
          color: ${colors.spotify.black};
        }
      }
    }
  }
`;
