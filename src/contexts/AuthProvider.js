import { useEffect, useState, createContext } from "react";
import { UseApi } from "../hooks/UseApi";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(false);
  const api = UseApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("Token");
      if (storageData) {
        const data = await api.validarToken(storageData);
        if (data.user) {
          setUser(data.user);
          setStatus(true);
        }
      }
    };
    validateToken();
  }, [status]);

  const Entrar = async (email, senha) => {
    const data = await api.logar(email, senha);
    // if (data.user && data.token) {
    //     setUser(data.user);
    //     setStatus(true)
    //     setToken(data.token);
    //     return true;
    // }
    // return false;
  };

  const cadastrar = async (dados) => {
    console.log(dados)
    const data = await api.Cadastrar(dados);
  };

  const Sair = async () => {
    setUser(null);
    setToken("");
    setStatus(false);
    window.location.reload();
    await api.sair();
  };

  const setToken = (token) => {
    localStorage.setItem("Token", token);
  };
  return (
    <AuthContext.Provider value={{ user, Entrar, cadastrar, Sair, status }}>
      {children}
    </AuthContext.Provider>
  );
};
