import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000'
})

export const postUsuario = async (data, senha)=>{
    const config = {
        headers:{
            'password': senha
        }
    }
<<<<<<< HEAD

    const response = await api.post('/usuarios', data, config)
    return response.data
}
export const loginUsuario = async (email, senha) => {
    try {
      const config = {
        headers: {
          'X-password': senha,
        },
      }
  
      const resposta = await api.post('/usuarios/login', { email }, config)
  
      return resposta.data
    } catch (error) {
      if (error.response) {
        return {
          message: error.response.data.message,
          success: error.response.data.success,
        }
      } else {
        return {
          message: 'erro inesperado',
        }
      }
    }
  }
  
=======
    const valido = await api.post('/usuarios/email', data.email)
    if(valido.success){
        const response = await api.post('/usuarios', data, config)
        return response
    }
    return {success:false, message:"Email inválido"}
}
>>>>>>> 6676634a4d909816d387269b6dd56e5eb63886cf
