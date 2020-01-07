import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import GlobalStateProvider from './src/store/GlobalStateProvider';
import { theme } from './src/theme/theme';

export const wrapRootELement = ({ element }) => {
  <GlobalStateProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </GlobalStateProvider>;
};
