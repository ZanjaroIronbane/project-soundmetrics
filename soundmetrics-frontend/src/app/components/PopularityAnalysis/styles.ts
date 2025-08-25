import { css } from '@emotion/react';

export const popularity_container = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const popularity_main = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const popularity_score = css`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(45deg, currentColor, rgba(255, 255, 255, 0.8));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const popularity_label = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const popularity_bar_container = css`
  margin-bottom: 0.5rem;
`;

export const popularity_bar = css`
  width: 100%;
  max-width: 300px;
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const popularity_fill = css`
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(90deg, currentColor, rgba(255, 255, 255, 0.8));
  transition: width 1s ease;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
`;

export const chart_section = css`
  margin-bottom: 2rem;
`;

export const chart_title = css`
  color: #8b5cf6;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const chart_bars = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const chart_bar = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const chart_bar_label = css`
  color: #e5e7eb;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 100px;
  text-align: right;

  @media (max-width: 768px) {
    min-width: 80px;
    font-size: 0.8rem;
  }
`;

export const chart_bar_fill = css`
  height: 20px;
  border-radius: 10px;
  transition: width 0.8s ease;
  min-width: 20px;
  flex: 1;
  max-width: 200px;
  box-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
`;

export const popularity_insights = css`
  background: rgba(24, 24, 24, 0.4);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(139, 92, 246, 0.1);
`;

export const insight_item = css`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 8px;
  border-left: 3px solid rgba(139, 92, 246, 0.3);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const insight_icon = css`
  font-size: 1.2rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
`;

export const insight_text = css`
  color: #e5e7eb;
  font-size: 0.9rem;
  line-height: 1.5;
  flex: 1;
`;
