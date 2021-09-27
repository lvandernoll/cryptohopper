import React from 'react';
import { Box, Container } from '@material-ui/core';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container maxWidth="xl">
      <Box m={1}>{children}</Box>
    </Container>
  </>
);

export default Layout;
