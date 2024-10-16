import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import { GlobalStyle } from './GlobalStyle'
import { App } from './App'

// Configura el store usando configureStore
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production', // Habilita Redux DevTools en desarrollo
})

// Selecciona el elemento root
const rootElement = document.getElementById('app')

// Verificamos si el rootElement existe
if (rootElement) {
  // Crea el root y renderiza el componente App
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>,
  )
} else {
  console.error('Elemento root no encontrado')
}
