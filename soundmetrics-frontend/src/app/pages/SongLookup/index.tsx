import { useState, useEffect, useMemo, useCallback } from 'react';
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
import AudioFeaturesRadar from '../../components/AudioFeaturesRadar';
import PopularityAnalysis from '../../components/PopularityAnalysis';
import EnhancedRecommendations from '../../components/EnhancedRecommendations';
import SongAnalyticsSection from '../../components/SongAnalyticsSection';
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
  const [hasAutoSelected, setHasAutoSelected] = useState(false);

  // Handle URL parameter for direct song links
  const urlSongName = searchParams.get('q');

  // Set initial search query from URL parameter
  useEffect(() => {
    if (urlSongName && !searchQuery) {
      setSearchQuery(urlSongName);
      setHasAutoSelected(false); // Reset auto-selection flag
    }
  }, [urlSongName, searchQuery]);

  // Get search results for auto-selection
  const searchResults = useSpotifySearchQuery({
    q: searchQuery && !selectedSong ? searchQuery : '',
    type: 'track',
    limit: 5,
  });

  // Auto-select first result when coming from URL parameter OR manual suggestion clicks
  useEffect(() => {
    if (
      searchQuery &&
      !selectedSong &&
      !hasAutoSelected &&
      searchResults.data?.tracks?.items?.length
    ) {
      const firstResult = searchResults.data.tracks.items[0];
      const songOption: SongOption = {
        id: firstResult.id,
        name: firstResult.name,
        artists: firstResult.artists,
        album: firstResult.album,
        duration_ms: firstResult.duration_ms,
        popularity: firstResult.popularity,
        preview_url: firstResult.preview_url,
      };
      setSelectedSong(songOption);
      setHasAutoSelected(true);
    }
  }, [searchQuery, selectedSong, hasAutoSelected, searchResults.data]);

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

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setHasAutoSelected(false); // Allow auto-selection for new searches
  }, []);

  const handleSongSelect = useCallback((song: SongOption | null) => {
    setSelectedSong(song);
    if (!song) {
      setSearchQuery('');
    }
  }, []);

  const handleSuggestionClick = useCallback(
    (songName: string, artistName: string) => {
      const searchTerm = `${songName} ${artistName}`;
      setSearchQuery(searchTerm);
      // Clear any previous selection first to trigger fresh search
      setSelectedSong(null);
      setHasAutoSelected(false); // Reset auto-selection for manual searches
    },
    []
  );

  const song = songData.data;
  const features = songFeatures.data;
  const recommendedSongs = recommendations.data?.tracks || [];

  // Get new releases for suggestions
  const newReleases = useSpotifyNewReleasesQuery();

  // Helper function to format duration
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Transform new releases into song-focused suggestion format
  const songSuggestions = useMemo(() => {
    if (!newReleases.data?.albums?.items) return [];

    // Get unique artists from new releases for better song discovery
    const uniqueArtists = new Map();

    newReleases.data.albums.items
      .filter(
        (album) =>
          album && album.id && album.artists && album.artists.length > 0
      )
      .sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      ) // Sort by newest first
      .forEach((album) => {
        const mainArtist = album.artists[0];
        if (!uniqueArtists.has(mainArtist.id) && uniqueArtists.size < 9) {
          // For singles, use the album name (which is often the track name)
          // For albums, use the artist name for broader discovery
          const searchTerm =
            album.album_type === 'single'
              ? album.name
              : `${mainArtist.name} popular songs`;

          uniqueArtists.set(mainArtist.id, {
            id: album.id,
            name: album.album_type === 'single' ? album.name : mainArtist.name,
            artist: mainArtist.name,
            searchQuery: searchTerm,
            duration:
              album.album_type === 'single'
                ? 'New Single'
                : `${album.total_tracks} tracks`,
            popularity: 'New Release',
            albumImage: album.images?.[0]?.url,
            type: album.album_type,
          });
        }
      });

    return Array.from(uniqueArtists.values());
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
                      onClick={() => {
                        // Use the optimized search query for better results
                        setSearchQuery(suggestion.searchQuery);
                        setSelectedSong(null);
                        setHasAutoSelected(false);
                      }}
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
                        {suggestion.duration} • {suggestion.popularity}
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
                      {song.album.release_date && (
                        <p
                          style={{
                            margin: '0.25rem 0 0 0',
                            color: '#9ca3af',
                            fontSize: '0.8rem',
                          }}
                        >
                          Released:{' '}
                          {new Date(
                            song.album.release_date
                          ).toLocaleDateString()}{' '}
                          •{(song as any).explicit ? ' Explicit' : ' Clean'} •
                          {song.preview_url
                            ? ' Preview Available'
                            : ' No Preview'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Analytics Section */}
              {song && features && (
                <>
                  {/* Comprehensive Song Analytics */}
                  <SongAnalyticsSection song={song} features={features} />

                  {/* Popularity Analysis */}
                  <PopularityAnalysis song={song} features={features} />

                  {/* Audio Features Radar */}
                  <AudioFeaturesRadar
                    features={features}
                    songName={song.name}
                  />

                  {/* Enhanced Recommendations */}
                  {recommendedSongs.length > 0 && (
                    <EnhancedRecommendations
                      recommendations={recommendedSongs}
                      originalFeatures={features}
                      originalSong={song}
                      onSongClick={handleSuggestionClick}
                    />
                  )}
                </>
              )}
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
