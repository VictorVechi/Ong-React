import React from 'react'
import { StyleUnidade } from './unidades.styles'
import HeaderDash from '../../components/views/Dashboard/Header/HeaderDash'
import MainUnidades from '../../components/views/Unidades/Main/MainUnidades'

const Unidades = () => {
  return (
    <StyleUnidade>
        <HeaderDash />
        <MainUnidades />
    </StyleUnidade>
  )
}

export default Unidades