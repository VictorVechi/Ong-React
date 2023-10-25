import React, { useState } from 'react'
import { StyleHeaderDash } from './header.styles'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../common/Button/Button'
import { User } from '@phosphor-icons/react'
import Modal from '../../../common/Modal/Modal'
import Input from '../../../common/input/input'
import { atualizarEnderecoUsuario, getEnderecoUsuarioPorId } from '../../../../services/api'

const HeaderDash = () => {
    const [modalAberto, setModalAberto] = useState(false)
    const [rua, setRua] = useState('')
    const [cep, setCep] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    const handleEndereco = async (e) => {
        e.preventDefault()
        const id = localStorage.getItem("idEndereco")
        const response = await getEnderecoUsuarioPorId(id)
        setCep(response.cep)
        setRua(response.rua)
        setNumero(response.numero)
        setComplemento(response.complemento)
        setModalAberto(true)
    }

    const atualizar = async () => {
        const id = localStorage.getItem("idEndereco")
        const data = {
            cep: cep,
            rua: rua,
            numero: numero,
            complemento: complemento,
        }
        const response = await atualizarEnderecoUsuario(id, data)
        setModalAberto(false)
    }
    const nome = localStorage.getItem('nome') || 'admin'
    const navigate = useNavigate()
    const logout = ()=> {
        localStorage.clear()
        navigate('/')
    }
  return (
    <>
        <StyleHeaderDash>
        <Link to={'/'}><h1 className='logo'>ONG Cão Feliz</h1></Link>
        <nav>
            <ul className='lista-Nav'>
            <li className='item-lista'>Dashboard</li>
            <li className='item-lista'>Quem somos</li>
            <li className='item-lista' onClick={(e)=>handleEndereco(e)}>Olá, {nome} <User size={20}/></li>
            <li className='item-lista'>
                <Button texto={"Sair"} func={logout}  classe={'btn-sair'} />
            </li>
            </ul>
        </nav>
        </StyleHeaderDash>

        <Modal open={modalAberto} fechaModal={() => setModalAberto(false)}>
        <h2>Endereço</h2>
        <label htmlFor="cep">Cep:</label>
        <Input valor={cep} placeholder={'Cep'} nome={'cep'} tipo={'text'}  func={(e)=>setCep(e.target.value)}/>
        <label htmlFor="rua">Rua:</label>
        <Input valor={rua} placeholder={'Rua'} nome={'rua'} tipo={'text'}  func={(e)=>setRua(e.target.value)}/>
        <label htmlFor="numero">Número:</label>
        <Input valor={numero} placeholder={'Número'} nome={'numero'} tipo={'text'}  func={(e)=>setNumero(e.target.value)}/>
        <label htmlFor="complemento">Complemento:</label>
        <Input valor={complemento} placeholder={'Complemento'} nome={'complemeto'} tipo={'text'}  func={(e)=>setComplemento(e.target.value)}/>
        <Button texto={'Atualizar'} func={(e)=> atualizar(e)} />
      </Modal>
    </>
  )
}

export default HeaderDash