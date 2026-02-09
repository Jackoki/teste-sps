import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { useAuthContext } from "../contexts/AuthContext";

//Tela de registro do qual tem 4 useStates para controlar as informações na hora de confirmar o registro
//Nesse caso, precisamos setar o email, nome, tipo de usuário e a sua senha.
//Com as informações setadas, se o usuário clicar no botão de registrar, será acionado a função assincrona handleRegister
//O handleRegister chamará o UserService para a chamada da função service.create passando as informações da requisição
//Se tudo der certo seremos direcionado para a tela home, caso contrário será chamado um aviso
function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("user");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const service = new UserService();

      await service.create({name, email, type, password,}, token);
      navigate("/home");
    } 
    
    catch (err) {
      alert(err.response?.data?.message || "Erro ao cadastrar usuário");
    }
  };


  return (
    <div className="signin-container">
      <div className="signin-box">
          <h1>Página de Registro</h1>
          <form onSubmit={handleRegister}>
            <Input type="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Select value={type} onChange={(e) => setType(e.target.value)} options={[{ value: "user", label: "Usuário" }, { value: "admin", label: "Administrador" },]}/>
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Cadastrar</button>
          </form>
          <a href="/home">Voltar para Home</a>
        </div>
    </div>
  );
}

export default Register;