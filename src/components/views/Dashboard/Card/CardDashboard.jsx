import React from 'react'
import { StyleCardDash } from './card.styles'
import Button from '../../../common/Button/Button'
import cachorroGato from '/cachorroGato.svg'
const CardDashboard = ({nome,raca,idade,peso,desc,func}) => {
  return (
    <StyleCardDash>
        <img src={cachorroGato} alt="Vetor de um gato abraçado em um cachorro" className='img-card'/>
        <h2>{nome}</h2>
        <p>Tipo: {raca}</p>
        <p>Idade: {idade}</p>
        <p>Peso: {peso} Kg</p>  
        <p>{desc}</p>
    </StyleCardDash>
  )
}

export default CardDashboard