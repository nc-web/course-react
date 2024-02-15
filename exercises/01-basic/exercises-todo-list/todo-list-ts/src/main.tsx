import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Global Styles
import './assets/css/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
