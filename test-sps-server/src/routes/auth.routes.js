const { Router } = require("express");
const AuthController = require("../controllers/auth.controller");

const router = Router()
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login para criar token jwt para autenticar a realização de requisições
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Retorna o token jwt
 *       401:
 *         description: Retorna erro por credenciais de login incorretas
 *       500:
 *         description: Erro na hora de realizar o login
 */
router.post("/login", AuthController.login);
module.exports = router;