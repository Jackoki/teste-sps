const jwt = require("jsonwebtoken");

//Criação de função de Middleware, nele usamos para realizar a validação do token jwt
//Para então antes de realizar a execução de requisições, realize a validação
//Primeiramente ele vai pegar a requisição do header do HTTP e verificar se existe o token, caso seja validado, passa para a próxima requisição
function authMiddleware(req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Token não foi informado" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(403).json({ message: "Token não é válido" });
        }

        req.user = user;
        next();
    })
}

module.exports = authMiddleware;