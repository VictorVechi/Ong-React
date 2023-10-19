import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { GlobalStyle } from './style/GlobalStyle.styles'

const Rotas = () => {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas