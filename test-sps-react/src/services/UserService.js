import axios from "axios";

class UserService {
  async list(token) {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/get-all-users`, {
      headers: {Authorization: `Bearer ${token}`,},
    });

    return response.data; 
  }
    async get(id) {
    throw new Error("Not implemented");
  }
  async create(data) {
    throw new Error("Not implemented");
  }
  async delete(id) {
    throw new Error("Not implemented");
  }
  async update(id, data) {
    throw new Error("Not implemented");
  }
}

export default UserService;
