import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  useSpotifyArtistQuery,
  useSpotifyArtistTopTracksQuery,
  useSpotifyArtistAlbumsQuery,
  useSpotifyRelatedArtistsQuery,
} from '../../api/artists';
import { useSpotifyNewReleasesQuery } from '../../api/browse';
import { useSpotifySearchQuery } from '../../api/search';
import type { ArtistOption } from '../../components/ArtistSelector';
import MobileSearchNavbar from '../../components/MobileSearchNavbar';
import { generateArtistAnalytics } from '../../utils/artist_analytics';
import ArtistHeaderSection from '../../components/ArtistHeaderSection';
import ArtistAnalyticsSection from '../../components/ArtistAnalyticsSection';
import PopularTracksSection from '../../components/PopularTracksSection';
import AlbumsSection from '../../components/AlbumsSection';
import RelatedArtistsSection from '../../components/RelatedArtistsSection';
import {
  search_container,
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
  artist_details_section,
  content_grid,
  full_width_section,
  loading_container,
  loading_spinner,
  loading_text,
  spotify_attribution,
} from './styles';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState<ArtistOption | null>(
    null
  );

  // Handle URL parameter for direct artist links (from home page releases)
  const urlArtistName = searchParams.get('q');
  const urlArtistSearch = useSpotifySearchQuery({
    q: urlArtistName || '',
    type: 'artist',
    limit: 1,
  });

  // Get comprehensive artist data when an artist is selected
  const artistData = useSpotifyArtistQuery(selectedArtist?.id || null);
  const topTracksData = useSpotifyArtistTopTracksQuery(
    selectedArtist?.id || null
  );
  const albumsData = useSpotifyArtistAlbumsQuery(selectedArtist?.id || null);
  const relatedArtistsData = useSpotifyRelatedArtistsQuery(
    selectedArtist?.id || null
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleArtistSelect = (artist: ArtistOption | null) => {
    setSelectedArtist(artist);
    if (!artist) {
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (artistName: string) => {
    setSearchQuery(artistName);
    // Clear any previous selection first to trigger fresh search
    setSelectedArtist(null);
  };

  const artist = artistData.data;
  const topTracks = topTracksData.data?.tracks || [];
  const albums = albumsData.data?.items || [];
  const relatedArtists = relatedArtistsData.data?.artists || [];

  // Get new releases for suggestions
  const newReleasesData = useSpotifyNewReleasesQuery();

  // Search for artists when suggestion is clicked
  const suggestionSearchResults = useSpotifySearchQuery({
    q: searchQuery,
    type: 'artist',
    limit: 10,
  });

  // Handle URL parameter for direct artist navigation (from home page)
  useEffect(() => {
    if (urlArtistName && !selectedArtist && !searchQuery) {
      setSearchQuery(urlArtistName);
      // Auto-select when search results arrive
      if (
        urlArtistSearch.data?.artists?.items &&
        urlArtistSearch.data.artists.items.length > 0
      ) {
        const firstMatch = urlArtistSearch.data.artists.items[0];
        const artistOption: ArtistOption = {
          id: firstMatch.id,
          name: firstMatch.name,
          image: firstMatch.images?.[0]?.url,
          followers: firstMatch.followers.total,
        };
        setSelectedArtist(artistOption);
      }
    }
  }, [urlArtistName, selectedArtist, searchQuery, urlArtistSearch.data]);

  // Auto-select first matching artist when searching from suggestion
  useEffect(() => {
    if (
      !selectedArtist &&
      searchQuery &&
      suggestionSearchResults.data?.artists?.items &&
      suggestionSearchResults.data.artists.items.length > 0
    ) {
      const firstMatch = suggestionSearchResults.data.artists.items[0];
      const artistOption: ArtistOption = {
        id: firstMatch.id,
        name: firstMatch.name,
        image: firstMatch.images?.[0]?.url,
        followers: firstMatch.followers.total,
      };
      setSelectedArtist(artistOption);
    }
  }, [suggestionSearchResults.data, searchQuery, selectedArtist]);

  // Generate artist analytics
  const artistAnalytics = useMemo(() => {
    if (!artist || !topTracks.length || !albums.length) {
      return null;
    }
    return generateArtistAnalytics(artist, topTracks, albums);
  }, [artist, topTracks, albums]);

  // Create suggestions from new releases (top 6 by popularity)
  const artistSuggestions = useMemo(() => {
    if (!newReleasesData.data?.albums?.items) {
      return [];
    }

    // Get unique artists from new releases, sorted by album popularity
    const uniqueArtists = new Map();

    newReleasesData.data.albums.items
      .filter((album) => album.artists && album.artists.length > 0)
      .sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      ) // Sort by newest first
      .forEach((album) => {
        const mainArtist = album.artists[0];
        if (!uniqueArtists.has(mainArtist.id)) {
          uniqueArtists.set(mainArtist.id, {
            name: mainArtist.name,
            albumName: album.name,
            image: album.images?.[0]?.url,
            releaseDate: album.release_date,
          });
        }
      });

    return Array.from(uniqueArtists.values()).slice(0, 9);
  }, [newReleasesData.data]);

  return (
    <>
      {/* MOBILE SEARCH NAVBAR - Mobile Only */}
      <MobileSearchNavbar
        searchQuery={searchQuery}
        selectedArtist={selectedArtist}
        onSearchChange={handleSearchChange}
        onArtistSelect={handleArtistSelect}
      />

      <div css={search_container}>
        {!selectedArtist ? (
          /* HERO SECTION - Empty State */
          <div css={hero_section}>
            <div css={floating_notes} />

            <h1 css={hero_title}>Discover Artists</h1>
            <p css={hero_subtitle}>
              Explore comprehensive artist insights, track analytics, and
              discover your next favorite musician with our Spotify-powered
              search engine.
            </p>

            <div css={suggestions_section}>
              <h2 css={suggestions_title}>Trending New Releases</h2>
              <div css={suggestions_grid}>
                {artistSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.name}
                    css={suggestion_card}
                    onClick={() => handleSuggestionClick(suggestion.name)}
                  >
                    {suggestion.image && (
                      <img
                        src={suggestion.image}
                        alt={suggestion.albumName}
                        css={suggestion_image}
                      />
                    )}
                    <div css={suggestion_text}>{suggestion.name}</div>
                    <div css={suggestion_description}>
                      {suggestion.albumName}
                    </div>
                    <div css={suggestion_meta}>
                      {new Date(suggestion.releaseDate).getFullYear()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : selectedArtist &&
          (artistData.isLoading ||
            topTracksData.isLoading ||
            albumsData.isLoading) ? (
          /* LOADING STATE - When artist is selected but data is loading */
          <div css={loading_container}>
            <div css={loading_spinner} />
            <div css={loading_text}>
              Loading {selectedArtist.name}'s details...
            </div>
          </div>
        ) : (
          /* CONTENT AREA - Search Results */
          <div css={content_area}>
            <div css={artist_details_section}>
              {/* Artist Header */}
              {artist && <ArtistHeaderSection artist={artist} />}

              {/* Artist Analytics Metrics */}
              {artistAnalytics && (
                <div css={full_width_section}>
                  <ArtistAnalyticsSection artistAnalytics={artistAnalytics} />
                </div>
              )}

              <div css={content_grid}>
                {/* Popular Tracks - Left Column */}
                {topTracks.length > 0 && (
                  <PopularTracksSection topTracks={topTracks} />
                )}

                {/* Albums - Right Column */}
                {albums.length > 0 && <AlbumsSection albums={albums} />}

                {/* Related Artists - Full Width */}
                {relatedArtists.length > 0 && (
                  <div css={full_width_section}>
                    <RelatedArtistsSection relatedArtists={relatedArtists} />
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

export default Search;
