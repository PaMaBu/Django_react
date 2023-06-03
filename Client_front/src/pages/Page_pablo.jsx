// import React from 'react'
import { Grid } from '@mui/material';

import { Proyectos_lista } from "../components/Proyectos_lista";
import { Card as CardPrime } from 'primereact/card';
import { Button } from 'primereact/button';

import { useNavigate } from 'react-router-dom'; 



export function Page_pablo() {
  const navigate = useNavigate()
  return (
    <div>
        <CardPrime>
          <h1 className='font-bold uppercase p-card-title animate__animated animate__fadeInRightBig'>
              Proyectos
          </h1>
        </CardPrime>
       <Grid container spacing={3} sx={{ justifyContent: 'center',alignItems: 'center', flex:'center' }}>
            <Grid item md={12} rowSpacing={5} sx={{ width: 200, my:5, borderRadius:'20px', borderColor: 'primary.main' }} >
                


                
            </Grid>
        </Grid>
      <Proyectos_lista />
      <Button onClick={() => {
            navigate('api_pokemon')
        }} className=''>pokemons</Button>
    </div>
  )
}

