import React, { useState } from 'react';
import Input from '../../components/common/input/input';
import Button from '../../components/common/Button/Button';
import { postDoacao } from '../../services/api';
import { StyleDoacao } from './Doacoes.styles';
import Header from '../../components/views/LandingPage/Header/Header';

const Doacao = () => {
  const [cnpjCpf, setCnpjCpf] = useState('');
  const [valorDoacao, setValorDoacao] = useState('');

  const handleDoacaoSubmit = async (event) => {
    event.preventDefault();

    const dadosDoacao = {
      cnpjCpf,
      valorDoacao,
    };

    try {
      const resposta = await postDoacao(dadosDoacao);
      console.log('Doação realizada com sucesso:', resposta);

      setCnpjCpf('');
      setValorDoacao('');
    } catch (error) {

      console.error('Erro ao fazer a doação:', error);
    }
  };

  return (
    <StyleDoacao>
      <Header />
      <div className='center'>
        <div className="container"> 
          <form onSubmit={handleDoacaoSubmit}>
            <h2>Faça uma Doação</h2>
            <div className="input-container">
              <label htmlFor="cnpjCpf">CNPJ/CPF:</label>
              <Input
                type="text"
                id="cnpjCpf"
                value={cnpjCpf}
                onChange={(e) => setCnpjCpf(e.target.value)}
                placeholder="Digite seu CNPJ ou CPF"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="valorDoacao">Valor da Doação:</label>
              <Input
                type="text"
                id="valorDoacao"
                value={valorDoacao}
                onChange={(e) => setValorDoacao(e.target.value)}
                placeholder="Valor da doação"
                required
              />
            </div>
            <Button texto="Doar" classe="btn-doar" func={(e) => handleDoacaoSubmit(e)} />
            <div className='texto'>
              <p>Cuidar dos animais é uma responsabilidade que todos nós compartilhamos. 
                Quando contribuímos para o bem-estar dos animais, estamos construindo um mundo mais compassivo e solidário. 
                Cada ato de apoio, seja através de tempo, recursos ou esforços, faz uma grande diferença na vida dos animais que precisam. 
                Vamos juntos promover o respeito e a proteção de todas as espécies em nosso planeta, tornando o mundo um lugar mais seguro e acolhedor para nossos amigos de quatro patas e outras criaturas.
              </p>
            </div>
          </form>
        </div>
      </div>
    </StyleDoacao>
  );
};

export default Doacao;
