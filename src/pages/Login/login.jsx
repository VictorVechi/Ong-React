import React, { useState } from 'react';
import { loginUsuario } from '../../services/api';
import Input from '../../components/common/input/input';
import Button from '../../components/common/Button/Button';
import { StyleLogin } from './login.styles';
import loginLogo from '/AdocaoFeliz.svg'
import { House } from '@phosphor-icons/react/dist/ssr';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate()
  const fazerLogin = async (event) => {
    try {
      event.preventDefault();
      if (!email || !senha) {
        document.getElementsByName('senha')[0].style.border = '2px outset red'
        document.getElementsByName('email')[0].style.border = '2px outset red'
        return;
      }
      const response = await loginUsuario(email, senha);

      // console.log(response.data._id)
      if (response.success) {
          localStorage.setItem('id', response.data._id)
          localStorage.setItem('nome', response.data.nome)
          localStorage.setItem('email', response.data.email)
          // navigate('dashboard')
      } else {
          document.getElementsByName('senha').style.border = '2px outset red'
          document.getElementsByName('email').style.border = '2px outset red'
      }
    } catch (error) {
      console.error('Erro de autenticação:', error);
      setError('Erro de autenticação, por favor, tente novamente mais tarde.');
      setSuccessMessage(null);
    }
  };

  return (
    <StyleLogin>
      <form onSubmit={fazerLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <Input 
            tipo={"email" } 
            valor={email} 
            nome={'email'} 
            placeholder={'igorvechi@gmail.com'} 
            required
            func={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="senha">Senha</label>
        <Input 
            tipo={"password"} 
            valor={senha} 
            nome={'senha' } 
            required
            placeholder={'●●●●●●●'} 
            func={(e)=>setSenha(e.target.value)}
        />
        <p>Ainda não possuí cadastro? <Link className='link-cadastro' to={'/cadastro'}>Cadastre-se já</Link></p>
        <Button texto={'Cadastrar'} classe='btn-cadastrar' func={(e)=> fazerLogin(e)}/>
      </form>
      <section>
        <Link to={'/'} className='home'><House size={80}/></Link>
        <h2 className='nomeOng'>Ong Cão Feliz</h2>
        <picture>
          <img src={loginLogo} alt="aa" className='login-img'/>
        </picture>
      </section>
    </StyleLogin>
  );
};

export default Login;
