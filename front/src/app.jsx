import React from 'react'
import { AppRoutes } from './Routes/appRoutes'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
}
