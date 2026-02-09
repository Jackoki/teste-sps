import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import UserService from "../services/UserService";

//Função utilizada para carregar informações do usuário selecionado na página de Users
//Ao clicar em editar, temos a informação do seu ID e então pesquisamos as informações pelo Service, assim preenchendo as informações no formulário
//Ao editar os dados, salva as alterações, sendo a senha opcional e não necessário para preencher
//Aqui chamamos diversos hooks para resgatar parâmetros como o ID do usuário, token mas também para carregar os dados do usuário ao entrar na tela
//O preenchimento de dados é feito pelo useEffect, do qual usa o UserService passando o id para setar as informações
//Criamos também a função de saveUser() que acontece quando o usuário chamar no page
export function useUserEdit() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const [form, setForm] = useState({name: "", email: "", type: "user",});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const service = new UserService();
        const response = await service.get(userId, token);

        setForm({
          name: response.data.name,
          email: response.data.email,
          type: response.data.type,
          password: "",
        });
      } 
      
      catch {
        alert("Erro ao carregar usuário");
        navigate("/users");
      } 
      
      finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId, token, navigate]);

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const saveUser = async () => {
    try {
      const service = new UserService();

      const payload = {
        name: form.name,
        email: form.email,
        type: form.type,
        ...(form.password && { password: form.password }),
      };

      await service.update(userId, payload, token);
      alert("Usuário atualizado com sucesso");
      navigate("/users");
    } 
    
    catch {
      alert("Erro ao atualizar usuário");
    }
  };

  return { form, loading, handleChange, saveUser, cancel: () => navigate("/users"), };
}
