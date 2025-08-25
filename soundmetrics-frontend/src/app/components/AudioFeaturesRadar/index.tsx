import React, { useMemo } from 'react';
import {
  radar_container,
  radar_chart,
  feature_explanation,
  feature_grid,
  feature_item,
  feature_label,
  feature_value,
  feature_bar,
  feature_fill,
} from './styles';

interface AudioFeaturesRadarProps {
  features: SpotifyApi.AudioFeaturesObject;
  songName: string;
}

interface FeatureInfo {
  key: keyof SpotifyApi.AudioFeaturesObject;
  label: string;
  description: string;
  color: string;
  format: (value: number) => string;
}

const AudioFeaturesRadar: React.FC<AudioFeaturesRadarProps> = ({
  features,
  songName,
}) => {
  const featureInfo: FeatureInfo[] = useMemo(
    () => [
      {
        key: 'energy',
        label: 'Energy',
        description: 'How intense and powerful the track feels',
        color: '#ff6b6b',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'danceability',
        label: 'Danceability',
        description: 'How suitable the track is for dancing',
        color: '#4ecdc4',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'valence',
        label: 'Positivity',
        description: 'The musical positivity of the track',
        color: '#45b7d1',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'acousticness',
        label: 'Acoustic',
        description: 'How acoustic (vs electronic) the track is',
        color: '#96ceb4',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'instrumentalness',
        label: 'Instrumental',
        description: 'Likelihood the track contains no vocals',
        color: '#feca57',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'liveness',
        label: 'Live Recording',
        description: 'Likelihood the track was recorded live',
        color: '#ff9ff3',
        format: (val) => `${Math.round(val * 100)}%`,
      },
      {
        key: 'speechiness',
        label: 'Speechiness',
        description: 'Presence of spoken words in the track',
        color: '#54a0ff',
        format: (val) => `${Math.round(val * 100)}%`,
      },
    ],
    []
  );

  const tempoInfo = useMemo(
    () => ({
      label: 'Tempo',
      value: Math.round(features.tempo),
      description: getTempoDescription(features.tempo),
      color: '#8b5cf6',
    }),
    [features.tempo]
  );

  const keyInfo = useMemo(
    () => ({
      label: 'Key',
      value: getKeyName(features.key),
      description: `${getKeyName(features.key)} ${
        features.mode === 1 ? 'Major' : 'Minor'
      }`,
      color: '#f093fb',
    }),
    [features.key, features.mode]
  );

  return (
    <div css={radar_container}>
      <h3
        style={{ color: '#8b5cf6', marginBottom: '1.5rem', fontSize: '1.5rem' }}
      >
        Audio Analysis for "{songName}"
      </h3>

      {/* Feature Grid */}
      <div css={feature_grid}>
        {featureInfo.map((info) => {
          const value = features[info.key] as number;
          return (
            <div key={info.key} css={feature_item}>
              <div css={feature_label}>{info.label}</div>
              <div css={feature_value} style={{ color: info.color }}>
                {info.format(value)}
              </div>
              <div css={feature_bar}>
                <div
                  css={feature_fill}
                  style={{
                    width: `${Math.min(value * 100, 100)}%`,
                    backgroundColor: info.color,
                  }}
                />
              </div>
              <div css={feature_explanation}>{info.description}</div>
            </div>
          );
        })}

        {/* Tempo */}
        <div css={feature_item}>
          <div css={feature_label}>{tempoInfo.label}</div>
          <div css={feature_value} style={{ color: tempoInfo.color }}>
            {tempoInfo.value} BPM
          </div>
          <div css={feature_bar}>
            <div
              css={feature_fill}
              style={{
                width: `${Math.min((features.tempo / 200) * 100, 100)}%`,
                backgroundColor: tempoInfo.color,
              }}
            />
          </div>
          <div css={feature_explanation}>{tempoInfo.description}</div>
        </div>

        {/* Key */}
        <div css={feature_item}>
          <div css={feature_label}>{keyInfo.label}</div>
          <div css={feature_value} style={{ color: keyInfo.color }}>
            {keyInfo.value}
          </div>
          <div css={feature_bar}>
            <div
              css={feature_fill}
              style={{
                width: `${((features.key + 1) / 12) * 100}%`,
                backgroundColor: keyInfo.color,
              }}
            />
          </div>
          <div css={feature_explanation}>{keyInfo.description}</div>
        </div>
      </div>
    </div>
  );
};

function getTempoDescription(tempo: number): string {
  if (tempo < 60) return 'Very Slow (Largo)';
  if (tempo < 76) return 'Slow (Adagio)';
  if (tempo < 108) return 'Moderate (Andante)';
  if (tempo < 120) return 'Walking Pace (Moderato)';
  if (tempo < 168) return 'Fast (Allegro)';
  if (tempo < 200) return 'Very Fast (Presto)';
  return 'Extremely Fast';
}

function getKeyName(keyNumber: number): string {
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
}

export default AudioFeaturesRadar;
