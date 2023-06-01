import React from 'react'
import { useEffect, useState } from 'react'
import { get_lista } from '../api/inicio.api'
import { Card } from './Card'
export function Inicio_lista() {

    const [monedas, setMonedas] = useState([]); 
    useEffect(() => {
        console.log("cargada")
        async function cargar_lista() {
            const resp = await get_lista()
            console.log(resp)
            setMonedas(resp.data);
        }
        cargar_lista()
    }, [])
  return (
    <div className='grid grid-col-3 gap-3'>
      {monedas.map(monedas => (

        <Card key={monedas.id} monedas={monedas} />


      )
    )}
    </div>
  )
}

