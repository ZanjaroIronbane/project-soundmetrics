import { createContext, useContext } from 'react';

interface AuthContextType {
  accessToken: string | null;
  isAuthenticated: boolean;
}

export const SpotifyAuthContext = createContext<AuthContextType>({
  accessToken: null,
  isAuthenticated: false,
});

export const useSpotifyAuthContext = () => useContext(SpotifyAuthContext);
