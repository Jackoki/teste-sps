import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useAuthContext } from "../contexts/AuthContext";
import "../styles/Users.css";

function Users() {
  const [users, setUsers] = useState([]);
  const { token } = useAuthContext();

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchUsers = async () => {
      try {
        const service = new UserService();
        const usersList = await service.list(token);
        setUsers(usersList);
      } 
      
      catch (err) {
        alert(err.response?.data?.message || "Erro ao buscar usuários");
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div className="users-container">
      <div className="users-box">
        <h1>Usuários</h1>

        {users.length === 0 ? (
          <p>Nenhum usuário encontrado.</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <strong>{user.name}</strong>
                <span>- {user.email}</span>
                <span>({user.type})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Users;
