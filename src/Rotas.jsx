import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { GlobalStyle } from './style/GlobalStyle.styles'
import Login from './pages/Login/login'

const Rotas = () => {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas