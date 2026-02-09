const { users } = require("../database/user.database");
const { checkEmailExists, generateNextId } = require("../utils/user.utils");
const User = require("../models/user.model");

//Service referente para o Usuário, tendo funcionalidades como retornar todos os usuário do database
//Resgate de usuário por ID passado, registro, edição e deleção de usuários por meio do user.database
class UserService {
    getAllUsers(){
        return users;
    }

    getUserById(id){
        return users.find(u => u.id === id);
    }

    registerUser({name, email, type, password}){
        if(!name || !email || !type || !password) {
            return null;
        }

        if(checkEmailExists(email)){
            throw new Error("Email já cadastrado");
        }

        const newUser = new User(generateNextId(), name, email, type, password)
            
        users.push(newUser);
        return newUser;
    }

    editUser(id, {name, email, type, password}) {
        if(!name || !email || !type) {
            return null;
        }

        if (checkEmailExists(email, id)) {
            throw new Error("Email já cadastrado");
        }

        const userIndex = users.findIndex(u => u.id === id);

        users[userIndex] = {...users[userIndex], name, email, type, ...(password && { password })};

        return users[userIndex];
    }

    deleteUser(id){
        const userIndex = users.findIndex(u => u.id === id);
        const userDeleted = users.splice(userIndex, 1);

        return userDeleted;
    }

}

module.exports = new UserService();