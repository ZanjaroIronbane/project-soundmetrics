import React from 'react';
import {
  tracks_section,
  section_title,
  track_list,
  track_item,
  track_number,
  track_info,
  track_name,
  track_artists,
  track_stats,
  track_stat,
  popularity_bar,
  popularity_score,
  popularity_label,
} from './styles';

interface PopularTracksSectionProps {
  topTracks: SpotifyApi.TrackObjectFull[];
}

const PopularTracksSection: React.FC<PopularTracksSectionProps> = ({ topTracks }) => {
  // Helper function to format track duration
  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div css={tracks_section}>
      <h3 css={section_title}>Popular Tracks</h3>
      <div css={track_list}>
        {topTracks.slice(0, 10).map((track, index) => (
          <div key={track.id} css={track_item}>
            <span css={track_number}>
              {index + 1}
            </span>
            <div css={track_info}>
              <div css={track_name}>{track.name}</div>
              <div css={track_artists}>
                {track.artists.map((a) => a.name).join(', ')} •{' '}
                {new Date(track.album.release_date).getFullYear()}
              </div>
            </div>
            <div css={track_stats}>
              <div css={track_stat}>
                {formatDuration(track.duration_ms)}
              </div>
              <div css={track_stat}>{track.explicit && '🅴'}</div>
              <div css={track_stat}>
                <div css={popularity_bar}>
                  <div 
                    css={popularity_score}
                    style={{ width: `${track.popularity}%` }}
                  />
                </div>
              </div>
              <div css={track_stat}>
                <strong>{track.popularity}%</strong>
                <div css={popularity_label}>popularity</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTracksSection;
