import React, { useState } from 'react'
import Button from '../../components/common/Button/Button'
import { loginUsuario, postEnderecoUsuario, postUsuario } from '../../services/api'
import { StyleCadastro } from './Cadastro.styles'

import cadastroLogo from '/imgCadastro.svg'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/common/input/input'
import { House } from '@phosphor-icons/react/dist/ssr'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const navigate = useNavigate()

  const cadastrar = async (event) => {
      event.preventDefault()

      if(senha === confirmaSenha){
  
        const responseEndereco = await postEnderecoUsuario()
        
        console.log(responseEndereco.data.id)
        const data = {
          nome: nome,
          email: email,
          telefone: telefone,
          Idendereco: responseEndereco.data.id,
        }

        const response = await postUsuario(data, senha)
        const responseLogin = await loginUsuario(email, senha);
        if(responseLogin.success){
          localStorage.setItem('id', responseLogin.data._id)
          localStorage.setItem('nome', responseLogin.data.nome)
          localStorage.setItem('email', responseLogin.data.email)
          localStorage.setItem('admin', responseLogin.data.admin)
          navigate('/dashboard')
        }
        
      } else {
          document.getElementsByName('senha')[0].style.border = '2px outset red'
          document.getElementsByName('confirmaSenha')[0].style.border = '2px outset red'
      }
  }

  return (
    <StyleCadastro>
      <section>
        <Link to={'/'} className='home' ><House size={80}/></Link>
        <h2 className='nomeOng'>ONG Cão Feliz</h2>
        <picture>
          <img src={cadastroLogo} alt="aa" className='cadastro-img'/>
        </picture>
      </section>
      <form >
        <h2>Cadastro</h2>
        <div>
          <label htmlFor="nome">Nome</label>
          <Input 
            tipo={"text"} 
            valor={nome} 
            nome={'nome'} 
            placeholder={'Rafael Souza'} 
            func={(e)=>setNome(e.target.value)}/>
          <label htmlFor="email" >Email</label>
          <Input 
            tipo={"email" } 
            valor={email} 
            nome={'email'} 
            placeholder={'igorvechi@gmail.com'} 
            func={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="senha">Senha</label>
          <Input 
            tipo={"password"} 
            valor={senha} 
            nome={'senha' } 
            placeholder={'●●●●●●●'} 
            func={(e)=>setSenha(e.target.value)}/>
          <label htmlFor="confirmaSenha">Confirmação de Senha</label>
          <Input 
            tipo={"password"} 
            valor={confirmaSenha} 
            nome={'confirmaSenha'} 
            placeholder={'●●●●●●●'} 
            func={(e)=>setConfirmaSenha(e.target.value)}/>
          <label htmlFor="telefone">Telefone</label>
          <Input 
            tipo={"text"} 
            valor={telefone}
            nome={'telefone'} 
            placeholder={'41936684922'} 
            func={(e)=>setTelefone(e.target.value)}/>
          <p>Já possuí uma conta? <Link to={'/login'} className='link-login'>Faça login</Link></p>
          <Button texto={'Cadastrar'} classe='btn-cadastrar' func={(e)=> cadastrar(e)}/>
        </div>
      </form>
    </StyleCadastro>

  )
}

export default Cadastro