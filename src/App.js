// App.js
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Register from './Components/Register'
import User from './Components/User/User'
import Admin from './Components/Admin/Admin'

const App = () => {
  const isLoggedIn = !!localStorage.getItem('loggedInUser')
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/dashboard' element={<Admin />} />
        <Route path='/user/dashboard' element={<User />} />
      </Routes>
    </>
  )
}

export default App
