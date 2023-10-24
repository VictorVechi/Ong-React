import React, { useEffect, useState } from 'react'
import { StyleMain } from './main.styles'
import Card from '../../../shared/Card/Card'
import { getPets } from '../../../../services/api'
import { useNavigate } from 'react-router-dom'
import adote from '/adote.svg'


const Main = () => {
  const [listaPets, setListaPets] = useState([])
  const [erroConexao, setErroConexao] = useState(false)
  const navigate = useNavigate()

  const handleBuscarPets = async () => {
  const resposta = await getPets();
  if(resposta == null){
    setListaPets([])
    setErroConexao(true)
  } else {
    const respostaFiltro = []
    resposta.reverse()
    for(let i = 0; i < 5; i++){
        respostaFiltro.push(resposta[i])
    }
    setListaPets(respostaFiltro)
  }
  }
  
  const navegarLogin = ()=> {
    navigate('/login')
  }

useEffect(()=>{
  handleBuscarPets()
}, [])

  return (
    <StyleMain>
        <section>
            <img src={adote} alt="Vetor de um cachorro e um gato com a palavra adopt" className='img-adote' />
        </section>
        <section>
            {listaPets.map((pet)=>{
              return <Card key={pet._id}  nome={pet.nome} idade={pet.idade} peso={pet.peso} raca={pet.raca} func={navegarLogin}/>
            })}
            {erroConexao && <Card func={navegarLogin}/>}
            {erroConexao && <Card func={navegarLogin}/>}
            {erroConexao && <Card func={navegarLogin}/>}
            {erroConexao && <Card func={navegarLogin}/>}
            {erroConexao && <Card func={navegarLogin}/>}
        </section>
    </StyleMain>
  )
}

export default Main