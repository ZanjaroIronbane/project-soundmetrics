import { type FC, type ReactNode, useEffect, useState } from 'react';
import { SpotifyAuthContext } from './context';

export const SpotifyAuthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_access_token');

    if (!accessToken || !storedToken) {
      getAccessToken();
      return;
    }

    if (storedToken) setAccessToken(storedToken);
  }, []);

  const getAccessToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
      }),
    });

    const data = await response.json();

    setAccessToken(data.access_token);
    localStorage.setItem('spotify_access_token', data.access_token);
  };

  return (
    <SpotifyAuthContext.Provider
      value={{
        accessToken,
        isAuthenticated: !!accessToken,
      }}
    >
      {children}
    </SpotifyAuthContext.Provider>
  );
};
