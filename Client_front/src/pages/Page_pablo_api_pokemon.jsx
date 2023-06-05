import React, { useState, useEffect } from 'react';
import { get_apiPokemon } from '../api/inicio.api'
import { get_apiPokemon_detail } from '../api/inicio.api';
import { Card as CardPrime } from 'primereact/card';
import { Card_pokemon } from '../components/Card_pokemon';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';

// import { ProductService } from './service/ProductService';

import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Paginator } from 'primereact/paginator';

export function Page_pablo_api_pokemon() {
    const [Pokemons, setPokemons] = useState([]); 
    const [Pokemon_details, setPokemon_details] = useState([] );
    // const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [Paginacion, setPaginacion] = useState({ first: 0, rows: 10, totalRecords: 0 });
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    // const [Paginacion, SetPaginacion] = useState(0);
    useEffect(() => {
        console.log("cargada")
        
        cargar_lista(Paginacion)

    }, [ Paginacion])

    const cargar_lista = async(data) => { 
        try {
            console.log("data_Paginacion",data);
            // data = data || {};
            const resp = await get_apiPokemon(data);
            console.log("Pokemons",resp);
            console.log("Pokemons",resp.data);
            console.log("Pokemons",resp.data.results)
            // console.log("Pokemons",resp.data.results[0])
            setPokemons(resp.data.results);
            // setPaginacion({...Paginacion, totalRecords: resp.data.count});
            console.log("Paginacion",Paginacion)
        }catch (error) {
            console.log(error);
        };
    };
    // const itemTemplate = (id_pokemon) => {
        
    //     return (
    //         <div className="col-12">
    //             <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
    //                 {/* <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} /> */}
    //                 <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
    //                     <div className="flex flex-column align-items-center sm:align-items-start gap-3">
    //                         <div className="text-2xl font-bold text-900">{Pokemon_details.name}</div>
    //                         {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
    //                         <div className="flex align-items-center gap-3">
    //                             <span className="flex align-items-center gap-2">
    //                                 <i className="pi pi-tag"></i>
    //                                 {/* <span className="font-semibold">{product.category}</span> */}
    //                             </span>
    //                             {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
    //                         </div>
    //                     </div>
    //                     <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
    //                         <span className="text-2xl font-semibold">${Pokemon_details.name}</span>
    //                         <Button icon="pi pi-shopping-cart" className="p-button-rounded" ></Button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };




    // useEffect(() => {
    //     ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    // }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    function stats_pokemon(data) {
        const stats = data.stats
        const items = stats.map(stat => {
            console.log('item', stat);
            console.log('item', stat.stat.name);
            return ( 
                <div>
                    {stat.stat.name}
                    <div>
                        {stat.base_stat}
                        {stat.effort}
                    </div>
                </div>
                
                );
        });

    }
    const listItem = (data,sprites) => {
        // const items = stats_pokemon(data)
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={sprites.front_default} alt={data.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{sprites.name}</div>
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                 STATS 
                                 {stats_pokemon(data)}
                                </span>
                                <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            {/* <span className="text-2xl font-semibold">${data.price}</span> */}
                            <Button icon="pi pi-ellipsis-h" className="p-button-rounded" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (data,sprites) => {
        return (
            <div className="grid-item-3">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            {/* <i className="pi pi-tag"></i> */}
                            <span className="font-semibold">{data.category}</span>
                        </div>
                        {/* <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag> */}
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={sprites.front_default} alt={data.name} />
                        <div className="text-2xl font-bold">{data.name}</div>
                        <Rating value={data.rating} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        {/* <span className="text-2xl font-semibold">${data.price}</span> */}
                        <Button icon="pi pi-ellipsis-h" className="p-button-rounded" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (Pokemons, layout) => {
        const [Pokemon_details, setPokemon_details] = useState([] );
        const [Pokemon_sprites, setPokemon_sprites ] = useState([] );

        useEffect(() => {
            console.log("cargada")
            async function detalles_pokemon(Pokemons) {
                console.log("Pokemon_detail",Pokemons)
                console.log("Pokemon_detail",Pokemons.name)
                const resp = await get_apiPokemon_detail(Pokemons.name)
                console.log("Pokemon_detail",resp)
                console.log("Pokemon_detail",resp.data)
                console.log("Pokemon_detail",resp.data.sprites)
                console.log("Pokemon_detail",resp.data.sprites.front_default)
                setPokemon_details(resp.data);
                setPokemon_sprites(resp.data.sprites)
            }
            detalles_pokemon(Pokemons)
            
            
        }, [])
        if (!Pokemon_details) {
            return;
        }

        if (layout === 'list') return listItem(Pokemon_details,Pokemon_sprites);
        else if (layout === 'grid') return gridItem(Pokemon_details,Pokemon_sprites);
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };


    const onPageChange = async (event) => {
        const newPaginacion = {
            ...Paginacion,
            first: event.first,
            rows: event.rows,
          };
          setPaginacion(newPaginacion);
          cargar_lista(newPaginacion);
        console.log("paginacion_event",Paginacion)
        console.log(event)
        // const resp = await get_apiPokemon(event)
        // console.log("Pokemons",resp)
        // console.log("Pokemons",resp.data)
        // console.log("Pokemons",resp.data.results)
        // // console.log("Pokemons",resp.data.results[0])
        
        // SetPaginacion(event)
        // setPokemons(resp.data.results);
        setFirst(event.first);
        setRows(event.rows);
    };
    
    return (
        
        <div className="card">
            <DataView className='' value={Pokemons} itemTemplate={itemTemplate} layout={layout} header={header()} />
            <Paginator first={Paginacion.first}
                        rows={Paginacion.rows}
                        // totalRecords={Paginacion.totalRecords}
                        totalRecords={120}
                        rowsPerPageOptions={[10, 20, 30]}
                        onPageChange={onPageChange} 
                        // first={Paginacion} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} 
                        
                        />
        </div>
        //   <DataView value={Pokemons} itemTemplate={itemTemplate} />
        //   {/* {Pokemons.map(Pokemon => (
        //     console.log(Pokemon.name),
        //     <Card_pokemon key={Pokemon.name} data={Pokemon.name}/>
            
    
    
        //   )
        // )} */}
    )



        
}
