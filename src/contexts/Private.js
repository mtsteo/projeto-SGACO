import { useContext } from "react";
import { AuthContext, } from "./AuthProvider";
import {LoginPage} from "../pages/loginPage/LoginPage";

export default function Private({ children }) {
    /* AQUI VERIFICAMOS SE O USUÁRIO ESTÁ LOGADO PARA ENTÃO RENDERIZARMOS O COMPONENT DESEJADO  */
    const { loggedIn } = useContext(AuthContext);
    const teste = true

    if (teste) {
        return children
    }
    else {
        return <LoginPage/>;
    }

}