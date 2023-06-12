import React from 'react'
import { AppBar, Box, Button, Container, Hidden, IconButton, Stack, Typography, useMediaQuery, useTheme, Card, CardContent, CardMedia,
    CardActionArea} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
export function Contenedor_dataview() {
    const navigate = useNavigate()
    const Card_component = () => {
        <div>
            <img src="/public/proyectos/proyecto_api.png" alt="api" width="25%" height="25%"/>
        </div>
    }
    const CustomCard = ({children, nombre, descripcion, url,  ...props}) => (
        <Card sx={{ maxWidth: 345 }} {...props} >
            <CardActionArea >
                <CardMedia
                component="img"
                height="140"
                image={url}
                alt=""
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      )
  return (
    <Box position="fixed" sx={{mt:"5%", alignContent:'center', justifyItems:"center", alignItems:"center", width:"100%"}}>
        <Container>
            <Stack direction='row' spacing={3}>
                <Box width={"25%"}>
                    <CustomCard nombre="Landing pages" 
                        descripcion="algunos
                        Proyectos de integracion front, demostracion y uso de algunas librerias 
                        "
                        url="/public/proyectos/proyecto_landing_page.png"
                        onClick={() => {
                            navigate('/Django_react/pablo_page/home/')
                        }}
                    >
                    </CustomCard>
                </Box>
                <Box  width={"25%"}>
                    <CustomCard nombre="Apis" 
                        descripcion="algunos
                        Proyectos de integracion front y apis backend 
                        "
                        url="/public/proyectos/proyecto_api.png"
                        onClick={() => {
                            navigate('/Django_react/pablo_page/api/')
                        }}
                    >
                    </CustomCard>
                </Box>
                <Box  width={"25%"}>
                    <CustomCard nombre="Tienda" 
                        descripcion="Proyecto maqueta de tienda online
                        "
                        url="/public/proyectos/proyecto_tienda.jpg"
                    >
                    </CustomCard>
                </Box>
                <Box  width={"25%"}>
                    <CustomCard nombre="Blog" 
                        descripcion="Proyecto maqueta de Blog online
                        "
                        url="/public/proyectos/proyecto_blog.jpg"
                    >
                    </CustomCard>
                </Box>
                
            </Stack>

        </Container>
      
    </Box>
  )
}
