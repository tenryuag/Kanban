import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello React!</h1>
}

// Selecciona el elemento root
const rootElement = document.getElementById('app')

//Verificamos si el rootElement existe
if (rootElement) {
  // Crea el root y renderiza el componente App
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
} else {
  console.error('Elemento root no encontrado')
}
