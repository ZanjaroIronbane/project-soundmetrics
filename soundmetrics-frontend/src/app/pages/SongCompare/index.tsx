import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useSpotifyTrackQuery,
  useSpotifyTrackFeaturesQuery,
} from '../../api/tracks';
import { useSpotifySearchQuery } from '../../api/search';
import {
  comparison_container,
  comparison_hero_section,
  comparison_hero_title,
  comparison_hero_subtitle,
  vs_animation,
  comparison_suggestions,
  suggestions_title_comparison,
  comparison_suggestions_grid,
  suggestion_pair_card,
  suggestion_pair_artists,
  suggestion_pair_description,
  content_area_comparison,
  horizontal_comparison_layout,
  left_song_card,
  right_song_card,
  center_comparison_chart,
  single_song_prompt,
  single_song_title,
  single_song_subtitle,
  spotify_attribution,
} from './styles';
import type { SongOption } from '../../components/SongSelector';
import MobileSearchNavbar from '../../components/MobileSearchNavbar';
import SongComparisonChart from '../../components/SongComparisonChart';

const SongCompare = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [selectedSong1, setSelectedSong1] = useState<SongOption | null>(null);
  const [selectedSong2, setSelectedSong2] = useState<SongOption | null>(null);
  const [hasAutoSelected1, setHasAutoSelected1] = useState(false);
  const [hasAutoSelected2, setHasAutoSelected2] = useState(false);

  // Search queries for URL parameters
  const urlSong1Name = searchParams.get('song1');
  const urlSong2Name = searchParams.get('song2');

  // Set initial search queries from URL parameters
  useEffect(() => {
    if (urlSong1Name && !searchQuery1) {
      setSearchQuery1(urlSong1Name);
      setHasAutoSelected1(false);
    }
    if (urlSong2Name && !searchQuery2) {
      setSearchQuery2(urlSong2Name);
      setHasAutoSelected2(false);
    }
  }, [urlSong1Name, urlSong2Name, searchQuery1, searchQuery2]);

  // Get search results for auto-selection
  const searchResults1 = useSpotifySearchQuery({
    q: searchQuery1 && !selectedSong1 ? searchQuery1 : '',
    type: 'track',
    limit: 5,
  });

  const searchResults2 = useSpotifySearchQuery({
    q: searchQuery2 && !selectedSong2 ? searchQuery2 : '',
    type: 'track',
    limit: 5,
  });

  // Auto-select first results when coming from URL parameters OR manual suggestion clicks
  useEffect(() => {
    if (
      searchQuery1 &&
      !selectedSong1 &&
      !hasAutoSelected1 &&
      searchResults1.data?.tracks?.items?.length
    ) {
      const firstResult = searchResults1.data.tracks.items[0];
      const songOption: SongOption = {
        id: firstResult.id,
        name: firstResult.name,
        artists: firstResult.artists,
        album: firstResult.album,
        duration_ms: firstResult.duration_ms,
        popularity: firstResult.popularity,
        preview_url: firstResult.preview_url,
      };
      setSelectedSong1(songOption);
      setHasAutoSelected1(true);
    }
  }, [searchQuery1, selectedSong1, hasAutoSelected1, searchResults1.data]);

  useEffect(() => {
    if (
      searchQuery2 &&
      !selectedSong2 &&
      !hasAutoSelected2 &&
      searchResults2.data?.tracks?.items?.length
    ) {
      const firstResult = searchResults2.data.tracks.items[0];
      const songOption: SongOption = {
        id: firstResult.id,
        name: firstResult.name,
        artists: firstResult.artists,
        album: firstResult.album,
        duration_ms: firstResult.duration_ms,
        popularity: firstResult.popularity,
        preview_url: firstResult.preview_url,
      };
      setSelectedSong2(songOption);
      setHasAutoSelected2(true);
    }
  }, [searchQuery2, selectedSong2, hasAutoSelected2, searchResults2.data]);

  // Get comprehensive song data
  const song1Data = useSpotifyTrackQuery(selectedSong1?.id || null);
  const song2Data = useSpotifyTrackQuery(selectedSong2?.id || null);
  const song1Features = useSpotifyTrackFeaturesQuery(selectedSong1?.id || null);
  const song2Features = useSpotifyTrackFeaturesQuery(selectedSong2?.id || null);

  // Search handlers (simplified since SongSelector handles debouncing internally)
  const handleSearch1Change = useCallback((value: string) => {
    setSearchQuery1(value);
    setHasAutoSelected1(false); // Allow auto-selection for new searches
  }, []);

  const handleSearch2Change = useCallback((value: string) => {
    setSearchQuery2(value);
    setHasAutoSelected2(false); // Allow auto-selection for new searches
  }, []);

  // Song selection handlers (memoized)
  const handleSong1Select = useCallback((song: SongOption | null) => {
    setSelectedSong1(song);
  }, []);

  const handleSong2Select = useCallback((song: SongOption | null) => {
    setSelectedSong2(song);
  }, []);

  // Handle suggestion pair clicks
  const handleSuggestionClick = (song1: string, song2: string) => {
    setSelectedSong1(null);
    setSelectedSong2(null);
    setSearchQuery1(song1);
    setSearchQuery2(song2);
    setHasAutoSelected1(false); // Reset auto-selection for manual searches
    setHasAutoSelected2(false); // Reset auto-selection for manual searches
  };

  // Popular song comparison suggestions
  const comparisonSuggestions = [
    {
      song1: 'Flowers',
      song2: 'Anti-Hero',
      description: 'Two chart-toppers from different vibes',
    },
    {
      song1: 'As It Was',
      song2: 'Watermelon Sugar',
      description: 'Harry Styles classics comparison',
    },
    {
      song1: 'Heat Waves',
      song2: 'Levitating',
      description: 'Indie vs Pop dance tracks',
    },
    {
      song1: 'Good 4 U',
      song2: 'Stay',
      description: 'Gen Z anthems face-off',
    },
    {
      song1: 'Industry Baby',
      song2: 'Montero',
      description: 'Lil Nas X hit comparison',
    },
    {
      song1: 'Blinding Lights',
      song2: 'Save Your Tears',
      description: "The Weeknd's biggest hits",
    },
  ];

  // Memoized derived state
  const hasAnySong = useMemo(
    () => selectedSong1 || selectedSong2,
    [selectedSong1, selectedSong2]
  );

  const song1 = useMemo(() => song1Data.data, [song1Data.data]);
  const song2 = useMemo(() => song2Data.data, [song2Data.data]);
  const features1 = useMemo(() => song1Features.data, [song1Features.data]);
  const features2 = useMemo(() => song2Features.data, [song2Features.data]);

  // Helper function to format duration (memoized)
  const formatDuration = useCallback((ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  return (
    <>
      {/* MOBILE SEARCH NAVBAR - Mobile Only */}
      <MobileSearchNavbar
        songSearchQuery1={searchQuery1}
        songSearchQuery2={searchQuery2}
        selectedSong1={selectedSong1}
        selectedSong2={selectedSong2}
        onSongSearchChange1={handleSearch1Change}
        onSongSearchChange2={handleSearch2Change}
        onSongSelect1={handleSong1Select}
        onSongSelect2={handleSong2Select}
      />

      <div css={comparison_container}>
        {!hasAnySong ? (
          /* HERO SECTION - Empty State */
          <div css={comparison_hero_section}>
            <div css={vs_animation}>VS</div>

            <h1 css={comparison_hero_title}>Compare Songs</h1>
            <p css={comparison_hero_subtitle}>
              Discover how your favorite tracks stack up against each other with
              detailed audio features, analytics, and head-to-head comparisons
              powered by Spotify data.
            </p>

            <div css={comparison_suggestions}>
              <h2 css={suggestions_title_comparison}>Popular Comparisons</h2>
              <div css={comparison_suggestions_grid}>
                {comparisonSuggestions.map((suggestion, index) => (
                  <div key={index}>
                    <div
                      css={suggestion_pair_card}
                      onClick={() =>
                        handleSuggestionClick(
                          suggestion.song1,
                          suggestion.song2
                        )
                      }
                    >
                      <div css={suggestion_pair_artists}>
                        {suggestion.song1} vs {suggestion.song2}
                      </div>
                      <div css={suggestion_pair_description}>
                        {suggestion.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* CONTENT AREA - Comparison Results */
          <div css={content_area_comparison}>
            {/* Enhanced Song Comparison Chart */}
            {song1 && song2 && features1 && features2 ? (
              <SongComparisonChart
                song1={song1}
                song2={song2}
                features1={features1}
                features2={features2}
              />
            ) : (
              /* Original horizontal layout for when data is loading */
              <div css={horizontal_comparison_layout}>
                {/* LEFT SONG CARD */}
                {selectedSong1 && song1Data.data && (
                  <div css={left_song_card} className="left-song">
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                      <img
                        src={song1Data.data.album.images?.[0]?.url}
                        alt={song1Data.data.album.name}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '8px',
                          marginBottom: '1rem',
                        }}
                      />
                      <h3 style={{ color: '#8b5cf6', margin: '0.5rem 0' }}>
                        {song1Data.data.name}
                      </h3>
                      <p style={{ color: '#b3b3b3', margin: '0.25rem 0' }}>
                        {song1Data.data.artists.map((a) => a.name).join(', ')}
                      </p>
                      <p
                        style={{
                          color: '#b3b3b3',
                          fontSize: '0.9rem',
                          margin: '0.25rem 0',
                        }}
                      >
                        {song1Data.data.album.name}
                      </p>
                      <p
                        style={{
                          color: '#b3b3b3',
                          fontSize: '0.8rem',
                          margin: '0.25rem 0',
                        }}
                      >
                        {formatDuration(song1Data.data.duration_ms)} •{' '}
                        {song1Data.data.popularity}% popularity
                      </p>

                      {/* Audio Features */}
                      {song1Features.data && (
                        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                          <h4
                            style={{
                              color: '#8b5cf6',
                              fontSize: '0.9rem',
                              marginBottom: '0.5rem',
                            }}
                          >
                            Audio Features
                          </h4>
                          <div style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>
                            <div>
                              Energy:{' '}
                              {Math.round(song1Features.data.energy * 100)}%
                            </div>
                            <div>
                              Danceability:{' '}
                              {Math.round(
                                song1Features.data.danceability * 100
                              )}
                              %
                            </div>
                            <div>
                              Valence:{' '}
                              {Math.round(song1Features.data.valence * 100)}%
                            </div>
                            <div>
                              Tempo: {Math.round(song1Features.data.tempo)} BPM
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CENTER COMPARISON CHART - Only show when both songs are selected */}
                {selectedSong1 &&
                  selectedSong2 &&
                  song1Features.data &&
                  song2Features.data && (
                    <div
                      css={center_comparison_chart}
                      className="comparison-chart"
                    >
                      <h3
                        style={{
                          textAlign: 'center',
                          color: '#8b5cf6',
                          marginBottom: '1rem',
                        }}
                      >
                        Feature Comparison
                      </h3>

                      {/* Simple feature comparison bars */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem',
                        }}
                      >
                        {[
                          {
                            name: 'Energy',
                            val1: song1Features.data.energy,
                            val2: song2Features.data.energy,
                          },
                          {
                            name: 'Danceability',
                            val1: song1Features.data.danceability,
                            val2: song2Features.data.danceability,
                          },
                          {
                            name: 'Valence',
                            val1: song1Features.data.valence,
                            val2: song2Features.data.valence,
                          },
                          {
                            name: 'Acousticness',
                            val1: song1Features.data.acousticness,
                            val2: song2Features.data.acousticness,
                          },
                        ].map((feature) => (
                          <div
                            key={feature.name}
                            style={{ marginBottom: '1rem' }}
                          >
                            <div
                              style={{
                                color: '#fff',
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                              }}
                            >
                              {feature.name}
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                gap: '0.5rem',
                                alignItems: 'center',
                              }}
                            >
                              <div
                                style={{
                                  background: '#8b5cf6',
                                  height: '8px',
                                  width: `${feature.val1 * 100}%`,
                                  maxWidth: '45%',
                                  borderRadius: '4px',
                                }}
                              />
                              <span
                                style={{ color: '#b3b3b3', fontSize: '0.8rem' }}
                              >
                                {Math.round(feature.val1 * 100)}%
                              </span>
                              <span
                                style={{ color: '#666', margin: '0 0.5rem' }}
                              >
                                vs
                              </span>
                              <span
                                style={{ color: '#b3b3b3', fontSize: '0.8rem' }}
                              >
                                {Math.round(feature.val2 * 100)}%
                              </span>
                              <div
                                style={{
                                  background: '#a855f7',
                                  height: '8px',
                                  width: `${feature.val2 * 100}%`,
                                  maxWidth: '45%',
                                  borderRadius: '4px',
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* RIGHT SONG CARD */}
                {selectedSong2 && song2Data.data && (
                  <div css={right_song_card} className="right-song">
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                      <img
                        src={song2Data.data.album.images?.[0]?.url}
                        alt={song2Data.data.album.name}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '8px',
                          marginBottom: '1rem',
                        }}
                      />
                      <h3 style={{ color: '#8b5cf6', margin: '0.5rem 0' }}>
                        {song2Data.data.name}
                      </h3>
                      <p style={{ color: '#b3b3b3', margin: '0.25rem 0' }}>
                        {song2Data.data.artists.map((a) => a.name).join(', ')}
                      </p>
                      <p
                        style={{
                          color: '#b3b3b3',
                          fontSize: '0.9rem',
                          margin: '0.25rem 0',
                        }}
                      >
                        {song2Data.data.album.name}
                      </p>
                      <p
                        style={{
                          color: '#b3b3b3',
                          fontSize: '0.8rem',
                          margin: '0.25rem 0',
                        }}
                      >
                        {formatDuration(song2Data.data.duration_ms)} •{' '}
                        {song2Data.data.popularity}% popularity
                      </p>

                      {/* Audio Features */}
                      {song2Features.data && (
                        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
                          <h4
                            style={{
                              color: '#8b5cf6',
                              fontSize: '0.9rem',
                              marginBottom: '0.5rem',
                            }}
                          >
                            Audio Features
                          </h4>
                          <div style={{ fontSize: '0.8rem', color: '#b3b3b3' }}>
                            <div>
                              Energy:{' '}
                              {Math.round(song2Features.data.energy * 100)}%
                            </div>
                            <div>
                              Danceability:{' '}
                              {Math.round(
                                song2Features.data.danceability * 100
                              )}
                              %
                            </div>
                            <div>
                              Valence:{' '}
                              {Math.round(song2Features.data.valence * 100)}%
                            </div>
                            <div>
                              Tempo: {Math.round(song2Features.data.tempo)} BPM
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Single Song State - When only one song is selected */}
            {(selectedSong1 || selectedSong2) &&
              !(selectedSong1 && selectedSong2) && (
                <div css={single_song_prompt}>
                  <h3 css={single_song_title}>Choose a Second Song</h3>
                  <p css={single_song_subtitle}>
                    Select another song above to see a detailed comparison
                    between {selectedSong1?.name || selectedSong2?.name} and
                    your chosen track.
                  </p>
                </div>
              )}
          </div>
        )}

        {/* Spotify Attribution */}
        <div css={spotify_attribution}>🎵 SPOTIFY</div>
      </div>
    </>
  );
};

export default SongCompare;
