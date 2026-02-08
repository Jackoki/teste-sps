import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function AuthRoute({ children }) {
  const { token } = useAuthContext();
  return token ? children : <Navigate to="/" replace />;    
}

export default AuthRoute;
