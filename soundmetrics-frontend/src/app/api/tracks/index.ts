import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '..';
import { useSpotifyAuthContext } from '../../components/SpotifyAuthProvider/context';

export const useSpotifyTrackQuery = (trackId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/tracks/${trackId}`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.SingleTrackResponse;
  };

  return useQuery({
    queryKey: ['v1/tracks', trackId],
    queryFn,
    enabled: !!trackId && !!accessToken,
  });
};

export const useSpotifyTrackFeaturesQuery = (trackId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/audio-features/${trackId}`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.AudioFeaturesResponse;
  };

  return useQuery({
    queryKey: ['v1/audio-features', trackId],
    queryFn,
    enabled: !!trackId && !!accessToken,
  });
};

export const useSpotifyTrackAnalysisQuery = (trackId: string | null) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: `/v1/audio-analysis/${trackId}`,
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.AudioAnalysisResponse;
  };

  return useQuery({
    queryKey: ['v1/audio-analysis', trackId],
    queryFn,
    enabled: !!trackId && !!accessToken,
  });
};

export const useSpotifyRecommendationsQuery = (
  params: {
    seed_tracks?: string;
    seed_artists?: string;
    seed_genres?: string;
    limit?: number;
    market?: string;
  } | null
) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: '/v1/recommendations',
      urlParams: params || {},
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.RecommendationsFromSeedsResponse;
  };

  return useQuery({
    queryKey: ['v1/recommendations', params],
    queryFn,
    enabled: !!params && !!accessToken,
  });
};

// Search specifically for tracks
export const useSpotifyTrackSearchQuery = (
  query: string,
  limit: number = 10
) => {
  const { accessToken } = useSpotifyAuthContext();

  const queryFn = async () => {
    const response = makeRequest({
      method: 'GET',
      url: '/v1/search',
      urlParams: {
        q: query,
        type: 'track',
        limit,
        market: 'US',
      },
      config: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    });
    return response as any as SpotifyApi.SearchResponse;
  };

  return useQuery({
    queryKey: ['v1/search/tracks', query, limit],
    queryFn,
    enabled: !!query && !!accessToken,
  });
};
