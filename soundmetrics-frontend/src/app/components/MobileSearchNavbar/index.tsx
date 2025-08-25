import React from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import ArtistSelector from '../ArtistSelector';
import type { ArtistOption } from '../ArtistSelector';
import { mobile_search_navbar, comparison_search_grid } from './styles';

interface MobileSearchNavbarProps {
  // Artist Search page props
  searchQuery?: string;
  selectedArtist?: ArtistOption | null;
  onSearchChange?: (value: string) => void;
  onArtistSelect?: (artist: ArtistOption | null) => void;

  // Artist Compare page props
  searchQuery1?: string;
  searchQuery2?: string;
  selectedArtist1?: ArtistOption | null;
  selectedArtist2?: ArtistOption | null;
  onSearchChange1?: (value: string) => void;
  onSearchChange2?: (value: string) => void;
  onArtistSelect1?: (artist: ArtistOption | null) => void;
  onArtistSelect2?: (artist: ArtistOption | null) => void;
}

const MobileSearchNavbar: React.FC<MobileSearchNavbarProps> = ({
  // Artist Search page props
  searchQuery,
  selectedArtist,
  onSearchChange,
  onArtistSelect,

  // Artist Compare page props
  searchQuery1,
  searchQuery2,
  selectedArtist1,
  selectedArtist2,
  onSearchChange1,
  onSearchChange2,
  onArtistSelect1,
  onArtistSelect2,
}) => {
  const location = useLocation();

  // Only show on search and compare pages
  if (!['/search', '/compare'].includes(location.pathname)) {
    return null;
  }

  const portalTarget = document.getElementById('mobile-navbar-portal');
  if (!portalTarget) return null;

  let content = null;

  // Render for artist compare page
  if (location.pathname === '/compare') {
    content = (
      <div css={mobile_search_navbar}>
        <div css={comparison_search_grid}>
          <ArtistSelector
            label="First artist"
            searchQuery={searchQuery1 || ''}
            selectedArtist={selectedArtist1 || null}
            onSearchChange={onSearchChange1 || (() => {})}
            onArtistSelect={onArtistSelect1 || (() => {})}
            placeholder="Artist 1"
          />
          <ArtistSelector
            label="Second artist"
            searchQuery={searchQuery2 || ''}
            selectedArtist={selectedArtist2 || null}
            onSearchChange={onSearchChange2 || (() => {})}
            onArtistSelect={onArtistSelect2 || (() => {})}
            placeholder="Artist 2"
          />
        </div>
      </div>
    );
  }
  // Render for artist search page
  else {
    content = (
      <div css={mobile_search_navbar}>
        <ArtistSelector
          label="Search for an artist"
          searchQuery={searchQuery || ''}
          selectedArtist={selectedArtist || null}
          onSearchChange={onSearchChange || (() => {})}
          onArtistSelect={onArtistSelect || (() => {})}
          placeholder="What artist are you looking for?"
        />
      </div>
    );
  }

  return createPortal(content, portalTarget);
};

export default MobileSearchNavbar;
