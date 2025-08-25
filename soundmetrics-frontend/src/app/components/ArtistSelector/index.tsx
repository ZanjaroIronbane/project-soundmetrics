import React, { useState, useEffect, useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useDebounce } from '../../hooks/useDebounce';
import { useSpotifySearchQuery } from '../../api/search';
import { artist_selector, autocomplete_popup } from './styles';

export interface ArtistOption {
  id: string;
  name: string;
  image?: string;
  followers?: number;
}

interface ArtistSelectorProps {
  label: string;
  searchQuery: string;
  selectedArtist: ArtistOption | null;
  onSearchChange: (value: string) => void;
  onArtistSelect: (artist: ArtistOption | null) => void;
  placeholder?: string;
}

const ArtistSelector: React.FC<ArtistSelectorProps> = ({
  label,
  searchQuery,
  selectedArtist,
  onSearchChange,
  onArtistSelect,
  placeholder = 'Start typing to search...',
}) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const debouncedValue = useDebounce(inputValue, 300);

  // Search results using debounced value
  const searchResults = useSpotifySearchQuery({
    q: debouncedValue,
    type: 'artist',
    limit: 10,
  });

  // Sync with external searchQuery prop
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Create options from search results
  const artistOptions = useMemo(() => {
    return (
      searchResults.data?.artists?.items?.map(
        (artist: SpotifyApi.ArtistObjectFull) => ({
          id: artist.id,
          name: artist.name,
          image: artist.images?.[0]?.url,
          followers: artist.followers.total,
        })
      ) || []
    );
  }, [searchResults.data]);

  return (
    <Autocomplete
      css={[artist_selector, autocomplete_popup]}
      options={artistOptions}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(_, value, reason) => {
        if (reason === 'input') {
          setInputValue(value);
          onSearchChange(value);
        }
      }}
      onChange={(_, value) => {
        onArtistSelect(value);
      }}
      value={selectedArtist}
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
            src={option.image || '/soundmetrics-favicon.svg'}
            alt={option.name}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              marginRight: '1rem',
              objectFit: 'cover',
            }}
          />
          <div>
            <div>{option.name}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              {option.followers?.toLocaleString()} followers
            </div>
          </div>
        </li>
      )}
      loading={searchResults.isLoading}
      loadingText="Searching artists..."
      noOptionsText={
        debouncedValue
          ? 'No artists found'
          : 'Start typing to search for artists'
      }
      autoHighlight
      clearOnBlur={false}
      handleHomeEndKeys
    />
  );
};

export default ArtistSelector;
