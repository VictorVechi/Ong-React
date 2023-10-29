import React from 'react'
import { StyleCardPets } from './cardPets.styles'
import dogFofo from '/dogFofo.svg'


const CardPets = ({nome, raca, idade, peso}) => {
  return (
    <StyleCardPets>
        <img src={dogFofo} alt="" />
        <div>
            <p>Nome: {nome}</p>
            <p>Tipo: {raca}</p>
            <p>Idade: {idade}</p>
            <p>Peso: {peso} Kg</p>
        </div>
    </StyleCardPets>
  )
}

export default CardPets