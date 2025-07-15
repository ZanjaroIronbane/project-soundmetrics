import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '..';
import { useSpotifyAuthContext } from '../../components/SpotifyAuthProvider/context';

export const useSpotifySearchQuery = (
  urlParams: SpotifyApi.SearchForItemParameterObject
) => {
  const { accessToken } = useSpotifyAuthContext();

  console.log(accessToken);

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
  });
};
