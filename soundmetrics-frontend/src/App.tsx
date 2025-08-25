import './App.css';
import { Outlet } from 'react-router-dom';
import NavMenuContainer from './app/components/NavMenuContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpotifyAuthProvider } from './app/components/SpotifyAuthProvider';
import MuiThemeProvider from './app/components/ThemeProvider';
import { css } from '@emotion/react';

const appContainer = css`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
`;

// Content section - no extra padding needed with sticky positioning
const contentSection = css`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div css={appContainer}>
      <SpotifyAuthProvider>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider>
            <NavMenuContainer />
            <div id="mobile-navbar-portal" />
            <div css={contentSection}>
              <Outlet />
            </div>
          </MuiThemeProvider>
        </QueryClientProvider>
      </SpotifyAuthProvider>
    </div>
  );
}

export default App;
