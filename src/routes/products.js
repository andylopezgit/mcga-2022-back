const router = require("express").Router();
const products = require("../controllers/products");

router.get("/", products.getAll);
router.post('/"', products.create);
router.get("/showone/:id", products.getProductById);
router.delete("/delete/:id", products.deleteProductById);
router.put("/update/id", products.updateProduct);

module.exports = router;
