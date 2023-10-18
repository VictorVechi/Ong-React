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

    const response = await api.post('/usuarios', data, config)
    return response.data
}