import React, { useContext } from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Context from '../store/context';

const Layout = ({ children }) => {
  const { state } = useContext(Context);
  const theme = useTheme();

  return (
    <div>
      <Global
        styles={css`
          * {
          }
          h1 {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      />
      {children}
    </div>
  );
};

export default Layout;
