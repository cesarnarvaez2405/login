import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { get } from '../../utilities/httpClient'
const API = import.meta.env.VITE_BACKEND_API;


export const RegisterUser = () => {

      const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
      })

    const handleChange = (e) => {
      setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    // Funcionalidad de accionar get para traer nuevo datos

    // useEffect(() => {
    //   const fetchUser = async () => {
    //     try{
    //       const res = await axios.get(API)
    //       console.log(res);
    //     }catch{
    //       console.error(err)
    //     }
    //   }
    //   fetchUser()
    // }, [])

    const handleClick = async e => {
      e.preventDefault()
      try{
        await axios.post(API, user)
      }catch{
        console.error(err)
      }
      setUser({name:"", email:"",password:""})
    }
    
    
    
    return (
    <>
    <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="Nombre"/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" placeholder="********"/>
      </div>
      <button
        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit" onClick={handleClick}>Register</button>
    </form>
    {/* <ul>
      {user.map((user) => 
      <li key={user.id}>
        <div>{user.name}</div>
      </li> )}
    </ul> */}
  </div>
    </>
  )
}
