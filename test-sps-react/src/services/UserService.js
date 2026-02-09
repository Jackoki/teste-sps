import axios from "axios";

class UserService {
  async list(token) {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/get-all-users`, {
      headers: {Authorization: `Bearer ${token}`,},
    });

    return response.data; 
  }

  async get(id, token) {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/get-user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async create(data, token) {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/register-user`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  }

  async update(id, data, token) {
    return axios.put(`${process.env.REACT_APP_BACKEND_URL}/users/edit-user/${id}`, data, { 
      headers: { Authorization: `Bearer ${token}` } 
    });
  }

  async delete(id, token) {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/users/delete-user/${id}`, { 
      headers: { Authorization: `Bearer ${token}` } 
    });
  }

}

export default UserService;
