import React, { useEffect, useState } from 'react';
import { StyleMainUnidade } from './main.styles';
import CardUnidade from '../Card/CardUnidade';
import Button from '../../../common/Button/Button';
import { getUnidades, getUsuarioPorId, getPetsPorUnidade, postEnderecoUnidade, postUnidade, atualizarEnderecoUnidade, getEnderecoUnidadePorId, getUnidadePorId } from '../../../../services/api';
import Modal from '../../../common/Modal/Modal';
import Input from '../../../common/input/input';

const MainUnidades = () => {
  const [listaUnidades, setListaUnidades] = useState([]);
  const [numero, setNumero] = useState(0);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalAberto, setModalAberto] = useState(false);
  const [modalEndereco, setModalEndereco] = useState(false);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numeroEndereco, setNumeroEndereco] = useState('');

  let admin = localStorage.getItem('admin');
  if (admin === 'true') {
    admin = true;
  } else {
    admin = false;
  }

  const verificarAdmin = async () => {
    const id = localStorage.getItem('id');
    const response = getUsuarioPorId(id);
    return response;
  };

  const handleBuscaUnidades = async () => {
    try {
      const response = await getUnidades();
      setListaUnidades(response);
    } catch (error) {
      console.error('Erro ao buscar unidades:', error);
    }
  };


  const cadastrar = async () => {
    const adminInfo = await verificarAdmin();
    if (adminInfo.admin) {
      const responseEndereco = await postEnderecoUnidade();
      const data = {
        nome: nome,
        email: email,
        telefone: telefone,
        id_endereco_unidade: responseEndereco.data.id,
      };
      const response = await postUnidade(data);
      setNome('');
      setEmail('');
      setTelefone('');
      setModalAberto(false);
      await handleBuscaUnidades();
    }
  };

  const attEndereco = async () => {
    const adminInfo = await verificarAdmin();
    if (adminInfo) {
      const data = {
        cep: cep,
        rua: rua,
        numero: numeroEndereco,
      }
      const id = listaUnidades[numero]?._id
      const unidade = await getUnidadePorId(id)
      const idEndereco = unidade.id_endereco_unidade
      const response = await atualizarEnderecoUnidade(idEndereco, data)
    }

  }

  const handleEndereco = async () => {
    const id = listaUnidades[numero]?._id
    const unidade = await getUnidadePorId(id)
    const idEndereco = unidade.id_endereco_unidade
    const response = await getEnderecoUnidadePorId(idEndereco)

    console.log(response);
    setCep(response.cep)
    setRua(response.rua)
    setNumeroEndereco(response.numero)
    setModalEndereco(true)
  }

  const enderecoCard = async () => {
    try {
      const id = listaUnidades[numero]?._id
      if (!!id) {
        const unidade = await getUnidadePorId(id)
        const idEndereco = unidade.id_endereco_unidade
        const response = await getEnderecoUnidadePorId(idEndereco)

        console.log(response);
        setCep(response.cep)
        setRua(response.rua)
        setNumeroEndereco(response.numero)
      }

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    handleBuscaUnidades();
  }, []);

  useEffect(() => {
    enderecoCard()
  }, [numero])

  function prevCard() {
    if (numero <= 0) {
      setNumero(listaUnidades.length - 1);
    } else {
      setNumero((prevState) => prevState - 1);
    }
  }

  function nextCard() {
    if (numero === listaUnidades.length - 1) {
      setNumero(0);
    } else {
      setNumero((prevState) => prevState + 1);
    }
  }

  return (
    <>
      <StyleMainUnidade>
        <div className='carrossel'>
          <Button texto={'Anterior'} func={prevCard} />
          <CardUnidade
            nome={listaUnidades[numero]?.nome}
            telefone={listaUnidades[numero]?.telefone}
            email={listaUnidades[numero]?.email}
            idUnidade={listaUnidades[numero]?._id}
            cep={cep}
            rua={rua}
            numeroEndereco={numeroEndereco}
          // idEndereco={listaUnidades[numero]?.id_endereco_unidade}

          />
          <Button texto={'Próximo'} func={nextCard} />
        </div>
        <div className='admin'>
          {admin && <Button texto={'Cadastrar'} func={() => setModalAberto(true)} />}
          {admin && <Button texto={'Endereço'} func={() => handleEndereco()} />}
        </div>
      </StyleMainUnidade>
      <Modal open={modalAberto} fechaModal={() => setModalAberto(false)}>
        <h2>Cadastre uma Unidade</h2>
        <label htmlFor='nome'>Nome:</label>
        <Input valor={nome} placeholder={'Nome da unidade'} nome={'nome'} tipo={'text'} func={(e) => setNome(e.target.value)} />
        <label htmlFor='email'>Email:</label>
        <Input valor={email} placeholder={'Email da unidade:'} nome={'email'} tipo={'text'} func={(e) => setEmail(e.target.value)} />
        <label htmlFor='telefone'>Telefone:</label>
        <Input valor={telefone} placeholder={'Telefone da unidade'} nome={'telefone'} tipo={'text'} func={(e) => setTelefone(e.target.value)} />
        <Button texto={'Cadastrar'} func={cadastrar} />
      </Modal>

      <Modal open={modalEndereco} fechaModal={() => setModalEndereco(false)}>
        <h2>Endereço da Unidade</h2>
        <label htmlFor='cep'>Cep:</label>
        <Input valor={cep} placeholder={'Cep da unidade'} nome={'cep'} tipo={'text'} func={(e) => setCep(e.target.value)} />
        <label htmlFor='rua'>Rua:</label>
        <Input valor={rua} placeholder={'Rua:'} nome={'rua'} tipo={'text'} func={(e) => setRua(e.target.value)} />
        <label htmlFor='numeroEndereco'>Número:</label>
        <Input valor={numeroEndereco} placeholder={'Número do endereço'} nome={'numeroEndereco'} tipo={'text'} func={(e) => setNumeroEndereco(e.target.value)} />
        <Button texto={'Atualizar'} func={attEndereco} />
      </Modal>
    </>
  );
};

export default MainUnidades;
