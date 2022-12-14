import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Router
import { BrowserRouter } from 'react-router-dom'

// Styles
import '@assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
