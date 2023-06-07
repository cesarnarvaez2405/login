import React from 'react'
import "tailwindcss/tailwind.css"
import { Login } from './login'

export const App = () => {
  return (
    <>
      <div className='h-full w-full'>
        <Login />
      </div>
    </>
  )
}
