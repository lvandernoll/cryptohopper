import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <>
    {/* Hidden h1 for SEO */}
    <h1 style={{ visibility: 'hidden', position: 'absolute', height: 0, width: 0 }}>Cryptohopper</h1>
    <Header />
    <Container maxWidth="xl" disableGutters style={{ overflowX: 'clip' }}>
      <>{children}</>
    </Container>
  </>
);

export default Layout;
