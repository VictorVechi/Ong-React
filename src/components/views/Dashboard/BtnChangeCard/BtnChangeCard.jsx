import React from 'react'
import { StyleButton } from './btnChangeCard.styles'

const BtnChangeCard = ({texto, func}) => {
    return (
        <StyleButton onClick={func} >{texto}</StyleButton>
    )
  }

export default BtnChangeCard