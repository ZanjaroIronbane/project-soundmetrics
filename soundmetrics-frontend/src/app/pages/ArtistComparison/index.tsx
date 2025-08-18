import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useSpotifyArtistQuery,
  useSpotifyArtistTopTracksQuery,
  useSpotifyArtistAlbumsQuery,
  useSpotifyRelatedArtistsQuery,
} from '../../api/artists';
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
  left_artist_card,
  right_artist_card,
  center_comparison_chart,
  single_artist_prompt,
  single_artist_title,
  single_artist_subtitle,
  spotify_attribution,
} from './styles';
import ArtistStatsCard from '../../components/ArtistStatsCard';
import SpotifyComparisonChart from '../../components/SpotifyComparisonChart';
import type { ArtistOption } from '../../components/ArtistSelector';
import MobileSearchNavbar from '../../components/MobileSearchNavbar';
import { generateArtistAnalytics } from '../../utils/artist_analytics';
import { COMPARISON_PAGE_SUGGESTIONS } from '../../constants/popularComparisons';

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

  // Search queries for URL parameters
  const urlArtist1Name = searchParams.get('artist1');
  const urlArtist2Name = searchParams.get('artist2');

  // Search results for URL parameters
  const urlArtist1Search = useSpotifySearchQuery({
    q: urlArtist1Name || '',
    type: 'artist',
    limit: 1,
  });

  const urlArtist2Search = useSpotifySearchQuery({
    q: urlArtist2Name || '',
    type: 'artist',
    limit: 1,
  });

  // Search results for manual searches (for popular comparisons)
  const manualArtist1Search = useSpotifySearchQuery({
    q: searchQuery1,
    type: 'artist',
    limit: 1,
  });

  const manualArtist2Search = useSpotifySearchQuery({
    q: searchQuery2,
    type: 'artist',
    limit: 1,
  });

  // Handle URL parameters for pre-filled searches
  useEffect(() => {
    if (urlArtist1Name && !selectedArtist1) {
      setSearchQuery1(urlArtist1Name);
      // Auto-select the first search result for artist1
      if (
        urlArtist1Search.data?.artists?.items &&
        urlArtist1Search.data.artists.items.length > 0
      ) {
        const firstMatch = urlArtist1Search.data.artists.items[0];
        const artistOption: ArtistOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          image: firstMatch.images?.[0]?.url,
          followers: firstMatch.followers.total,
        };
        setSelectedArtist1(artistOption);
      }
    }

    if (urlArtist2Name && !selectedArtist2) {
      setSearchQuery2(urlArtist2Name);
      // Auto-select the first search result for artist2
      if (
        urlArtist2Search.data?.artists?.items &&
        urlArtist2Search.data.artists.items.length > 0
      ) {
        const firstMatch = urlArtist2Search.data.artists.items[0];
        const artistOption: ArtistOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          image: firstMatch.images?.[0]?.url,
          followers: firstMatch.followers.total,
        };
        setSelectedArtist2(artistOption);
      }
    }
  }, [
    searchParams,
    selectedArtist1,
    selectedArtist2,
    urlArtist1Search.data,
    urlArtist2Search.data,
    urlArtist1Name,
    urlArtist2Name,
  ]);

  // Auto-select first result for manual searches (popular comparisons)
  useEffect(() => {
    if (searchQuery1 && manualArtist1Search.data && !selectedArtist1) {
      const firstMatch = manualArtist1Search.data.artists?.items?.[0];
      if (firstMatch) {
        const artistOption: ArtistOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          image: firstMatch.images?.[0]?.url,
          followers: firstMatch.followers.total,
        };
        setSelectedArtist1(artistOption);
      }
    }
  }, [searchQuery1, manualArtist1Search.data, selectedArtist1]);

  useEffect(() => {
    if (searchQuery2 && manualArtist2Search.data && !selectedArtist2) {
      const firstMatch = manualArtist2Search.data.artists?.items?.[0];
      if (firstMatch) {
        const artistOption: ArtistOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          image: firstMatch.images?.[0]?.url,
          followers: firstMatch.followers.total,
        };
        setSelectedArtist2(artistOption);
      }
    }
  }, [searchQuery2, manualArtist2Search.data, selectedArtist2]);

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

  // Handle suggestion pair clicks
  const handleSuggestionClick = (artist1: string, artist2: string) => {
    // Clear existing selections first to ensure fresh search
    setSelectedArtist1(null);
    setSelectedArtist2(null);

    // Set the new search queries (this will trigger the search and auto-selection)
    setSearchQuery1(artist1);
    setSearchQuery2(artist2);
  };

  // Popular comparison suggestions
  const comparisonSuggestions = COMPARISON_PAGE_SUGGESTIONS;

  const hasAnyArtist = selectedArtist1 || selectedArtist2;

  return (
    <>
      {/* MOBILE SEARCH NAVBAR - Mobile Only */}
      <MobileSearchNavbar
        searchQuery1={searchQuery1}
        searchQuery2={searchQuery2}
        selectedArtist1={selectedArtist1}
        selectedArtist2={selectedArtist2}
        onSearchChange1={handleSearch1Change}
        onSearchChange2={handleSearch2Change}
        onArtistSelect1={handleArtist1Select}
        onArtistSelect2={handleArtist2Select}
      />

      <div css={comparison_container}>
        {!hasAnyArtist ? (
          /* HERO SECTION - Empty State */
          <div css={comparison_hero_section}>
            <div css={vs_animation}>VS</div>

            <h1 css={comparison_hero_title}>Compare Artists</h1>
            <p css={comparison_hero_subtitle}>
              Discover how your favorite artists stack up against each other
              with comprehensive analytics, track insights, and head-to-head
              comparisons powered by Spotify data.
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
                          suggestion.artist1,
                          suggestion.artist2
                        )
                      }
                    >
                      <div css={suggestion_pair_artists}>
                        {suggestion.artist1} vs {suggestion.artist2}
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

              {/* CENTER COMPARISON CHART - Only show when both artists are selected */}
              {selectedArtist1 && selectedArtist2 && (
                <div css={center_comparison_chart} className="comparison-chart">
                  {artist1Analytics && artist2Analytics && (
                    <SpotifyComparisonChart
                      data={{
                        artist1: {
                          name: selectedArtist1.name,
                          popularity: artist1Data.data?.popularity || 0,
                          followers: artist1Data.data?.followers.total || 0,
                          ...artist1Analytics,
                        },
                        artist2: {
                          name: selectedArtist2.name,
                          popularity: artist2Data.data?.popularity || 0,
                          followers: artist2Data.data?.followers.total || 0,
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

            {/* Single Artist State - When only one artist is selected */}
            {(selectedArtist1 || selectedArtist2) &&
              !(selectedArtist1 && selectedArtist2) && (
                <div css={single_artist_prompt}>
                  <h3 css={single_artist_title}>Choose a Second Artist</h3>
                  <p css={single_artist_subtitle}>
                    Select another artist above to see a detailed comparison
                    between {selectedArtist1?.name || selectedArtist2?.name} and
                    your chosen artist.
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

export default ArtistComparison;
