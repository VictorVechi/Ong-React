import React from 'react'
import { StyleCard } from './card.styles'
import dogFofo from '/dogFofo.svg'
import Button from '../../common/Button/Button'

const Card = ({nome,raca, idade, peso, func, botao}) => {
  return (
    <StyleCard>
        <img src={dogFofo} alt="" />
        <div>
            <p>Nome: {nome}</p>
            <p>Tipo: {raca}</p>
            <p>Idade: {idade}</p>
            <p>Peso: {peso} Kg</p>
        </div>
        {botao && 
            <Button 
            texto={"Adotar"}
            func={func}
        />}
    </StyleCard>
  )
}

export default Card