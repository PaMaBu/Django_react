import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/themes/viva-dark/theme.css";
//core
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  
)
