import React, { useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { paths } from '../config/path'
import Login from './routes/auth/login'
import Register from './routes/auth/register'

export const AppRouter = () => {
  
  const router = createBrowserRouter([
    {
      path: paths.home.path,
      element: <Home />
    },
    {
      path: paths.auth.login.path,
      element: <Login />
    },
    {
      path: paths.auth.register.path,
      element: <Register />
    }
  ])
  
  return (

    <RouterProvider router={router} />

  )
}
