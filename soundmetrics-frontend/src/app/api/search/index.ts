import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '..';
import { useSpotifyAuthContext } from '../../components/SpotifyAuthProvider/context';

export const useSpotifySearchQuery = (
  urlParams: SpotifyApi.SearchForItemParameterObject
) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest<SpotifyApi.SearchForItemParameterObject>({
      method: 'GET',
      url: '/v1/search',
      urlParams,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as SpotifyApi.SearchResponse;
  };

  return useQuery({
    queryKey: ['v1/search', urlParams],
    queryFn,
    enabled: !!urlParams.q && urlParams.q.trim().length > 0 && !!accessToken,
    staleTime: 1000 * 60 * 5, // 5 minutes - search results don't change frequently
  });
};
