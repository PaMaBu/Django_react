// import React from 'react'
import { Grid } from '@mui/material';

import { Proyectos_lista } from "../components/Proyectos_lista";
import { Card as CardPrime } from 'primereact/card';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom'; 
import video_fl_bg from '../assets/video_fl_bg.mp4';
import { Navigation } from '../components/Navigation';
import { Navbar } from '../components/navbars/pablo_page/Navbar';
import { Contenedor_dataview } from '../containers/pablo_page/Contenedor_dataview';

export function Page_pablo() {

  const navigate = useNavigate()
  return (
    <div>
      {/* // navegacion principal */}
        <Navbar className=""></Navbar>
      {/* // secccion lista de botones */}
      seccion
        <Contenedor_dataview ></Contenedor_dataview>
      {/* //  secciones adicionales */}
      {/* // footer */}
    </div>

    
    // <div className="grid-layout">

    //     <div className="grid-izquierdo">
    //       izquierdo
    //     </div>
        
    //     <div className="grid-content">
    //       <video className='video_bg grid-item-15' src={video_fl_bg} autoplay='true' loop muted />
          
    //       <div className='grid-item-2'>
    //           <Button onClick={() => {
    //               navigate('api_pokemon')
    //           }} className=''>pokemons</Button>
    //         </div>
    //       <div className='grid-container'>
        
      
    //   </div>

    //     </div>
    //     <div className="grid-derecho">
    //       derecho
    //     </div>
        
    //     </div>
    
  )
}

