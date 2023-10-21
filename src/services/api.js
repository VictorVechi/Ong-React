import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const postUsuario = async (data, senha) => {
    const config = {
        headers: {
            'password': senha
        }
    };

    const response = await api.post('/usuarios', data, config);
    return response.data;
};

export const loginUsuario = async (email, senha) => {
    try {
        const config = {
            headers: {
                'X-password': senha,
            },
        };

        const resposta = await api.post('/usuarios/login', { email }, config);

        return resposta.data;
    } catch (error) {
        if (error.response) {
            return {
                message: error.response.data.message,
                success: error.response.data.success,
            };
        } else {
            return {
                message: 'Erro inesperado',
            };
        }
    }
};

export const verificarEmail = async (email) => {
    const response = await api.post('/usuarios/email', { email });

    if (response.data.success) {
        return true;
    }

    return false;
};


export const getPets = async () => {
    try {
        const response = await api.get('/pets')
        return response.data
    } catch(error){
        console.log(error.message);
    }
}