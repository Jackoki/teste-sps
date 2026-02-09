import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useAuthContext } from "../contexts/AuthContext";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuthContext();

  const service = new UserService();

  useEffect(() => {
    if (!token) {
        return;
    }

    service.list(token).then(data => setUsers(data)).catch(() => alert("Erro ao buscar usuários")).finally(() => setLoading(false));}, [token]);

    const removeUser = async (id) => {
        try {
            await service.delete(id, token);
            setUsers(prev => prev.filter(user => user.id !== id));
        } 
        
        catch (err) {
            alert("Erro ao excluir usuário");
        }
    };

  return { users, loading, removeUser, };
}
