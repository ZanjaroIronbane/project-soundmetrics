import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ReactNode } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
