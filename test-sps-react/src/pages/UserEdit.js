import React from "react";
import { useUserEdit } from "../hooks/useUserEdit";

//Pagina para carregar informações do usuário, as informações em si vem do hook do useUserEdit
//As informações que são retornadas do hook são preenchidas nos formulários e quaisquer mudanças nas mesmas são mudadas
//Ao clicar no botão de salvar, chama novamente o hook com a função do saveUser

function UserEdit() {
  const {form, handleChange, saveUser} = useUserEdit();

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>Editar Usuário</h1>

        <form onSubmit={(e) => { e.preventDefault(); saveUser();}}>
          <input value={form.name} onChange={handleChange("name")} placeholder="Nome"/>
          <input value={form.email} onChange={handleChange("email")} placeholder="Email"/>
          <select value={form.type} onChange={handleChange("type")}>
            <option value="user">Usuário</option>
            <option value="admin">Administrador</option>
          </select>
          <input type="password" value={form.password} onChange={handleChange("password")} placeholder="Nova senha (opcional)"/>
          <button type="submit">Salvar</button>
        </form>
        <a href="/users">Voltar</a>
      </div>
    </div>
  );
}

export default UserEdit;
