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
<<<<<<< HEAD
            <Route path="/login" element={<Login />}/>
=======
            <Route path='/cadastro' element={<Cadastro/>} />
>>>>>>> 6676634a4d909816d387269b6dd56e5eb63886cf
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas