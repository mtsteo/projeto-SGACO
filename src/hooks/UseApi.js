import axios from "axios";
import { da } from "date-fns/locale";

const api = axios.create({
  baseURL: "https://c736-168-197-154-209.ngrok-free.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Acess-Control-Allow_Header":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
  },
});



export const UseApi = () => ({
  validarToken: async (token) => {
    return {
      user: { id: 3, name: "administrador", email: "jose@gmail.com" },
    };
    const response = await api.post("/validate", { token });
    return response.data;
  },
  logar: async (email, senha) => {
    const response = await api.post("/login", {"email":email, "senha":senha});
    
    return response.data;
  },
  Cadastrar: async (dados) => {
    // const response = await api.post('/cadastrar',{dados});
  },
  sair: async () => {
    return { status: false };
    const response = await api.post("/logout");
    return response.data;
  },
});

