import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpotifyNewReleasesQuery } from '../../api/browse';
import {
  new_releases_section,
  parallax_background,
  section_overlay,
  section_title,
  releases_grid,
  release_card,
  release_image,
  release_info,
  release_artist,
  release_album,
  release_year,
} from './styles';

const NewReleasesSection = () => {
  const navigate = useNavigate();
  const newReleasesData = useSpotifyNewReleasesQuery();

  // Get unique artists from new releases (18 for display)
  const newReleases = useMemo(() => {
    if (!newReleasesData.data?.albums?.items) {
      return [];
    }

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

    return Array.from(uniqueArtists.values()).slice(0, 18);
  }, [newReleasesData.data]);

  const handleReleaseClick = (artistName: string) => {
    navigate(`/search?q=${encodeURIComponent(artistName)}`);
  };

  return (
    <div css={new_releases_section}>
      <div css={parallax_background} />
      <div css={section_overlay}>
        <h2 css={section_title}>Trending New Releases</h2>
        <div css={releases_grid}>
          {newReleases.map((release) => (
            <div
              key={release.name}
              css={release_card}
              onClick={() => handleReleaseClick(release.name)}
            >
              {release.image && (
                <img
                  css={release_image}
                  src={release.image}
                  alt={release.albumName}
                />
              )}
              <div css={release_info}>
                <div css={release_artist}>{release.name}</div>
                <div css={release_album}>{release.albumName}</div>
                <div css={release_year}>
                  {new Date(release.releaseDate).getFullYear()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleasesSection;
