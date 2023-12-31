import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './style/GlobalStyle.styles'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Login from './pages/Login/login'
import Cadastro from './pages/Cadastro/Cadastro'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import Dashboard from './pages/Dashboard/Dashboard'
import Doacoes from './pages/Doacoes/Doacoes'
import Unidades from './pages/Unidades/Unidades'
const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/QuemSomos' element={<QuemSomos />} />
          <Route path='/unidades' element={<Unidades/>} />
          <Route path='/doacoes' element={<Doacoes />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} /> 
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Rotas