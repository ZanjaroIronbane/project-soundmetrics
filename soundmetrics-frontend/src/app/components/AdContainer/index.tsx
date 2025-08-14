import React from 'react';
import {
  ad_container_left,
  ad_container_right,
  ad_placeholder,
  ad_label,
} from './styles';

interface AdContainerProps {
  position: 'left' | 'right';
  size: '300x250' | '300x600' | '160x600';
}

const AdContainer: React.FC<AdContainerProps> = ({ position, size }) => {
  const [width, height] = size.split('x').map(Number);

  return (
    <div css={position === 'left' ? ad_container_left : ad_container_right}>
      <div
        css={ad_placeholder}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div css={ad_label}>AdSense {size}</div>
        <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '8px' }}>
          {position === 'left' ? 'Left Sidebar' : 'Right Sidebar'}
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
