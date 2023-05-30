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
        // setUser(data.user);
        setStatus(true);
      }
    };
    validateToken();
  }, [status]);

  const Entrar = async (email, senha) => {
    const data = await api.logar(email, senha);
    // console.log(data.accessToken)
    if (data.accessToken) {
      setUser(data);
      setStatus(true);
      setToken(data.accessToken);
      return true;
    }
    return false;
  };

  const cadastrar = async (dados) => {
    console.log(dados);
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
    <AuthContext.Provider
      value={{ user, Entrar, cadastrar, Sair, status, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
