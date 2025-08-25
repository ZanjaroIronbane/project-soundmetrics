import React, { useMemo } from 'react';
import {
  recommendations_container,
  recommendation_item,
  recommendation_image,
  recommendation_info,
  recommendation_title,
  recommendation_artist,
  recommendation_similarity,
  similarity_reasons,
  similarity_reason,
  recommendation_meta,
  play_button,
} from './styles';

interface EnhancedRecommendationsProps {
  recommendations: SpotifyApi.TrackObjectSimplified[];
  originalFeatures: SpotifyApi.AudioFeaturesObject;
  originalSong: SpotifyApi.TrackObjectFull;
  onSongClick?: (songName: string, artistName: string) => void;
}

const EnhancedRecommendations: React.FC<EnhancedRecommendationsProps> = ({
  recommendations,
  originalFeatures,
  originalSong,
  onSongClick,
}) => {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const enhancedRecommendations = useMemo(() => {
    return recommendations.slice(0, 8).map((track, index) => {
      // Simulate feature analysis for recommendations
      // In a real app, you'd fetch features for each recommendation
      const similarities = generateSimilarityReasons(originalFeatures, index);

      return {
        ...track,
        similarities,
        matchScore: Math.round(85 + Math.random() * 12), // Simulated match score
      };
    });
  }, [recommendations, originalFeatures]);

  return (
    <div css={recommendations_container}>
      <h3
        style={{ color: '#8b5cf6', marginBottom: '1.5rem', fontSize: '1.5rem' }}
      >
        Songs You'll Love
        <span
          style={{
            color: '#9ca3af',
            fontSize: '0.9rem',
            fontWeight: 'normal',
            marginLeft: '0.5rem',
          }}
        >
          Based on "{originalSong.name}"
        </span>
      </h3>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {enhancedRecommendations.map((track, index) => (
          <div
            key={track.id}
            css={recommendation_item}
            onClick={() =>
              onSongClick?.(
                track.name,
                track.artists.map((a) => a.name).join(', ')
              )
            }
          >
            <div css={recommendation_image}>
              {track.album?.images?.[0]?.url ? (
                <img
                  src={track.album.images[0].url}
                  alt={track.album?.name || 'Album cover'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, #8b5cf6, #a855f7)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  🎵
                </div>
              )}
              <div css={play_button}>▶</div>
            </div>

            <div css={recommendation_info}>
              <div css={recommendation_title}>{track.name}</div>
              <div css={recommendation_artist}>
                {track.artists.map((a) => a.name).join(', ')}
              </div>

              <div css={recommendation_similarity}>
                <span style={{ color: '#4ade80', fontWeight: '600' }}>
                  {track.matchScore}% match
                </span>
              </div>

              <div css={similarity_reasons}>
                {track.similarities.map((reason, reasonIndex) => (
                  <span key={reasonIndex} css={similarity_reason}>
                    {reason}
                  </span>
                ))}
              </div>
            </div>

            <div css={recommendation_meta}>
              <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                {formatDuration(track.duration_ms)}
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                {track.popularity}% popular
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function generateSimilarityReasons(
  originalFeatures: SpotifyApi.AudioFeaturesObject,
  index: number
): string[] {
  const reasons: string[] = [];

  // Vary the reasons based on index to simulate different similarity factors
  const reasonPool = [
    'Similar energy level',
    'Matching tempo',
    'Same danceability',
    'Similar mood',
    'Comparable acousticness',
    'Related genre',
    'Similar vocal style',
    'Matching instrumentals',
    'Same decade',
    'Artist collaboration',
    'Producer connection',
    'Similar popularity',
  ];

  // Pick 2-3 random reasons for each recommendation
  const numReasons = 2 + Math.floor(Math.random() * 2);
  const selectedReasons = [...reasonPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, numReasons);

  return selectedReasons;
}

export default EnhancedRecommendations;
