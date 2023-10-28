import React, { useEffect, useState } from 'react'
import { StyleMainUnidade } from './main.styles'
import CardUnidade from '../Card/CardUnidade'
import Button from '../../../common/Button/Button'
import { getUnidades, getUsuarioPorId, postEnderecoUnidade, postUnidade } from '../../../../services/api'
import Modal from '../../../common/Modal/Modal'
import Input from '../../../common/input/input'

const MainUnidades = () => {
    const [listaUnidades, setListaUnidades] = useState([])
    const [numero, setNumero] = useState(0)
    const [modalAberto, setModalAberto] = useState(false)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    let admin = localStorage.getItem('admin')
    if(admin == 'true'){
       admin = true
    } else {
      admin = false
    }
  
    const cadastrar = async () => {
      const admin = await verificarAdmin()
      if(admin.admin){
        const responseEndereco = await postEnderecoUnidade()
        const data = {
          nome: nome,
          email: email,
          telefone: telefone,
          id_endereco_unidade: responseEndereco.data.id,
        }
        const response = await postUnidade(data)
        setNome('')
        setEmail('')
        setTelefone('')
        setModalAberto(false)
        await handleBuscaUnidades()
      }
    }

    const verificarAdmin = async () => {
        const id = localStorage.getItem("id")
        const response = getUsuarioPorId(id)
        return response
    }

    const handleBuscaUnidades = async () => {
        const response = await getUnidades()
        setListaUnidades(response)
    }

    useEffect(()=>{
        handleBuscaUnidades()
    }, [])

    function prevCard() {
        if (numero <= 0) {
          return setNumero(() => listaUnidades.length - 1);
        }
    
        return setNumero((prevState) => {
          console.log(prevState);
          return prevState - 1;
        });
      }
    
      function nextCard() {
        if (numero === listaUnidades.length - 1) {
          return setNumero(0);
        }
        return setNumero((prevState) => {
          return prevState + 1;
        });
      }


    return (
        <>
            <StyleMainUnidade>
            <div className='carrossel'>
                <Button texto={'Anterior'} func={(e)=>prevCard()}/>
                <CardUnidade nome={listaUnidades[numero]?.nome} telefone={listaUnidades[numero]?.telefone} email={listaUnidades[numero]?.email}/>
                <Button texto={'Próximo'} func={(e)=>nextCard()}/>
            </div>
            {admin && <Button texto={'Cadastrar'} func={(e)=>setModalAberto(true)}/>}
            </StyleMainUnidade>


        <Modal open={modalAberto} fechaModal={() => setModalAberto(false)}>
        <h2>Cadastre uma Unidade</h2>
        <label htmlFor="nome">Nome:</label>
        <Input valor={nome} placeholder={'Nome da unidade'} nome={'nome'} tipo={'text'}  func={(e)=>setNome(e.target.value)}/>
        <label htmlFor="email">Email:</label>
        <Input valor={email} placeholder={'Email da unidade:'} nome={'email'} tipo={'text'}  func={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="telefone">Telefone:</label>
        <Input valor={telefone} placeholder={'Telefone da unidade'} nome={'telefone'} tipo={'text'}  func={(e)=>setTelefone(e.target.value)}/>
        <Button texto={'Cadastrar'} func={(e)=> cadastrar(e)} />
      </Modal>
        </>
    )
}

export default MainUnidades