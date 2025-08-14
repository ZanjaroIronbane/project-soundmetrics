import { Link } from 'react-router-dom';
import ParallaxText from '../ParallaxText';
import {
  hero_section,
  hero_subtitle,
  popular_comparisons,
  comparison_card,
  comparison_text,
} from './styles.ts';
import heroImage from '../../../assets/hero_image.png';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const HeroSection = ({
  title = 'SOUNDMETRICS',
  subtitle = 'Compare • Analyze • Discover',
  imageUrl = heroImage,
}: HeroSectionProps) => {
  const popularComparisonsData = [
    { artist1: 'Drake', artist2: 'Kendrick Lamar' },
    { artist1: 'Taylor Swift', artist2: 'Billie Eilish' },
    { artist1: 'The Weeknd', artist2: 'Bruno Mars' },
    { artist1: 'Ariana Grande', artist2: 'Dua Lipa' },
  ];

  return (
    <div css={hero_section}>
      <ParallaxText text={title} imageUrl={imageUrl} />
      <h5 css={hero_subtitle}>{subtitle}</h5>

      <div css={popular_comparisons}>
        {popularComparisonsData.map((comparison, index) => (
          <Link
            key={index}
            to={`/compare?artist1=${encodeURIComponent(
              comparison.artist1
            )}&artist2=${encodeURIComponent(comparison.artist2)}`}
            css={comparison_card}
          >
            <span css={comparison_text}>
              {comparison.artist1} vs {comparison.artist2}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
