import React, { useEffect, useState } from 'react';
import { StyleMainUnidade } from './main.styles';
import CardUnidade from '../Card/CardUnidade';
import Button from '../../../common/Button/Button';
import { getUnidades, getUsuarioPorId, getPetsPorUnidade, postEnderecoUnidade, postUnidade } from '../../../../services/api';
import Modal from '../../../common/Modal/Modal';
import Input from '../../../common/input/input';

const MainUnidades = () => {
  const [listaUnidades, setListaUnidades] = useState([]);
  const [numero, setNumero] = useState(0);
 

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalAberto, setModalAberto] = useState(false);

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

  useEffect(() => {
    handleBuscaUnidades();
  }, []);

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
          />
          <Button texto={'Próximo'} func={nextCard} />
        </div>
        {admin && <Button texto={'Cadastrar'} func={() => setModalAberto(true)} />}
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
    </>
  );
};

export default MainUnidades;
