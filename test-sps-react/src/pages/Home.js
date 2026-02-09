import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import "../styles/Home.css";

//Tela simples, do qual temos apenas 3 botões, um para ir para a tela de listagem de usuários
//Outra tela é utilizado para registrar um usuário e o outro para sair e tirar o token e ir pra tela de login
function Home() {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };


  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Escolha o que deseja fazer:</h1>

        <button onClick={() => navigate("/users")}>Ver Usuários</button>
        <button onClick={() => navigate("/register")}>Registrar Usuário</button>
        <button onClick={handleLogout}>Logoff</button>
      </div>
    </div>
  );
}

export default Home;
