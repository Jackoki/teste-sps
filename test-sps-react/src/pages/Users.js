import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import "../styles/Users.css";

function Users() {
  const { users, loading, removeUser } = useUsers();
  const navigate = useNavigate();

  if (loading) return <p>Carregando...</p>;

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
                <span>
                  <strong>{user.name}</strong> — {user.email} ({user.type})
                </span>

                <div className="actions">
                  <button onClick={() => navigate(`/users/edit/${user.id}`)}>Editar</button>
                  <button className="danger" onClick={() => removeUser(user.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Users;
