import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useSpotifyTrackQuery,
  useSpotifyTrackFeaturesQuery,
  useSpotifyRecommendationsQuery,
} from '../../api/tracks';
import { useSpotifySearchQuery } from '../../api/search';
import { useSpotifyNewReleasesQuery } from '../../api/browse';
import type { SongOption } from '../../components/SongSelector';
import MobileSearchNavbar from '../../components/MobileSearchNavbar';
import {
  song_lookup_container,
  hero_section,
  hero_title,
  hero_subtitle,
  floating_notes,
  suggestions_section,
  suggestions_title,
  suggestions_grid,
  suggestion_card,
  suggestion_image,
  suggestion_meta,
  suggestion_text,
  suggestion_description,
  content_area,
  song_details_section,
  content_grid,
  full_width_section,
  loading_container,
  loading_spinner,
  loading_text,
  spotify_attribution,
} from './styles';

const SongLookup = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSong, setSelectedSong] = useState<SongOption | null>(null);

  // Handle URL parameter for direct song links
  const urlSongName = searchParams.get('q');
  const urlSongSearch = useSpotifySearchQuery({
    q: urlSongName || '',
    type: 'track',
    limit: 1,
  });

  // Get comprehensive song data when a song is selected
  const songData = useSpotifyTrackQuery(selectedSong?.id || null);
  const songFeatures = useSpotifyTrackFeaturesQuery(selectedSong?.id || null);
  const recommendations = useSpotifyRecommendationsQuery(
    selectedSong?.id
      ? {
          seed_tracks: selectedSong.id,
          limit: 10,
          market: 'US',
        }
      : null
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleSongSelect = (song: SongOption | null) => {
    setSelectedSong(song);
    if (!song) {
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (songName: string, artistName: string) => {
    setSearchQuery(`${songName} ${artistName}`);
    // Clear any previous selection first to trigger fresh search
    setSelectedSong(null);
  };

  const song = songData.data;
  const features = songFeatures.data;
  const recommendedSongs = recommendations.data?.tracks || [];

  // Search for songs when suggestion is clicked
  const suggestionSearchResults = useSpotifySearchQuery({
    q: searchQuery,
    type: 'track',
    limit: 10,
  });

  // Handle URL parameter for direct song navigation
  useEffect(() => {
    if (urlSongName && !selectedSong && !searchQuery) {
      setSearchQuery(urlSongName);
      // Auto-select when search results arrive
      if (
        urlSongSearch.data?.tracks?.items &&
        urlSongSearch.data.tracks.items.length > 0
      ) {
        const firstMatch = urlSongSearch.data.tracks.items[0];
        const songOption: SongOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          artists: firstMatch.artists,
          album: firstMatch.album,
          duration_ms: firstMatch.duration_ms,
          popularity: firstMatch.popularity,
          preview_url: firstMatch.preview_url,
        };
        setSelectedSong(songOption);
      }
    }
  }, [urlSongName, selectedSong, searchQuery, urlSongSearch.data]);

  // Auto-select first matching song when searching from suggestion
  useEffect(() => {
    if (
      !selectedSong &&
      searchQuery &&
      suggestionSearchResults.data?.tracks?.items &&
      suggestionSearchResults.data.tracks.items.length > 0
    ) {
      const firstMatch = suggestionSearchResults.data.tracks.items[0];
      const songOption: SongOption = {
        id: firstMatch.id,
        name: firstMatch.name,
        artists: firstMatch.artists,
        album: firstMatch.album,
        duration_ms: firstMatch.duration_ms,
        popularity: firstMatch.popularity,
        preview_url: firstMatch.preview_url,
      };
      setSelectedSong(songOption);
    }
  }, [suggestionSearchResults.data, searchQuery, selectedSong]);

  // Get new releases for suggestions
  const newReleases = useSpotifyNewReleasesQuery();

  // Helper function to format duration
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Transform new releases into suggestion format
  const songSuggestions = useMemo(() => {
    if (!newReleases.data?.albums?.items) return [];

    return newReleases.data.albums.items
      .filter((album) => album && album.id) // Filter out null albums
      .slice(0, 9) // Limit to 9 suggestions like the hardcoded version
      .map((album) => {
        return {
          id: album.id,
          name: album.name,
          artist: album.artists.map((a) => a.name).join(', '),
          duration: `${album.total_tracks} tracks`,
          popularity: 'New',
          albumImage: album.images?.[0]?.url,
          type: album.album_type, // Single, Album, etc.
        };
      });
  }, [newReleases.data]);

  return (
    <>
      {/* MOBILE SEARCH NAVBAR - Mobile Only */}
      <MobileSearchNavbar
        songSearchQuery={searchQuery}
        selectedSong={selectedSong}
        onSongSearchChange={handleSearchChange}
        onSongSelect={handleSongSelect}
      />

      <div css={song_lookup_container}>
        {!selectedSong ? (
          /* HERO SECTION - Empty State */
          <div css={hero_section}>
            <div css={floating_notes} />

            <h1 css={hero_title}>Discover Songs</h1>
            <p css={hero_subtitle}>
              Explore detailed song analytics, audio features, and discover your
              next favorite track with our Spotify-powered search engine.
            </p>

            <div css={suggestions_section}>
              <h2 css={suggestions_title}>New Releases</h2>
              {newReleases.isLoading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div
                    css={loading_spinner}
                    style={{ margin: '0 auto 1rem' }}
                  />
                  <div style={{ color: '#b3b3b3' }}>
                    Loading new releases...
                  </div>
                </div>
              ) : songSuggestions.length > 0 ? (
                <div css={suggestions_grid}>
                  {songSuggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      css={suggestion_card}
                      onClick={() =>
                        handleSuggestionClick(
                          suggestion.name,
                          suggestion.artist
                        )
                      }
                    >
                      <div css={suggestion_image}>
                        {suggestion.albumImage ? (
                          <img
                            src={suggestion.albumImage}
                            alt={suggestion.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '8px',
                            }}
                          />
                        ) : (
                          '🎵'
                        )}
                      </div>
                      <div css={suggestion_text}>{suggestion.name}</div>
                      <div css={suggestion_description}>
                        {suggestion.artist}
                      </div>
                      <div css={suggestion_meta}>
                        {suggestion.duration} • New Release
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '2rem',
                    color: '#b3b3b3',
                  }}
                >
                  No new releases available
                </div>
              )}
            </div>
          </div>
        ) : selectedSong && (songData.isLoading || songFeatures.isLoading) ? (
          /* LOADING STATE - When song is selected but data is loading */
          <div css={loading_container}>
            <div css={loading_spinner} />
            <div css={loading_text}>Loading {selectedSong.name} details...</div>
          </div>
        ) : (
          /* CONTENT AREA - Song Results */
          <div css={content_area}>
            <div css={song_details_section}>
              {/* Song Header */}
              {song && (
                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <img
                      src={song.album.images?.[0]?.url}
                      alt={song.album.name}
                      style={{ width: 80, height: 80, borderRadius: '8px' }}
                    />
                    <div>
                      <h2
                        style={{
                          margin: 0,
                          color: '#8b5cf6',
                          fontSize: '2rem',
                        }}
                      >
                        {song.name}
                      </h2>
                      <p style={{ margin: '0.5rem 0', color: '#b3b3b3' }}>
                        by {song.artists.map((a) => a.name).join(', ')}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          color: '#b3b3b3',
                          fontSize: '0.9rem',
                        }}
                      >
                        {song.album.name} • {formatDuration(song.duration_ms)} •
                        Popularity: {song.popularity}%
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Audio Features */}
              {features && (
                <div css={full_width_section}>
                  <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                    Audio Features
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '1rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <div
                      style={{
                        background: '#181818',
                        padding: '1rem',
                        borderRadius: '8px',
                      }}
                    >
                      <div style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>
                        Energy
                      </div>
                      <div style={{ color: '#fff', fontSize: '1.5rem' }}>
                        {Math.round(features.energy * 100)}%
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#181818',
                        padding: '1rem',
                        borderRadius: '8px',
                      }}
                    >
                      <div style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>
                        Danceability
                      </div>
                      <div style={{ color: '#fff', fontSize: '1.5rem' }}>
                        {Math.round(features.danceability * 100)}%
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#181818',
                        padding: '1rem',
                        borderRadius: '8px',
                      }}
                    >
                      <div style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>
                        Valence
                      </div>
                      <div style={{ color: '#fff', fontSize: '1.5rem' }}>
                        {Math.round(features.valence * 100)}%
                      </div>
                    </div>
                    <div
                      style={{
                        background: '#181818',
                        padding: '1rem',
                        borderRadius: '8px',
                      }}
                    >
                      <div style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>
                        Tempo
                      </div>
                      <div style={{ color: '#fff', fontSize: '1.5rem' }}>
                        {Math.round(features.tempo)} BPM
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div css={content_grid}>
                {/* Recommended Songs */}
                {recommendedSongs.length > 0 && (
                  <div css={full_width_section}>
                    <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                      Recommended Songs
                    </h3>
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      {recommendedSongs.slice(0, 5).map((track) => (
                        <div
                          key={track.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.5rem',
                            borderRadius: '4px',
                            background: '#181818',
                          }}
                        >
                          <img
                            src={track.album.images?.[0]?.url}
                            alt={track.album.name}
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: '4px',
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ color: '#fff', fontSize: '0.9rem' }}>
                              {track.name}
                            </div>
                            <div
                              style={{ color: '#b3b3b3', fontSize: '0.8rem' }}
                            >
                              {track.artists.map((a) => a.name).join(', ')}
                            </div>
                          </div>
                          <div style={{ color: '#b3b3b3', fontSize: '0.8rem' }}>
                            {formatDuration(track.duration_ms)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Spotify Attribution */}
        <div css={spotify_attribution}>🎵 SPOTIFY</div>
      </div>
    </>
  );
};

export default SongLookup;
