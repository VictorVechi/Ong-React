import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './style/GlobalStyle.styles'
import QuemSomos from './pages/QuemSomos/QuemSomos'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import Dashboard from './pages/Dashboard/Dashboard'
<<<<<<< HEAD
import Doacoes from './pages/Doacoes/Doacoes'
=======
import Unidades from './pages/Unidades/Unidades'
>>>>>>> 72e015a2fbf26fcc5927316ceba92c4e3f5b37f9

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
<<<<<<< HEAD
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/QuemSomos' element={<QuemSomos />} />
          <Route path='/Doacoes' element={<Doacoes />} />
          <Route path="/login" element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} /> 
        </Routes>
      </ThemeProvider>
=======
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/QuemSomos' element={<QuemSomos />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} /> 
        <Route path='/unidades' element={<Unidades />} />
      </Routes></ThemeProvider>
>>>>>>> 72e015a2fbf26fcc5927316ceba92c4e3f5b37f9
    </BrowserRouter>
  )
}

export default Rotas