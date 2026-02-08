const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const router = Router()

router.get("/get-all-users", UserController.getAllUsers);
router.get("/get-user/:id", UserController.getUserById);

module.exports = router;