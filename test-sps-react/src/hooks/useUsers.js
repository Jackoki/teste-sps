import { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useAuthContext } from "../contexts/AuthContext";

//Função utilizada para tanto listar os usuarios que são retornados pelo UserService como também permitir a deleção dos mesmos
//Primeiro setamos o token e verificamos se estamos autenticados, se estivermos, realizamos a busca de usuários pelo service
//Temos também a opção de deletar um usuário a partir do id passado, da qual é manipulado novamente pelo service 
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
