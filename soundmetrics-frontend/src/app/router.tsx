import { lazy } from 'react';
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Search = lazy(() => import('./pages/Search'));
const ArtistComparison = lazy(() => import('./pages/ArtistComparison'));
const SongLookup = lazy(() => import('./pages/SongLookup'));
const SongCompare = lazy(() => import('./pages/SongCompare'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Search /> },
      { path: 'compare', element: <ArtistComparison /> },
      { path: 'songs', element: <SongLookup /> },
      { path: 'songs/compare', element: <SongCompare /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
