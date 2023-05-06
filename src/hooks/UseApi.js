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
    logar: async (username, password) => {
        
        const response = await api.post('/login', { username, password });
        return response.data;
    },
    sair: async () => {
        return { status: false };
        const response = await api.post('/logout');
        return response.data;
    }
});
