
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../Layout'
import Home from './pages/Home'
import Success from './pages/success'
import Cancel from './pages/cancel'
import Checkout from './pages/Checkout'

const router = createBrowserRouter ([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "cancel",
        element: <Cancel/>,
      },

    ]
  } 
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
