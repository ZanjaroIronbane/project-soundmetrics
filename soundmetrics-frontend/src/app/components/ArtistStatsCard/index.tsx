// Spotify-style Artist Card similar to search results
import {
  artist_card_container,
  artist_image_section,
  artist_image,
  artist_info_section,
  artist_name,
  artist_genres,
  artist_stats_grid,
  stat_item,
  stat_value,
  stat_label,
  genre_tag,
  popularity_indicator,
  popularity_bar,
  popularity_fill,
  spotify_attribution,
  loading_placeholder,
} from './styles.ts';

interface SelectedArtist {
  id: string;
  name: string;
  image?: string;
  followers?: number;
}

interface ArtistStatsCardProps {
  artist: SelectedArtist | null;
  artistData: {
    data?: SpotifyApi.SingleArtistResponse;
    isLoading: boolean;
    isError: boolean;
  };
  topTracksData: {
    data?: SpotifyApi.ArtistsTopTracksResponse;
    isLoading: boolean;
    isError: boolean;
  };
  albumsData: {
    data?: SpotifyApi.ArtistsAlbumsResponse;
    isLoading: boolean;
    isError: boolean;
  };
  relatedArtistsData: {
    data?: SpotifyApi.ArtistsRelatedArtistsResponse;
    isLoading: boolean;
    isError: boolean;
  };
  title: string;
}

const ArtistStatsCard = ({
  artist,
  artistData,
  topTracksData,
  albumsData,
  // relatedArtistsData, // Not used in current simplified design
  title,
}: ArtistStatsCardProps) => {
  // Loading state
  if (!artist || !artistData.data) {
    return (
      <div css={artist_card_container}>
        <div css={loading_placeholder}>
          <div className="placeholder-image"></div>
          <div className="placeholder-content">
            <div className="placeholder-title">{title}</div>
            <div className="placeholder-text">
              {artist
                ? 'Loading artist data...'
                : 'Select an artist to see stats'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const data = artistData.data;
  const topTracks = topTracksData.data?.tracks || [];
  const albums = albumsData.data?.items || [];

  // Calculate key metrics (keeping for potential future use)
  // const avgTrackPopularity =
  //   topTracks.length > 0
  //     ? Math.round(
  //         topTracks.reduce(
  //           (sum: number, track: SpotifyApi.TrackObjectFull) =>
  //             sum + track.popularity,
  //           0
  //         ) / topTracks.length
  //       )
  //     : 0;

  const totalAlbums = albums.filter(
    (album) => album.album_type === 'album'
  ).length;
  const totalSingles = albums.filter(
    (album) => album.album_type === 'single'
  ).length;

  // Format followers count
  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div css={artist_card_container}>
      {/* Artist Image Section - Like Spotify Search Results */}
      <div css={artist_image_section}>
        <img
          css={artist_image}
          src={data.images?.[0]?.url || '/default-artist.png'}
          alt={data.name}
        />
      </div>

      {/* Artist Info Section */}
      <div css={artist_info_section}>
        {/* Artist Name */}
        <h2 css={artist_name}>{data.name}</h2>

        {/* Genres */}
        <div css={artist_genres}>
          {data.genres.slice(0, 3).map((genre: string) => (
            <span key={genre} css={genre_tag}>
              {genre}
            </span>
          ))}
        </div>

        {/* Key Stats Grid - Spotify Style */}
        <div css={artist_stats_grid}>
          <div css={stat_item}>
            <span css={stat_value}>
              {formatFollowers(data.followers.total)}
            </span>
            <span css={stat_label}>Followers</span>
          </div>

          <div css={stat_item}>
            <span css={stat_value}>{data.popularity}</span>
            <span css={stat_label}>Popularity</span>
          </div>

          <div css={stat_item}>
            <span css={stat_value}>{totalAlbums}</span>
            <span css={stat_label}>Albums</span>
          </div>

          <div css={stat_item}>
            <span css={stat_value}>{totalSingles}</span>
            <span css={stat_label}>Singles</span>
          </div>
        </div>

        {/* Popularity Indicator */}
        <div css={popularity_indicator}>
          <div css={popularity_bar}>
            <div
              css={popularity_fill}
              style={{ width: `${data.popularity}%` }}
            ></div>
          </div>
          <span className="popularity-text">
            {data.popularity}/100 Popularity Score
          </span>
        </div>

        {/* Top Track Info */}
        {topTracks.length > 0 && (
          <div className="top-track-info">
            <h4>Top Track</h4>
            <p>"{topTracks[0].name}"</p>
            <small>{topTracks[0].popularity}/100 popularity</small>
          </div>
        )}
      </div>

      {/* Required Spotify Attribution */}
      <div css={spotify_attribution}>🎵 SPOTIFY DATA</div>
    </div>
  );
};

export default ArtistStatsCard;
