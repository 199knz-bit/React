import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import MainPage from './MainPage.jsx'
import Register from './register.jsx'
import Login from './login.jsx'
import About from './about.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
  path: '/',
  element: <MainPage />,
  },
  {
   path: '/register',
   element:<Register />
  },
  {
    path: '/login',
    element:<Login />
  },
  {
    path: '/about',
    element:<About />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
