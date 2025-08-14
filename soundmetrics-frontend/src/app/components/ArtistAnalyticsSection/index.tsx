import React from 'react';
import type { ArtistAnalytics } from '../../utils/artist_analytics';
import {
  analytics_section,
  section_title,
  analytics_note,
  metrics_grid,
  metric_card,
  metric_value,
  metric_label,
} from './styles';

interface ArtistAnalyticsSectionProps {
  artistAnalytics: ArtistAnalytics;
}

const ArtistAnalyticsSection: React.FC<ArtistAnalyticsSectionProps> = ({ 
  artistAnalytics 
}) => {
  return (
    <div css={analytics_section}>
      <h3 css={section_title}>Artist Analytics</h3>
      <div css={analytics_note}>
        Note: Listen counts are not available through Spotify's public API. 
        Popularity scores (0-100) represent relative track performance.
      </div>
      <div css={metrics_grid}>
        <div css={metric_card}>
          <div css={metric_value}>
            {artistAnalytics.commercialAppeal}%
          </div>
          <div css={metric_label}>Commercial Appeal</div>
        </div>
        <div css={metric_card}>
          <div css={metric_value}>
            {artistAnalytics.versatilityScore}%
          </div>
          <div css={metric_label}>Versatility</div>
        </div>
        <div css={metric_card}>
          <div css={metric_value}>{artistAnalytics.fanEngagement}%</div>
          <div css={metric_label}>Fan Engagement</div>
        </div>
        <div css={metric_card}>
          <div css={metric_value}>
            {artistAnalytics.internationalReach}%
          </div>
          <div css={metric_label}>International Reach</div>
        </div>
        <div css={metric_card}>
          <div css={metric_value}>
            {artistAnalytics.genreInfluence}%
          </div>
          <div css={metric_label}>Genre Influence</div>
        </div>
        <div css={metric_card}>
          <div css={metric_value}>
            {artistAnalytics.careerMomentum}%
          </div>
          <div css={metric_label}>Career Momentum</div>
        </div>
      </div>
    </div>
  );
};

export default ArtistAnalyticsSection;
