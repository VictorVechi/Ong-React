import React, { useState } from 'react';
import { loginUsuario } from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const fazerLogin = async (event) => {
    event.preventDefault();

    if (!email || !senha) {
      setError('Por favor, preencha tanto o email quanto a senha.');
      return;
    }

    try {
      const response = await loginUsuario(email, senha);

      if (response.success) {
        setSuccessMessage('Login feito com sucesso'); 
        setError(null);

      } else {
        setError(response.message);
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
      setError('Erro de autenticação, por favor, tente novamente mais tarde.');
      setSuccessMessage(null);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <form onSubmit={fazerLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
