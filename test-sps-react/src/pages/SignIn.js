import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import "../styles/SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", password);
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
          <h1>Página de Login</h1>
          <form>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Entrar</button>
          </form>
        </div>
    </div>
  );
}

export default SignIn;
