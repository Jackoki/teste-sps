const { users } = require("../database/user.database");

class UserService {
    getAllUsers(){
        return users;
    }

    getUserById(id){
        return users.find(u => u.id === id);
    }
}

module.exports = new UserService();