import { useState } from "react";

//Função usada para gerenciar o token no local storage
//Se for logar, setamos o jwt no localStorage, se for sair, apenas removemos e o setamos como null
export function useAuth(){
    const [token, setToken] = useState(localStorage.getItem("token"));

    const login = (jwt) => {
        localStorage.setItem("token", jwt);
        setToken(jwt);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    return {token, login, logout};
}