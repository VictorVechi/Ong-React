import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

export const postUsuario = async (data, senha) => {
    try {
        const config = {
            headers: {
                'password': senha
            }
        }; 
        const response = await api.post('/usuarios', data, config);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const getUsuarioPorId = async (id) =>{
    try {
        const response = await api.get(`/usuarios/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getEnderecoUsuarioPorId = async (id) => {
    try {
        const response = await api.get(`/enderecoUsuario/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const atualizarEnderecoUsuario = async (id, data) => {
    try {
        const response = await api.put(`/enderecoUsuario/${id}`, data)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const postEnderecoUsuario = async() => {
    try {
        const endereco = {
            cep: " ",
            rua: " ",
            numero: " ",
            complemento: " "
        }
    
        const responseEndereco = api.post('/enderecoUsuario', endereco)
        return responseEndereco
    
    } catch (error) {
        console.log(error);
    }
}

export const postEnderecoUnidade = async() => {
    try {
        const endereco = {
            cep: " ",
            rua: " ",
            numero: " ",
        }
    
        const responseEndereco = api.post('/enderecoUnidade', endereco)
        return responseEndereco
    
    } catch (error) {
        console.log(error);
    }
}

export const postUnidade = async (data) => {
    try {
        const response = await api.post('/unidades', data)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

export const loginUsuario = async (email, senha) => {
    try {
        const config = {
            headers: {
                'password': senha,
            },
        };

        const data = {
            email:email
        }

        const resposta = await api.post('/usuarios/login', data, config);

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
    try {
        const data = {
            email:email
        }
        const response = await api.post('/usuarios/email', data );
        return response.data
        
    } catch(error) {
        console.log(error.message)
    }
};


export const getPets = async () => {
    try {
        const response = await api.get('/pets')
        return response.data
    } catch(error){
        console.log(error.message);
    }
} 

export const getPetPorId = async (id) => {
    try {
        const response = await api.get(`/pets/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}


export const postPets = async (data) => {
    try {
        const response = await api.post('/pets', data)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

export const getUnidades = async () => {
    try {
        const response = await api.get('/unidades')
        return response.data
    } catch(error) {
        console.log(error.message)
    }
}


export const adocao = async (id, data) => {
    try {
        const response = await api.put(`/pets/${id}`, data)
        return response
    } catch(error){
        console.log(error.message)
    }

}