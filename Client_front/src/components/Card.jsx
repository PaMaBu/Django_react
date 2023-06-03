import { useNavigate } from 'react-router-dom'; 

export function Card({monedas}) {


    const navigate = useNavigate()
    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' 
        // style={{backgroundColor:"black"}}
        onClick={() => {
            navigate('/Django_react/inicio/'+ monedas.id)
        }}
        >  
            <h1 className='font-bold uppercase'>
                {monedas.nombre}
            </h1>
            <p>
                {monedas.descripcion}
            </p>
            <hr />

        </div>
    )
}

