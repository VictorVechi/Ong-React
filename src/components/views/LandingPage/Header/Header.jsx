import React from 'react'
import { StyleHeader } from './header.styles.js'
import Button from '../../../common/Button/Button.jsx'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const navigateToCadastro = () => {
    navigate('/cadastro')
  }

  return (
    <StyleHeader>
      <Link to={'/'}><h1 className='logo'>ONG Cão Feliz</h1></Link>
      <nav>
        <ul className='lista-Nav'>
          <li className='item-lista'>
            <Link to={'/'}>Home</Link> 
          </li>
          <li className='item-lista'>
            <Link to={'/QuemSomos'}>Quem somos</Link>
          </li>
          <li className='item-lista'>
            <Link to={'/Doacoes'}>Doações</Link>
          </li>
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