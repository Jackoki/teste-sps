const { Router } = require("express");
const UserController = require("../controllers/user.controller");

const router = Router()

router.get("/get-all-users", UserController.listUsers);
router.get("/get-user/:id", UserController.getUser);

module.exports = router;