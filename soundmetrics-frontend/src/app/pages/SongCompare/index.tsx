import { useState, useEffect } from 'react';
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

const SongCompare = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [selectedSong1, setSelectedSong1] = useState<SongOption | null>(null);
  const [selectedSong2, setSelectedSong2] = useState<SongOption | null>(null);

  // Search queries for URL parameters
  const urlSong1Name = searchParams.get('song1');
  const urlSong2Name = searchParams.get('song2');

  // Search results for URL parameters
  const urlSong1Search = useSpotifySearchQuery({
    q: urlSong1Name || '',
    type: 'track',
    limit: 1,
  });

  const urlSong2Search = useSpotifySearchQuery({
    q: urlSong2Name || '',
    type: 'track',
    limit: 1,
  });

  // Search results for manual searches
  const manualSong1Search = useSpotifySearchQuery({
    q: searchQuery1,
    type: 'track',
    limit: 1,
  });

  const manualSong2Search = useSpotifySearchQuery({
    q: searchQuery2,
    type: 'track',
    limit: 1,
  });

  // Handle URL parameters for pre-filled searches
  useEffect(() => {
    if (urlSong1Name && !selectedSong1) {
      setSearchQuery1(urlSong1Name);
      if (
        urlSong1Search.data?.tracks?.items &&
        urlSong1Search.data.tracks.items.length > 0
      ) {
        const firstMatch = urlSong1Search.data.tracks.items[0];
        const songOption: SongOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          artists: firstMatch.artists,
          album: firstMatch.album,
          duration_ms: firstMatch.duration_ms,
          popularity: firstMatch.popularity,
          preview_url: firstMatch.preview_url,
        };
        setSelectedSong1(songOption);
      }
    }

    if (urlSong2Name && !selectedSong2) {
      setSearchQuery2(urlSong2Name);
      if (
        urlSong2Search.data?.tracks?.items &&
        urlSong2Search.data.tracks.items.length > 0
      ) {
        const firstMatch = urlSong2Search.data.tracks.items[0];
        const songOption: SongOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          artists: firstMatch.artists,
          album: firstMatch.album,
          duration_ms: firstMatch.duration_ms,
          popularity: firstMatch.popularity,
          preview_url: firstMatch.preview_url,
        };
        setSelectedSong2(songOption);
      }
    }
  }, [
    searchParams,
    selectedSong1,
    selectedSong2,
    urlSong1Search.data,
    urlSong2Search.data,
    urlSong1Name,
    urlSong2Name,
  ]);

  // Auto-select first result for manual searches
  useEffect(() => {
    if (searchQuery1 && manualSong1Search.data && !selectedSong1) {
      const firstMatch = manualSong1Search.data.tracks?.items?.[0];
      if (firstMatch) {
        const songOption: SongOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          artists: firstMatch.artists,
          album: firstMatch.album,
          duration_ms: firstMatch.duration_ms,
          popularity: firstMatch.popularity,
          preview_url: firstMatch.preview_url,
        };
        setSelectedSong1(songOption);
      }
    }
  }, [searchQuery1, manualSong1Search.data, selectedSong1]);

  useEffect(() => {
    if (searchQuery2 && manualSong2Search.data && !selectedSong2) {
      const firstMatch = manualSong2Search.data.tracks?.items?.[0];
      if (firstMatch) {
        const songOption: SongOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          artists: firstMatch.artists,
          album: firstMatch.album,
          duration_ms: firstMatch.duration_ms,
          popularity: firstMatch.popularity,
          preview_url: firstMatch.preview_url,
        };
        setSelectedSong2(songOption);
      }
    }
  }, [searchQuery2, manualSong2Search.data, selectedSong2]);

  // Get comprehensive song data
  const song1Data = useSpotifyTrackQuery(selectedSong1?.id || null);
  const song2Data = useSpotifyTrackQuery(selectedSong2?.id || null);
  const song1Features = useSpotifyTrackFeaturesQuery(selectedSong1?.id || null);
  const song2Features = useSpotifyTrackFeaturesQuery(selectedSong2?.id || null);

  // Search handlers
  const handleSearch1Change = (value: string) => {
    setSearchQuery1(value);
  };

  const handleSearch2Change = (value: string) => {
    setSearchQuery2(value);
  };

  // Song selection handlers
  const handleSong1Select = (song: SongOption | null) => {
    setSelectedSong1(song);
  };

  const handleSong2Select = (song: SongOption | null) => {
    setSelectedSong2(song);
  };

  // Handle suggestion pair clicks
  const handleSuggestionClick = (song1: string, song2: string) => {
    setSelectedSong1(null);
    setSelectedSong2(null);
    setSearchQuery1(song1);
    setSearchQuery2(song2);
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

  const hasAnySong = selectedSong1 || selectedSong2;

  // Helper function to format duration
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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
            {/* HORIZONTAL LAYOUT: SongCard | ComparisonChart | SongCard */}
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
                            {Math.round(song1Features.data.danceability * 100)}%
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
                            <span style={{ color: '#666', margin: '0 0.5rem' }}>
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
                            {Math.round(song2Features.data.danceability * 100)}%
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
