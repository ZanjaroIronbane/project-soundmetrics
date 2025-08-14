import React, { useMemo } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import debounce from 'lodash/debounce';
import { useSpotifySearchQuery } from '../../api/search';
import { colors } from '../../styles/tokens';
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
  // Search results for this artist selector
  const searchResults = useSpotifySearchQuery({
    q: searchQuery,
    type: 'artist',
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
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      )}
      renderOption={(props, option) => (
        <li {...props}>
          <img
            src={option.image}
            alt={option.name}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              marginRight: '1rem',
            }}
          />
          <div>
            <div style={{ fontWeight: 500 }}>{option.name}</div>
            <div
              style={{
                fontSize: '0.75rem',
                color: colors.spotify.lightGrey,
              }}
            >
              {option.followers?.toLocaleString()} followers
            </div>
          </div>
        </li>
      )}
      onChange={(_, value) => {
        onArtistSelect(value);
      }}
      value={selectedArtist}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={searchResults.isLoading}
      noOptionsText={
        searchQuery ? 'No artists found' : 'Start typing to search for artists'
      }
    />
  );
};

export default ArtistSelector;
