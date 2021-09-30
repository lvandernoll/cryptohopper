import React from 'react';
import { Container } from '@material-ui/core';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container maxWidth="xl" disableGutters>
      <>{children}</>
    </Container>
  </>
);

export default Layout;
