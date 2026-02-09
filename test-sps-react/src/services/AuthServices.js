import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//Service é utilizado para comunicar com o back-end a partir do email e senha passada durante a função de login
//Retorna o token que é retornado na função POST de login do back-end
export async function login({ email, password }) {
    const response = await axios.post(`${BACKEND_URL}/login`, { email, password });
    return response.data.token;
}