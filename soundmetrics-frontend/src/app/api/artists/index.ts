import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '..';
import { useSpotifyAuthContext } from '../../components/SpotifyAuthProvider/context';

export const useSpotifyArtistQuery = (artistId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/artists/${artistId}`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.SingleArtistResponse;
  };

  return useQuery({
    queryKey: ['v1/artists', artistId],
    queryFn,
    enabled: !!artistId && !!accessToken,
  });
};

export const useSpotifyArtistTopTracksQuery = (artistId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/artists/${artistId}/top-tracks`,
      urlParams: { market: 'US' },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.ArtistsTopTracksResponse;
  };

  return useQuery({
    queryKey: ['v1/artists', artistId, 'top-tracks'],
    queryFn,
    enabled: !!artistId && !!accessToken,
  });
};

export const useSpotifyArtistAlbumsQuery = (artistId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/artists/${artistId}/albums`,
      urlParams: {
        market: 'US',
        include_groups: 'album,single',
        limit: 50,
      },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.ArtistsAlbumsResponse;
  };

  return useQuery({
    queryKey: ['v1/artists', artistId, 'albums'],
    queryFn,
    enabled: !!artistId && !!accessToken,
  });
};

export const useSpotifyRelatedArtistsQuery = (artistId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/artists/${artistId}/related-artists`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.ArtistsRelatedArtistsResponse;
  };

  return useQuery({
    queryKey: ['v1/artists', artistId, 'related-artists'],
    queryFn,
    enabled: !!artistId && !!accessToken,
  });
};
