const UserService = require("../services/user.service");

class UserController {
    listUsers(req, res) {
        try {
            const users = UserService.listUsers();
            return res.json(users.map(({ password, ...user}) => user));
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao retornar usuários" });
        }
    }

    getUser(req, res) {
        try {
            const { id } = req.params;
            const user = UserService.getUser(Number(id));

            if(!user) {
                return res.status(404).json({ message: "Usuário não encontado" });
            }
            
            const {password, ...UserNoPassword} = user;
            return res.json(UserNoPassword);
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao buscar usuário" });
        }
    }
}

module.exports = new UserController();