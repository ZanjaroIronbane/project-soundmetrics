import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../index';
import { useSpotifyAuthContext } from '../../components/SpotifyAuthProvider/context';

export const useSpotifyNewReleasesQuery = () => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = await makeRequest({
      method: 'GET',
      url: '/v1/browse/new-releases',
      urlParams: {
        limit: 50,
        market: 'US',
      },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as unknown as SpotifyApi.ListOfNewReleasesResponse;
  };

  return useQuery({
    queryKey: ['v1/browse/new-releases'],
    queryFn,
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 10, // 10 minutes - new releases don't change frequently
  });
};

export const useSpotifyFeaturedPlaylistsQuery = () => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = await makeRequest({
      method: 'GET',
      url: '/v1/browse/featured-playlists',
      urlParams: {
        limit: 20,
        market: 'US',
      },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as unknown as SpotifyApi.ListOfFeaturedPlaylistsResponse;
  };

  return useQuery({
    queryKey: ['v1/browse/featured-playlists'],
    queryFn,
    enabled: !!accessToken,
    staleTime: 1000 * 60 * 30, // 30 minutes - featured playlists change less frequently
  });
};

// Get tracks from a specific playlist (for featured tracks)
export const useSpotifyPlaylistTracksQuery = (playlistId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = await makeRequest({
      method: 'GET',
      url: `/v1/playlists/${playlistId}/tracks`,
      urlParams: {
        limit: 20,
        market: 'US',
        fields:
          'items(track(id,name,artists,album,duration_ms,popularity,preview_url))',
      },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as unknown as SpotifyApi.PlaylistTrackResponse;
  };

  return useQuery({
    queryKey: ['v1/playlists', playlistId, 'tracks'],
    queryFn,
    enabled: !!playlistId && !!accessToken,
    staleTime: 1000 * 60 * 15, // 15 minutes
  });
};
