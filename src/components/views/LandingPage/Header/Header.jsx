import React from 'react'
import { StyleHeader } from './header.styles.js'
import Button from '../../../common/Button/Button.jsx'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const navigateToCadastro = () => {
    navigate('/cadastro')
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <StyleHeader>
      <h1 className='logo'>Ong Cão Feliz</h1>
      <nav>
        <ul className='lista-Nav'>
          <li className='item-lista'>Home</li>
          <li className='item-lista'>Quem somos</li>
          <li className='item-lista'>
            <Link to={'/login'}>Login</Link>
          </li>
          <li className='item-lista'>
            <Button texto={"Cadastrar"} func={navigateToCadastro} classe={'btn-cadastrar'} />
          </li>
        </ul>
      </nav>
    </StyleHeader>
  )
}

export default Header
