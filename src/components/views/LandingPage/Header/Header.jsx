import React from 'react'
import {StyleHeader} from './header.styles.js'
import Button from '../../../common/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const navegar = () =>{
    navigate('/cadastro')
    navigate('/login')
  }
  return (
        <StyleHeader>
            <h1 className='logo'>Ong Cão Feliz</h1>
            <nav>
              <ul className='lista-Nav'>
                <li className='item-lista'>Home</li>
                <li className='item-lista'>Quem somos</li>
                <li className='item-lista'><Button texto={"login"} func={navegar} classe={'btn-cadastrar'}/></li>
                <li className='item-lista'><Button texto={"Cadastrar"} func={navegar} classe={'btn-login'}/></li>
              </ul>
            </nav>
        </StyleHeader>
  )
}

export default Header