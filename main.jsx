import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css_files/index.css'
import MainPage from './site_contents/mainPage.jsx'
import Register from './login_form/register.jsx'
import Login from './login_form/login.jsx'
import About from './site_contents/about.jsx'
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
