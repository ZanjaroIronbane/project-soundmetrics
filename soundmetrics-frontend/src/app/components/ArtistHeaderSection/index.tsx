import React from 'react';
import { Link } from 'react-router-dom';
import {
  artist_header,
  artist_image,
  artist_info,
  artist_name_container,
  artist_name,
  artist_followers,
  artist_genres,
  genre_chip,
  compare_button,
} from './styles';

interface ArtistHeaderSectionProps {
  artist: SpotifyApi.SingleArtistResponse;
}

const ArtistHeaderSection: React.FC<ArtistHeaderSectionProps> = ({
  artist,
}) => {
  return (
    <div css={artist_header}>
      <img css={artist_image} src={artist.images?.[0]?.url} alt={artist.name} />
      <div css={artist_info}>
        <div css={artist_name_container}>
          <h2 css={artist_name}>{artist.name}</h2>
          <Link
            to={`/compare?artist1=${encodeURIComponent(artist.name)}`}
            css={compare_button}
          >
            ⚡ Compare
          </Link>
        </div>
        <div css={artist_followers}>
          {artist.followers.total.toLocaleString()} followers •{' '}
          {artist.popularity}/100 popularity
        </div>
        {artist.genres && artist.genres.length > 0 && (
          <div css={artist_genres}>
            {artist.genres.slice(0, 5).map((genre) => (
              <span key={genre} css={genre_chip}>
                {genre}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistHeaderSection;
