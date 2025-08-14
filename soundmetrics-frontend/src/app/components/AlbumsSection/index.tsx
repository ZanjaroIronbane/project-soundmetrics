import React from 'react';
import {
  albums_section,
  section_title,
  album_grid,
  album_item,
  album_cover,
  album_info,
  album_name,
  album_year,
  album_stats,
  album_type,
  album_track_count,
} from './styles';

interface AlbumsSectionProps {
  albums: SpotifyApi.AlbumObjectSimplified[];
}

const AlbumsSection: React.FC<AlbumsSectionProps> = ({ albums }) => {
  // Helper function to get album type
  const getAlbumType = (albumType: string, totalTracks: number): string => {
    if (albumType === 'single' && totalTracks === 1) return 'Single';
    if (albumType === 'single' && totalTracks > 1) return 'EP';
    return 'Album';
  };

  return (
    <div css={albums_section}>
      <h3 css={section_title}>Albums & Singles</h3>
      <div css={album_grid}>
        {albums.slice(0, 12).map((album) => (
          <div key={album.id} css={album_item}>
            <img
              css={album_cover}
              src={album.images?.[0]?.url}
              alt={album.name}
            />
            <div css={album_info}>
              <div css={album_name}>{album.name}</div>
              <div css={album_year}>
                {new Date(album.release_date).getFullYear()}
              </div>
              <div css={album_stats}>
                <div css={album_type}>
                  {getAlbumType(album.album_type, album.total_tracks)}
                </div>
                <div css={album_track_count}>
                  {album.total_tracks} tracks
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsSection;
