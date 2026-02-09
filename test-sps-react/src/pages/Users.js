import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import "../styles/Users.css";

//Página para carregar usuários pelo hook do useUsers
//As informações retornadas pelo hook são então carregadas, se não houver nenhum aparecerá "Nenhum usuário encontrado"
//Se houver informações, será mapeado cada um para cada linha carregando o nome, email e tipo de usuário
//Na frente de cada usuário, tem o botão de Editar que redireciona para a página de Editar Usuário ou o botão de excluir para excluir o usuário
function Users() {
  const { users, removeUser } = useUsers();
  const navigate = useNavigate();

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
                  <button onClick={() => navigate(`/users/${user.id}`)}>Editar</button>
                  <button className="danger" onClick={() => removeUser(user.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <a href="/home">Voltar para Home</a>
      </div>
    </div>
  );
}

export default Users;
