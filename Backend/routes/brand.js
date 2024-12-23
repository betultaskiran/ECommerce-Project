const express = require("express");
const brandController = require("../controllers/brand");
const authMiddleware = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.post(
  "/create",
  /*authMiddleware,*/ /*,admin, */ brandController.createBrand
);

router.put("/update/:id", /*authMiddleware,*/ brandController.updateBrand);

router.delete("/delete/:id", /*authMiddleware,*/ brandController.deleteBrand);

router.get("/:id", brandController.getBrand);

router.get("/", brandController.getBrands);

module.exports = router;
