import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8800"
});

export const UseApi = () => ({
    validarToken: async (token) => {
        return {
            user: { id: 3, name: 'administrador', email: 'jose@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    logar: async (email, senha) => {
        
        const response = await api.post('/login', { email, senha });
        return response.data;
    },
    Cadastrar: async (dados) =>{
        // const response = await api.post('/cadastrar',{dados});
        
    }
    ,
    sair: async () => {
        return { status: false };
        const response = await api.post('/logout');
        return response.data;
    }
});
