import { css } from '@emotion/react';

export const radar_container = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const radar_chart = css`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
`;

export const feature_grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const feature_item = css`
  background: rgba(24, 24, 24, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(139, 92, 246, 0.3);
  }
`;

export const feature_label = css`
  color: #b3b3b3;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const feature_value = css`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  background: linear-gradient(45deg, currentColor, rgba(255, 255, 255, 0.8));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const feature_bar = css`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

export const feature_fill = css`
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, currentColor, rgba(255, 255, 255, 0.8));
  transition: width 0.8s ease;
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
`;

export const feature_explanation = css`
  color: #9ca3af;
  font-size: 0.85rem;
  line-height: 1.4;
  font-style: italic;
`;
