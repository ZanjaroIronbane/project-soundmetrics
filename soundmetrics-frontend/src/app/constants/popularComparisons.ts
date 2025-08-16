// Popular artist comparison pairs - shared across multiple components
export interface ArtistComparison {
  artist1: string;
  artist2: string;
  description?: string;
}

// Hero Section popular comparisons (used on home page)
export const HERO_POPULAR_COMPARISONS: ArtistComparison[] = [
  { artist1: 'Taylor Swift', artist2: 'Billie Eilish' },
  { artist1: 'Drake', artist2: 'Kendrick Lamar' },
  { artist1: 'The Weeknd', artist2: 'Bruno Mars' },
  { artist1: 'Ariana Grande', artist2: 'Dua Lipa' },
];

// Artist Comparison page suggestions (with descriptions)
export const COMPARISON_PAGE_SUGGESTIONS: ArtistComparison[] = [
  {
    artist1: 'Taylor Swift',
    artist2: 'Olivia Rodrigo',
    description: 'Pop queens battle',
  },
  {
    artist1: 'Drake',
    artist2: 'Kendrick Lamar',
    description: 'Hip-hop legends',
  },
  {
    artist1: 'The Weeknd',
    artist2: 'Frank Ocean',
    description: 'R&B innovators',
  },
  {
    artist1: 'Billie Eilish',
    artist2: 'Lorde',
    description: 'Alternative icons',
  },
];
