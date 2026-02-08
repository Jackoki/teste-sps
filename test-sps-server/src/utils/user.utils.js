const { users } = require("../database/user.database");

function checkEmailExists(email){
    if(users.find(u => u.email === email)){
        return true;
    }

    return false;
}

module.exports = {checkEmailExists}