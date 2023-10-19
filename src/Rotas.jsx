import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas