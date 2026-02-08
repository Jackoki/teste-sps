const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router()

router.get("/get-all-users", authMiddleware, UserController.getAllUsers);
router.get("/get-user/:id", authMiddleware, UserController.getUserById);
router.post("/register-user", authMiddleware, UserController.registerUser);
router.put("/edit-user/:id", authMiddleware, UserController.editUser);
router.delete("/delete-user/:id", authMiddleware, UserController.deleteUser);

module.exports = router;