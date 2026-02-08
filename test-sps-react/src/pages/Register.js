import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";
import "../styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("user");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", password);
  };


  return (
    <div className="signin-container">
      <div className="signin-box">
          <h1>Página de Registro</h1>
          <form>
            <Input type="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Select value={type} onChange={(e) => setType(e.target.value)} options={[{ value: "user", label: "Usuário" }, { value: "admin", label: "Administrador" },]}/>
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
          </form>
          <a href="/home">Voltar para Tela de Login</a>
        </div>
    </div>
  );
}

export default Register;