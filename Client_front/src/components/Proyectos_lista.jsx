import React from 'react'
import { get_list_proyectos } from '../api/inicio.api.js'
import { useEffect, useState } from 'react'
import { Card_proyecto } from './Card_proyecto.jsx';
import { Grid } from '@mui/material';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

// import {Proyectos} from '../assets/Proyectos'

export function Proyectos_lista() {
    const [proyectos, setProyectos] = useState([]); 
    useEffect(() => {
        console.log("cargada")
        async function cargar_lista() {
            const resp = await get_list_proyectos()
            console.log(resp)
            setProyectos(resp.data);
        }
        cargar_lista()
    }, [])
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
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
    const productTemplate = (product) => {
        console.log("product",product)
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    {/* <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.nombre} className="w-6 shadow-2" /> */}
                    <img src={`/public/proyectos/${product.img}`} alt={product.nombre_proyecto} className=" shadow-2"/>
                </div>
                <div>
                    <h4 className="mb-1">{product.nombre_proyecto}</h4>
                    <h6 className="mt-0 mb-3">${product.nombre_proyecto}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
  return (
    <div className='grid grid-col-3 gap-3'>
        <div className="card">
            <Carousel value={proyectos} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
        {/* {proyectos.map(proyecto => (
        <Grid container spacing={3} sx={{ justifyContent: 'center',alignItems: 'center'  }} key={proyecto.id_proyecto_proyecto}>
        <div className='col-12'>
                <Grid item md={12} rowSpacing={5} sx={{  my:5, borderRadius:'20px', borderColor: 'primary.main' }} >
                    <Card_proyecto key={proyecto.id_proyecto_proyecto} elemento={proyecto} />
                </Grid>
            </div>
        </Grid>
        )
        )} */}

      
    </div>
  )
}

