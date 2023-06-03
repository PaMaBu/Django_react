import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Inicio } from './pages/Inicio';
import { Inicio_formulario } from './pages/Inicio_formulario';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast' 
import { Cards } from './components/Cards'
import { Page_pablo } from './pages/Page_pablo'
// import { ChakraProvider } from '@chakra-ui/react'
  

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    //<ChakraProvider>
      <BrowserRouter>
        <div className="container mx-auto">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
          <Navigation />
          {/* <Cards/> */}

          <Routes >
            {/* <Route path="/" element={<Navigate to="/inicio"/>} /> */}
            <Route path="/" element={<Cards />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/inicio_formulario" element={<Inicio_formulario />} />
            <Route path="/inicio/:id" element={<Inicio_formulario />} />
            {/* rutas page */}
            <Route path="/pablo_page" element={<Page_pablo />} />
          </Routes>
        </div>
        
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
