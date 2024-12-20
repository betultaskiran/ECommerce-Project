const express = require("express");
const categoryController = require("../controllers/category");
const authMiddleware = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post(
  "/create",
  /*authMiddleware,*/ /*,admin, */ categoryController.createCategory
);

router.put("/update", /*authMiddleware,*/ categoryController.updateCategory);

router.delete(
  "/delete/:id",
  /*authMiddleware,*/ categoryController.deleteCategory
);

router.get("/:id", categoryController.getCategory);

router.get("/", categoryController.getCategories);

module.exports = router;
