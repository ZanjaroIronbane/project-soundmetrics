import React, { useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import debounce from 'lodash/debounce';
import { useSpotifySearchQuery } from '../../api/search';
import { song_selector, autocomplete_popup } from './styles';

export interface SongOption {
  id: string;
  name: string;
  artists: SpotifyApi.ArtistObjectSimplified[];
  album: SpotifyApi.AlbumObjectSimplified;
  duration_ms: number;
  popularity: number;
  preview_url?: string | null;
}

interface SongSelectorProps {
  label: string;
  searchQuery: string;
  selectedSong: SongOption | null;
  onSearchChange: (value: string) => void;
  onSongSelect: (song: SongOption | null) => void;
  placeholder?: string;
}

const SongSelector: React.FC<SongSelectorProps> = ({
  label,
  searchQuery,
  selectedSong,
  onSearchChange,
  onSongSelect,
  placeholder = 'Start typing to search...',
}) => {
  // Search results for this song selector
  const searchResults = useSpotifySearchQuery({
    q: searchQuery,
    type: 'track',
    limit: 10,
  });

  // Debounced search handler
  const handleSearchChange = useMemo(
    () =>
      debounce((value: string) => {
        onSearchChange(value);
      }, 300),
    [onSearchChange]
  );

  // Create options for autocomplete from search results
  const songOptions = useMemo(() => {
    return (
      searchResults.data?.tracks?.items?.map(
        (track: SpotifyApi.TrackObjectFull) => ({
          id: track.id,
          name: track.name,
          artists: track.artists,
          album: track.album,
          duration_ms: track.duration_ms,
          popularity: track.popularity,
          preview_url: track.preview_url,
        })
      ) || []
    );
  }, [searchResults.data]);

  // Helper function to format duration
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Autocomplete
      css={[song_selector, autocomplete_popup]}
      options={songOptions}
      getOptionLabel={(option) =>
        `${option.name} - ${option.artists.map((a) => a.name).join(', ')}`
      }
      inputValue={searchQuery}
      onInputChange={(_, value) => handleSearchChange(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            'aria-label': label, // For accessibility
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <img
            src={option.album.images?.[0]?.url || '/soundmetrics-favicon.svg'} // Fallback image
            alt={option.album.name}
            style={{
              width: 32,
              height: 32,
              borderRadius: '4px',
              marginRight: '1rem',
              objectFit: 'cover',
            }}
          />
          <div style={{ flex: 1 }}>
            <div>{option.name}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              {option.artists.map((a) => a.name).join(', ')} •{' '}
              {option.album.name}
            </div>
          </div>
          <div
            style={{ fontSize: '0.75rem', opacity: 0.6, marginLeft: '1rem' }}
          >
            {formatDuration(option.duration_ms)}
          </div>
        </li>
      )}
      onChange={(_, value) => {
        onSongSelect(value);
      }}
      value={selectedSong}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={searchResults.isLoading}
      loadingText="Searching songs..."
      noOptionsText={
        searchQuery ? 'No songs found' : 'Start typing to search for songs'
      }
    />
  );
};

export default SongSelector;
