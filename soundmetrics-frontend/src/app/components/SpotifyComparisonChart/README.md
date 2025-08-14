# Artist Analytics Algorithms

## Overview
This component implements sophisticated algorithms to analyze and compare artists based on multiple metrics following music industry standards and Spotify's design guidelines.

## Algorithms Implemented

### 1. Track Diversity Index
- **Purpose**: Measures variety in an artist's musical output
- **Factors**: Popularity range, duration variance, explicit content ratio
- **Scale**: 0-100, where 100 represents maximum diversity

### 2. Crossover Appeal
- **Purpose**: Evaluates ability to reach multiple audiences
- **Formula**: `(avgPopularity * 0.7) + (genreDiversity * 30)`
- **Use case**: Identifies mainstream vs niche artists

### 3. Artistic Evolution
- **Purpose**: Tracks growth and change over career
- **Metrics**: Album type diversity, track count trends
- **Application**: Shows career development patterns

### 4. Genre Influence Score
- **Purpose**: Measures impact on musical genres
- **Method**: Weighted scoring based on genre types
- **Examples**: Jazz/Classical get higher influence scores

### 5. Versatility Index
- **Purpose**: Range of musical styles within catalog
- **Components**: Genre count, duration variety, content types
- **Insight**: Artist's creative range

### 6. Commercial vs Underground Balance
- **Purpose**: Positions artist on mainstream-underground spectrum
- **Calculation**: Inverse relationship with popularity plus genre credibility
- **Application**: Identifies authentic vs commercial artists

## Design Guidelines Compliance

Following [Spotify Design Guidelines](https://developer.spotify.com/documentation/design#fonts):

✅ **Typography**: System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI"`)  
✅ **Colors**: Official Spotify brand colors (`#1DB954`, `#191414`)  
✅ **Attribution**: Proper Spotify branding and attribution  
✅ **Metadata**: Character limits (Track: 23, Artist: 18, Album: 25)  
✅ **Layout**: High contrast, accessible design  

## Character Limits (Per Guidelines)
- **Track names**: 23 characters max
- **Artist names**: 18 characters max  
- **Album names**: 25 characters max

## Color Palette (Official)
- **Spotify Green**: `#1DB954` (primary brand color)
- **Background**: `#191414` (official dark background)
- **Cards**: `#181818` (content backgrounds)
- **Borders**: `#2a2a2a` (subtle dividers)
