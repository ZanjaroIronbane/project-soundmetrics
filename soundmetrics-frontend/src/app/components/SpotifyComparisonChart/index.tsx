import React from 'react';
import {
  comparison_chart_container,
  artist_comparison_card,
  comparison_metric,
  metric_name,
  metric_bars,
  artist_bar,
  artist_name_label,
  bar_wrapper,
  bar_fill,
  bar_value_label,
  chart_title,
  winner_indicator,
  metric_name_text,
} from './styles.ts';
import type { ArtistAnalytics } from '../../utils/artist_analytics';

interface ComparisonData {
  artist1: {
    name: string;
    popularity: number;
    followers: number;
  } & ArtistAnalytics;
  artist2: {
    name: string;
    popularity: number;
    followers: number;
  } & ArtistAnalytics;
}

interface SpotifyComparisonChartProps {
  data: ComparisonData;
}

const SpotifyComparisonChart: React.FC<SpotifyComparisonChartProps> = ({
  data,
}) => {
  const metrics = [
    {
      name: 'Followers',
      key: 'followers' as keyof ComparisonData['artist1'],
      max: Math.max(data.artist1.followers, data.artist2.followers),
      format: (val: number) =>
        val > 1000000
          ? `${(val / 1000000).toFixed(1)}M`
          : `${(val / 1000).toFixed(0)}K`,
      description: 'Total follower count',
    },
    {
      name: 'Overall Popularity',
      key: 'popularity' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Spotify popularity score',
    },
    {
      name: 'Versatility Score',
      key: 'versatilityScore' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Genre diversity & musical range',
    },
    {
      name: 'Commercial Appeal',
      key: 'commercialAppeal' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Mainstream market appeal',
    },
    {
      name: 'International Reach',
      key: 'internationalReach' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Global market presence',
    },
    {
      name: 'Collaboration Frequency',
      key: 'collaborationFrequency' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}%`,
      description: 'How often they collaborate',
    },
    {
      name: 'Track Diversity',
      key: 'trackDiversity' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Musical style variation',
    },
    {
      name: 'Genre Influence',
      key: 'genreInfluence' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Impact on their genres',
    },
    {
      name: 'Career Momentum',
      key: 'careerMomentum' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Recent activity & growth',
    },
    {
      name: 'Fan Engagement',
      key: 'fanEngagement' as keyof ComparisonData['artist1'],
      max: 100,
      format: (val: number) => `${val}/100`,
      description: 'Listener loyalty & interaction',
    },
  ];

  return (
    <div css={comparison_chart_container}>
      <h2 css={chart_title}>🎵 Advanced Artist Analytics</h2>

      <div css={artist_comparison_card}>
        {metrics.map((metric) => {
          const value1 = data.artist1[metric.key] as number;
          const value2 = data.artist2[metric.key] as number;
          const percentage1 = (value1 / metric.max) * 100;
          const percentage2 = (value2 / metric.max) * 100;
          const winner = value1 > value2 ? 1 : value2 > value1 ? 2 : 0;

          return (
            <div key={metric.name} css={comparison_metric}>
              <div css={metric_name}>
                <div css={metric_name_text}>
                  <strong>{metric.name}</strong>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      opacity: 0.8,
                      marginTop: '2px',
                    }}
                  >
                    {metric.description}
                  </div>
                </div>
                {winner > 0 && (
                  <span css={winner_indicator}>
                    🏆 {winner === 1 ? data.artist1.name : data.artist2.name}
                  </span>
                )}
              </div>

              <div css={metric_bars}>
                {/* Artist 1 Bar */}
                <div css={artist_bar}>
                  <div css={artist_name_label}>{data.artist1.name}</div>
                  <div css={bar_wrapper}>
                    <div
                      css={bar_fill}
                      className={winner === 1 ? 'winner' : 'non-winner'}
                      style={{ width: `${Math.max(5, percentage1)}%` }}
                    />
                  </div>
                  <div css={bar_value_label}>{metric.format(value1)}</div>
                </div>

                {/* Artist 2 Bar - Stacked Below */}
                <div css={artist_bar}>
                  <div css={artist_name_label}>{data.artist2.name}</div>
                  <div css={bar_wrapper}>
                    <div
                      css={bar_fill}
                      className={winner === 2 ? 'winner' : 'non-winner'}
                      style={{ width: `${Math.max(5, percentage2)}%` }}
                    />
                  </div>
                  <div css={bar_value_label}>{metric.format(value2)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifyComparisonChart;
