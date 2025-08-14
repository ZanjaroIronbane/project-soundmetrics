import { css } from '@emotion/react';
import { colors, typography, paddingTokens } from '../../styles/tokens';

// Page container
export const searchContainer = css`
  padding: ${paddingTokens['2xl']} ${paddingTokens['4xl']};
  box-sizing: border-box;
  min-height: 100vh;

  * {
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    padding: ${paddingTokens.base} ${paddingTokens['2xl']};
  }
`;

// Search form styles
export const searchForm = css`
  margin-bottom: 2rem;
`;

export const searchAutocomplete = css`
  width: 100%;
  margin-bottom: 1rem;

  .MuiInputBase-root {
    background: ${colors.background.paper.light};
    border-radius: 8px;
  }

  .MuiInputLabel-root {
    font-family: ${typography.fontFamily.primary};
    color: ${colors.text.secondary.dark};
  }
`;

export const searchFilters = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const searchCheckbox = css`
  .MuiFormControlLabel-label {
    font-family: ${typography.fontFamily.primary};
    color: ${colors.text.primary.dark};
  }

  .MuiCheckbox-root {
    color: ${colors.primary.main};

    &.Mui-checked {
      color: ${colors.primary.main};
    }
  }
`;
