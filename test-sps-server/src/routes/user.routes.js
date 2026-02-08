const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const router = Router()

router.get("/get-all-users", UserController.getAllUsers);
router.get("/get-user/:id", UserController.getUserById);
router.post("/register-user", UserController.registerUser);
router.put("/edit-user/:id", UserController.editUser);

module.exports = router;