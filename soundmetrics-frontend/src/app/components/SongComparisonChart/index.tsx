import React, { useMemo } from 'react';
import {
  comparison_container,
  comparison_header,
  comparison_grid,
  song_card,
  song_image,
  song_info,
  song_title,
  song_artist,
  features_comparison,
  feature_row,
  feature_label,
  feature_bars,
  feature_bar,
  feature_bar_fill,
  feature_values,
  winner_indicator,
  insights_section,
  insight_item,
  insight_icon,
  insight_text,
  vs_divider,
  match_score,
} from './styles';

interface SongComparisonChartProps {
  song1: SpotifyApi.TrackObjectFull;
  song2: SpotifyApi.TrackObjectFull;
  features1: SpotifyApi.AudioFeaturesObject;
  features2: SpotifyApi.AudioFeaturesObject;
}

interface FeatureComparison {
  key: keyof SpotifyApi.AudioFeaturesObject;
  label: string;
  description: string;
  color: string;
  format: (value: number) => string;
}

const SongComparisonChart: React.FC<SongComparisonChartProps> = ({
  song1,
  song2,
  features1,
  features2,
}) => {
  const featureComparisons: FeatureComparison[] = useMemo(
    () => [
      {
        key: 'energy',
        label: 'Energy',
        description: 'Intensity and power',
        color: '#ff6b6b',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'danceability',
        label: 'Danceability',
        description: 'How danceable',
        color: '#4ecdc4',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'valence',
        label: 'Positivity',
        description: 'Musical positivity',
        color: '#45b7d1',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'acousticness',
        label: 'Acoustic',
        description: 'Acoustic vs electronic',
        color: '#96ceb4',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'speechiness',
        label: 'Speechiness',
        description: 'Spoken word content',
        color: '#54a0ff',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'liveness',
        label: 'Live Recording',
        description: 'Live performance quality',
        color: '#ff9ff3',
        format: (val) => `${Math.round(val * 100)}%`,
      },
    ],
    []
  );

  const tempoComparison = useMemo(() => {
    const tempo1 = Math.round(features1.tempo);
    const tempo2 = Math.round(features2.tempo);
    const maxTempo = Math.max(tempo1, tempo2, 120); // Ensure reasonable scale

    return {
      tempo1,
      tempo2,
      tempo1Percentage: (tempo1 / maxTempo) * 100,
      tempo2Percentage: (tempo2 / maxTempo) * 100,
      winner: tempo1 > tempo2 ? 1 : tempo2 > tempo1 ? 2 : 0,
    };
  }, [features1.tempo, features2.tempo]);

  const popularityComparison = useMemo(() => {
    return {
      winner:
        song1.popularity > song2.popularity
          ? 1
          : song2.popularity > song1.popularity
          ? 2
          : 0,
      difference: Math.abs(song1.popularity - song2.popularity),
    };
  }, [song1.popularity, song2.popularity]);

  const insights = useMemo(() => {
    const insights: Array<{ icon: string; text: string }> = [];

    // Popularity comparison
    if (popularityComparison.difference > 20) {
      const winner =
        popularityComparison.winner === 1 ? song1.name : song2.name;
      insights.push({
        icon: '📈',
        text: `"${winner}" is significantly more popular on streaming platforms`,
      });
    } else if (popularityComparison.difference < 5) {
      insights.push({
        icon: '⚖️',
        text: 'Both songs have very similar popularity levels',
      });
    }

    // Energy comparison
    const energyDiff = Math.abs(features1.energy - features2.energy);
    if (energyDiff > 0.3) {
      const higherEnergy =
        features1.energy > features2.energy ? song1.name : song2.name;
      insights.push({
        icon: '⚡',
        text: `"${higherEnergy}" brings much more energy and intensity`,
      });
    }

    // Danceability comparison
    const danceabilityDiff = Math.abs(
      features1.danceability - features2.danceability
    );
    if (danceabilityDiff > 0.2) {
      const moreDanceable =
        features1.danceability > features2.danceability
          ? song1.name
          : song2.name;
      insights.push({
        icon: '💃',
        text: `"${moreDanceable}" is much better for dancing and parties`,
      });
    }

    // Tempo comparison
    const tempoDiff = Math.abs(features1.tempo - features2.tempo);
    if (tempoDiff > 30) {
      const faster =
        features1.tempo > features2.tempo ? song1.name : song2.name;
      insights.push({
        icon: '🏃',
        text: `"${faster}" has a noticeably faster tempo (${Math.round(
          tempoDiff
        )} BPM difference)`,
      });
    }

    // Key comparison
    if (features1.key === features2.key) {
      insights.push({
        icon: '🎼',
        text: `Both songs are in the same key, making them great for mixing`,
      });
    }

    // Mood comparison (valence)
    const valenceDiff = Math.abs(features1.valence - features2.valence);
    if (valenceDiff > 0.4) {
      const happier =
        features1.valence > features2.valence ? song1.name : song2.name;
      insights.push({
        icon: '😊',
        text: `"${happier}" has a much more positive and upbeat mood`,
      });
    }

    return insights;
  }, [song1, song2, features1, features2, popularityComparison]);

  const overallSimilarity = useMemo(() => {
    const features = [
      'energy',
      'danceability',
      'valence',
      'acousticness',
      'speechiness',
      'liveness',
    ];
    const differences = features.map((feature) =>
      Math.abs((features1 as any)[feature] - (features2 as any)[feature])
    );
    const avgDifference =
      differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
    return Math.round((1 - avgDifference) * 100);
  }, [features1, features2]);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div css={comparison_container}>
      <div css={comparison_header}>
        <h2 style={{ color: '#8b5cf6', margin: 0, fontSize: '2rem' }}>
          Head-to-Head Analysis
        </h2>
        <div css={match_score}>
          <span
            style={{ color: '#4ade80', fontSize: '1.2rem', fontWeight: '600' }}
          >
            {overallSimilarity}% Similar
          </span>
        </div>
      </div>

      <div css={comparison_grid}>
        {/* Song 1 Card */}
        <div css={song_card}>
          <div css={song_image}>
            <img
              src={song1.album.images?.[0]?.url}
              alt={song1.album.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </div>
          <div css={song_info}>
            <div css={song_title}>{song1.name}</div>
            <div css={song_artist}>
              {song1.artists.map((a) => a.name).join(', ')}
            </div>
            <div
              style={{
                color: '#9ca3af',
                fontSize: '0.8rem',
                marginTop: '0.5rem',
              }}
            >
              {formatDuration(song1.duration_ms)} • {song1.popularity}% popular
            </div>
          </div>
        </div>

        <div css={vs_divider}>VS</div>

        {/* Song 2 Card */}
        <div css={song_card}>
          <div css={song_image}>
            <img
              src={song2.album.images?.[0]?.url}
              alt={song2.album.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </div>
          <div css={song_info}>
            <div css={song_title}>{song2.name}</div>
            <div css={song_artist}>
              {song2.artists.map((a) => a.name).join(', ')}
            </div>
            <div
              style={{
                color: '#9ca3af',
                fontSize: '0.8rem',
                marginTop: '0.5rem',
              }}
            >
              {formatDuration(song2.duration_ms)} • {song2.popularity}% popular
            </div>
          </div>
        </div>
      </div>

      <div css={features_comparison}>
        {featureComparisons.map((feature) => {
          const value1 = features1[feature.key] as number;
          const value2 = features2[feature.key] as number;
          const winner = value1 > value2 ? 1 : value2 > value1 ? 2 : 0;

          return (
            <div key={feature.key} css={feature_row}>
              <div css={feature_label}>
                {feature.label}
                <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                  {feature.description}
                </span>
              </div>

              <div css={feature_values}>
                <span
                  style={{ color: winner === 1 ? feature.color : '#9ca3af' }}
                >
                  {feature.format(value1)}
                </span>
              </div>

              <div css={feature_bars}>
                <div css={feature_bar}>
                  <div
                    css={feature_bar_fill}
                    style={{
                      width: `${Math.min(value1 * 100, 100)}%`,
                      backgroundColor: feature.color,
                      opacity: winner === 1 ? 1 : 0.6,
                    }}
                  />
                </div>
                <div css={feature_bar}>
                  <div
                    css={feature_bar_fill}
                    style={{
                      width: `${Math.min(value2 * 100, 100)}%`,
                      backgroundColor: feature.color,
                      opacity: winner === 2 ? 1 : 0.6,
                    }}
                  />
                </div>
              </div>

              <div css={feature_values}>
                <span
                  style={{ color: winner === 2 ? feature.color : '#9ca3af' }}
                >
                  {feature.format(value2)}
                </span>
              </div>

              {winner !== 0 && (
                <div css={winner_indicator}>{winner === 1 ? '←' : '→'}</div>
              )}
            </div>
          );
        })}

        {/* Tempo Row */}
        <div css={feature_row}>
          <div css={feature_label}>
            Tempo
            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
              Beats per minute
            </span>
          </div>

          <div css={feature_values}>
            <span
              style={{
                color: tempoComparison.winner === 1 ? '#8b5cf6' : '#9ca3af',
              }}
            >
              {tempoComparison.tempo1} BPM
            </span>
          </div>

          <div css={feature_bars}>
            <div css={feature_bar}>
              <div
                css={feature_bar_fill}
                style={{
                  width: `${tempoComparison.tempo1Percentage}%`,
                  backgroundColor: '#8b5cf6',
                  opacity: tempoComparison.winner === 1 ? 1 : 0.6,
                }}
              />
            </div>
            <div css={feature_bar}>
              <div
                css={feature_bar_fill}
                style={{
                  width: `${tempoComparison.tempo2Percentage}%`,
                  backgroundColor: '#8b5cf6',
                  opacity: tempoComparison.winner === 2 ? 1 : 0.6,
                }}
              />
            </div>
          </div>

          <div css={feature_values}>
            <span
              style={{
                color: tempoComparison.winner === 2 ? '#8b5cf6' : '#9ca3af',
              }}
            >
              {tempoComparison.tempo2} BPM
            </span>
          </div>

          {tempoComparison.winner !== 0 && (
            <div css={winner_indicator}>
              {tempoComparison.winner === 1 ? '←' : '→'}
            </div>
          )}
        </div>
      </div>

      {insights.length > 0 && (
        <div css={insights_section}>
          <h4 style={{ color: '#8b5cf6', margin: '0 0 1rem 0' }}>
            Comparison Insights
          </h4>
          {insights.map((insight, index) => (
            <div key={index} css={insight_item}>
              <span css={insight_icon}>{insight.icon}</span>
              <span css={insight_text}>{insight.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SongComparisonChart;
