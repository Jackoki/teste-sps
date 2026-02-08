const AuthService = require("../services/auth.services");

class AuthController {
    login(req, res) {
        try {
            const {email, password} = req.body;
            const token = AuthService.login({email, password});

            if(!token) {
                return res.status(401).json({ message: "Credenciais inválidas" });
            }

            return res.json({ token });
        }

        catch (err) {
            return res.status(500).json({ message: "Erro na hora de realizar o login"})
        }
    }
}

module.exports = new AuthController();