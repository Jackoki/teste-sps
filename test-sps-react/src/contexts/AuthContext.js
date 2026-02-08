import { createContext, useContext, useState } from "react";
import { login as apiLogin } from "../services/AuthServices";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (email, password) => {
    try {
      const jwt = await apiLogin({ email, password });
      localStorage.setItem("token", jwt);
      setToken(jwt);
      return true;
    } 
    
    catch (err) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
