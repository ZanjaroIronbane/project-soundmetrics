import React, { useMemo } from 'react';
import {
  analytics_container,
  analytics_grid,
  analytics_card,
  analytics_title,
  analytics_value,
  analytics_description,
  insights_section,
  insight_card,
  insight_icon,
  insight_title,
  insight_description,
  comparative_section,
  comparative_title,
  comparative_grid,
  comparative_item,
  comparative_label,
  comparative_bar,
  comparative_fill,
  comparative_value,
} from './styles';

interface SongAnalyticsSectionProps {
  song: SpotifyApi.TrackObjectFull;
  features: SpotifyApi.AudioFeaturesObject;
}

const SongAnalyticsSection: React.FC<SongAnalyticsSectionProps> = ({
  song,
  features,
}) => {
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getKeyName = (keyNumber: number): string => {
    const keys = [
      'C',
      'C♯/D♭',
      'D',
      'D♯/E♭',
      'E',
      'F',
      'F♯/G♭',
      'G',
      'G♯/A♭',
      'A',
      'A♯/B♭',
      'B',
    ];
    return keys[keyNumber] || 'Unknown';
  };

  const getTempoDescription = (tempo: number): string => {
    if (tempo < 60) return 'Very Slow (Largo)';
    if (tempo < 76) return 'Slow (Adagio)';
    if (tempo < 108) return 'Moderate (Andante)';
    if (tempo < 120) return 'Walking Pace (Moderato)';
    if (tempo < 168) return 'Fast (Allegro)';
    if (tempo < 200) return 'Very Fast (Presto)';
    return 'Extremely Fast';
  };

  const songAnalytics = useMemo(() => {
    return {
      // Basic Stats
      duration: formatDuration(song.duration_ms),
      popularity: song.popularity,
      releaseYear: new Date(song.album.release_date).getFullYear(),
      explicit: (song as any).explicit,

      // Audio Features
      energy: Math.round(features.energy * 100),
      danceability: Math.round(features.danceability * 100),
      valence: Math.round(features.valence * 100),
      acousticness: Math.round(features.acousticness * 100),
      instrumentalness: Math.round(features.instrumentalness * 100),
      liveness: Math.round(features.liveness * 100),
      speechiness: Math.round(features.speechiness * 100),

      // Musical Properties
      tempo: Math.round(features.tempo),
      key: getKeyName(features.key),
      mode: features.mode === 1 ? 'Major' : 'Minor',
      timeSignature: features.time_signature,
      loudness: Math.round(features.loudness),
    };
  }, [song, features]);

  const songInsights = useMemo(() => {
    const insights = [];

    // Mood Analysis
    if (features.valence > 0.7) {
      insights.push({
        icon: '😊',
        title: 'Happy & Upbeat',
        description:
          'This song has a very positive, joyful mood that lifts spirits',
      });
    } else if (features.valence < 0.3) {
      insights.push({
        icon: '🎭',
        title: 'Melancholic Vibes',
        description: 'The song carries darker, more introspective emotions',
      });
    } else {
      insights.push({
        icon: '⚖️',
        title: 'Balanced Mood',
        description: 'A well-balanced emotional palette with mixed feelings',
      });
    }

    // Energy Analysis
    if (features.energy > 0.8) {
      insights.push({
        icon: '⚡',
        title: 'High Energy',
        description: 'Intense and powerful - perfect for workouts or parties',
      });
    } else if (features.energy < 0.3) {
      insights.push({
        icon: '🕯️',
        title: 'Chill & Relaxed',
        description: 'Low energy and mellow - ideal for relaxation or focus',
      });
    }

    // Danceability Analysis
    if (features.danceability > 0.75) {
      insights.push({
        icon: '💃',
        title: 'Dance Floor Ready',
        description:
          'High danceability makes this perfect for moving to the beat',
      });
    } else if (features.danceability < 0.4) {
      insights.push({
        icon: '🎧',
        title: 'Listening Experience',
        description: 'Better suited for attentive listening than dancing',
      });
    }

    // Acoustic vs Electronic
    if (features.acousticness > 0.6) {
      insights.push({
        icon: '🎸',
        title: 'Organic & Acoustic',
        description: 'Strong acoustic elements create a natural, warm sound',
      });
    } else if (features.acousticness < 0.2) {
      insights.push({
        icon: '🎛️',
        title: 'Electronic Production',
        description:
          'Heavy use of electronic instruments and digital production',
      });
    }

    // Vocal Analysis
    if (features.speechiness > 0.66) {
      insights.push({
        icon: '🎤',
        title: 'Spoken Word Heavy',
        description: 'Contains significant spoken word or rap elements',
      });
    } else if (features.instrumentalness > 0.5) {
      insights.push({
        icon: '🎼',
        title: 'Instrumental Focus',
        description: 'Primarily instrumental with minimal or no vocals',
      });
    }

    return insights.slice(0, 4); // Limit to 4 insights
  }, [features]);

  const comparativeData = useMemo(() => {
    // Simulated comparative data - in real app this could come from genre averages
    return [
      {
        label: 'Energy',
        value: features.energy,
        average: 0.65,
        color: '#ff6b6b',
      },
      {
        label: 'Danceability',
        value: features.danceability,
        average: 0.6,
        color: '#4ecdc4',
      },
      {
        label: 'Valence',
        value: features.valence,
        average: 0.5,
        color: '#45b7d1',
      },
      {
        label: 'Acousticness',
        value: features.acousticness,
        average: 0.3,
        color: '#96ceb4',
      },
      {
        label: 'Popularity',
        value: song.popularity / 100,
        average: 0.45,
        color: '#8b5cf6',
      },
    ];
  }, [song, features]);

  return (
    <div css={analytics_container}>
      <h3 css={analytics_title}>Detailed Song Analytics</h3>

      {/* Main Analytics Grid */}
      <div css={analytics_grid}>
        <div css={analytics_card}>
          <div css={analytics_value}>{songAnalytics.duration}</div>
          <div css={analytics_description}>Duration</div>
        </div>

        <div css={analytics_card}>
          <div css={analytics_value}>{songAnalytics.tempo} BPM</div>
          <div css={analytics_description}>
            {getTempoDescription(features.tempo)}
          </div>
        </div>

        <div css={analytics_card}>
          <div css={analytics_value}>
            {songAnalytics.key} {songAnalytics.mode}
          </div>
          <div css={analytics_description}>Musical Key</div>
        </div>

        <div css={analytics_card}>
          <div css={analytics_value}>{songAnalytics.loudness} dB</div>
          <div css={analytics_description}>Average Loudness</div>
        </div>

        <div css={analytics_card}>
          <div css={analytics_value}>{songAnalytics.timeSignature}/4</div>
          <div css={analytics_description}>Time Signature</div>
        </div>

        <div css={analytics_card}>
          <div css={analytics_value}>{songAnalytics.releaseYear}</div>
          <div css={analytics_description}>Release Year</div>
        </div>
      </div>

      {/* Song Insights */}
      <div css={insights_section}>
        <h4
          style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.3rem' }}
        >
          Song Characteristics
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {songInsights.map((insight, index) => (
            <div key={index} css={insight_card}>
              <div css={insight_icon}>{insight.icon}</div>
              <div>
                <div css={insight_title}>{insight.title}</div>
                <div css={insight_description}>{insight.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparative Analysis */}
      <div css={comparative_section}>
        <h4 css={comparative_title}>Comparative Analysis</h4>
        <div css={comparative_grid}>
          {comparativeData.map((item, index) => (
            <div key={index} css={comparative_item}>
              <div css={comparative_label}>{item.label}</div>
              <div css={comparative_bar}>
                <div
                  css={comparative_fill}
                  style={{
                    width: `${item.value * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: `${item.average * 100}%`,
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '8px',
                    backgroundColor: '#ffffff',
                    borderRadius: '1px',
                    marginTop: '2px',
                  }}
                />
              </div>
              <div css={comparative_value}>
                {item.label === 'Popularity'
                  ? `${Math.round(item.value * 100)}%`
                  : `${Math.round(item.value * 100)}%`}
                <span
                  style={{
                    color: '#6b7280',
                    fontSize: '0.8rem',
                    marginLeft: '0.5rem',
                  }}
                >
                  (avg: {Math.round(item.average * 100)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SongAnalyticsSection;
