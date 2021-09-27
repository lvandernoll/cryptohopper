import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
