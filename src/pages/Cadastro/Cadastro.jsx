import React, { useState } from 'react'
import Button from '../../components/common/Button/Button'
import { postUsuario } from '../../services/api'

const Cadastro = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')


  const cadastrar = async (event) => {
      event.preventDefault()
      const data = {
        nome: nome,
        email: email,
        telefone: telefone,
      }

      const response = await postUsuario(data, senha)
      console.log(response)
  }


  return (
    <div>
      <form >
        <label htmlFor="">Nome</label>
        <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="">Senha</label>
        <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <label htmlFor="">Telefone</label>
        <input type="text" value={telefone} onChange={(e)=>setTelefone(e.target.value)}/>
        <Button texto={'Cadastrar'} func={(e)=> cadastrar(e)}/>
      </form>
    </div>
  )
}

export default Cadastro