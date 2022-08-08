import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import AvisoBoleto from './components/AvisoBoleto'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />    
    <AvisoBoleto /> 
  </React.StrictMode>
)
