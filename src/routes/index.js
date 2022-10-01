const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");
const pingControler = require("../controllers/ping");

router.use("/api/ping", pingControler.responsePing);
router.use("/api/products", productsRoutes);

module.exports = router;
