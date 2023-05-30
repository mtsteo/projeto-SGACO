import { useContext } from "react";
import { AuthContext, } from "./AuthProvider";
import {LoginPage} from "../pages/loginPage/LoginPage";

export default function Private({ children }) {
    /* AQUI VERIFICAMOS SE O USUÁRIO ESTÁ LOGADO PARA ENTÃO RENDERIZARMOS O COMPONENT DESEJADO  */
    const { status } = useContext(AuthContext);

    if (status) {
        return children
    }
    else {
        return <LoginPage/>;
    }

}