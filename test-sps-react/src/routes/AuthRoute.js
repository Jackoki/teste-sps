import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

//Resgata o token a partir do AuthContext, se ele não for válido, o usuário sempre vai ser direcionado para a tela de login
function AuthRoute({ children }) {
  const { token } = useAuthContext();
  return token ? children : <Navigate to="/" replace />;    
}

export default AuthRoute;
