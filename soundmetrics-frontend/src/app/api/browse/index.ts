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
