const { Router } = require("express");
const userRoutes = require("./user.routes")
const authRoutes = require("./auth.routes")

const routes = Router();

//Esse arquivo tem como função ser o gerenciador de rotas
//Nele, chamamos os outros arquivos de rotas para manter a escalabilidade
routes.use("", authRoutes)
routes.use("/users", userRoutes)

module.exports = routes;
