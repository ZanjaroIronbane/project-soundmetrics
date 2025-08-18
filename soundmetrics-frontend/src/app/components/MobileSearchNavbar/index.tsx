import React from 'react';
import { useLocation } from 'react-router-dom';
import ArtistSelector from '../ArtistSelector';
import SongSelector from '../SongSelector';
import type { ArtistOption } from '../ArtistSelector';
import type { SongOption } from '../SongSelector';
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

  // Song Search page props
  songSearchQuery?: string;
  selectedSong?: SongOption | null;
  onSongSearchChange?: (value: string) => void;
  onSongSelect?: (song: SongOption | null) => void;

  // Song Compare page props
  songSearchQuery1?: string;
  songSearchQuery2?: string;
  selectedSong1?: SongOption | null;
  selectedSong2?: SongOption | null;
  onSongSearchChange1?: (value: string) => void;
  onSongSearchChange2?: (value: string) => void;
  onSongSelect1?: (song: SongOption | null) => void;
  onSongSelect2?: (song: SongOption | null) => void;
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

  // Song Search page props
  songSearchQuery,
  selectedSong,
  onSongSearchChange,
  onSongSelect,

  // Song Compare page props
  songSearchQuery1,
  songSearchQuery2,
  selectedSong1,
  selectedSong2,
  onSongSearchChange1,
  onSongSearchChange2,
  onSongSelect1,
  onSongSelect2,
}) => {
  const location = useLocation();

  // Only show on search, compare, songs, and songs/compare pages
  if (
    !['/search', '/compare', '/songs', '/songs/compare'].includes(
      location.pathname
    )
  ) {
    return null;
  }

  // Render for artist compare page
  if (location.pathname === '/compare') {
    return (
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

  // Render for song compare page
  if (location.pathname === '/songs/compare') {
    return (
      <div css={mobile_search_navbar}>
        <div css={comparison_search_grid}>
          <SongSelector
            label="First song"
            searchQuery={songSearchQuery1 || ''}
            selectedSong={selectedSong1 || null}
            onSearchChange={onSongSearchChange1 || (() => {})}
            onSongSelect={onSongSelect1 || (() => {})}
            placeholder="Song 1"
          />
          <SongSelector
            label="Second song"
            searchQuery={songSearchQuery2 || ''}
            selectedSong={selectedSong2 || null}
            onSearchChange={onSongSearchChange2 || (() => {})}
            onSongSelect={onSongSelect2 || (() => {})}
            placeholder="Song 2"
          />
        </div>
      </div>
    );
  }

  // Render for song search page
  if (location.pathname === '/songs') {
    return (
      <div css={mobile_search_navbar}>
        <SongSelector
          label="Search for a song"
          searchQuery={songSearchQuery || ''}
          selectedSong={selectedSong || null}
          onSearchChange={onSongSearchChange || (() => {})}
          onSongSelect={onSongSelect || (() => {})}
          placeholder="What song are you looking for?"
        />
      </div>
    );
  }

  // Render for artist search page
  return (
    <div css={mobile_search_navbar}>
      <ArtistSelector
        label="Search for an artist"
        searchQuery={searchQuery || ''}
        selectedArtist={selectedArtist || null}
        onSearchChange={onSearchChange || (() => {})}
        onArtistSelect={onArtistSelect || (() => {})}
        placeholder="What do you want to listen to?"
      />
    </div>
  );
};

export default MobileSearchNavbar;
