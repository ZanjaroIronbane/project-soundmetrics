import { Link } from 'react-router-dom';
import {
  nav_menu_container,
  nav_brand,
  nav_actions,
  nav_link,
  nav_beta_badge,
} from './styles';

const NavMenuContainer = () => {
  return (
    <div css={nav_menu_container}>
      <div css={nav_brand}>
        <Link to="/" css={nav_link}>
          <h1>SOUNDMETRICS</h1>
        </Link>
      </div>
      <nav css={nav_actions}>
        <Link to="/search" css={nav_link}>
          Artists
        </Link>
        <Link to="/compare" css={nav_link}>
          Compare Artists
          <div css={nav_beta_badge}>Beta</div>
        </Link>
        <Link to="/songs" css={nav_link}>
          Songs
        </Link>
        <Link to="/songs/compare" css={nav_link}>
          Compare Songs
          <div css={nav_beta_badge}>Beta</div>
        </Link>
      </nav>
    </div>
  );
};

export default NavMenuContainer;
