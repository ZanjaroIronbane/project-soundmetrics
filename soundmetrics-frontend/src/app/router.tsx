import { lazy } from 'react';
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Search = lazy(() => import('./pages/Search'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'search', element: <Search /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
