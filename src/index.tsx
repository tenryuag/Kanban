import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './GlobalStyle'
import { App } from './App'

// Selecciona el elemento root
const rootElement = document.getElementById('app')

//Verificamos si el rootElement existe
if (rootElement) {
  // Crea el root y renderiza el componente App
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <>
      <GlobalStyle />
      <App />
    </>,
  )
} else {
  console.error('Elemento root no encontrado')
}
