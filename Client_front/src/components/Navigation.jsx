import { Link } from "react-router-dom"
import { Image } from 'primereact/image';



export function Navigation() {
  return (
    <div className="flex justify-center py-5">
        <Link to="/">
            <div className="div-shadow">
            <Image src="/public/icono_Lv.png" width="50px" height="50px" alt="" className=""/>

            </div>
            {/* <h1 className="font-bold text-3xl mb-4">inicio</h1> */}
        </Link>
        {/* <Link to="/inicio">
            <h1 className="font-bold text-3xl mb-4">lista</h1>
        </Link>
        <button className=" bg-indigo-500 px-3 py-2 rounded-lg font-bold text-3xl mb-4"><Link to="/inicio_formulario">formulario</Link></button> */}
        
    </div>
  )
}

