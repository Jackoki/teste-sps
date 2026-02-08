const { users } = require("../database/user.database");
const User = require("../models/user.model");

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

        const newUser = new User(users.length + 1, name, email, type, password)
            
        users.push(newUser);
        return newUser;
    }

    editUser(id, {name, email, type, password}) {
        if(!name || !email || !type || !password) {
            return null;
        }

        const userIndex = users.findIndex(u => u.id === id);

        users[userIndex] = {...users[userIndex], name, email, type, password};

        return users[userIndex];
    }

    deleteUser(id){
        const userIndex = users.findIndex(u => u.id === id);
        const userDeleted = users.splice(userIndex, 1);

        return userDeleted;
    }

}

module.exports = new UserService();