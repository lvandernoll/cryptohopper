import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAppBar = styled(AppBar)`
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightAlignedButtons = styled.div`
  margin-left: auto;

  & > * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
    min-width: 115px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
