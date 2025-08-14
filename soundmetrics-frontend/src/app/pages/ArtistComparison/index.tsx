import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useSpotifyArtistQuery,
  useSpotifyArtistTopTracksQuery,
  useSpotifyArtistAlbumsQuery,
  useSpotifyRelatedArtistsQuery,
} from '../../api/artists';
import {
  comparison_container,
  page_title,
  artist_selection_section,
  selection_grid,
  horizontal_comparison_layout,
  left_artist_card,
  right_artist_card,
  center_comparison_chart,
  spotify_attribution,
} from './styles';
import ArtistStatsCard from '../../components/ArtistStatsCard';
import SpotifyComparisonChart from '../../components/SpotifyComparisonChart';
import ArtistSelector from '../../components/ArtistSelector';
import type { ArtistOption } from '../../components/ArtistSelector';
import { generateArtistAnalytics } from '../../utils/artist_analytics';

const ArtistComparison = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [selectedArtist1, setSelectedArtist1] = useState<ArtistOption | null>(
    null
  );
  const [selectedArtist2, setSelectedArtist2] = useState<ArtistOption | null>(
    null
  );

  // Handle URL parameters for pre-filled searches
  useEffect(() => {
    const artist1Name = searchParams.get('artist1');
    const artist2Name = searchParams.get('artist2');

    if (artist1Name && !selectedArtist1) {
      setSearchQuery1(artist1Name);
    }
    if (artist2Name && !selectedArtist2) {
      setSearchQuery2(artist2Name);
    }
  }, [searchParams, selectedArtist1, selectedArtist2]);

  // Get comprehensive artist data
  const artist1Data = useSpotifyArtistQuery(selectedArtist1?.id || null);
  const artist2Data = useSpotifyArtistQuery(selectedArtist2?.id || null);
  const artist1TopTracks = useSpotifyArtistTopTracksQuery(
    selectedArtist1?.id || null
  );
  const artist2TopTracks = useSpotifyArtistTopTracksQuery(
    selectedArtist2?.id || null
  );
  const artist1Albums = useSpotifyArtistAlbumsQuery(
    selectedArtist1?.id || null
  );
  const artist2Albums = useSpotifyArtistAlbumsQuery(
    selectedArtist2?.id || null
  );
  const artist1RelatedArtists = useSpotifyRelatedArtistsQuery(
    selectedArtist1?.id || null
  );
  const artist2RelatedArtists = useSpotifyRelatedArtistsQuery(
    selectedArtist2?.id || null
  );

  // Generate advanced analytics
  const artist1Analytics = useMemo(() => {
    if (
      !artist1Data.data ||
      !artist1TopTracks.data?.tracks ||
      !artist1Albums.data?.items
    ) {
      return null;
    }
    return generateArtistAnalytics(
      artist1Data.data,
      artist1TopTracks.data.tracks,
      artist1Albums.data.items
    );
  }, [artist1Data.data, artist1TopTracks.data, artist1Albums.data]);

  const artist2Analytics = useMemo(() => {
    if (
      !artist2Data.data ||
      !artist2TopTracks.data?.tracks ||
      !artist2Albums.data?.items
    ) {
      return null;
    }
    return generateArtistAnalytics(
      artist2Data.data,
      artist2TopTracks.data.tracks,
      artist2Albums.data.items
    );
  }, [artist2Data.data, artist2TopTracks.data, artist2Albums.data]);

  // Search handlers
  const handleSearch1Change = (value: string) => {
    setSearchQuery1(value);
  };

  const handleSearch2Change = (value: string) => {
    setSearchQuery2(value);
  };

  // Artist selection handlers
  const handleArtist1Select = (artist: ArtistOption | null) => {
    setSelectedArtist1(artist);
  };

  const handleArtist2Select = (artist: ArtistOption | null) => {
    setSelectedArtist2(artist);
  };

  return (
    <div css={comparison_container}>
      <h1 css={page_title}>Artist Comparison</h1>

      <div css={artist_selection_section}>
        <div css={selection_grid}>
          <ArtistSelector
            label="Search for first artist"
            searchQuery={searchQuery1}
            selectedArtist={selectedArtist1}
            onSearchChange={handleSearch1Change}
            onArtistSelect={handleArtist1Select}
            placeholder="Start typing to search for first artist..."
          />

          <ArtistSelector
            label="Search for second artist"
            searchQuery={searchQuery2}
            selectedArtist={selectedArtist2}
            onSearchChange={handleSearch2Change}
            onArtistSelect={handleArtist2Select}
            placeholder="Start typing to search for second artist..."
          />
        </div>
      </div>

      {/* HORIZONTAL LAYOUT: ArtistCard | ComparisonChart | ArtistCard */}
      <div css={horizontal_comparison_layout}>
        {/* LEFT ARTIST CARD */}
        {selectedArtist1 && (
          <div css={left_artist_card} className="left-artist">
            <ArtistStatsCard
              artist={selectedArtist1}
              artistData={artist1Data}
              topTracksData={artist1TopTracks}
              albumsData={artist1Albums}
              relatedArtistsData={artist1RelatedArtists}
              title={selectedArtist1.name}
            />
          </div>
        )}

        {/* CENTER COMPARISON CHART */}
        {selectedArtist1 && selectedArtist2 && (
          <div css={center_comparison_chart} className="comparison-chart">
            {artist1Data.data &&
              artist2Data.data &&
              artist1Analytics &&
              artist2Analytics && (
                <SpotifyComparisonChart
                  data={{
                    artist1: {
                      name: artist1Data.data.name,
                      popularity: artist1Data.data.popularity,
                      followers: artist1Data.data.followers.total,
                      ...artist1Analytics,
                    },
                    artist2: {
                      name: artist2Data.data.name,
                      popularity: artist2Data.data.popularity,
                      followers: artist2Data.data.followers.total,
                      ...artist2Analytics,
                    },
                  }}
                />
              )}
          </div>
        )}

        {/* RIGHT ARTIST CARD */}
        {selectedArtist2 && (
          <div css={right_artist_card} className="right-artist">
            <ArtistStatsCard
              artist={selectedArtist2}
              artistData={artist2Data}
              topTracksData={artist2TopTracks}
              albumsData={artist2Albums}
              relatedArtistsData={artist2RelatedArtists}
              title={selectedArtist2.name}
            />
          </div>
        )}
      </div>

      {/* Tokenized Spotify Attribution */}
      <div css={spotify_attribution}>🎵 SPOTIFY</div>
    </div>
  );
};

export default ArtistComparison;
