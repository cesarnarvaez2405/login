import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {

    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')

    const handleChange = (e) =>  {
      setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8081/login', {email, password})
      .then (res => console.log(res))
      .catch (err => console.log(err))
    }


  return (
    <div className='w-full h-full flex justify-center content-center'>
        <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={handleSubmit}>
            <label className="font-semibold text-xs">Username or Email</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={handleChange}></input>
            <label className="font-semibold text-xs mt-3">Password</label>
            <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password" onChange={e => setPassword(e.target.value)}></input>
            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
        </form>
    </div>
  )
}
