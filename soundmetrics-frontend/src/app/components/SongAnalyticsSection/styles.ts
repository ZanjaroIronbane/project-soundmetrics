import { css } from '@emotion/react';
import {
  colors,
  typography,
  paddingTokens,
  spaceUnits,
  borderRadius,
  breakpoints,
} from '../../styles/tokens';

export const analytics_container = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);

  @media (max-width: ${breakpoints.md}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const analytics_title = css`
  color: #8b5cf6;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const analytics_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const analytics_card = css`
  background: rgba(24, 24, 24, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem;
  }
`;

export const analytics_value = css`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const analytics_description = css`
  color: #9ca3af;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export const insights_section = css`
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 1.5rem;
  }
`;

export const insight_card = css`
  background: rgba(24, 24, 24, 0.4);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(139, 92, 246, 0.2);
    box-shadow: 0 2px 10px rgba(139, 92, 246, 0.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

export const insight_icon = css`
  font-size: 1.5rem;
  min-width: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.25rem;
    min-width: 1.25rem;
  }
`;

export const insight_title = css`
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const insight_description = css`
  color: #b3b3b3;
  font-size: 0.8rem;
  line-height: 1.4;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

export const comparative_section = css`
  margin-top: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1.5rem;
  }
`;

export const comparative_title = css`
  color: #8b5cf6;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`;

export const comparative_grid = css`
  display: grid;
  gap: 0.75rem;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 0.5rem;
  }
`;

export const comparative_item = css`
  display: grid;
  grid-template-columns: 100px 1fr 120px;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 80px 1fr 100px;
    gap: 0.75rem;
  }
`;

export const comparative_label = css`
  color: #d1d5db;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
`;

export const comparative_bar = css`
  position: relative;
  height: 8px;
  background: rgba(75, 85, 99, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

export const comparative_fill = css`
  height: 100%;
  border-radius: 4px;
  transition: width 0.8s ease;
`;

export const comparative_value = css`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;
