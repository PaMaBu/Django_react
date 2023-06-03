import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { create_reg} from '../api/inicio.api'
import { delete_reg } from '../api/inicio.api'
import { update_reg } from '../api/inicio.api'
import { get_detalle } from '../api/inicio.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Button, Grid } from '@mui/material'
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';

export function Inicio_formulario() {



  const {register,
     handleSubmit,
     formState:{
     errors
     },
     setValue
  } = useForm();
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)
  const onSubmit = handleSubmit(async data => {
    if (params.id){
      console.log( "actualizando...")
      const resp = await update_reg(params.id,data)
      console.log(resp)
    } else {
      console.log("creando...")
      console.log(data)
      const resp = await create_reg(data)
      console.log(resp)
    }
    console.log("EXITOSO...")
    toast.success('Exitoso',{position:"top-right"})
    console.log("EXITOSO2...")
    navigate('/Django_react/inicio')
    
  })

  useEffect(() => {
    async function cargarDetalle() {
      if (params.id){
        console.log( "obteniendo datos...")
        const res= await get_detalle(params.id)
        console.log(res)
        setValue("nombre",res.data.nombre)
        console.log(res.data.nombre)
        setValue("descripcion",res.data.descripcion)
      }
    }
    cargarDetalle()
  },[])
  return (
    <div className='max-w-xl mx-auto '>
        FORMULARIO DE INICIO
        <Grid sm={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <form className='text-wite' onSubmit={onSubmit}>
        <Grid xs={8}>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue=""
            multiline
            maxRows={4}
            // variant="filled"
            color="secondary"
            focused
            margin="normal"
            bgColor="success" 
            {...register("nombre", {required:true})}
          />
          {/* <input type="text" name="nombre" 
          {...register("nombre", {required:true})}
          ></input> */}
          {errors.nombre && <span className>requerido</span>}
          {/* <textarea rows="3" name="descripcion" 
          {...register("descripcion", {required:true})}
          
          ></textarea> */}
        </Grid>
        <Grid sm={4}>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue=""
            multiline
            maxRows={4}
            // variant="filled"
            color="secondary"
            focused
            margin="normal"
            {...register("descripcion", {required:true})}
          />
          {errors.descripcion && <span className>requerido</span>}
        </Grid>
        
        <Grid xs={4}>
          <Button variant="contained" 
          endIcon={<SendIcon />}
          className='bg-indigo-500 p-3 rounded-lg block w-full mt-3 ' type="submit" name="guardar" value="Guardar">Guardar</Button>

        </Grid>

        
        </form>
        <Grid xs={8}>
        {
          params.id && 
        <Button variant="outlined"  color="error"
         startIcon={ <DeleteIcon />}
        className='bg-red-500 p-1 rounded-lg block w-full m-3 '
         name="borrar" value="Borrar"
        onClick={async () => {
          const accepted= window.confirm("estas seguro de eliminar el registro" + params.id+ "?")
          if (accepted){
            await delete_reg(params.id)
            navigate('/Django_react/inicio')
          }
        }}
        >Borrar</Button>
        // <Button variant="outlined">Outlined</Button>
        }
        </Grid>

        
        </Grid>


    </div>

  )
}

