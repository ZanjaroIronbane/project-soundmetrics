import React, { useState, useEffect, useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useDebounce } from '../../hooks/useDebounce';
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
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedValue = useDebounce(inputValue, 300);

  // Search results using debounced value
  const searchResults = useSpotifySearchQuery({
    q: debouncedValue,
    type: 'track',
    limit: 10,
  });

  // Sync with external searchQuery prop
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Create options from search results
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
      inputValue={inputValue}
      onInputChange={(_, value, reason) => {
        if (reason === 'input') {
          setInputValue(value);
          onSearchChange(value);
        }
      }}
      onChange={(_, value) => {
        onSongSelect(value);
      }}
      value={selectedSong}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <img
            src={option.album.images?.[0]?.url || '/soundmetrics-favicon.svg'}
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
      loading={searchResults.isLoading}
      loadingText="Searching songs..."
      noOptionsText={
        debouncedValue ? 'No songs found' : 'Start typing to search for songs'
      }
      autoHighlight
      clearOnBlur={false}
      handleHomeEndKeys
    />
  );
};

export default SongSelector;
