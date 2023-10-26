import React from 'react'
import { StyleCardUnidade } from './card.styles'
import feast from '/Feast.jpg'
import { Buildings } from '@phosphor-icons/react'
import Button from '../../../common/Button/Button'

const CardUnidade = ({nome, email, telefone}) => {
  return (
    <StyleCardUnidade>
        <Buildings size={64} />
        <h2>{nome}</h2>
        <p>Email:{email}</p>
        <p>Contato: {telefone}</p>
        <Button texto={'Ver pets'} />
    </StyleCardUnidade>
  )
}

export default CardUnidade