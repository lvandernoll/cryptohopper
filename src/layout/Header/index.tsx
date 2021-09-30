import React, { useRef, useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@material-ui/core';
import { ReactComponent as Logo } from 'assets/cryptohopperLogo.svg';
import { RightAlignedButtons, StyledAppBar, StyledToolbar } from './styles';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuAnchor = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <StyledAppBar elevation={0}>
      <StyledToolbar variant="dense">
        <Logo />
        <RightAlignedButtons>
          <Button variant="text">Log in</Button>
          <Button variant="outlined">Signup</Button>
        </RightAlignedButtons>
        <Menu
          id="hamburger-menu"
          anchorEl={menuAnchor.current}
          keepMounted
          open={menuOpen}
          onClose={closeMenu}
        >
          <MenuItem onClick={() => 'click'}>
            <Typography variant="inherit">Bruh</Typography>
          </MenuItem>
        </Menu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
