const { Router } = require("express");
const userRoutes = require("./user.routes")
const authRoutes = require("./auth.routes")

const routes = Router();

routes.use("", authRoutes)
routes.use("/users", userRoutes)

module.exports = routes;
