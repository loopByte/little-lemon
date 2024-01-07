import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import Home from "./routes/Home"
import Booking from './routes/Booking'
import ErrorPage from './error-page'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reservations",
    element: <Booking />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
