import React from 'react';
import {
  related_section,
  section_title,
  related_artists_grid,
  related_artist_item,
  related_artist_image,
  related_artist_name,
} from './styles';

interface RelatedArtistsSectionProps {
  relatedArtists: SpotifyApi.ArtistObjectFull[];
}

const RelatedArtistsSection: React.FC<RelatedArtistsSectionProps> = ({
  relatedArtists,
}) => {
  return (
    <div css={related_section}>
      <h3 css={section_title}>Related Artists</h3>
      <div css={related_artists_grid}>
        {relatedArtists.slice(0, 8).map((relatedArtist) => (
          <div key={relatedArtist.id} css={related_artist_item}>
            <img
              css={related_artist_image}
              src={relatedArtist.images?.[0]?.url}
              alt={relatedArtist.name}
            />
            <div css={related_artist_name}>{relatedArtist.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArtistsSection;
