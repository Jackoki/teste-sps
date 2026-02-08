import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthContext } from "../contexts/AuthContext"; 
import "../styles/SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) {
      navigate("/home");
    }
    
    else {
      alert("Erro ao logar");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
          <h1>Página de Login</h1>
          <form onSubmit={handleLogin}>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
          </form>
        </div>
    </div>
  );
}

export default SignIn;
