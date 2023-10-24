import React from 'react'
import { StyleHeaderDash } from './header.styles'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../common/Button/Button'

const HeaderDash = () => {
    const nome = localStorage.getItem('nome') || 'admin'
    const navigate = useNavigate()
    const logout = ()=> {
        localStorage.clear()
        navigate('/')
    }
  return (
    <StyleHeaderDash>
        <Link to={'/'}><h1 className='logo'>ONG Cão Feliz</h1></Link>
        <nav>
            <ul className='lista-Nav'>
            <li className='item-lista'>Dashboard</li>
            <li className='item-lista'>Quem somos</li>
            <li className='item-lista'>Olá, {nome}</li>
            <li className='item-lista'>
                <Button texto={"Sair"} func={logout}  classe={'btn-sair'} />
            </li>
            </ul>
        </nav>
    </StyleHeaderDash>
  )
}

export default HeaderDash