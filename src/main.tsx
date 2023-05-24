import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RoutesApp } from './routes/routes.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
    <RoutesApp/>
    </ThemeProvider>
  </React.StrictMode>
)
