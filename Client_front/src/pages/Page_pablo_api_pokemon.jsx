import React from 'react'
import { get_apiPokemon } from '../api/inicio.api'
import { get_apiPokemon_detail } from '../api/inicio.api';
import { Card as CardPrime } from 'primereact/card';
import { useEffect, useState } from 'react'
import { Card_pokemon } from '../components/Card_pokemon';

export function Page_pablo_api_pokemon() {
    const [Pokemons, setPokemons] = useState([]); 
    const [Pokemon_details, setPokemon_details] = useState([] );

    useEffect(() => {
        console.log("cargada")
        async function cargar_lista() {
            const resp = await get_apiPokemon()
            // console.log("Pokemons",resp)
            // console.log("Pokemons",resp.data)
            // console.log("Pokemons",resp.data.results)
            // console.log("Pokemons",resp.data.results[0])
            setPokemons(resp.data.results);
            
        }
        cargar_lista()

    }, [])
    
  return (
    <div className='grid grid-col-3 gap-3'>
      {Pokemons.map(Pokemon => (
        console.log(Pokemon.name),
        <Card_pokemon key={Pokemon.name} data={Pokemon.name}/>
        


      )
    )}
    </div>
  )
}
