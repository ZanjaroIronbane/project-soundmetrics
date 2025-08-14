/* Advanced Artist Analytics - Intelligent Statistical Comparisons */

export interface ArtistAnalytics {
  versatilityScore: number;
  commercialAppeal: number;
  internationalReach: number;
  collaborationFrequency: number;
  trackDiversity: number;
  genreInfluence: number;
  careerMomentum: number;
  fanEngagement: number;
}

/* Calculate versatility based on genre diversity and track variety */
export const calculateVersatilityScore = (
  genres: string[],
  tracks: SpotifyApi.TrackObjectFull[]
): number => {
  const genreScore = Math.min(genres.length * 10, 100);

  const trackDurations = tracks.map((t) => t.duration_ms);
  const avgDuration =
    trackDurations.reduce((a, b) => a + b, 0) / trackDurations.length;
  const durationVariance =
    trackDurations.reduce(
      (acc, dur) => acc + Math.pow(dur - avgDuration, 2),
      0
    ) / trackDurations.length;
  const durationScore = Math.min((durationVariance / 1000000) * 20, 50);

  return Math.round(genreScore * 0.7 + durationScore * 0.3);
};

/* Calculate commercial appeal vs underground credibility */
export const calculateCommercialAppeal = (
  popularity: number,
  followers: number,
  explicitTracks: number,
  totalTracks: number
): number => {
  const popularityWeight = popularity * 0.4;
  const followersWeight = Math.min((followers / 1000000) * 30, 30);
  const explicitPenalty = (explicitTracks / totalTracks) * 20; // More explicit = less commercial

  return Math.round(
    Math.min(popularityWeight + followersWeight - explicitPenalty, 100)
  );
};

/* Calculate international reach based on market availability */
export const calculateInternationalReach = (
  tracks: SpotifyApi.TrackObjectFull[]
): number => {
  if (!tracks.length) return 0;

  const maxMarkets = Math.max(
    ...tracks.map((t) => t.available_markets?.length || 0)
  );
  return Math.round((maxMarkets / 184) * 100); // 184 is max Spotify markets
};

/* Calculate collaboration frequency from featured artists */
export const calculateCollaborationFrequency = (
  tracks: SpotifyApi.TrackObjectFull[]
): number => {
  const collaborativeTracks = tracks.filter(
    (track) =>
      track.artists.length > 1 ||
      track.name.toLowerCase().includes('feat') ||
      track.name.toLowerCase().includes('ft.')
  );

  return Math.round((collaborativeTracks.length / tracks.length) * 100);
};

/* Calculate track diversity based on various factors */
export const calculateTrackDiversity = (
  tracks: SpotifyApi.TrackObjectFull[]
): number => {
  if (!tracks.length) return 0;

  // Duration diversity
  const durations = tracks.map((t) => t.duration_ms);
  const durationRange = Math.max(...durations) - Math.min(...durations);
  const durationScore = Math.min((durationRange / 300000) * 40, 40); // 5 min range = 40 pts

  // Explicit content variety
  const explicitRatio = tracks.filter((t) => t.explicit).length / tracks.length;
  const explicitScore = Math.abs(explicitRatio - 0.5) * 40; // Balanced mix scores higher

  // Artist collaboration diversity
  const uniqueArtists = new Set();
  tracks.forEach((track) => {
    track.artists.forEach((artist) => uniqueArtists.add(artist.id));
  });
  const artistScore = Math.min((uniqueArtists.size / tracks.length) * 20, 20);

  return Math.round(durationScore + explicitScore + artistScore);
};

/* Calculate genre influence based on genre popularity and count */
export const calculateGenreInfluence = (
  genres: string[],
  popularity: number
): number => {
  const genreCount = Math.min(genres.length, 10);
  const genreScore = (genreCount / 10) * 50;
  const popularityBonus = (popularity / 100) * 50;

  return Math.round(genreScore + popularityBonus);
};

/* Calculate career momentum based on release patterns */
export const calculateCareerMomentum = (
  albums: SpotifyApi.AlbumObjectSimplified[],
  popularity: number
): number => {
  if (!albums.length) return popularity;

  const currentYear = new Date().getFullYear();
  const recentAlbums = albums.filter((album) => {
    const releaseYear = new Date(album.release_date).getFullYear();
    return currentYear - releaseYear <= 2;
  });

  const recentReleaseScore =
    (recentAlbums.length / Math.max(albums.length, 1)) * 40;
  const popularityScore = (popularity / 100) * 60;

  return Math.round(recentReleaseScore + popularityScore);
};

/* Calculate fan engagement based on popularity vs followers ratio */
export const calculateFanEngagement = (
  popularity: number,
  followers: number,
  avgTrackPopularity: number
): number => {
  const followerWeight = Math.min((followers / 10000000) * 30, 30); // 10M followers = 30 pts
  const consistencyScore =
    (1 - Math.abs(popularity - avgTrackPopularity) / 100) * 70;

  return Math.round(Math.max(consistencyScore + followerWeight, 0));
};

/* Generate complete analytics for an artist */
export const generateArtistAnalytics = (
  artistData: SpotifyApi.SingleArtistResponse,
  tracks: SpotifyApi.TrackObjectFull[],
  albums: SpotifyApi.AlbumObjectSimplified[]
): ArtistAnalytics => {
  const avgTrackPopularity =
    tracks.length > 0
      ? tracks.reduce((sum, track) => sum + track.popularity, 0) / tracks.length
      : 0;

  const explicitTracks = tracks.filter((t) => t.explicit).length;

  return {
    versatilityScore: calculateVersatilityScore(artistData.genres, tracks),
    commercialAppeal: calculateCommercialAppeal(
      artistData.popularity,
      artistData.followers.total,
      explicitTracks,
      tracks.length
    ),
    internationalReach: calculateInternationalReach(tracks),
    collaborationFrequency: calculateCollaborationFrequency(tracks),
    trackDiversity: calculateTrackDiversity(tracks),
    genreInfluence: calculateGenreInfluence(
      artistData.genres,
      artistData.popularity
    ),
    careerMomentum: calculateCareerMomentum(albums, artistData.popularity),
    fanEngagement: calculateFanEngagement(
      artistData.popularity,
      artistData.followers.total,
      Math.round(avgTrackPopularity)
    ),
  };
};
