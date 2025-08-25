import { css } from '@emotion/react';

export const comparison_container = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const comparison_header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const match_score = css`
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 24px;
  padding: 0.5rem 1rem;
`;

export const comparison_grid = css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const song_card = css`
  background: rgba(24, 24, 24, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(139, 92, 246, 0.1);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(139, 92, 246, 0.3);
  }
`;

export const song_image = css`
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const song_info = css`
  text-align: center;
`;

export const song_title = css`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

export const song_artist = css`
  color: #9ca3af;
  font-size: 1rem;
  font-weight: 500;
`;

export const vs_divider = css`
  font-size: 2rem;
  font-weight: 900;
  color: #8b5cf6;
  text-align: center;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
    font-size: 1.5rem;
  }
`;

export const features_comparison = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const feature_row = css`
  display: grid;
  grid-template-columns: 150px 80px 2fr 80px auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(24, 24, 24, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(139, 92, 246, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: center;
  }
`;

export const feature_label = css`
  color: #e5e7eb;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const feature_values = css`
  color: #9ca3af;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
`;

export const feature_bars = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const feature_bar = css`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const feature_bar_fill = css`
  height: 100%;
  border-radius: 4px;
  transition: width 0.8s ease, opacity 0.3s ease;
  box-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
`;

export const winner_indicator = css`
  color: #4ade80;
  font-size: 1.2rem;
  font-weight: 900;
  text-align: center;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
  }

  @media (max-width: 768px) {
    transform: rotate(90deg);
  }
`;

export const insights_section = css`
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
