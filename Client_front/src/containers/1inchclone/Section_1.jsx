import { Box, Button, Container, Hidden, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { section1Content } from '../../utils/content'
import { Launch_button } from '../../components/buttons/1inchclone/Launch_button'
import AppleIcon from '@mui/icons-material/Apple'
import GoogleIcon from '@mui/icons-material/Google'
import useMeasure from 'react-use-measure'
import Title from '../../components/title/index'
import theme from '../../utils/theme'



  const {
    MainBG,
    TreesImage,
    CliffImage,
    HorseImage,
    ShootingStarImage,
    title,
    subtitle,
  } = section1Content
  const CustomButton = ({children, ...props}) => (
    <Button 
    variant='outlined' 
    sx={{
      justifyContent: 'flex-start',
      borderRadius:4,
      color:"text.primary", 
      borderColor:"text.primary", 
      height:50,
      px:2
    }}
    {...props}
    >
      {children}
    </Button>
  )
const Section_1 =() => {

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [ref, { height }] = useMeasure();
console.log(isSmallScreen)
  return (
    <Box>
       {/* main background  */}
       <Box sx={{position:"fixed", zIndex:-10, top:0, left:0, right:0}}>
          <img src={MainBG} style={{width:"100%", zIndex:-10, top:0, left:0, right:0}} ></img>
       </Box>
       {/* background elements  */}
       <Box sx={{position:"absolute", width:"100%", height:"100%", zIndex:-1, top:0, left:0, right:0}} >
          {/* Star */}
        <img src={ShootingStarImage} style={{position:"absolute", top:"30px",right:"15%", width:"500px"}} ></img>
        {/* trees */}
        <Hidden mdDown>
          <img src={TreesImage} style={{position:"absolute", width:"100%", bottom:0, left:0, right:0}} ></img>
        </Hidden>
        {/* cliff */}
        <img src={CliffImage} style={{position:"absolute",height:"100%", right:0, top:0, backgroundSize:"cover"}} ></img>
        {/* horse */}
        <img src={HorseImage} style={{position:"absolute", right:"12%", height:"38%",  bottom:"45%", transform:" rotate(9deg)" }} ></img>
        {/* <img src={HorseImage} style={{position:"absolute", height:"38%", right:"14%", bottom:"45%"}} ></img> */}


        <Box sx={{bgcolor:"background.default", position:"absolute", bottom:0, height:"500px", top:height}} >

        </Box>
       </Box>
       {/* content  */}
       <Container sx={{height:'80vh', mt:8, [theme.breakpoints.up('md')]:{mt:6}}}>
        <Stack sx={{height:"100%"}} justifyContent="center">
          <Title 
            variant={{xs:"h3", sm:"h2", md:"h1"}} 
            sx={{letterSpacing:"0.2rem", mb:1}} 
            >
              {title}</Title>
          <Title 
            variant={{xs:"h4", sm:"h3", md:"h2"}} 
            sx={{fontWeight:500, letterSpacing:"0.5em", mb:5}} 
            >
              {subtitle}</Title>
          <Stack direction={{xs:"column", md:"row"}} 
            alignItems="center" 
            spacing={4}>
          <Launch_button 
          sx={{height:50, px:3}}  
          fullWidth={isSmallScreen}
          >
            1</Launch_button>
          <CustomButton  fullWidth={isSmallScreen}>
            <AppleIcon sx={{fontSize:36, ml:-1}}/>
            <Stack sx={{textAlign:"left", ml:1}}>
              <Typography variant='caption' sx={{fontWeight:1}}>Download on the</Typography>
              <Typography>App store</Typography>
            </Stack>
          </CustomButton>
          <CustomButton  fullWidth={isSmallScreen}>
            <GoogleIcon sx={{fontSize:36, ml:-1}}/>
            <Stack sx={{textAlign:"left", ml:1}}>
              <Typography variant='caption' sx={{fontWeight:1}}>Download on the</Typography>
              <Typography>Play store</Typography>
            </Stack>
          </CustomButton>
        </Stack>
        </Stack>
        
       </Container>
    </Box>
  )
}

export default Section_1


