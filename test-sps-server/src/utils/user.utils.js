const { users } = require("../database/user.database");

//Arquivo é usado como utilitários para manipulação e verificação de informações
//Como a verificação de email já existente no banco de dados e a geração de ID

function checkEmailExists(email, ignoreUserId = null) {
    return users.some(
        u => u.email === email && u.id !== ignoreUserId
    );
}


function generateNextId() {
    if (users.length === 0) {
        return 1;
    }

    return Math.max(...users.map(u => u.id)) + 1;
}


module.exports = {checkEmailExists, generateNextId}