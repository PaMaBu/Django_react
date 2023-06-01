import { Link } from "react-router-dom"




export function Navigation() {
  return (
    <div className="flex justify-between py-3">
        <Link to="/inicio">
            <h1 className="font-bold text-3xl mb-4">inicio</h1>
        </Link>
        
        <button className=" bg-indigo-500 px-3 py-2 rounded-lg font-bold text-3xl mb-4"><Link to="/inicio_formulario">formulario</Link></button>
        
    </div>
  )
}

