const { users } = require("../database/user.database");

function checkEmailExists(email){
    if(users.find(u => u.email === email)){
        return true;
    }

    return false;
}

function generateNextId() {
    if (users.length === 0) {
        return 1;
    }

    return Math.max(...users.map(u => u.id)) + 1;
}


module.exports = {checkEmailExists, generateNextId}