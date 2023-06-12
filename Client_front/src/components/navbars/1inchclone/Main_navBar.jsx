import React from 'react'
import { NAVBAR_HEIGHT } from '../../../constants'
import useScrollPosition from '../../../hooks/useScrollPosition'
import { AppBar, Box, Button, Container, Hidden, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { navbarContent } from '../../../utils/content'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import CallMadeIcon from '@mui/icons-material/CallMade';
import LanguageIcon from '@mui/icons-material/Language';
// import LanguageIcon from '@mui/icons-material/Language';
import { Launch_button } from '../../buttons/1inchclone/Launch_button'


export function Main_navBar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const scrollPosition = useScrollPosition();
  const { logo } = navbarContent

  const LinkButton = ({children}, ...props) =>(
    <Stack 
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{
      cursor:"pointer", color:"text.secondary",
      "&:hover": {
        color: "text.primary"
      },
    }}
    {...props}
    >
      {children}
    </Stack>
  )
  return (
    <AppBar 
      elevation={0} 
      sx={{
        py:1,
        hight:NAVBAR_HEIGHT, 
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,0.7)":"transparent",
        backdropFilter: scrollPosition > 10 && "blur(60)"
      }} >
      <Container>
        <Stack direction="row" alignItems="center" flexWrap="wrap" justifyContent="space-between">
        {/* logo */}
        <img src={logo} style={{height:"100%", objectFit:"contain"}}></img>
        {/* links */}
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={6} sx={{flex:1}}>
          <LinkButton>
            <Typography variant='body2'>Products</Typography>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
          </LinkButton>

          <LinkButton>
            <Typography variant='body2'>Developer</Typography>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
          </LinkButton>

          <LinkButton>
            <Typography variant='body2'>Gobernance</Typography>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
          </LinkButton>
          
          <LinkButton>
            <Typography variant='body2'>About</Typography>
            <KeyboardArrowDownIcon fontSize="small"></KeyboardArrowDownIcon>
          </LinkButton>

          <LinkButton>
            <Typography variant='body2'>Blog</Typography>
            {/* <CallMadeIcon sx={{fontSize:10}}></CallMadeIcon> */}
          </LinkButton>
        </Stack>
        
        {/* action buttons */}
        <Stack direction="row" spacing={5} alignItems="center">
          <LinkButton spacing={1} >
              <Typography variant='body2'>EN</Typography>
              <LanguageIcon fontSize="small"></LanguageIcon>
          </LinkButton>

          <Launch_button sx={{fontSize:10}} alignItems="center "></Launch_button>
        </Stack>
        
        

        </Stack>
      </Container>
    </AppBar>
  )
}
