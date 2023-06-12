import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'animate.css/animate.min.css'
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/themes/viva-dark/theme.css";
//core
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './utils/theme'
import { Routes } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          {/* <Routes > */}
            <CssBaseline/>
            <App />
          {/* </Routes> */}
        </ThemeProvider>
      </React.StrictMode>,
  
)
