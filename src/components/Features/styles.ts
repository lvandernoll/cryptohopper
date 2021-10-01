import {
  FormControl,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import { ReactComponent as CheckmarkIcon } from 'assets/checkmark.svg';
import { ReactComponent as TimesIcon } from 'assets/times.svg';
import { ReactComponent as ChevronIcon } from 'assets/chevron.svg';

export const StyledFormControl = styled(FormControl)`
  width: 175px;
`;

export const HeaderTopRow = styled(TableRow)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const HeaderTopCell = styled(TableCell)`
  color: ${({ theme }) => theme.palette.text.hint};
  font-weight: 400;
  font-size: 18px;
`;

export const Checkmark = styled(CheckmarkIcon)`
  background-color: ${({ theme }) => theme.palette.success.light};
  height: 30px;
  width: 30px;
  border-radius: 25px;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

export const Times = styled(TimesIcon)`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.success.light};
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

export const Chevron = styled(ChevronIcon)`
  display: block;
  margin: auto 0;
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(1.5, 0)};
`;

export const UnderlinedTypography = styled(Typography).attrs(() => ({
  variant: 'h5',
}))`
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    width: 85%;
    height: 2px;
    background: ${({ theme }) => theme.palette.text.hint};
  }
`;
