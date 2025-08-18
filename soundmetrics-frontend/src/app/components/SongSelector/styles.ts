import { css } from '@emotion/react';
import {
  colors,
  typography,
  borderRadius,
  paddingTokens,
  breakpoints,
} from '../../styles/tokens';

/* Song Selector with Spotify-style search design and purple theme */
export const song_selector = css`
  min-width: min(
    320px,
    45vw
  ); /* Responsive minimum width - slightly larger for better UX */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}) {
    min-width: min(280px, 40vw);
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
    background: ${colors.spotify.cardBg};
    border-radius: 500px; /* Spotify's pill-shaped search bars */
    border: 2px solid transparent;
    padding: ${paddingTokens.lg} ${paddingTokens.xl};
    font-family: ${typography.fontFamily.spotify};
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: 100%;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    /* Spotify-style responsive padding */
    @media (max-width: ${breakpoints.md}) {
      padding: ${paddingTokens.base} ${paddingTokens.lg};
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding: ${paddingTokens.sm} ${paddingTokens.base};
      border-radius: ${borderRadius.lg}; /* Less rounded on mobile */
    }

    &:before {
      content: '🎵';
      position: absolute;
      left: ${paddingTokens.lg};
      top: 50%;
      transform: translateY(-50%);
      font-size: ${typography.fontSize.base};
      color: ${colors.spotify.lightGrey};
      pointer-events: none;
      z-index: 1;

      @media (max-width: ${breakpoints.mobile}) {
        left: ${paddingTokens.base};
        font-size: ${typography.fontSize.sm};
      }
    }

    &:hover {
      border-color: #8b5cf6; /* Purple theme instead of green */
      background: ${colors.spotify.hoverBg};
      box-shadow: 0 4px 16px rgba(139, 92, 246, 0.15);
      transform: translateY(-1px);
    }

    &.Mui-focused {
      border-color: #8b5cf6; /* Purple theme */
      background: ${colors.spotify.white};
      box-shadow: 0 4px 20px rgba(139, 92, 246, 0.25);
      transform: translateY(-1px);

      &:before {
        color: ${colors.spotify.black};
      }

      .MuiInputBase-input {
        color: ${colors.spotify.black};

        &::placeholder {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }

    .MuiInputBase-input {
      font-family: ${typography.fontFamily.spotify};
      color: ${colors.spotify.white};
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.medium};
      width: 100%;
      box-sizing: border-box;
      padding-left: 2rem; /* Space for search icon */
      text-align: left;
      line-height: 1.5;

      @media (max-width: ${breakpoints.md}) {
        font-size: ${typography.fontSize.sm};
        padding-left: 1.8rem;
      }

      @media (max-width: ${breakpoints.mobile}) {
        font-size: ${typography.fontSize.sm};
        padding-left: 1.5rem;
      }

      /* Spotify-style placeholder styling */
      &::placeholder {
        color: ${colors.spotify.lightGrey};
        font-weight: ${typography.fontWeight.normal};
        opacity: 1;
        font-style: normal;
        transition: color 0.2s ease;
      }

      /* Cross-browser placeholder support */
      &::-webkit-input-placeholder {
        color: ${colors.spotify.lightGrey};
        font-weight: ${typography.fontWeight.normal};
        opacity: 1;
      }

      &::-moz-placeholder {
        color: ${colors.spotify.lightGrey};
        font-weight: ${typography.fontWeight.normal};
        opacity: 1;
      }

      &:-ms-input-placeholder {
        color: ${colors.spotify.lightGrey};
        font-weight: ${typography.fontWeight.normal};
        opacity: 1;
      }
    }
  }

  /* Hide the default MUI label for cleaner look */
  .MuiInputLabel-root {
    display: none;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  /* Loading state styling */
  .MuiAutocomplete-loading {
    color: #8b5cf6; /* Purple theme */
  }
`;

export const autocomplete_popup = css`
  .MuiAutocomplete-paper {
    background: ${colors.spotify.cardBg};
    border: 1px solid ${colors.spotify.border};
    border-radius: ${borderRadius.lg}; /* More rounded like modern Spotify */
    margin-top: ${paddingTokens.sm};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); /* Enhanced shadow for depth */
    backdrop-filter: blur(10px); /* Modern blur effect */
    overflow: hidden;

    .MuiAutocomplete-listbox {
      padding: ${paddingTokens.sm} 0;
      max-height: 300px; /* Limit height for better UX */

      .MuiAutocomplete-option {
        font-family: ${typography.fontFamily.spotify};
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: ${paddingTokens.base} ${paddingTokens.lg};
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        cursor: pointer;

        @media (max-width: ${breakpoints.mobile}) {
          padding: ${paddingTokens.sm} ${paddingTokens.base};
        }

        &:last-child {
          border-bottom: none;
        }

        &:hover {
          background: ${colors.spotify.hoverBg};
          transform: translateX(2px); /* Subtle slide effect */
        }

        &[aria-selected='true'] {
          background: #8b5cf6; /* Purple theme */
          color: ${colors.spotify.white};

          /* Change duration text color when selected */
          & > div:last-child {
            color: rgba(255, 255, 255, 0.8) !important;
          }

          /* Change artist/album text color when selected */
          & > div > div:last-child {
            color: rgba(255, 255, 255, 0.7) !important;
          }
        }

        /* Album image styling */
        img {
          border-radius: 4px; /* Square-ish for album covers */
          margin-right: ${paddingTokens.base};
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

          @media (max-width: ${breakpoints.mobile}) {
            margin-right: ${paddingTokens.sm};
          }
        }

        /* Song name styling */
        & > div > div:first-child {
          font-weight: ${typography.fontWeight.medium};
          font-size: ${typography.fontSize.sm};
          color: ${colors.spotify.white};
          margin-bottom: 2px;

          @media (max-width: ${breakpoints.mobile}) {
            font-size: ${typography.fontSize.xs};
          }
        }

        /* Artist/Album info styling */
        & > div > div:last-child {
          font-size: ${typography.fontSize.xs};
          color: ${colors.spotify.lightGrey};
          font-weight: ${typography.fontWeight.normal};

          @media (max-width: ${breakpoints.mobile}) {
            font-size: 10px;
          }
        }

        /* Duration styling */
        & > div:last-child {
          font-size: ${typography.fontSize.xs};
          color: ${colors.spotify.lightGrey};
          font-weight: ${typography.fontWeight.normal};
          min-width: 40px;
          text-align: right;

          @media (max-width: ${breakpoints.mobile}) {
            font-size: 10px;
          }
        }
      }
    }

    /* Loading state */
    .MuiAutocomplete-loading {
      padding: ${paddingTokens.lg};
      text-align: center;
      color: #8b5cf6; /* Purple theme */
      font-family: ${typography.fontFamily.spotify};
    }

    /* No options text */
    .MuiAutocomplete-noOptions {
      padding: ${paddingTokens.lg};
      text-align: center;
      color: ${colors.spotify.lightGrey};
      font-family: ${typography.fontFamily.spotify};
      font-style: italic;
    }
  }
`;
