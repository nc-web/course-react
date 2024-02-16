import React from 'react'
import ReactDOM from 'react-dom/client'

// Router
import { BrowserRouter } from "react-router-dom";

// App
import App from './App.tsx'

// Global Styles
import './assets/css/global-styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
