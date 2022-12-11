const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");
const pingController = require("../controllers/ping");
const userController = require("../controllers/userController");
const checkToken = require("../middlewares/token-check");

router.use("/api/ping", pingController.responsePing);
router.use("/api/products/public", productsRoutes);
router.use("/api/products", checkToken, productsRoutes);
router.use("/api/users", userController.getUserById);

module.exports = router;
