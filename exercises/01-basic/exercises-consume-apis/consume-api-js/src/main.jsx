
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Global Styles
import './assets/css/global.css'

// App Page
import App from './App'

// Error Page
// import ErrorPage from '@views/error'

/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
)
