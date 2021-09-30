import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const StyledButton = styled(Button)<{ active?: boolean }>`
  text-transform: capitalize;
  box-shadow: ${({ theme, active }) => (active ? theme.shadows[1] : 'none')};
  height: 64px;
  width: 50%;
  border-radius: 37px;
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background: ${({ theme }) => theme.palette.primary.light};
  border-radius: 37px;
  max-width: 400px;
`;
