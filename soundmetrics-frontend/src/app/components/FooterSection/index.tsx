import { Link } from 'react-router-dom';
import {
  footerSection,
  footerContent,
  footerTitle,
  footerDescription,
  footerLinks,
  footerLink,
  footerCopyright,
} from './styles.ts';

const FooterSection = () => {
  return (
    <div css={footerSection}>
      <div css={footerContent}>
        <h4 css={footerTitle}>Soundmetrics</h4>
        <p css={footerDescription}>
          Your gateway to comprehensive music analytics, artist comparisons, and
          trend discovery. Powered by Spotify's rich music data and designed for
          music enthusiasts and professionals.
        </p>
        <div css={footerLinks}>
          <Link to="/search" css={footerLink}>
            Search
          </Link>
          <Link to="/compare" css={footerLink}>
            Compare
          </Link>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            css={footerLink}
          >
            Spotify
          </a>
        </div>
        <p css={footerCopyright}>
          © 2024 Soundmetrics. Built with Spotify Web API.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
