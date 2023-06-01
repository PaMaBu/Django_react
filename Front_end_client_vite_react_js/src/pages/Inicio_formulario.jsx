import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { create_reg} from '../api/inicio.api'
import { delete_reg } from '../api/inicio.api'
import { update_reg } from '../api/inicio.api'
import { get_detalle } from '../api/inicio.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

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
    navigate('/inicio')
    
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
        <form className='text-black' onSubmit={onSubmit}>
        <input type="text" name="nombre" 
         {...register("nombre", {required:true})}
         ></input>
        {errors.nombre && <span className>requerido</span>}
        <textarea rows="3" name="descripcion" 
         {...register("descripcion", {required:true})}
        
        ></textarea>
        {errors.descripcion && <span className>requerido</span>}

        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3 ' type="submit" name="guardar" value="Guardar">Guardar</button>

        </form>
        {
          params.id && 
        <button  className='bg-red-500 p-3 rounded-lg block w-full mt-3 ' name="borrar" value="Borrar"
        onClick={async () => {
          const accepted= window.confirm("estas seguro de eliminar el registro" + params.id+ "?")
          if (accepted){
            await delete_reg(params.id)
            navigate('/inicio')
          }
        }}
        >Borrar</button>

        }

    </div>
  )
}

