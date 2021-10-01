import React from 'react';
import { StyledTypography } from './styles';

const HintText: React.FC = ({ children }) => (
  <StyledTypography variant="inherit">{children}</StyledTypography>
);

export default HintText;
