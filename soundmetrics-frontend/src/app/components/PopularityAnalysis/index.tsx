import React, { useMemo } from 'react';
import {
  popularity_container,
  popularity_main,
  popularity_score,
  popularity_label,
  popularity_bar_container,
  popularity_bar,
  popularity_fill,
  popularity_insights,
  insight_item,
  insight_icon,
  insight_text,
  chart_section,
  chart_title,
  chart_bars,
  chart_bar,
  chart_bar_fill,
  chart_bar_label,
} from './styles';

interface PopularityAnalysisProps {
  song: SpotifyApi.TrackObjectFull;
  features: SpotifyApi.AudioFeaturesObject;
}

const PopularityAnalysis: React.FC<PopularityAnalysisProps> = ({
  song,
  features,
}) => {
  const popularityInfo = useMemo(() => {
    const score = song.popularity;
    let level: string;
    let description: string;
    let color: string;

    if (score >= 80) {
      level = 'Viral Hit';
      description = 'This track is extremely popular and trending globally';
      color = '#ff6b6b';
    } else if (score >= 60) {
      level = 'Popular';
      description = 'This track has significant mainstream appeal';
      color = '#4ecdc4';
    } else if (score >= 40) {
      level = 'Emerging';
      description = 'This track is gaining recognition among listeners';
      color = '#45b7d1';
    } else if (score >= 20) {
      level = 'Niche';
      description = 'This track appeals to a specific audience';
      color = '#96ceb4';
    } else {
      level = 'Underground';
      description = 'This track is known by a small dedicated fanbase';
      color = '#feca57';
    }

    return { score, level, description, color };
  }, [song.popularity]);

  const insights = useMemo(() => {
    const insights: Array<{ icon: string; text: string }> = [];

    // Release recency
    const releaseDate = new Date(song.album.release_date);
    const now = new Date();
    const daysSinceRelease = Math.floor(
      (now.getTime() - releaseDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceRelease < 30) {
      insights.push({
        icon: '🆕',
        text: `Released ${daysSinceRelease} days ago - fresh on the charts!`,
      });
    } else if (daysSinceRelease < 365) {
      insights.push({
        icon: '📈',
        text: `Released ${Math.floor(daysSinceRelease / 30)} months ago`,
      });
    } else {
      const years = Math.floor(daysSinceRelease / 365);
      insights.push({
        icon: '🏛️',
        text: `A ${years} year${years > 1 ? 's' : ''} old ${
          song.popularity > 50 ? 'classic that remains popular' : 'deep cut'
        }`,
      });
    }

    // Energy vs Popularity correlation
    if (features.energy > 0.7 && song.popularity > 60) {
      insights.push({
        icon: '⚡',
        text: 'High-energy tracks like this tend to perform well on streaming platforms',
      });
    } else if (features.energy < 0.3 && song.popularity > 60) {
      insights.push({
        icon: '🎭',
        text: 'Despite being mellow, this track has achieved mainstream success',
      });
    }

    // Danceability insights
    if (features.danceability > 0.8) {
      insights.push({
        icon: '💃',
        text: 'Perfect for playlists and social media - highly danceable tracks trend well',
      });
    }

    // Artist popularity context
    insights.push({
      icon: '🎤',
      text: `Part of "${song.album.name}" by ${song.artists
        .map((a) => a.name)
        .join(', ')}`,
    });

    return insights;
  }, [song, features]);

  const comparisonData = useMemo(() => {
    // Simulated comparison data - in a real app, this might come from an API
    const basePopularity = song.popularity;
    return [
      {
        label: 'This Song',
        value: basePopularity,
        color: popularityInfo.color,
      },
      {
        label: 'Album Average',
        value: Math.max(basePopularity - 15 + Math.random() * 30, 0),
        color: '#6b7280',
      },
      {
        label: 'Artist Average',
        value: Math.max(basePopularity - 10 + Math.random() * 20, 0),
        color: '#9ca3af',
      },
      {
        label: 'Genre Average',
        value: 45 + Math.random() * 20,
        color: '#d1d5db',
      },
    ];
  }, [song.popularity, popularityInfo.color]);

  return (
    <div css={popularity_container}>
      <div css={popularity_main}>
        <div css={popularity_score} style={{ color: popularityInfo.color }}>
          {popularityInfo.score}
        </div>
        <div>
          <div css={popularity_label}>{popularityInfo.level}</div>
          <div css={popularity_bar_container}>
            <div css={popularity_bar}>
              <div
                css={popularity_fill}
                style={{
                  width: `${popularityInfo.score}%`,
                  backgroundColor: popularityInfo.color,
                }}
              />
            </div>
          </div>
          <p
            style={{
              color: '#9ca3af',
              margin: '0.5rem 0 0 0',
              fontSize: '0.9rem',
            }}
          >
            {popularityInfo.description}
          </p>
        </div>
      </div>

      <div css={chart_section}>
        <h4 css={chart_title}>Popularity Comparison</h4>
        <div css={chart_bars}>
          {comparisonData.map((item, index) => (
            <div key={index} css={chart_bar}>
              <div css={chart_bar_label}>{item.label}</div>
              <div
                css={chart_bar_fill}
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color,
                }}
              />
              <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                {Math.round(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div css={popularity_insights}>
        <h4 style={{ color: '#8b5cf6', margin: '0 0 1rem 0' }}>
          Track Insights
        </h4>
        {insights.map((insight, index) => (
          <div key={index} css={insight_item}>
            <span css={insight_icon}>{insight.icon}</span>
            <span css={insight_text}>{insight.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularityAnalysis;
