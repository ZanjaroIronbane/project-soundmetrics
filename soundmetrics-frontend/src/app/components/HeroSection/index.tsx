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
import { HERO_POPULAR_COMPARISONS } from '../../constants/popularComparisons';
import { HERO_SECTION_DEFAULTS } from './constants';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

const HeroSection = ({
  title = HERO_SECTION_DEFAULTS.title,
  subtitle = HERO_SECTION_DEFAULTS.subtitle,
  imageUrl = heroImage,
}: HeroSectionProps) => {
  const popularComparisonsData = HERO_POPULAR_COMPARISONS;

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
