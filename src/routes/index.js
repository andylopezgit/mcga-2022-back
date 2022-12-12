const express = require("express");
const router = express.Router();
const productsRoutes = require("./products");
const usersRoutes = require("./users");
const pingController = require("../controllers/ping");
const checkToken = require("../middlewares/token-check");

const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use("/api/ping", pingController.responsePing);
router.use("/api/products/public", cors(corsOptions), productsRoutes);
router.use("/api/products", checkToken, productsRoutes);
router.use("/api/users", cors(corsOptions), usersRoutes);

module.exports = router;
