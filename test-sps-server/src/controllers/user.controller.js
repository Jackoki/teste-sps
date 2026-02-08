const UserService = require("../services/user.service");

class UserController {
    getAllUsers(req, res) {
        try {
            const users = UserService.getAllUsers();
            return res.json(users.map(({ password, ...user}) => user));
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao retornar usuários" });
        }
    }

    getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = UserService.getUserById(Number(id));

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

    registerUser(req, res){
        try {
            const { name, email, type, password } = req.body;

            const user = UserService.registerUser({name, email, type, password});

            if(!user) {
                return res.status(400).json({ message: "Todos os campos de usuário devem serem preenchidos" });
            }

            res.status(201).json(user);
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao cadastrar usuário" });
        }
    }

    editUser(req, res){
        try {
            const { id } = req.params;
            const user = UserService.getUserById(Number(id));

            if(!user) {
                return res.status(404).json({ message: "Usuário não existente para editar" });
            }

            const { name, email, type, password } = req.body;
            const editedUser = UserService.editUser(Number(id), {name, email, type, password});

            if(!editedUser) {
                return res.status(400).json({ message: "Todos os campos de usuário devem serem preenchidos" });
            }

            res.status(201).json(editedUser);
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao editar usuário" });
        }
    }

    deleteUser(req, res){
        try {
            const { id } = req.params;
            const user = UserService.getUserById(Number(id));

            
            if(!user) {
                return res.status(404).json({ message: "Usuário não existente para deletar" });
            }

            const deletedUser = UserService.deleteUser(Number(id));

            if(!deletedUser){
                return res.status(400).json({ message: "Erro durante processo de deletar usuário" });
            }

            res.status(201).json({ message: "Usuário deletado com sucesso" });
        }

        catch (err) {
            return res.status(500).json({ message: "Erro ao deletar usuário" });
        }
    }
}

module.exports = new UserController();