import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth'
import { RegisterUser } from '../Auth'

export const AppRoutes = () => {
  return (

    <Routes>
        <Route path='/*' element={<Login/>}/>
        <Route path='/register' element={<RegisterUser/>}/>
    </Routes>

  )
}
