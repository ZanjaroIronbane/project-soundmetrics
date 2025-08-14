import React from 'react';
import {
  compliant_card,
  artwork_container,
  metadata_container,
  track_title,
  artist_name,
  spotify_link,
} from './styles.ts';

interface SpotifyCompliantCardProps {
  imageUrl?: string;
  trackName: string;
  artistName: string;
  albumName?: string;
  onSpotifyClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const SpotifyCompliantCard: React.FC<SpotifyCompliantCardProps> = ({
  imageUrl,
  trackName,
  artistName,
  albumName,
  onSpotifyClick,
  size = 'medium',
}) => {
  // Truncate text according to Spotify guidelines
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
  };

  // Following Spotify character count guidelines:
  const truncatedTrackName = truncateText(trackName, 23); // Track name: 23 characters
  const truncatedArtistName = truncateText(artistName, 18); // Artist name: 18 characters
  const truncatedAlbumName = albumName ? truncateText(albumName, 25) : ''; // Album name: 25 characters

  const artworkSize = size === 'small' ? 64 : size === 'medium' ? 80 : 120;
  const borderRadius = size === 'large' ? '4px' : '2px'; // Following Spotify guidelines

  return (
    <div css={compliant_card}>
      {/* Artwork - Following Spotify guidelines */}
      <div
        css={artwork_container}
        style={{ width: artworkSize, height: artworkSize }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${albumName || trackName} artwork`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius, // Rounded corners as per guidelines
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#282828',
              borderRadius,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#535353',
            }}
          >
            ♫
          </div>
        )}
      </div>

      {/* Metadata - Following Spotify guidelines */}
      <div css={metadata_container}>
        <div css={track_title} title={trackName}>
          {truncatedTrackName}
        </div>
        <div css={artist_name} title={artistName}>
          {truncatedArtistName}
        </div>
        {albumName && (
          <div
            style={{
              fontSize: '0.75rem',
              color: '#b3b3b3',
              marginTop: '2px',
            }}
            title={albumName}
          >
            {truncatedAlbumName}
          </div>
        )}
      </div>

      {/* Spotify Link - Required by guidelines */}
      <button css={spotify_link} onClick={onSpotifyClick}>
        LISTEN ON SPOTIFY
      </button>
    </div>
  );
};
