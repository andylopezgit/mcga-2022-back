const router = require("express").Router();
const products = require('../controllers/products')

router.post("/",  products.create);
router.get('/', products.getAll);

module.exports = router