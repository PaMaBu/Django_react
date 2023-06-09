import React from 'react'
import { get_apiPokemon } from '../api/inicio.api'
import { get_apiPokemon_detail } from '../api/inicio.api';
import { Card as CardPrime } from 'primereact/card';
import { useEffect, useState } from 'react'
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';

export function Card_pokemon(id_pokemon) {
    console.log("ide del pokemon",id_pokemon)
    const [Pokemon_details, setPokemon_details] = useState([] );
    const [Pokemon_sprites, setPokemon_sprites ] = useState([] );

    useEffect(() => {
        console.log("cargada")
        async function detalles_pokemon(id_pokemon) {
            const resp = await get_apiPokemon_detail(id_pokemon.data)
            console.log("Pokemon",resp)
            console.log("Pokemon",resp.data)
            console.log("Pokemon",resp.data.sprites)
            console.log("Pokemon",resp.data.sprites.front_default)
            setPokemon_details(resp.data);
            setPokemon_sprites(resp.data.sprites)
        }
        detalles_pokemon(id_pokemon)
        
        
    }, [])
  return (
    
    <CardPrime key={Pokemon_details.name} >
        {Pokemon_details.name}
        
        <img src={Pokemon_sprites.front_default} alt={Pokemon_details.name} />

    </CardPrime>
  )
}
