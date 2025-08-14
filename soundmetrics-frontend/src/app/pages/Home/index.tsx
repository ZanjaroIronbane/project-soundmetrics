import HeroSection from '../../components/HeroSection';
import FooterSection from '../../components/FooterSection';
import { pageContainer, contentContainer, spotify_attribution } from './styles';

// Home page following Spotify Design Guidelines
const Home = () => {
  return (
    <div css={pageContainer}>
      <div css={contentContainer}>
        {/* Hero Section with Parallax Effect */}
        <HeroSection
          title="SOUNDMETRICS"
          subtitle="Discover, Compare, and Explore Music Like Never Before"
          imageUrl="/hero_image.png"
        />

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Spotify Attribution - Required for all content usage */}
      <div css={spotify_attribution}>🎵 SPOTIFY POWERED</div>
    </div>
  );
};

export default Home;
