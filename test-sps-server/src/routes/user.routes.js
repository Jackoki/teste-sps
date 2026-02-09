const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router()

/**
 * @swagger
 * /users/get-all-users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *       500:
 *         description: Erro ao listar usuários
 */
router.get("/get-all-users", authMiddleware, UserController.getAllUsers);

/**
 * @swagger
 * /users/get-user/:id:
 *   get:
 *     summary: Retorna um usuário pelo ID passado
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retorna um usuário
 *       404:
 *         description: Erro de usuário não existente
 *       500:
 *         description: Erro ao buscar usuário
 */
router.get("/get-user/:id", authMiddleware, UserController.getUserById);

/**
 * @swagger
 * /users/register-user:
 *   post:
 *     summary: Cadastrar um usuário
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Cria um usuário e retorna as informações do mesmo para confirmar
 *       400:
 *         description: Erro por não passar todas as informações obrigatórias para criar usuário
 *       500:
 *         description: Erro ao cadastrar usuário
 */
router.post("/register-user", authMiddleware, UserController.registerUser);

/**
 * @swagger
 * /users/edit-user/:id:
 *   put:
 *     summary: Edita as informações de um Usuário pelo ID passado
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Edita o usuário e retorna as informações do mesmo para confirmar
 *       400:
 *         description: Erro por não passar todas as informações obrigatórias para criar usuário
 *       404:
 *         description: Usuário não existente para editar
 *       500:
 *         description: Erro ao editar usuário
 */
router.put("/edit-user/:id", authMiddleware, UserController.editUser);

/**
 * @swagger
 * /users/delete-user/:id:
 *   delete:
 *     summary: Deleta um usuário pelo ID passado
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Deleta o usuário e retorna as informações do mesmo para confirmar
 *       400:
 *         description: Erro durante processo de deletar usuário
 *       404:
 *         description: Usuário não existente para deletar
 *       500:
 *         description: Erro ao deletar usuário
 */
router.delete("/delete-user/:id", authMiddleware, UserController.deleteUser);

module.exports = router;