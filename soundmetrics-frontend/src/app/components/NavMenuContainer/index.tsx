import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  nav_menu_container,
  nav_content_wrapper,
  nav_brand,
  nav_actions,
  nav_link,
  nav_beta_badge,
  mobile_menu_button,
  mobile_dropdown,
  mobile_nav_link,
} from './styles';

const NavMenuContainer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div css={nav_menu_container}>
      <div css={nav_content_wrapper}>
        <div css={nav_brand}>
          <Link to="/" css={nav_link}>
            <h1>SOUNDMETRICS</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav css={nav_actions}>
          <Link to="/search" css={nav_link}>
            Artists
          </Link>
          <Link to="/compare" css={nav_link}>
            Compare Artists
            <div css={nav_beta_badge}>Beta</div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button css={mobile_menu_button} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Dropdown Menu */}
        <div css={mobile_dropdown} className={isMobileMenuOpen ? 'open' : ''}>
          <Link to="/search" css={mobile_nav_link} onClick={toggleMobileMenu}>
            Artists
          </Link>
          <Link to="/compare" css={mobile_nav_link} onClick={toggleMobileMenu}>
            Compare Artists{' '}
            <span
              style={{
                color: '#8b5cf6',
                fontSize: '0.8rem',
                marginLeft: '0.5rem',
              }}
            >
              Beta
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenuContainer;
