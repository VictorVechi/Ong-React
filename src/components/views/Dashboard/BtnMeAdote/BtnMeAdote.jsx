import React from 'react'
import { StyleButton } from './btnMeAdote.styles'
import { Heart } from "@phosphor-icons/react";

const BtnMeAdote = ({texto, func}) => {
    return (
        <StyleButton onClick={func} >{texto} <Heart size={16} color="#ff0068" weight="duotone" /> </StyleButton>
        
    )
  }

export default BtnMeAdote