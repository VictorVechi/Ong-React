import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { GlobalStyle } from './style/GlobalStyle.styles'
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/Cadastro'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} /> 
      </Routes></ThemeProvider>
    </BrowserRouter>
  )
}

export default Rotas
