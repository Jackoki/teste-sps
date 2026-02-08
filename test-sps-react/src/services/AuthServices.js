import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export async function login({ email, password }) {
  const response = await axios.post(`${BACKEND_URL}/auth/login`, { email, password });
  return response.data.token;
}
