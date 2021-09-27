import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layout';
import Home from 'pages/Home';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Home />
        </Layout>
      </Router>
    </MuiThemeProvider>
  </ThemeProvider>
);

export default App;
