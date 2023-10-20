import React, { useState } from 'react'
import Button from '../../components/common/Button/Button'
import { postUsuario } from '../../services/api'
import { StyleCadastro } from './Cadastro.styles'

import cadastroLogo from '/imgCadastro.svg'
import { Link } from 'react-router-dom'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const [telefone, setTelefone] = useState('')


  const cadastrar = async (event) => {
      event.preventDefault()
      const data = {
        nome: nome,
        email: email,
        telefone: telefone,
      }

      if(senha === confirmaSenha){
        const response = await postUsuario(data, senha)
        console.log(response)
      } else {
        
      }
  }


  return (
    <StyleCadastro>
      <section>
        <picture>
          <img src={cadastroLogo} alt="aa" className='cadastro-img'/>
        </picture>
       
        
      </section>
      <form >
        <h2>Cadastro</h2>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" value={nome} name='nome' placeholder='Rafael Souza' onChange={(e)=>setNome(e.target.value)}/>
          <label htmlFor="email" >Email</label>
          <input type="text" name='email' value={email} placeholder='igorvechi@gmail.com'  onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="senha">Senha</label>
          <input type="password" name='senha' value={senha} placeholder='●●●●●●●' onChange={(e)=>setSenha(e.target.value)}/>
          <label htmlFor="confirmaSenha">Confirmação de Senha</label>
          <input type="password" name='confirmaSenha' value={confirmaSenha} placeholder='●●●●●●●' onChange={(e)=>setConfirmaSenha(e.target.value)}/>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name='telefone'  value={telefone} placeholder='41936684922' onChange={(e)=>setTelefone(e.target.value)}/>
          <p>Já possuí uma conta? <Link to={'/login'} className='link-login'>Faça login</Link></p>
          <Button texto={'Cadastrar'} classe='btn-cadastrar' func={(e)=> cadastrar(e)}/>
        </div>
      </form>
    </StyleCadastro>

  )
}

export default Cadastro