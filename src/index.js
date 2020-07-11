import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
/* BrowserRouter indica onde teremos roteamento de componentes para importar ele 
precisamos instalar o react-router-dom */
  <BrowserRouter>
  	<App />
  </BrowserRouter>, document.getElementById('root'))
