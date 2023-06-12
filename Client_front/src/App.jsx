import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Inicio } from './pages/Inicio';
import { Inicio_formulario } from './pages/Inicio_formulario';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast' 
import { Cards } from './components/Cards'
import { Page_pablo } from './pages/Page_pablo'
import { Page_pablo_api_pokemon } from './pages/Page_pablo_api_pokemon'
// import { ChakraProvider } from '@chakra-ui/react'
  
import video_fl_bg from './assets/video_fl_bg.mp4';
import { Home } from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    //<ChakraProvider>
      <BrowserRouter>
        {/* <video className='video_bg' src={video_fl_bg}/>
        <div className='video_bg_overlay'>
          
        </div>
        <div className='video_bg_content'>
            hola
          
          </div> */}
        {/* <div className="grid-layout"> */}
        {/* <div className="grid-header"> */}
          {/* <div className='grid-item'> */}
            {/* <Navigation /> */}
            <Toaster
            position="bottom-right"
            reverseOrder={false}
            />
          {/* </div> */}
        {/* </div> */}
        
        {/* <div className="grid-menu">
           menu
        </div>
        <div className="grid-izquierdo">
          izquierdo
        </div> */}
        
        {/* <div className="grid-content"> */}
          
            {/* <Cards/> */}

            <Routes >
              <Route path="/" element={<Navigate to="/Django_react/"/>} />
              <Route path="/Django_react" element={<Cards />} />
              <Route path="/Django_react/inicio" element={<Inicio />} />
              <Route path="/Django_react/inicio_formulario" element={<Inicio_formulario />} />
              <Route path="/Django_react/inicio/:id" element={<Inicio_formulario />} />
              {/* rutas page */}
              <Route path="/Django_react/pablo_page" element={<Page_pablo />} />
              <Route path="/Django_react/pablo_page/api_pokemon" element={<Page_pablo_api_pokemon />} />
              <Route path="/Django_react/pablo_page/home" element={<Home />} />
            </Routes>
        {/* </div> */}
        {/* <div className="grid-derecho">
          derecho
        </div>
        <div className="grid-footer">
          footer
        </div> */}
        {/* </div> */}
        
      </BrowserRouter>
    //</ChakraProvider>
  

    // <>
 
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>HOLA MUNDO</h1>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
