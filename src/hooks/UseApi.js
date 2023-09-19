import axios from "axios";

const api = axios.create({
  baseURL: "https://0d0a-168-197-154-164.ngrok-free.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
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
  getUsers: async () => {
    const response = await api.post("/getusers",);
    return response.data;
  },
  deleteUsers: async (cpf) => {
    const response = await api.post("/deleteuser",{"CPF":cpf});
    return response.data;
  },
  putUsers: async (dados) => {
    console.log(dados)
    const response = await api.post("/putusers",{dados});
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


