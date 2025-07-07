import { lazy } from 'react';
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const ArtistSearch = lazy(() => import('./pages/ArtistSearch'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <ArtistSearch /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
