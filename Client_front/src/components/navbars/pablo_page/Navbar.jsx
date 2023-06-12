import React from 'react'
import { AppBar, Box, Button, Container, Hidden, IconButton, Stack, Typography, useMediaQuery, useTheme, } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';

import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Home', 'Acerca','Portafolio','Contacto'];
const settings = ['Perfil', 'Cuenta', 'Salir'];

export function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <AppBar position='fixed'>
      {/* <Container > */}
        <Stack  direction="row" alignItems="center" justifyContent="center" spacing={6} sx={{flex:1}}  style={{}} >
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </Toolbar>
            <IconButton sx={{display:{xs:'none', md: 'flex' }}}>Home</IconButton>
            <IconButton sx={{display:{xs:'none', md: 'flex' }}}>Acerca</IconButton>
            <IconButton sx={{display:{xs:'none', md: 'flex' }}}>Portafolio</IconButton>
            <IconButton sx={{display:{xs:'none', md: 'flex' }}}>Contacto</IconButton>
        </Stack>
      {/* </Container> */}
    </AppBar>
  )
}

