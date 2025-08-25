import { css } from '@emotion/react';

export const recommendations_container = css`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

export const recommendation_item = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(24, 24, 24, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.15);

    .play-button {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const recommendation_image = css`
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const play_button = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 24px;
  height: 24px;
  background: rgba(139, 92, 246, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.7rem;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover {
    background: rgba(139, 92, 246, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const recommendation_info = css`
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const recommendation_title = css`
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

export const recommendation_artist = css`
  color: #9ca3af;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

export const recommendation_similarity = css`
  margin-bottom: 0.5rem;
`;

export const similarity_reasons = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const similarity_reason = css`
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.3);
  white-space: nowrap;
`;

export const recommendation_meta = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`;
