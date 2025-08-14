import React, { useEffect, useRef } from 'react';
import { parallax_container } from './styles';
import heroImage from '../../../assets/hero_image.png';

interface ParallaxTextProps {
  text: string;
  imageUrl: string;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ text }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.2; // Slower parallax for better effect

      // Apply parallax transform to the background
      textRef.current.style.backgroundPosition = `center ${
        -scrolled * parallaxSpeed
      }px`;
    };

    // Add passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <h1
      ref={textRef}
      css={parallax_container}
      style={{
        backgroundImage: `url('${heroImage}')`, // Use imported asset
      }}
      data-text={text}
    >
      {text}
    </h1>
  );
};

export default ParallaxText;
