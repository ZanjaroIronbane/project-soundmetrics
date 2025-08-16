import HeroSection from '../../components/HeroSection';
import NewReleasesSection from '../../components/NewReleasesSection';
import FooterSection from '../../components/FooterSection';
// import AdContainer from '../../components/AdContainer';
import { pageContainer, contentContainer, spotify_attribution } from './styles';

// Home page following Spotify Design Guidelines
const Home = () => {
  return (
    <div css={pageContainer}>
      {/* AdSense Containers - Positioned Outside Main Content */}
      {/* <AdContainer position="left" size="300x600" />
      <AdContainer position="right" size="300x600" /> */}

      <div css={contentContainer}>
        {/* Hero Section with Parallax Effect */}
        <HeroSection
          title="SOUNDMETRICS"
          subtitle="Discover, Compare, and Explore Music Like Never Before"
          imageUrl="/hero_image.png"
        />

        {/* New Releases Section with Full Width Parallax */}
        <NewReleasesSection />

        {/* Footer */}
        <FooterSection />
      </div>

      {/* Spotify Attribution - Required for all content usage */}
      <div css={spotify_attribution}>🎵 SPOTIFY POWERED</div>
    </div>
  );
};

export default Home;
