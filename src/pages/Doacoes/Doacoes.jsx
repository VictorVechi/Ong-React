import React, { useState } from 'react';
import Input from '../../components/common/input/input';
import Button from '../../components/common/Button/Button';
import { postDoacao } from '../../services/api';
import { StyleDoacao } from './Doacoes.styles';
import Header from '../../components/views/LandingPage/Header/Header';
import HeaderDash from '../../components/views/Dashboard/Header/HeaderDash';

function validarCPF(cpf) {
  if (!cpf) return false;

  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11) return false;

  if (
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false;

  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;

  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function validarCNPJ(cnpj) {
  if (!cnpj) return false;

  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) return false;

  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  )
    return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(0))) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado !== parseInt(digitos.charAt(1))) return false;

  return true;
}

const Doacao = () => {
  const [tipoDocumento, setTipoDocumento] = useState('cpf');
  const [documento, setDocumento] = useState('');
  const [valorDoacao, setValorDoacao] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [documentoValido, setDocumentoValido] = useState(true);
  const [valorValido, setValorValido] = useState(true);

  const id = localStorage.getItem('id');
  const logado = id ? true : false;

  const fazerDoacao = async (event) => {
    event.preventDefault();

    if (tipoDocumento === 'cpf') {
      if (!validarCPF(documento)) {
        setDocumentoValido(false);
        return;
      } else {
        setDocumentoValido(true);
      }
    } else if (tipoDocumento === 'cnpj') {
      if (!validarCNPJ(documento)) {
        setDocumentoValido(false);
        return;
      } else {
        setDocumentoValido(true);
      }
    }

    if (!valorDoacao || parseFloat(valorDoacao) <= 0) {
      setValorValido(false);
      return;
    } else {
      setValorValido(true);
    }

    const dadosDoacao = {
      valor: valorDoacao,
      cpf_cnpj: documento,
    };

    try {
      const resposta = await postDoacao(dadosDoacao);
      console.log('Doação realizada com sucesso:', resposta);
      setModalVisible(true);
      setDocumento('');
      setValorDoacao('');
    } catch (error) {
      console.error('Erro ao fazer a doação:', error);
    }
  };

  return (
    <StyleDoacao>
      {logado ? <HeaderDash /> : <Header />}
      <div className="center">
        <div className="container">
          <form>
            <h2>Faça uma Doação</h2>
            <div className="input-container">
              <label htmlFor="tipoDocumento">Tipo de Documento:</label>
              <select
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
              >
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
              </select>
            </div>
            <div className={`input-container documento ${documentoValido ? '' : 'invalid'}`}>
              <label htmlFor="documento">
                {tipoDocumento === 'cpf' ? 'CPF' : 'CNPJ'}:
              </label>
              <Input
                tipo="text"
                nome="documento"
                id="documento"
                valor={documento}
                func={(e) => {
                  setDocumento(e.target.value);
                  setDocumentoValido(true);
                }}
                placeholder={`Digite seu ${
                  tipoDocumento === 'cpf' ? 'CPF' : 'CNPJ'
                }`}
                required
              />
            </div>
            {!documentoValido && (
              <p className="error-message">
                {`O ${
                  tipoDocumento === 'cpf' ? 'CPF' : 'CNPJ'
                } é inválido. Por favor, verifique.`}
              </p>
            )}
            <div className="input-container">
              <label htmlFor="valorDoacao">Valor da Doação:</label>
              <Input
                tipo="text"
                nome="valorDoacao"
                valor={valorDoacao}
                func={(e) => setValorDoacao(e.target.value)}
                placeholder="Valor da doação"
                required
              />
            </div>
            {!valorValido && (
              <p className="error-message">O valor da doação é inválido. Por favor, verifique.</p>
            )}
            <Button
              texto="Doar"
              classe="btn-doar"
              onclick={fazerDoacao}
              func={(e) => fazerDoacao(e)}
            />
            <div className="texto">
              <p>
                Cuidar dos animais é uma responsabilidade que todos nós
                compartilhamos. Quando contribuímos para o bem-estar dos
                animais, estamos construindo um mundo mais compassivo e
                solidário. Cada ato de apoio, seja através de tempo, recursos ou
                esforços, faz uma grande diferença na vida dos animais que
                precisam. Vamos juntos promover o respeito e a proteção de todas
                as espécies em nosso planeta, tornando o mundo um lugar mais
                seguro e acolhedor para nossos amigos de quatro patas e outras
                criaturas.
              </p>
            </div>
          </form>
        </div>
      </div>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>Obrigado por sua doação!</p>
            <button onClick={() => setModalVisible(false)}>Fechar</button>
          </div>
        </div>
      )}
    </StyleDoacao>
  );
};

export default Doacao;
