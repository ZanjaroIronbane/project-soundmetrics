import './App.css';
import { Outlet } from 'react-router-dom';
import NavMenuContainer from './app/components/NavMenuContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpotifyAuthProvider } from './app/components/SpotifyAuthProvider';
import MuiThemeProvider from './app/components/ThemeProvider';

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
    <div>
      <SpotifyAuthProvider>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider>
            <NavMenuContainer />
            <Outlet />
          </MuiThemeProvider>
        </QueryClientProvider>
      </SpotifyAuthProvider>
    </div>
  );
}

export default App;
