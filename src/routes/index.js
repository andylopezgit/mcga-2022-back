const express = require('express');
const router = express.Router();
const productsRoutes = require("./products");
const usersRoutes = require("./users");
const pingController = require("../controllers/ping");
const checkToken = require("../middlewares/token-check");

router.use("/api/ping", pingController.responsePing);
router.use("/api/products/public", productsRoutes);
router.use("/api/products", checkToken, productsRoutes);
router.use("/api/users", usersRoutes);
const productsRoutes = require('./products');
const pingControler = require('../controllers/ping');
const checkToken = require('../middlewares/token-check');

router.use('/api/ping', pingControler.responsePing);
router.use('/api/products/public', productsRoutes);

router.use('/api/products', checkToken, productsRoutes);

module.exports = router;
