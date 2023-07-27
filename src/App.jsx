import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Reservations from './pages/Reservations'
import Menu from './pages/Menu'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='reservations' element={<Reservations/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
