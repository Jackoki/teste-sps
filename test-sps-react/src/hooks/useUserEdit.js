import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import UserService from "../services/UserService";

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
