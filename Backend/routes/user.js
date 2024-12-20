const express = require("express");
const userController = require("../controllers/user");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.put("/", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.post("/order", userController.createOrder);

module.exports = router;
/*authmiddlewareleri buraya ekle*/
