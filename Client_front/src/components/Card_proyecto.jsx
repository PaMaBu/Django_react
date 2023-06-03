import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

export function Card_proyecto({elemento}) {


    const navigate = useNavigate()
    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer ' 
        // style={{backgroundColor:"black"}}
        // onClick={() => {
        //     navigate('/inicio/'+ elemento.id)
        // }}
        >  
         <Grid container spacing={3} sx={{ justifyContent: 'center',alignItems: 'center'  }}>
            <Grid item md={12} rowSpacing={5} sx={{ width: 200, my:5, borderRadius:'20px', borderColor: 'primary.main' }} >
                <h1 className='font-bold uppercase'>
                    {elemento.nombre_proyecto}
                </h1>
                <h2>
                    {elemento.descripcion}
                </h2>

                
            </Grid>
        </Grid>
        <hr />
            
        </div>
    )
}

