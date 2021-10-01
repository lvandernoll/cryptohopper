import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.hint};
`;
